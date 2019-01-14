import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: []
})
export class NgClassComponent implements OnInit {

  success:boolean=true
  loading:boolean=false

  constructor() { }

  ngOnInit() {
  }

  execute() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000)
  }

}
