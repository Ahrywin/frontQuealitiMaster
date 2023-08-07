import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent {
  @Output() tabIndex = new EventEmitter<number>();

  createNewUser(){
    this.tabIndex.emit(5)
    console.log("emite 5")
  }
}
