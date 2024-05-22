import { Component } from '@angular/core';
import { PistulPipe } from '../pistul.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [PistulPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
{
  
}
