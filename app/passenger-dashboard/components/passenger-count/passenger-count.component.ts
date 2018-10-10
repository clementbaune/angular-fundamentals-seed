import { Component } from '@angular/core';
import { componentModuleUrl } from '@angular/compiler';

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      Count component
    </div>`
})
export class PassengerCountComponent {
  constructor() {}
}