import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstP';


  constructor(private el: ElementRef) {

  }

  scrollDown(){
    var container = this.el.nativeElement.querySelector("#chat");
      container.style = "color: red; background-color: blue;"
    console.log(container.scrollTop)
    console.log(container.scrollHeight)
    container.scrollTop = container.scrollHeight;
    console.log(container.scrollTop)
  }


}
