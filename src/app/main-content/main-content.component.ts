import { Component, OnInit } from '@angular/core';
import { SJssTheme } from 'super-jss';
import { ThemeHandlerService } from '../theme/theme-handler.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent implements OnInit {
  theme: SJssTheme;
  constructor(private themeService: ThemeHandlerService) {
    this.theme = themeService._theme;
    themeService.getTheme().subscribe((t) => {
      this.theme = t;
    });
  }

  ngOnInit() {}
}
