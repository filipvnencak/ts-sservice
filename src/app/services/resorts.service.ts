import { Injectable } from '@angular/core';



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
    city: 'Ždiar',
    lat:'49.282753',
    lon:'20.312350'
  },  
  { 
    id: 2,
    name: 'Bania Ski&Fun', 
    logo: 'bania_ski_fun', 
    cover: 'Bania1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Białka Tatrzańska',
    lat:'49.388088',
    lon:'20.097284'
  }, 
  {
    id: 3,
    name: 'CzorstynSki', 
    logo: 'czorsztyn_ski', 
    cover: 'CzorsztynSki1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Kluszkowce',
    lat:'49.460158',
    lon:'20.318967'
  }, 
  {
    id: 4,
    name: 'Długa Polana', 
    logo: 'dluga_polana', 
    cover: 'DlugaPolana',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Nowy Targ',
    lat:'49.282753',
    lon:'20.312350'
  }, 
  {
    id: 5,
    name: 'GrapaSki', 
    logo: 'grapaski', 
    cover: 'GrapaSki1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Czarna Gora',
    lat:'49.282753',
    lon:'20.312350'
  },
  {
    id: 6,
    name: 'Harenda', 
    logo: 'harenda', 
    cover: 'Harenda',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Zakopane',
    lat:'49.282753',
    lon:'20.312350'
  }, 
  {
    id: 7,
    name: 'Horników Wierch', 
    logo: 'hornikow_kolor', 
    cover: 'Hornikow',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Białka Tatrzańska',
    lat:'49.282753',
    lon:'20.312350'
  },   
  {
    id: 8,
    name: 'Jurogow Ski', 
    logo: 'jurgow_ski', 
    cover: 'JurgowSki',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Jurgów',
    lat:'49.317740',
    lon:'20.155931'
  },  
  {
    id: 9,
    name: 'Kaniowka', 
    logo: 'kaniowka',
    cover: 'kaniowka',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Białka Tatrzańska',
    lat:'49.282753',
    lon:'20.312350'

  },
  {
    id: 10,
    name: 'Kotelnica Białaczańska', 
    logo: 'kotelnica_bialczanska',
    cover: 'Kotelnica',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Białka Tatrzańska',
    lat:'49.388088',
    lon:'20.097284'
  },
  {
    id: 11,
    name: 'Koziniec Ski', 
    logo: 'koziniec_ski',
    cover: 'Koziniec',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Czarna Gora',
    lat:'49.282753',
    lon:'20.312350'
  },
  {
    id: 12,
    name: 'Meander Oravice', 
    logo: 'meander',
    cover: 'Meander',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Vitanová',
    lat:'49.282753',
    lon:'20.312350'
  },
  {
    id: 13,
    name: 'Mosorny Groń', 
    logo: 'pkl_mosorny_gron',
    cover: 'PKL_MOSORNY_GROŃ',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Zawoja',
    lat:'49.282753',
    lon:'20.312350'
  },
  {
    id: 14,
    name: 'Palenica', 
    logo: 'pkl_palenica_2',
    cover: 'PKLPalenica1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Szczawnica',
    lat:'49.282753',
    lon:'20.312350'
  },
  {
    id: 15,
    name: 'Polana Szymoszkowa', 
    logo: 'polana_szymoszkowa',
    cover: 'Polana_szymoszkowa',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Zakopane',
    lat:'49.282753',
    lon:'20.312350'
  },
  {
    id: 16,
    name: 'Rusiński', 
    logo: 'rusinski',
    cover: 'RusinSki',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Bukowina Tatrzańska',
    lat:'49.282753',
    lon:'20.312350'
  },
  {
    id: 17,
    name: 'Strachan Ski', 
    logo: 'Logo_Ski Centrum Strachan',
    cover: 'Strachan',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Ždiar',
    lat:'49.279361',
    lon:'20.233460'
  },
  {
    id: 18,
    name: 'Suche', 
    logo: 'suche',
    cover: 'Suche',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Suche',
    lat:'49.282753',
    lon:'20.312350'
  },
  {
    id: 19,
    name: 'Witow Ski', 
    logo: 'witow_ski',
    cover: 'WitówSki1',
    VideoURL: 'https://imageserver.webcamera.pl/umiesc/bachledova-dolina',
    city: 'Witów',
    lat:'49.282753',
    lon:'20.312350'
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
 

  

  }
  

  


