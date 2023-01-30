import { Component, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

interface mCard{
  index: Number;
  imgPath: string;
  cardTitle: string;
  cardText: string;
}



@Component({
  selector: 'app-app-cardlist',
  templateUrl: './app-cardlist.component.html',
  styleUrls: ['./app-cardlist.component.css']
})

export class AppCardlistComponent {

  mCards:mCard[] = [];
  constructor(){
    this.mCards.push({index:1,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",cardTitle:"First Card",cardText:"First card description"} as unknown as mCard);
    this.mCards.push({index:2,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",cardTitle:"Second Card",cardText:"Second card description"} as unknown as mCard);
    this.mCards.push({index:3,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",cardTitle:"Third Card",cardText:"Third card description"} as unknown as mCard);
    this.mCards.push({index:4,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",cardTitle:"Fourth Card",cardText:"Fourth card description"} as unknown as mCard);
    this.mCards.push({index:5,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/045.webp",cardTitle:"Fifth Card",cardText:"Fifth card description"} as unknown as mCard);
    this.mCards.push({index:6,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",cardTitle:"Sixth Card",cardText:"Sixth card description"} as unknown as mCard);
    this.mCards.push({index:7,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",cardTitle:"Seventh Card",cardText:"Seventh card description"} as unknown as mCard);
    this.mCards.push({index:8,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",cardTitle:"Eighth Card",cardText:"Eighth card description"} as unknown as mCard);
    this.mCards.push({index:9,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",cardTitle:"Ninth Card",cardText:"Ninth card description"} as unknown as mCard);
    this.mCards.push({index:10,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/045.webp",cardTitle:"Tenth Card",cardText:"Tenth card description"} as unknown as mCard);
    this.mCards.push({index:11,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/045.webp",cardTitle:"Eleventh Card",cardText:"Eleventh card description"} as unknown as mCard);
    this.mCards.push({index:12,imgPath:"https://mdbcdn.b-cdn.net/img/new/standard/city/045.webp",cardTitle:"Twelveth Card",cardText:"Twelveth card description"} as unknown as mCard);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mCards, event.previousIndex, event.currentIndex);
    console.log(event.previousIndex);
  }

}

