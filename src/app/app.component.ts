import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'procedura1';
  innerWidth: any;
  isShown: boolean;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.isShown = true;
    console.log(`la anchura es: ${this.innerWidth}px`);
    if (this.innerWidth < 768) {
      this.isShown = false;
    }
  }
}
