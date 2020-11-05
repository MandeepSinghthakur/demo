import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service'
import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentUser: any
  posts:any
  constructor( private appService: CommonService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getUsers()
    this.getPosts()
    this.getComments()
  }

  getPosts():void {
    this.appService.getPosts(this.route.snapshot.params['id'])
    .subscribe(results => this.posts = results)
  }

  getComments():void {
    this.appService.getComments(2)
    .subscribe(results => console.log(results))
  }

  getUsers(): void {
    this.appService.getUsers()
    .subscribe(users => this.currentUser = users.find(user => user.id == this.route.snapshot.params['id']));
  }

}
