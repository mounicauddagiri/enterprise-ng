import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { SohoDropdownComponent, SohoButtonComponent } from '../';

@Component({
  moduleId: module.id,
  selector: 'soho-dropdown-demo',
  templateUrl: 'dropdown.demo.html',
  directives: [ SohoButtonComponent, SohoDropdownComponent, REACTIVE_FORM_DIRECTIVES ],
})
export class DropdownDemoComponent implements OnInit {
  private options: Array<Object> = [
    { value: 'AL', text: 'Alabama' },
    { value: 'CA', text: 'California' },
    { value: 'DE', text: 'Delaware' },
    { value: 'NY', text: 'New York' },
    { value: 'WY', text: 'Wyoming' },
  ];
  private counter = 0;
  private model = { // tslint:disable-line
    single: '',
    readOnly: '',
    modifiable: '',
  };

  constructor() { }
  ngOnInit() { }
  onAddOption() {
    this.options.push({ value: 'test' + this.counter, text: 'Test ' + this.counter });
    this.counter++;
  }
  onRemoveOption() {
    this.options.pop();
  }
}
