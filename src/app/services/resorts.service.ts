import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class ResortsService {

 
   Resorts: any [] =
[
  { 
    id: 1,
    name: 'Bachledová Dolina', 
    logo:'bachledova_ski', 
    cover: 'bachledova',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Bratislava'
  },  
  { 
    id: 2,
    name: 'Bania Ski&Fun', 
    logo: 'bania_ski_fun', 
    cover: 'Bania1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Białka Tatrzańska'
  }, 
  {
    id: 3,
    name: 'CzorstynSki', 
    logo: 'czorsztyn_ski', 
    cover: 'CzorsztynSki1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Czorstyn'
  }, 
  {
    id: 4,
    name: 'Długa Polana', 
    logo: 'dluga_polana', 
    cover: 'DlugaPolana',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Nowy Targ'
  }, 
  {
    id: 5,
    name: 'GrapaSki', 
    logo: 'grapaski', 
    cover: 'GrapaSki1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Czarna Gora'
  },
  {
    id: 6,
    name: 'Harenda', 
    logo: 'harenda', 
    cover: 'Harenda',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Zakopane'
  }, 
  {
    id: 7,
    name: 'Horników Wierch', 
    logo: 'hornikow_kolor', 
    cover: 'Hornikow',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Białka Tatrzańska'
  },   
  {
    id: 8,
    name: 'Jurogow Ski', 
    logo: 'jurgow_ski', 
    cover: 'JurgowSki',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Jurgow'
  },  
  {
    id: 9,
    name: 'Kaniowka', 
    logo: 'kaniowka',
    cover: 'kaniowka',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Białka Tatrzańska'

  },
  {
    id: 10,
    name: 'Kotelnica Białaczańska', 
    logo: 'kotelnica_bialczanska',
    cover: 'Kotelnica',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Białka Tatrzańska'
  },
  {
    id: 11,
    name: 'Koziniec Ski', 
    logo: 'koziniec_ski',
    cover: 'Koziniec',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Czarna Gora'
  },
  {
    id: 12,
    name: 'Meander Oravice', 
    logo: 'meander',
    cover: 'Meander',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Oravice'
  },
  {
    id: 13,
    name: 'Mosorny Groń', 
    logo: 'pkl_mosorny_gron',
    cover: 'PKL_MOSORNY_GROŃ',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Ždiar'
  },
  {
    id: 14,
    name: 'Palenica', 
    logo: 'pkl_palenica_2',
    cover: 'PKLPalenica1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Palenica'
  },
  {
    id: 15,
    name: 'Polana Szymoszkowa', 
    logo: 'polana_szymoszkowa',
    cover: 'Polana_szymoszkowa',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Zakopane'
  },
  {
    id: 16,
    name: 'Rusiński', 
    logo: 'rusinski',
    cover: 'RusinSki',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Bukowina Tatrzańska'
  },
  {
    id: 17,
    name: 'Strachan Ski', 
    logo: 'Logo_Ski Centrum Strachan',
    cover: 'Strachan',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Ždiar'
  },
  {
    id: 18,
    name: 'Suche', 
    logo: 'suche',
    cover: 'Suche',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Suche'
  },
  {
    id: 19,
    name: 'Witow Ski', 
    logo: 'witow_ski',
    cover: 'WitówSki1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Ždiar'
  },
]
  static Resorts: any;
  



  constructor() { 
    
  }

  getResorts() {
    return this.Resorts;
  }
  getResort(id: number): any {
    return this.Resorts.find(el => el.id == id);
  }
 

  getCity(city: string): any {
    return this.Resorts.find(obj => obj.city == city);
    // this.route.params.subscribe(params => {
    // this.clientData = params.clientId;
};

  }
  

  


