import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HomeComponent} from './components/home/home.component';
import {FormComponent} from './components/form/form.component';
import {ListComponent} from './components/list/list.component';
import {ListItemComponent} from './components/list-item/list-item.component';

import {JsonPlaceholderService} from './services/json-placeholder-service.service';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FormComponent,
        ListComponent,
        ListItemComponent,
        TooltipDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [JsonPlaceholderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
