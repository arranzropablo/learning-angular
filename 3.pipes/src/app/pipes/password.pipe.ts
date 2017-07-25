import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active:boolean=true ): string {
    if(active){
      return value.replace(/./g, '*');
    }
    else{
      return value;
    }
  }

}
