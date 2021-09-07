
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
const { Share } = Plugins;

@Component({
  selector: 'app-post-detail',
  templateUrl: 'post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {
  post = null;
 
  comments = [];
  newComment = '';

 
  constructor(private route: ActivatedRoute, private api: ApiService, private alertCtrl: AlertController) { }

  ngOnInit() {
  
    let id = this.route.snapshot.paramMap.get('id');
    this.api.getPostContent(id).subscribe(res => {
      console.log('post: ', res);
      this.post = res;
    });
  }
}
