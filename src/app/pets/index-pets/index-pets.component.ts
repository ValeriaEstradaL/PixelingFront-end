import { Component, OnInit } from '@angular/core';
import { PetServicesService } from 'src/app/services/pet/pet-services.service';

@Component({
  selector: 'app-index-pets',
  templateUrl: './index-pets.component.html',
  styleUrls: ['./index-pets.component.css']
})
export class IndexPetsComponent implements OnInit {

  constructor(private petService: PetServicesService) { }
  pets:any;
  ngOnInit(): void {
    this.getPets();
  }
getPets(){
  this.petService.getPets().subscribe(pt=>{
    this.pets=pt;
  },error=>console.error(error));
}
}
