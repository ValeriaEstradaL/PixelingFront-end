import { Component, OnInit } from '@angular/core';
import { InstituteModel } from 'src/app/models/institute.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  /* dtOptions: DataTables.Settings = {};
  institute: InstituteModel[] =[]; */

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  /* dtTrigger: Subject<any> = new Subject<any>(); */

  constructor() { }

  ngOnInit(): void {
   /*  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }; */
  }

}
