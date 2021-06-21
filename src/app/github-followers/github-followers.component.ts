import { Component, OnInit, ɵisObservable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../github-followers.service';
import { DataService } from '../services/data.services';
import { Observable } from 'rxjs';
import { combineLatest, pipe  } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
    ) { }

  ngOnInit() {
    // let obs = combineLatest([
    //     this.route.paramMap,
    //     this.route.queryParamMap
    //   ])
    //   .switchMap((combined: { get: (arg0: string) => any; }[]) => {
    //       let id = combined[0].get('id');
    //       let page = combined[1].get('page');
  
    //       // this.service.getAll({ id: id, page: page})
    //       this.service.getAll();
    //     })
   
      
    
    // obs.subscribe((followers: any) => {this.followers = followers}); 
   
    
    
  let obs = combineLatest([
        this.route.paramMap,
        this.route.queryParamMap
      ])
 
    obs.subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      // this.service.getAll({ id: id, page: page})
      this.service.getAll()
      .subscribe(followers => this.followers = followers)
    })


    //CAN ALSO USE SNAPSHOT
    // this.route.paramMap
    //   .subscribe(params => {});
    // this.route.queryParamMap
    //   .subscribe(params => {});
    // let id = this.route.snapshot.paramMap.get('id')
    // let page = this.route.snapshot.queryParamMap.get('page');
  }
}
