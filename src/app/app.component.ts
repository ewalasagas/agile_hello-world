import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from './favorite/favorite.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Section 4';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed", eventArgs);
  }

  // ngFor example (and the hidden rule one)
  courses = [
    {id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course3'},
  ];

  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }
  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1)
  }
  onChange(course: any) {
    course.name = 'UPDATED'
  }
  // ngSwitchCase example
  viewMode = 'map';

  // ngFor and Trackby example

  classes: any;

  loadClasses() {
    this.classes = [
      {id: 1, name:'class1'},
      {id: 2, name:'class2'},
      {id: 3, name:'class3'},
    ]
  };

  trackClass(index: number, classes: any) {
    return classes ? classes.id : undefined;
  }

  //example of ngStyle - sett to true or false
  canSave = false;

  //example section #73 - Safe Traversal Operator
  task = {
    title: 'Review applications',
    assignee: {
      name: null
    }
  }
  //use ? if it can be null

  //example section #74
  
}
