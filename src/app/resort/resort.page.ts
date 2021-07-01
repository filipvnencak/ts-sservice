import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResortsService } from '../resorts.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resort',
  templateUrl: './resort.page.html',
  styleUrls: ['./resort.page.scss'],
})
export class ResortPage implements OnInit {

  Resorts: any;
  urlSafe: SafeResourceUrl;
  url: string;
  
  constructor( private readonly ResortService: ResortsService,
  private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    let resortId = this.activatedRoute.snapshot.paramMap.get("id");
    this.Resorts = this.ResortService.getResort(parseInt(resortId));
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
