import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [TopBarComponent, RouterOutlet],
})
export class AppComponent {
  title = 'MyStore';
}
