import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroupOperationHomeComponent } from './components/group-operation-home/group-operation-home.component';
import { GroupOperationUniqueComponent } from './components/group-operation-unique/group-operation-unique.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupOperationHomeComponent,
    GroupOperationUniqueComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
