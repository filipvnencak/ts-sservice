import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LoadingController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  page = 1;
  posts = [];
  totalPages = 0;
  totalPosts = 0;
  categoryFilter = null;
  searchTerm = '';
  @ViewChild("header") header: HTMLElement;

  constructor(
    private api: ApiService,
    private loadingCtrl: LoadingController,
    private popoverCtrl: PopoverController,
    public element: ElementRef, 
    public renderer: Renderer2
  ) {}

  ngOnInit() {
     this.loadPosts();
  }

  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 700ms');
  }



  async loadPosts(infiniteScroll = null) {
    let loading = null;
    if (!infiniteScroll) {
      loading = await this.loadingCtrl.create({
        message: 'Loading Data...'
      });
      await loading.present();
    }

    this.api.getPosts(this.page, this.categoryFilter, this.searchTerm).subscribe(
      res => {
        console.log('res: ', res);
        if (infiniteScroll) {
          infiniteScroll.target.complete();
          this.posts = [...this.posts, ...res.posts];
          if (this.page == this.totalPages) {
            infiniteScroll.target.disabled = true;
          }
        } else {
          this.posts = res.posts;
        }

        this.totalPages = res.pages;
        this.totalPosts = res.totalPosts;
      },
      err => {
        console.log('error: ', err);
      },
      () => {
        if (!infiniteScroll) {
          loading.dismiss();
        }
      }
    );
  }
  loadMore(event) {
    this.page++;
    this.loadPosts(event);
  }

}
