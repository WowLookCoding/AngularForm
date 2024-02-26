import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from "../models";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-form.component.html'
})
export class InputFormComponent {
  @Output() dataSubmit = new EventEmitter<Product>(); 

  model = new Product("","",0);

  onSubmit() {
    console.log(this.model);
    // Emits the form values on submit.
    this.dataSubmit.emit(this.model); 
  }
}
