import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isChecked = false;
  ngOnInit(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme:dark)');

    document.body.classList.toggle('dark-theme', prefersDark.matches);
    document
      .querySelector('label')
      ?.classList.toggle('dark-theme-toggled', prefersDark.matches);
    document
      .querySelector('input')
      ?.classList.toggle('dark-theme-toggled', prefersDark.matches);

    prefersDark.addEventListener('change', (e) => {
      document.body.classList.toggle('dark-theme', e.matches);
    });

    if (prefersDark.matches) {
      this.isChecked = true;
    }
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    document.querySelector('label')?.classList.toggle('dark-theme-toggled');
    document.querySelector('input')?.classList.toggle('dark-theme-toggled');
  }
}
