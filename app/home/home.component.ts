import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrapjs';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
    scrollPage(sectionHref: string){
        var scroll_el = sectionHref;
        (<any>$('html, body')).animate({ scrollTop: $(scroll_el).offset().top }, 1000);
    }
    
    ngOnInit(){
        (<any>$(document)).on('click',function(){
            (<any>$('.collapse')).collapse('hide');
            (<any>$('.carousel')).carousel();
        });
        
        window.onscroll = function() {
            if(window.pageYOffset > 100){
                (<any>$('#nav-container')).addClass('bg-fixed-navbar');
            }
            else{
                (<any>$('#nav-container')).removeClass('bg-fixed-navbar');
            }
        }
    }
}