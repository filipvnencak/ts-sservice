import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const JWT_KEY = 'mytoken';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private user = new BehaviorSubject(null);
  constructor(private http: HttpClient, private storage: Storage, private plt: Platform) { 
    this.plt.ready().then(() => {
      this.storage.get(JWT_KEY).then(data => {
        if (data) {
          console.log('JWT from storage: ', data);
          this.user.next(data);
        }
      })
    })
  }
  getPosts(page = 1, categoryId = null, search = ''): Observable<any> {
    let options = {
      observe: 'response' as 'body',
      params: {
        per_page: '5',
        page: '' + page
      }
    };

    let url = `${environment.apiUrl}/posts?_embed`;
    if (categoryId) {
      url += `&categories=${categoryId}`;
    }

    if (search != '') {
      url += `&search=${search}`;
    }
    console.log('request: ', url);
    
    return this.http.get<any[]>(url, options).pipe(
      map(res => {
        let data = res['body'];

        for (let post of data) {
          if (post['_embedded']['wp:featuredmedia']) {
            post.media_url =
              post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
          }
        }

        return {
          posts: data,
          pages: res['headers'].get('x-wp-totalpages'),
          totalPosts: res['headers'].get('x-wp-total')
        };
      })
    );
  }

  getPostContent(id) {
    return this.http.get<any>(`${environment.apiUrl}/posts/${id}?_embed`).pipe(
      map(post => {
        if (post['_embedded']['wp:featuredmedia']) {
          post.media_url =
            post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        }
        return post;
      })
    );
  }

  getCategories() {
    return this.http.get<any[]>(`${environment.apiUrl}/categories`).pipe(
      map(res => {
        const items = [];
        for (let item of res) {
          items.push({
            id: item.id,
            name: item.name,
            slug: item.slug
          });
        }
        return items;
      })
    )
  }

  getPages() {
    return this.http.get<any[]>(`${environment.apiUrl}/pages`).pipe(
      map(res => {
        const items = [];
        for (let item of res) {
          items.push({
            url: `page/${item.id}`,
            title: item.title.rendered,
            icon: 'file-tray'
          });
        }
        return items;
      })
    )
  }

  getPageContent(id) {
    return this.http.get<any>(`${environment.apiUrl}/pages/${id}?_embed`).pipe(
      map(page => {
        if (page['_embedded']['wp:featuredmedia']) {
          page.media_url =
          page['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        }
        return page;
      })
    );
  }
}
