import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ResortsService } from '../../services/resorts.service';


@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.page.html',
  styleUrls: ['./resorts.page.scss'],
})
export class ResortsPage implements OnInit {

  Resorts: any [];
  @ViewChild("header") header: HTMLElement;


  constructor( 
    private readonly ResortsService: ResortsService,
    public element: ElementRef, 
    public renderer: Renderer2) { }

  ngOnInit() {
    this.Resorts = this.ResortsService.getResorts()
    
  }
  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 700ms');
  }

 

}
