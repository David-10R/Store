import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu = signal(true)

  toogleSideMenu(){
    this.hideSideMenu.update(state => !state);
  }
}
