import { Component } from '@angular/core';
import { ListService } from "./listService";
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent {
  flightFrom: string;
  flightTo: string;
  airlines: string;
  date:number;
  flightDetail = {};
  arrayList: any[] = [];

constructor(private _listService: ListService)	{}

  ngOnInit() {
    this.movieDetail = {
      flightFrom: '',
      flightTo: '',
      airlines: '',
      date:'',
      time:''
       }
}

  submit(values,isValid) {
     if(!isValid){
      return;
    }
    console.log(values);

    let model = {
      flightFrom: values.flightFrom,
      flightTo: values.flightTo,
      date: values.date,
      airlines: values.airlines
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
}
