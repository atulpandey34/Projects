import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule } from 'angular-calendar';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { AuthenticatedHttpService } from './pages/errors/401.service';
import { CookieModule } from 'ngx-cookie';


@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        CookieModule.forRoot(),
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
        }),
        CalendarModule.forRoot(),
        routing
    ],
    providers: [{ provide: Http, useClass: AuthenticatedHttpService }, AppSettings, { provide: LOCALE_ID, useValue: "en-US" }],
    bootstrap: [AppComponent]
})
export class AppModule { }
