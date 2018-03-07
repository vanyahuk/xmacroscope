import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { AislGraphqlModule } from './aisl-graphql';
import { AislGraphqlClientdbModule } from './aisl-graphql-clientdb';
import { AislGraphqlServerdbModule } from './aisl-graphql-serverdb';

import { AislGraphqlMockdbModule } from './aisl-graphql-mockdb';

import { AislBackendModule } from './aisl-backend';
import { AislEndlineModule } from './aisl-endline';
import { AislMavModule } from './aisl-mav';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AislGraphqlClientdbModule,
    // AislGraphqlServerdbModule,
    AislGraphqlMockdbModule,
    AislBackendModule,
    AislGraphqlModule,
    AislEndlineModule,
    AislMavModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
