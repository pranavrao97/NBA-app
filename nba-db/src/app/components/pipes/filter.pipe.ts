import { Pipe, PipeTransform } from '@angular/core';
import { Player, Team } from 'src/app/models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, ...args: Array<string>): Array<any> {
    if (value && value.length !== 0) {
      let filteredArr = value.filter((item: any) => {
        if (args[1] === "player") {
          return item.id.toString().includes(args[0]) || item.first_name.toLowerCase().includes(args[0].toLowerCase()) || item.last_name.toLowerCase().includes(args[0].toLowerCase()) || item.team.name.toLowerCase().includes(args[0].toLowerCase());
        }
        else if (args[1] === "team") {
          return item.id.toString().includes(args[0]) || item.city.toLowerCase().includes(args[0].toLowerCase()) || item.division.toLowerCase().includes(args[0].toLowerCase()) || item.full_name.toLowerCase().includes(args[0].toLowerCase());
        }
      });
      return filteredArr;
    }

    return value;
  }

}
