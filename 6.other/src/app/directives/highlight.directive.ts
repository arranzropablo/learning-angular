import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //Podemos enviar parametros desde el html con la etiqueta input
  @Input("appHighlight") 
  newColor:string;  

  //ElementRef es el elemento sobre el que se pone la directiva
  constructor(private el:ElementRef) { 
  }

  //Para reaccionar a eventos usamos host listener 
  @HostListener("mouseenter") 
  mouseEnter() {
    //si enviamos newColor lo pillamos y sino yellow por defecto
    this.highlight(this.newColor || "yellow")
  }

  @HostListener("mouseleave") 
  mouseLeave() {
    this.highlight("white")
  }

  private highlight(color:String) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
