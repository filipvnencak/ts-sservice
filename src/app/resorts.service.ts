import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResortsService {
  private Resosrts: any [] =
[
  {id: 1,name: 'Bachledová Dolina', logo:'bachledova_ski'},  
  {id: 2,name: 'Bania Ski&Fun', logo: 'bania_ski_fun'}, 
  {id: 3,name: 'CzorstynSki', logo: 'czorsztyn_ski'},  
  {id: 4,name: 'GrapaSki', logo: 'grapaski'},
  {id: 5,name: 'Harenda', logo: 'harenda'},  
  {id: 6,name: 'Jurogow Ski', logo: 'jurgow_ski'},  
  {id: 7,name: 'Kaniowka', logo: 'kaniowka'},
  {id: 8,name: 'Kotelnica Bialczanska', logo: 'kotelnica_bialczanska'},
  {id: 9,name: 'Koziniec Ski', logo: 'koziniec_ski'},
  {id: 10,name: 'Mosorny Gron', logo: 'pkl_mosorny_gron'},
  {id: 11,name: 'Palenica', logo: 'pkl_palenica_2'},
  {id: 12,name: 'Polana Szymoszkowa', logo: 'polana_szymoszkowa'},
  {id: 13,name: 'Suche', logo: 'suche'},
  {id: 14,name: 'Witow Ski', logo: 'witow_ski'},
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
