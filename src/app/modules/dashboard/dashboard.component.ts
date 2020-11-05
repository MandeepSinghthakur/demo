import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
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
  displayedColumns: string[] = ['title'];

  constructor( private appService: CommonService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getUsers()
    this.getPosts()
  }

  getPosts():void {
    this.appService.getPosts(this.route.snapshot.params['id'])
    .subscribe(results => this.posts = results)
  }

  getComments(postid):void {
    this.appService.getComments(postid)
    .subscribe(results => console.log(result))
  }

  getUsers(): void {
    this.appService.getUsers()
    .subscribe(users => this.currentUser = users.find(user => user.id == this.route.snapshot.params['id']));
  }

}
