import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { AddtriggerComponent } from './addtrigger/addtrigger.component';
import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { UploadschedComponent } from './uploadsched/uploadsched.component';
import { ResourcesComponent } from './resources/resources.component';

import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { ProfilesiteComponent } from './profilesite/profilesite.component';
import { TemplatesComponent } from './templates/templates.component';
import { AddeventComponent } from './addevent/addevent.component';
import { EventsComponent } from './events/events.component';
import { AskawaysComponent } from './askaways/askaways.component';
import { SingleaskawayComponent } from './singleaskaway/singleaskaway.component';
import { TeamupformComponent } from './teamupform/teamupform.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { ResourceformComponent } from './resourceform/resourceform.component';
import { HashtagComponent } from './hashtag/hashtag.component';

import { ResumeComponent } from './resume/resume.component';
import { ChatComponent } from './chat/chat.component';
import {TeamupcardsComponent} from './teamupcards/teamupcards.component'
import { AddquestionComponent } from './addquestion/addquestion.component';
import { ViewexpensesComponent } from './viewexpenses/viewexpenses.component';
import { AllresourcesComponent } from './allresources/allresources.component';
import { AddresumeComponent } from './addresume/addresume.component';
import { AddresumeforreviewComponent } from './addresumeforreview/addresumeforreview.component';
import { ViewpdfComponent } from './viewpdf/viewpdf.component';
import {LocaleducatorsComponent} from './localeducators/localeducators.component';
import { ReviewresumeComponent } from './reviewresume/reviewresume.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'finance',
    component: FinanceComponent
  },
  {
    path: 'finance/addexpense',
    component: AddexpenseComponent
  },
  {
    path: 'finance/addtrigger',
    component: AddtriggerComponent
  },
  {
    path: 'management',
    component: ManagementComponent
  },
  {
    path: 'management/uploadsched',
    component: UploadschedComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'allresources',
    component: AllresourcesComponent
  },
  {
    path: 'resources/resourceform',
    component: ResourceformComponent
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path:'profilesite',
    component: ProfilesiteComponent
  },
  {
    path: 'templates',
    component: TemplatesComponent
  },
  {
    path: 'addevent',
    component: AddeventComponent
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path: 'events/hashtag',
    component: HashtagComponent
  },
  {
    path: 'askaway',
    component: AskawaysComponent
  },
  {
    path: 'askaway/ask',
    component: SingleaskawayComponent
  },
  {
    path:'resume',
    component:ResumeComponent
  },
  {
    path: 'askaway/add',
    component: AddquestionComponent
  },
  {
    path: 'teamupform',
    component: TeamupformComponent
  },
  {
    path: 'resumeform',
    component: ResumeBuilderComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'joinevent',
    component: TeamupcardsComponent
  },
  {
    path: 'expenses/view',
    component: ViewexpensesComponent
  },
  {
    path: 'resume/upload',
    component: AddresumeComponent
  },
  {
    path: 'resume/add',
    component: AddresumeforreviewComponent
  },
  {
    path: 'pdf',
    component: ViewpdfComponent
  },
  {
    path: 'management/viewschedule',
    component: ViewscheduleComponent
  },
  {
    path: 'expenses/view',
    component: ViewexpensesComponent
  },
  {
    path: 'localeducators',
    component: LocaleducatorsComponent
  },
  {
    path: 'resume/review',
    component: ReviewresumeComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
