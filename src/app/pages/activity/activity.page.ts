import { Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: 'activity.page.html',
  styleUrls: ['activity.page.scss']
})
export class ActivityPage {
  @ViewChild("header") header: HTMLElement;

  constructor(
    public renderer: Renderer2
  ) {}


  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 700ms');
  }
}
