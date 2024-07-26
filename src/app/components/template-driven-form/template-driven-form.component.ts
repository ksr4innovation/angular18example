import { Component } from '@angular/core';

import { DataService } from '../../data.service';
import { HttpErrorResponse } from '@angular/common/http';
import e from 'express';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html'

})
export class TemplateDrivenFormComponent {

  constructor(private dataService: DataService){
    
  }
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: ''
  };

  submitForm(form: any): void {
   
      console.log('Form data:', this.userDetails);

      this.dataService.saveUser(this.userDetails).subscribe( (success:Object) => {
        console.log(" saved successfully "+success);

      },(error: HttpErrorResponse)  => {
        console.log(" saved error "+JSON.stringify(error));
      });
    
  }
}
