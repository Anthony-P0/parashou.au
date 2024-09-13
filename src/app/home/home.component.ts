import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatButtonModule, MatIcon ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  downloadResume(): void {
    window.open('/documents/parashou-resume.pdf', '_blank');
  }
}
