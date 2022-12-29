import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularGestionCanina';
  constructor(private router: Router) { }

  HomeClick(){
    this.router.navigate(['Home']);
  }
}
