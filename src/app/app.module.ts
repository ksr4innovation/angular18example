import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule  , 
    FormsModule,
    HttpClientModule
  ],
  providers: [
  
    provideClientHydration()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
