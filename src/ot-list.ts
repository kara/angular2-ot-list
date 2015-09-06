import {Component, View, NgFor, NgClass} from 'angular2/angular2';

@Component({
  selector: 'ot-list',
  properties: ["selected: selected", "items: items"]
})
@View({
  template: `
  <ul class="ot-list">
      <li class="ot-list--item"
        *ng-for="#item of items"
        [ng-class]="{'ot-selected': item.id === selected}"
        (^click)="selectItem(item)">
        <a>{{item.name}}</a>
       </li>
  </ul>
  `,
  directives: [NgFor, NgClass]
})
export class OtList {
  selected: number;
  items: Array<any>;

  constructor() {
  }
  selectItem (item: any) {
    this.selected = item.id; 
  }
}

