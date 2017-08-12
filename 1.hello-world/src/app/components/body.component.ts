import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: "body.component.html"
})
export class BodyComponent {

  mostrar:boolean = false;

  frase:any = {
    mensaje: "Si te atas un cordel al dedo se te pone morado.",
    autor: "Nelson Muntz"
  };

  personajes:Array<string> = ["Bart", "Milhouse", "Nelson", "Lisa"];

}
