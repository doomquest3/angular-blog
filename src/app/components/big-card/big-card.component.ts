import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{

  @Input() photoCover:string = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/80C64C0B63382CD3ED2653356125F275F63D036028A77D38DC3286AD851A6833/scale?width=506&aspectRatio=2.00&format=jpeg";
  @Input() cardTitle:string = "";
  @Input() cardDescription: string = "";
  @Input() id:string = "0";

  constructor() {

  }

  ngOnInit(): void {

  }


}
