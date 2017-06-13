import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrapjs';

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})

export class ContactComponent {
    scrollPage(sectionHref: string){
        var scroll_el = sectionHref;
        (<any>$('html, body')).animate({ scrollTop: $(scroll_el).offset().top }, 1000);
    }
    
    ngOnInit(){
      (<any>$('#quote-carousel')).carousel({
        pause: true,
        interval: 4000,
      });
    }
}
