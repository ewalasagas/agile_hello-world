import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent{
  //example of array of objects
  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement) {
    //returns abstract-control object - does not have PUSH method
    //need to cast as FormArray
    //OLD METHOD - OR USE FORMDATA() BELOW --- (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
   this.topics.push(new FormControl(topic.value));

    //TO CLEAR INPUT FIELD
    topic.value='';
  }
  get topics() {
    return <FormArray>this.form.get('topics');
  }
  //TO REMOVE TOPIC BY CLICK  -- was set to (topic: FromControl - but this wasn't working)
  removeTopic(topic: any) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  //------- USING FOR EXAMPLE OF FORMBUILDER - SECTION #102 ---------
  // BEFORE WITHOUT FORM BUILDER
  // newForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  // AFTER USING FORMBUILDER
  newForm;

  constructor(fb: FormBuilder) {
    this.newForm = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }

}
