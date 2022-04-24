import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ';
  isSpecial: boolean = false;
  paraColor: string = 'green';

  onClick(x: string): void {
    alert('The phone number is ' + x);
  }
}
