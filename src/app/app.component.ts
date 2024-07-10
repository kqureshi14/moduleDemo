import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserAuthModule } from './user-auth/user-auth.module';
import { SignupComponent } from './user-auth/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moduleDemo';


  getData(val:string){
    console.warn(val);
  }

}
