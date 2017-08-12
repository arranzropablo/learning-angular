import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../classes/list';

@Pipe({
  name: 'pending',
  pure: false
})
export class PendingPipe implements PipeTransform {
  transform(lists:List[], status:boolean = false): List[]  {
    let wantedLists:List[] = [];
    for (let list of lists){
      if (list.completed == status){
        wantedLists.push(list);
      }
    }
    return wantedLists;
  }
}
