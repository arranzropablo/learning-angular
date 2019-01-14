import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  //these styles only applies to this component adding to every p in this component a property to identify em 
  styles: [`
    p {
      color: red;
      font-size: 20px;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
