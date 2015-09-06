import {Component, View, bootstrap} from "angular2/angular2";
import {OtList} from "ot-list";

@Component({
  selector: "app"
})
@View({
  template: `
  <ot-list [items]="areas" [selected]="currentSelection">
  </ot-list>
  `,
  directives: [OtList]
})
export class App {
  currentSelection: number;
  areas: Array<any>;

  constructor() {
    this.currentSelection = 2;
    this.areas =  [
      {id: 1, category: "Operations", name: "Floorplan"},
      {id: 2, category: "Operations", name: "Combinations"},
      {id: 3, category: "Planning", name: "Schedule"},
      {id: 4, category: "Planning", name: "Publish"}
    ];
  }

}

bootstrap(App);
