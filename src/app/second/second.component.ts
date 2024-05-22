import { Component } from '@angular/core';
import { TablesPipe } from '../tables.pipe';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [TablesPipe],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

}
