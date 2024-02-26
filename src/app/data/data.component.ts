import { Component, Input } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  @Input() products: Product[] = [];
}
