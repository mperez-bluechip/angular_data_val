import {Component} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {DebugPanelComponent} from '../debug-panel/debug-panel.component';

@Component({
  selector: 'order-sheet',
  directives: [DebugPanelComponent],
  templateUrl: 'order-sheet.component.html',
  styleUrls: ['order-sheet.component.css'],
  moduleId: module.id
})
export class OrderSheetComponent {
  orderSheetForm: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.buildForm();
  }
  buildForm (){
    this.orderSheetForm = this.formBuilder.group({
      
    }); 
  }
}
