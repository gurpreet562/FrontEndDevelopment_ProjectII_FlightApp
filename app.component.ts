import { Component } from '@angular/core';
import { ListService } from "./listService";
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent {
  name: string;
  description: string;
  rating: string;
  releasedate:number;
  movieDetail = {};
  arrayList: any[] = [];

constructor(private _listService: ListService)	{}

  ngOnInit() {
    this.movieDetail = {
      name: '',
      description: '',
      releasedate: '',
      rating:''
       }
}

  submit(values,isValid) {
     if(!isValid){
      return;
    }
    console.log(values);

    let model = {
      name: values.name,
      description: values.description,
      releasedate: values.date,
      rating: values.rate
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }
}