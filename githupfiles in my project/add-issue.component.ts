import { Component ,Input} from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {
@Input() userobj={title:'',description:''};
   
constructor(public cs:CrudService,public rt:Router ){}
addIssue()
{
    this.cs.addIssue(this.userobj).subscribe();
    this.rt.navigate(['view']);
}
}
