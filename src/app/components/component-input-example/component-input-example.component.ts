import { Component } from '@angular/core';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {   
    person0 = {      
      givenName: 'D1MK4L',
      surName: 'Gustaffer',
      age: 0x2c,
      email: 'Kaloudis_dimitrios@yahoo.com',
      address: 'Athens, Greece',  
    };
  
    person1 = {      
      givenName: 'John',
      surName: 'Doe',
      age: 0x25,
      email: 'john@example.com',
      address: 'NY, USA',  
    };

}
