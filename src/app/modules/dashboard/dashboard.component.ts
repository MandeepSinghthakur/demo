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
  id:any
  users:any
  constructor( private appService: CommonService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.getUsers()
    this.getPosts()
  }

  getPosts():void {
    this.appService.getPosts(this.id)
    .subscribe(results => this.posts = results)
  }

  getUsers(): void {
    this.appService.getUsers()
    .subscribe(users => {
      this.users = users
      this.getCurrentUser()
    });
  }

  getCurrentUser(){
    if(this.users && this.users.length) {
      this.currentUser = this.users.find(u => u.id == this.id)
    }
  }

}
