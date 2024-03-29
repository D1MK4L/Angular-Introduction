import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName: 'D1MK4L',
    surName: 'Gustaffer',
    age: 0x2c,
    email: 'Kaloudis_dimitrios@yahoo.com',
  };
}
