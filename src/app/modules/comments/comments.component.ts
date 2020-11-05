import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { CommonService } from '../../services/common.service'
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'post-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  constructor( private appService: CommonService) { }
  @Input()
  postid: any ;

  comments:any;
  ngOnInit() {
    this.getComments(this.postid)
  }

  getComments(postId):void {
    this.appService.getComments(postId)
    .subscribe(results => this.comments = results)
  }

}
