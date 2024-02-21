import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputFormComponent } from "./input-form/input-form.component";
import { Product } from "./models";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputFormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  data = new Product("","",0);
}
