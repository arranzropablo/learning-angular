import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html'
})
export class CharacterCardComponent implements OnInit {

  //Con la etiqueta input decimos que el character puede venir desde fuera (tambien podemos inicializarlo aqui, es optional)
  @Input() character: any = {};
  @Input() characterIndex: number;
  
  //Con output podemos enviar cosas al componente "padre" del tipo EventEmitter con tipo inferido que queramos enviar
  @Output() selectedCharacter: EventEmitter<number>;

  constructor() {
    this.selectedCharacter = new EventEmitter();
  }

  ngOnInit() {
  }

  //En vez de llamar al router mandamos un evento parriba de nombre selectedCharacter (la info se recibe con $event)
  getCharacter(){
    //this.router.navigate(['/character',this.characterIndex]);
    this.selectedCharacter.emit(this.characterIndex);
  }

}
