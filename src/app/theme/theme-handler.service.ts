import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SJssTheme, SuperJssService } from 'super-jss';

@Injectable({
  providedIn: 'root',
})
export class ThemeHandlerService {
  _theme: SJssTheme;
  themeChanges: BehaviorSubject<SJssTheme>;
  constructor(private superJssService: SuperJssService) {
    this._theme = superJssService.defaultTheme();
    this.themeChanges = new BehaviorSubject<SJssTheme>(this._theme);
  }

  setTheme(newValue: SJssTheme): void {
    this._theme = newValue;
    this.superJssService.setTheme(newValue);
    this.themeChanges.next(this._theme);
  }
  getTheme(): Observable<SJssTheme> {
    return this.themeChanges.asObservable();
  }

  getDefaultTheme() {
    return this.superJssService.defaultTheme();
  }
}
