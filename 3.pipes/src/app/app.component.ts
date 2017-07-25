import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name="Pablo";
  name2="PaBlO aRrAnZ RoPeRo"
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi = Math.PI;
  percentage = 0.234;
  money=1234.5;
  heroe={
    name:"Logan",
    keyname:"Wolverine",
    age:500,
    address:{
      street:"1st",
      number:19
    }
  };
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('Data arrived'), 3500)
  });
  fecha = new Date();
  video = "_VevN4HuxrE";
  active = true;

}
