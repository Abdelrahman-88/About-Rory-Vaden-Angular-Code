import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MeetComponent } from './meet/meet.component';
import { PodcastComponent } from './podcast/podcast.component';
import { BooksComponent } from './books/books.component';
import { MediaComponent } from './media/media.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { TranningComponent } from './tranning/tranning.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MeetComponent,
    PodcastComponent,
    BooksComponent,
    MediaComponent,
    PersonalComponent,
    TranningComponent,
    ContactComponent,
    FooterComponent,
    NotfoundComponent,
    
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    RouterModule,
    ToastrModule.forRoot()  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
