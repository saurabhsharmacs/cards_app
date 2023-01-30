import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent {
@Input() index: Number;
@Input() imgPath: string;
@Input() cardTitle: string;
@Input() cardText: string;
}
