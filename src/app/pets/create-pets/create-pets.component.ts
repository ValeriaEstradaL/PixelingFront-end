import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { petsModel } from 'src/app/models/pets.model';
import { PetServicesService } from 'src/app/services/pet/pet-services.service';

@Component({
  selector: 'app-create-pets',
  templateUrl: './create-pets.component.html',
  styleUrls: ['./create-pets.component.css']
})
export class CreatePetsComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private petService: PetServicesService, private router: Router) {

    this.form=this.fb.group({
      name: ['', Validators.required],
      specie: ['', Validators.required],
      breed: ['', Validators.required],
      birth: ['', Validators.required],
      image: ['', Validators.required],
      institute: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  createPet(){
    const pet: petsModel={
      name: this.form.value.name,
      specie: this.form.value.specie,
      breed: this.form.value.breed,
      birth: this.form.value.birth,
      image: this.form.value.image,
      institute: this.form.value.institute

    }
    console.log(pet);
    this.petService.createPets(pet).subscribe(()=>{
      this.router.navigate(['mascotas'])

    }, (error)=> console.error(error));
  }

}
