import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResortsService {
  private Resosrts: any [] =
[
  {id: 1,name: 'Bachledová Dolina', img:'https://drive.google.com/file/d/1RDz4q2G7VHCP4NoocU1ZNoORyXU2gNXj/view?usp=sharing'},  
  {id: 2,name: 'Bania Ski&Fun', img: 'http://www.img.1pk0.sk/logo.png'}, 
  {id: 3,name: 'CzorstynSki', img: 'http://www.img.1pk0.sk/logo.png'},  
  {id: 4,name: 'Kotelnica', img: 'http://www.img.1pk0.sk/logo.png'},
  {id: 5,name: 'GrapaSki', img: 'http://www.img.1pk0.sk/logo.png'},  
  {id: 6,name: 'Harenda', img: 'http://www.img.1pk0.sk/logo.png'},  
  {id: 7,name: 'Harenda', img: 'http://www.img.1pk0.sk/logo.png'},
  {id: 8,name: 'Bachledová Dolina', img: 'http://www.img.1pk0.sk/logo.png'}
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
