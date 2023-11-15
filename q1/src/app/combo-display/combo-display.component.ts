import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-display',
  templateUrl: './combo-display.component.html',
  styleUrls: ['./combo-display.component.css']
})
export class ComboDisplayComponent implements OnInit {
  dataArray: string[] = ['Helicopter', 'Bike', 'Plane', 'Ship'];
  selectedItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
