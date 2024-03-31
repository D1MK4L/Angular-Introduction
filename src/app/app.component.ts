import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'D1MK4L';

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
