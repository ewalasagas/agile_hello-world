import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [
    `
     .bi {
       color: green;
     } 

     .bi-star {
       background: black;
     }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FavoriteComponent {

  @Input('is-favorite') isFavorite: boolean = true;
  @Output('change') click = new EventEmitter();

  onClicked() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue: this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
