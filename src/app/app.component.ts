import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  homeSelected = true;
  projectSelected = false;
  about = false;

  constructor(private router: Router){}
  aboutMe(){
    this.about = true;
    this.homeSelected = false;
    this.projectSelected = false;
  }
  projects(){
    this.projectSelected = true;
    this.homeSelected = false;
    this.about = false;
  }
  home(){
   
  }
}
