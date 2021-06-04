import { Component, OnInit } from '@angular/core';
import { InstituteModel } from 'src/app/models/institute.model';
import { Subject } from 'rxjs';
import { InstituteServiceService } from 'src/app/services/insitute/institute-service.service';

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

  constructor(private instituteService: InstituteServiceService) { }
  institutes:any;


  ngOnInit(): void {
    this.getInstitute();
   /*  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }; */
  }
  getInstitute(){
    this.instituteService.getInstitutes().subscribe(inst=>{
      this.institutes=inst;
    },error=> console.error(error));
  }

}
