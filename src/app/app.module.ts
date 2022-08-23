import { NgModule } from '@angular/core';
import { FormRecord, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { EventsListResolver } from './events/event-list-resolver.service';
import { EventThumbnailComponent } from './events/event.thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { DurationPipe } from './shared/duration.pipe';
import { EventService } from './shared/event.service';
import { AuthService } from './user/auth.service';
import { NavBarComponent } from './nav/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    DurationPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,

    {
      provide: 'CanDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent)
{
  if(component.isDirty)
  {
    return window.confirm('You have not saved this event, do you really want to cancel')
  }
  return true
}
