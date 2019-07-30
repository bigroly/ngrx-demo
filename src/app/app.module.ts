// core angular modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// ngRx imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// app ngRX components
import { appReducers } from './store/reducers/app.reducer';
import { UserEffects } from './store/effects/user.effect';

// app components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';

// app services
import { UserService } from './services/user.service';

// 3rd party modules:
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
