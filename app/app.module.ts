import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [HomeComponent, 
                   ServicesComponent,
                   AboutComponent,
                   CustomersComponent,
                   ContactComponent],
    bootstrap: [HomeComponent, 
                ServicesComponent,
                AboutComponent,
                CustomersComponent,
                ContactComponent]
})
export class AppModule {

}
