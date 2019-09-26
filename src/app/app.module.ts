import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { TvpageComponent } from './tvpage/tvpage.component';
import { EventComponent } from './event/event.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OopsComponent } from './oops/oops.component';
import { MoviesComponent } from './movies/movies.component';
import { AuthGuard } from './gaurds/auth.guard';
import { SuntvComponent } from './tvpage/channels/suntv/suntv.component';
import { PolimerComponent } from './tvpage/channels/polimer/polimer.component';
import { KtvComponent } from './tvpage/channels/ktv/ktv.component';
import { VijaytvComponent } from './tvpage/channels/vijaytv/vijaytv.component';
import { ChannelsComponent } from './tvpage/channels/channels.component';
import { StartvComponent } from './tvpage/channels/startv/startv.component';
import { RatingPipe } from './pipes/rating.pipe';
import { InfoPopDirective } from './directives/info-pop.directive';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
  { path: 'moviedetails', component: MovieDetailsComponent, canActivate: [AuthGuard] },
  {
    path: 'tv', component: TvpageComponent, canActivate: [AuthGuard], children: [
      {
        path: 'channels', component: ChannelsComponent, canActivate: [AuthGuard],
        children: [
          { path: 'startv', component: StartvComponent },
          { path: 'polimertv', component: PolimerComponent },
          { path: 'vijaytv', component: VijaytvComponent },
          { path: 'suntv', component: SuntvComponent },
          { path: 'ktv', component: KtvComponent },
        ]
      }
    ]
  },
  { path: 'events', component: EventComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutusComponent },
  { path: '**', component: OopsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MovieListComponent,
    MovieDetailsComponent,
    LoginComponent,
    TvpageComponent,
    EventComponent,
    AboutusComponent,
    OopsComponent,
    MoviesComponent,
    SuntvComponent,
    PolimerComponent,
    KtvComponent,
    VijaytvComponent,
    ChannelsComponent,
    StartvComponent,
    RatingPipe,
    InfoPopDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
