import { Component, OnInit } from '@angular/core';
import { ResortsService } from '../resorts.service';


@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.page.html',
  styleUrls: ['./resorts.page.scss'],
})
export class ResortsPage implements OnInit {

  Resorts: any [];
  

  constructor( private readonly ResortsService: ResortsService) { }

  ngOnInit() {
    this.Resorts = this.ResortsService.getResorts()
    
  }

}
