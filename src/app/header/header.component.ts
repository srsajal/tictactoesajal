import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] | undefined;
  themeIcon : string;
  /**
   *
   */
  constructor(private themeService : ThemeService) {
    this.themeIcon = '../assets/moon.png';
  }

  changetheme(): void {
    this.themeService.toggleTheme();
    if (this.themeService.isDarkTheme()) {
      this.themeIcon = '../assets/sun.png';  // Change to sun icon in dark theme
    } else {
      this.themeIcon = '../assets/moon.png';  // Change to moon icon in light theme
    }
  }

  ngOnInit() {
      this.items = []
  } 

}
