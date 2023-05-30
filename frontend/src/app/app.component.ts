import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstP';


  constructor(private el: ElementRef,
    private activatedRoute:ActivatedRoute,
    private router:Router,) {}

  isHomePageActif(): boolean {
    const currentUrl = this.router.url;
    const urlFragments = ['/', '#service', '#portfolio', '#pricing', '#about', '#contact'];
    return urlFragments.every(fragment => !currentUrl.endsWith(fragment));
  }

}
