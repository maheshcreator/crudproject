
import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent {
  ulist:any=[];
 eid=this.act.snapshot.params['id'];
 
 constructor(public cs:CrudService,public act:ActivatedRoute,public rt:Router){}
 ngOnInit()
 {
  this.fetchSingleIssue(this.eid);
 }
 fetchSingleIssue(uid:number)
 {
  this.cs.getSingleIssue(uid).subscribe(res=>{
  this.ulist=res;
  });
 }
 updateIssue(uid:number,data:any)
 {
  this.cs.updateIssue(uid,data).subscribe();
  this.rt.navigate(['view']);
 }

 }
 
 

