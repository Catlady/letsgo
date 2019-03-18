import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Http, ConnectionBackend } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadModule } from './upload/upload.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileListComponent } from './profile/profile-list.component';
import { ProfileComponent } from './profile/profile.component';
import { CanyonListComponent } from './canyon/canyon-list.component';
import { CanyonComponent } from './canyon/canyon.component';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './config/config-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    ProfileListComponent,
    ProfileComponent,
    CanyonListComponent,
    CanyonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UploadModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [
    ConfigService,
    HttpClient,
    
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return () => {
          //Make sure to return a promise!
          return configService.loadAppConfig();
        };
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
