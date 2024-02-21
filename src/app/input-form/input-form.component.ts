import { Component } from '@angular/core';
import { Product } from "../models";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-form.component.html'
})
export class InputFormComponent {

  model = new Product("","",0);

  onSubmit() {
    console.log(this.model);
  }
}
