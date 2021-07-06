import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ResortsService {

 
  private Resosrts: any [] =
[
  { 
    id: 1,
    name: 'Bachledová Dolina', 
    logo:'bachledova_ski', 
    cover: 'bachledova',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },  
  { 
    id: 2,
    name: 'Bania Ski&Fun', 
    logo: 'bania_ski_fun', 
    cover: 'Bania1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  }, 
  {
    id: 3,
    name: 'CzorstynSki', 
    logo: 'czorsztyn_ski', 
    cover: 'CzorsztynSki1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  }, 
  {
    id: 4,
    name: 'Długa Polana', 
    logo: 'dluga_polana', 
    cover: 'DlugaPolana',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  }, 
  {
    id: 5,
    name: 'GrapaSki', 
    logo: 'grapaski', 
    cover: 'GrapaSki1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 6,
    name: 'Harenda', 
    logo: 'harenda', 
    cover: 'Harenda',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  }, 
  {
    id: 7,
    name: 'Horników Wierch', 
    logo: 'hornikow_kolor', 
    cover: 'Hornikow',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },   
  {
    id: 8,
    name: 'Jurogow Ski', 
    logo: 'jurgow_ski', 
    cover: 'JurgowSki',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },  
  {
    id: 9,
    name: 'Kaniowka', 
    logo: 'kaniowka',
    cover: 'kaniowka',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'

  },
  {
    id: 10,
    name: 'Kotelnica Białaczańska', 
    logo: 'kotelnica_bialczanska',
    cover: 'Kotelnica',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 11,
    name: 'Koziniec Ski', 
    logo: 'koziniec_ski',
    cover: 'Koziniec',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 12,
    name: 'Meander Oravice', 
    logo: 'meander',
    cover: 'Meander',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 13,
    name: 'Mosorny Groń', 
    logo: 'pkl_mosorny_gron',
    cover: 'PKL_MOSORNY_GROŃ',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 14,
    name: 'Palenica', 
    logo: 'pkl_palenica_2',
    cover: 'PKLPalenica1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 15,
    name: 'Polana Szymoszkowa', 
    logo: 'polana_szymoszkowa',
    cover: 'Polana_szymoszkowa',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 16,
    name: 'Rusiński', 
    logo: 'rusinski',
    cover: 'RusinSki',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 17,
    name: 'Strachan Ski', 
    logo: 'Logo_Ski Centrum Strachan',
    cover: 'Strachan',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 18,
    name: 'Suche', 
    logo: 'suche',
    cover: 'Suche',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
  {
    id: 19,
    name: 'Witow Ski', 
    logo: 'witow_ski',
    cover: 'WitówSki1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina'
  },
]

  constructor() { 
  }

  getResorts() {
    return this.Resosrts;
  }
  getResort(id: number): any {
    return this.Resosrts.find(el => el.id == id);
  }
}
