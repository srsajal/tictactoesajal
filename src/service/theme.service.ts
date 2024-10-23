import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme: boolean = false;

  constructor() {
    // Initialize based on the user's system preference or default to light mode
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // this.darkTheme = prefersDark;
    // this.updateTheme();
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.updateTheme();
  }

  private updateTheme() {
    if (this.darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }
}
