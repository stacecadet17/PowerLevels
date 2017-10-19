import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit, OnChanges {
  @input power;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  this.power = this.power * 250;
  }

}
