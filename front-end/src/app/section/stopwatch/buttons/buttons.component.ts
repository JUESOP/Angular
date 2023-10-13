import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Output() clickEvent = new EventEmitter();

  constructor() {

  }

  executeButton(command: any){
    this.clickEvent.emit(command); //부모 컴포넌트한테 데이터를 전달해줌

  
  }

}
