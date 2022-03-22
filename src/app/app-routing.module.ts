import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { MeetComponent } from './meet/meet.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PersonalComponent } from './personal/personal.component';
import { PodcastComponent } from './podcast/podcast.component';
import { TranningComponent } from './tranning/tranning.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: "reload",
  scrollOffset: [0, 64],
  useHash:true
};
const routes: Routes = [
  // {path:"" , redirectTo:"home" , pathMatch:"full"},
  // {path:"home" ,  component:HomeComponent},
  // {path:"meet" ,  component:MeetComponent},
  // {path:"podcast" ,  component:PodcastComponent},
  // {path:"books" ,  component:BooksComponent},
  // {path:"speaking" ,  component:MediaComponent},
  // {path:"media" ,  component:MediaComponent},
  // {path:"personal" ,  component:PersonalComponent},
  // {path:"blog" ,  component:TranningComponent},
  // {path:"tranning" ,  component:TranningComponent},
  // {path:"contact" ,  component:ContactComponent},
  // {path:"**"  , component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
