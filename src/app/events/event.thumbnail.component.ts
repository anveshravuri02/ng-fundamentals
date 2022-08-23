/*import { Component, EventEmitter, Input, Output } from "@angular/core";



@Component({

 selector:'event-thumbnail',

 templateUrl: './event-thumbnail.component.html'

})

export class EventThumbnailComponent{

@Input() event:any

@Output() eventClicked=new EventEmitter; // to pass data from parent to child

handleClickMe(){

    this.eventClicked.emit(" Angular training At Value Momemtum");

}
handleClickMe1(){

    this.eventClicked.emit("hello");

}

}*/
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    //styleUrls: ['./event-thumbnail.component.css']
    styles: [`
    .green {color: #003300 !important }
    .thumbnail {min-height : 210px;}
    .bold { font-weight : bold; }
.pad-left{margin-left:10px;}
.well div{color: #bbb;}
    `]
})
export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClicked = new EventEmitter(); // to pass data from parent to child

    address: string = "roadnumber3 sharadanagr gadiannaram"
    getStartTimeStyle(): any{
        if(this.event && this.event.time=='8:00am')
        {
            return{color: '#003300', 'font-weight':'bold'}
        }
        return []
    }



}