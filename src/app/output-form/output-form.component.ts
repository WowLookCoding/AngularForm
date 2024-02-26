import { Component, Input } from '@angular/core';
import { Product } from "../models";

@Component({
  selector: 'app-output-form',
  standalone: true,
  imports: [],
  templateUrl: './output-form.component.html'
})
export class OutputFormComponent {
  // Obtains the data from the output component, which will be displayed on the HTML.
  @Input() data! : Product; 
}
