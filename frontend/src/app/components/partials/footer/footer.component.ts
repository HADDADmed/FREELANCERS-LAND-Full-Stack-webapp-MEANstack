import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
  isHomePageActif(): boolean {
    const currentUrl = this.router.url;
    const urlFragments = ['/','/account', '#service', '#portfolio', '#pricing', '/contact','#about', '#contact'];

    return urlFragments.every(fragment => !currentUrl.endsWith(fragment));
  }
}
