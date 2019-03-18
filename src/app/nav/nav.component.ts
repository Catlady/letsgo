import { Component, OnInit, Optional } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ConfigService } from '../config/config-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string;
  usersLabel: string;
  itemsLabel: string;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private configService: ConfigService) {}

  ngOnInit(): void {
    debugger;
    this.title = this.configService.title;
    this.usersLabel = this.configService.usersLabel;
    this.itemsLabel = this.configService.itemsLabel;
  }

}
