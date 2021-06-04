
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituteModel } from 'src/app/models/institute.model';

@Injectable({
  providedIn: 'root'
})
export class InstituteServiceService {

  constructor(private http: HttpClient) { }
  private api_url="http://localhost:8000/api/institute";

 public getInstitutes(): Observable <InstituteModel[]>{
  return this.http.get<InstituteModel[]>(this.api_url);
 }
  createInstitutes(institute: InstituteModel){
      console.log(institute);
   return this.http.post(this.api_url,institute);
 }
}
