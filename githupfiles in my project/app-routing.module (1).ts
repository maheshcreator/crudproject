import { Component, NgModule, createNgModuleRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';

import { ViewIssueComponent } from './view-issue/view-issue.component';

const routes: Routes = [
  {
    path:'',component:ViewIssueComponent
  },
  {
  path:'add',component:AddIssueComponent
  },
  {
    path:'edit/:id',component:EditIssueComponent
  },
  {
    path:'view',component:ViewIssueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
































