import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppBiblioteca';

  constructor(private location:Location, public authService: AuthService) { }

  goback(){
    this.location.back();
  }

}



