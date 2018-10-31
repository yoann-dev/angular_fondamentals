import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <event-thumbnail *ngFor='let event of events' [event]="event" class="col-md-5"></event-thumbnail>
  </div>
  `
})
export class EventsListComponent implements OnInit {
    events : any[];

    constructor(private test: EventService) {
        //this.events = this.eventService.getEvents()
    }

    ngOnInit() {
        //this.events = this.eventService.getEvents()
    }
 }