import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <!--We can combine with properties-->
    <!--Another way [style.fontSize.px]="size"-->
  
    <p [ngStyle]="{'font-size': size + 10 + 'px'}">
      Hello world
    </p>

    <button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
