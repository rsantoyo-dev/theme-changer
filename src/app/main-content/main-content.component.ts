import { Component, OnInit } from '@angular/core';
import { SJssTheme, SJssThemeService } from 'super-jss';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
})
export class MainContentComponent implements OnInit {
  theme: SJssTheme;
  screenSize: string = '';
  constructor(private themeService: SJssThemeService) {
    this.theme = themeService.defaultTheme();
    //subscribe to any changes on the theme
    themeService.themeChanges().subscribe((t) => {
      this.theme = t;
    });
    //detect breakpoint according to window width
    themeService.breakpointChanges().subscribe((sz) => {
      this.screenSize = sz;
    });
  }

  ngOnInit() {}
}
