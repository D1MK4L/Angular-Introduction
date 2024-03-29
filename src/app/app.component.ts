import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'D1MK4L';

  person = {
    givenName: 'D1MK4L',
    surName: 'Gustaffer',
    age: 0x2c,
    email: 'Kaloudis_dimitrios@yahoo.com',
  };
}
