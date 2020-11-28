import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public contact = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    quantity: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit() {
    console.log(this.contact.value);
    this.contact.reset();
  }
}
