import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstituteModel } from 'src/app/models/institute.model';
import { InstituteServiceService } from 'src/app/services/insitute/institute-service.service';

@Component({
  selector: 'app-create-institute',
  templateUrl: './create-institute.component.html',
  styleUrls: ['./create-institute.component.css']
})
export class CreateInstituteComponent implements OnInit {
  form:FormGroup;
  constructor(private fb :FormBuilder, private instituteService:InstituteServiceService, private router :Router) {
  this.form=this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
  })
}
  ngOnInit(): void {
  }
  createInstitute(){
    const institute: InstituteModel={
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone,

    }
    console.log(institute);
    this.instituteService.createInstitutes(institute).subscribe(()=>{
      this.router.navigate(['institucion'])

    }, (error)=> console.error(error));
  }
}
