import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  @Input() data:any={}
  @Output() item=new EventEmitter()
  @Output() itemf=new EventEmitter()
  add(){
    this.item.emit(this.data)
  }
  addf(){
    this.itemf.emit(this.data)
  }
}
