import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnInit, OnChanges {
  @input() power;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  this.power = this.power * 150;
  }

}
