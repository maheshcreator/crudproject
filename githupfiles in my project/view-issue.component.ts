
import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent {
  ulist: any=[];
constructor(public cs:CrudService){}
ngOnInit()
{
  this.fetchAllIssue();
}
fetchAllIssue()
{
  this.cs.getAllIssue().subscribe(res=>
    {
      this.ulist=res;
    });
}
 removeIssue(uid:number)
 {
   if(confirm("Are you delete this Issue?"))
   {
    this.cs.deleteIssue(uid).subscribe();
    this.fetchAllIssue();
   }
 }
}
