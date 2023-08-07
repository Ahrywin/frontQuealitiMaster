import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {

  constructor(private route:Router){}
  logOut(){

    this.route.navigate(["/login"]);
  }
}
