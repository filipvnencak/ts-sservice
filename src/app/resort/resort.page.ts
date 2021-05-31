import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResortsService } from '../resorts.service';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.page.html',
  styleUrls: ['./resort.page.scss'],
})
export class ResortPage implements OnInit {

  Resorts: any;
  
  constructor( private readonly ResortService: ResortsService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let resortId = this.activatedRoute.snapshot.paramMap.get("id");
    this.Resorts = this.ResortService.getResort(parseInt(resortId));
  }

}
