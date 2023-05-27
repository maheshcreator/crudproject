import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
 class Issue{
	  id!:number;
      title!:string;
      description!:string;
 }
@Injectable({
  providedIn: 'root'
})
export class CrudService {
      endpoint="http://localhost:3000/users/";
      
  constructor(private hc:HttpClient) { }

 addIssue(data:any)
  {
    return this.hc.post<Issue>(this.endpoint,data);
  }
   getAllIssue()
   {
    return this.hc.get<Issue>(this.endpoint);
   }
   getSingleIssue(id:number)
   {
        return this.hc.get<Issue>(this.endpoint+id)
   }
   deleteIssue(id:number)
   {
     return this.hc.delete<Issue>(this.endpoint+id)
   }
  updateIssue(id:number,data:any)
  {
      return this.hc.put<Issue>(this.endpoint+id,data)
  }
}
