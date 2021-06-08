import {Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',  //using a css selector <div class="courses">
    template: `
        <h2>{{ title }}<h2>
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />

        <table>
            <tr>
                <td [attr.colSpan]="colSpan"></td>
            </tr>
        </table>

        <button class="btn btn-primary" [class.active]="isActive">Save</button>
        <button [style.backgroundColor]="isActive ? 'red' : 'blue'">Check</button>
        <hr/>
        <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Save</button>
        <div>
        <hr/>
        <input [value]="email" (keyup.enter)="onKeyUp()" />    
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

        <hr/>
        <h1>Section 4 - #49</h1>
        {{course.title | uppercase}}<br/>
        {{course.students | number }}<br/>
        {{course.rating | number:'2.1-1'}}<br/>
        {{course.price | currency:'AUD':true:'3.2-2' }}<br/>
        {{course.releaseDate | date:'short'}}

        <hr/>
        {{text | summary: 10}}
        `   //string interpolation
        //*ngFor is a directive - needs to prefixed with an *
        //#email is the input variable
        //See https://angular.io/api/common/DatePipe for datePipe options

    
})
export class CoursesComponent {

    text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur ex ut nulla ultrices ultrices. Aliquam erat volutpat. Praesent facilisis tempor laoreet. `;

    isActive = true;

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    email = "me@example.com";

    onKeyUp() {
        console.log(this.email);
    }

    onSave($event: any) {
        $event.stopPropagation();   //won't hit second handler - onDivClicked is not triggered
        console.log("You clicked onSave", $event);
    }

    onDivClicked() {
        if(this.isActive) {
            this.isActive = false
        } else {
            this.isActive = true;
        }
    }

    title = "List of courses";
    courses;

    imageUrl = 'http://lorempixel.com/400/200/';
    colSpan = 2;

    //logic for calling http service
    constructor(service: CoursesService) {      //to avoid tight coupling - if you use New inside class, its tightly coupled
        this.courses = service.getCourses();
    }

    //Dependecy Injection: means injecting or providing dependicies of a class into its constructor
}