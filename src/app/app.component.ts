import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  homeSelected = true;
  projectSelected = false;
  about = false;
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
    this.homeSelected = true;
    this.projectSelected = false;
    this.about = false;
  }
}
