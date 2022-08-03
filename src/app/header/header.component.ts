import { Component, OnInit } from '@angular/core';
import { SJssTheme, SJssThemeService } from 'super-jss';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  theme: SJssTheme;
  toggleTheme: boolean = false;
  constructor(private themeService: SJssThemeService) {
    this.theme = themeService.defaultTheme();
    //subscribe to any changes on the theme
    themeService.themeChanges().subscribe((t) => {
      this.theme = t;
    });
  }

  ngOnInit() {}
  colorClicked() {
    this.toggleTheme = !this.toggleTheme;
    //update the theme to a new one of type SJssTheme
    this.themeService.setTheme(
      this.toggleTheme ? this.themeUpdated() : this.themeService.defaultTheme()
    );
  }

  themeUpdated(): SJssTheme {
    return {
      breakpoints: { xs: 0, sm: 600, md: 750, lg: 1200, xl: 1536 },
      spacing: (factor) => `${0.5 * factor}rem`,
      typography: {
        default: { fontFamily: '"Roboto","Helvetica"', fontSize: '1.2em' },
        H1: { fontSize: { xs: '2em' }, fontWeight: 'bold' },
        H2: { fontSize: { xs: '1.8em', md: '2em' }, fontWeight: 'bolder' },
        H3: { fontSize: { xs: '1.5em', md: '1.7em' }, fontWeight: 'bolder' },
        H4: { fontSize: { xs: '1.3em', md: '1.5em' }, fontWeight: 'bolder' },
        H5: { fontSize: { xs: '1em', md: '1.8em' }, fontWeight: 'bolder' },
        H6: { fontSize: { xs: '0.8em', md: '1.2em' }, fontWeight: 'bolder' },
        P: { fontSize: '0.5em', fontWeight: 'normal' },
        SPAN: { fontSize: '0.35em', fontWeight: 'normal' },
      },
      palette: {
        common: {
          black: '#030303',
          white: '#fafafa',
          gray: {
            main: '#888888',
            light: '#aaaaaa',
            dark: '#555555',
            contrastText: '#dddddd',
          },
        },
        primary: {
          main: '#006699',
          light: '#3399ff',
          dark: '003366',
          contrastText: '#f9fff7',
        },
        secondary: {
          main: '#996600',
          light: '#ff9900',
          dark: '#663300',
          contrastText: '#e7d9bf',
        },
        error: {
          main: '#cc1d1d',
          light: '#e3543d',
          dark: '#801f13',
          contrastText: '#e7d9bf',
        },
        warning: {
          main: '#be5419',
          light: '#f39363',
          dark: '#b03c08',
          contrastText: '#e7d9bf',
        },
        info: {
          main: '#0b619f',
          light: '#3795d9',
          dark: '#073556',
          contrastText: '#e7d9bf',
        },
        success: {
          main: '#35850e',
          light: '#7eee47',
          dark: '#163807',
          contrastText: '#e7d9bf',
        },
        text: {
          primary: '#e7e7e7',
          secondary: '#1a1a1a',
          disabled: 'rgba(16,16,16,0.39)',
        },
      },
    };
  }
}
