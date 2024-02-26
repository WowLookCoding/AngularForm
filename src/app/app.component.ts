import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputFormComponent } from "./input-form/input-form.component";
import { OutputFormComponent } from "./output-form/output-form.component";
import { Product } from "./models";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputFormComponent, OutputFormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  data = new Product("","",0);

  // Saves the output data into the main component.
  getData(input:Product) { 
    this.data = input; 
  }
}
