import { Injectable } from '@angular/core';

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
    cover: 'bachledova'
  },  
  { 
    id: 2,
    name: 'Bania Ski&Fun', 
    logo: 'bania_ski_fun', 
    cover: 'Bania1'
  }, 
  {
    id: 3,
    name: 'CzorstynSki', 
    logo: 'czorsztyn_ski', 
    cover: 'CzorsztynSki1'
  }, 
  {
    id: 4,
    name: 'Długa Polana', 
    logo: 'dluga_polana', 
    cover: 'DlugaPolana'
  }, 
  {
    id: 5,
    name: 'GrapaSki', 
    logo: 'grapaski', 
    cover: 'GrapaSki1'
  },
  {
    id: 6,
    name: 'Harenda', 
    logo: 'harenda', 
    cover: 'Harenda'
  }, 
  {
    id: 7,
    name: 'Horników Wierch', 
    logo: 'hornikow_kolor', 
    cover: 'Hornikow'
  },   
  {
    id: 8,
    name: 'Jurogow Ski', 
    logo: 'jurgow_ski', 
    cover: 'JurgowSki'
  },  
  {
    id: 9,
    name: 'Kaniowka', 
    logo: 'kaniowka',
    cover: 'kaniowka'

  },
  {
    id: 10,
    name: 'Kotelnica Białaczańska', 
    logo: 'kotelnica_bialczanska',
    cover: 'Kotelnica'
  },
  {
    id: 11,
    name: 'Koziniec Ski', 
    logo: 'koziniec_ski',
    cover: 'Koziniec'
  },
  {
    id: 12,
    name: 'Meander Oravice', 
    logo: 'meander',
    cover: 'Meander'
  },
  {
    id: 13,
    name: 'Mosorny Groń', 
    logo: 'pkl_mosorny_gron',
    cover: 'PKL_MOSORNY_GROŃ'
  },
  {
    id: 14,
    name: 'Palenica', 
    logo: 'pkl_palenica_2',
    cover: 'PKLPalenica1'
  },
  {
    id: 15,
    name: 'Polana Szymoszkowa', 
    logo: 'polana_szymoszkowa',
    cover: 'Polana_szymoszkowa'
  },
  {
    id: 16,
    name: 'Rusiński', 
    logo: 'rusinski',
    cover: 'RusinSki'
  },
  {
    id: 17,
    name: 'Strachan Ski', 
    logo: 'Logo_Ski Centrum Strachan',
    cover: 'Strachan'
  },
  {
    id: 18,
    name: 'Suche', 
    logo: 'suche',
    cover: 'Suche'
  },
  {
    id: 19,
    name: 'Witow Ski', 
    logo: 'witow_ski',
    cover: 'WitówSki1'
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
