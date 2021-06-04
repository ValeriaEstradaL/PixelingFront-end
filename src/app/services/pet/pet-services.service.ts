import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { petsModel } from 'src/app/models/pets.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PetServicesService {

  constructor(private http: HttpClient) { }
  private api_url="http://localhost:8000/api/pet";

  public getPets(): Observable <petsModel[]>{
   return this.http.get<petsModel[]>(this.api_url);
  }
   createPets(pets: petsModel){
       console.log(pets);
    return this.http.post(this.api_url,pets);
  }
 /*  deletePet( pet: petsModel){
    return this.http.delete(this.api_url,pet);
  } */

}
