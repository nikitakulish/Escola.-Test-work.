import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrapjs';

const persons = [
    {
        name: "Thomas",
        img: "resources/img/team-person.png",
        desk: "Project manager"
    },
    {
        name: "Thomas",
        img: "resources/img/team-person.png",
        desk: "Project manager"
    },
    {
        name: "Thomas",
        img: "resources/img/team-person.png",
        desk: "Project manager"
    },
    {
        name: "Thomas",
        img: "resources/img/team-person.png",
        desk: "Project manager"
    }
];

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css']
})
export class AboutComponent {
    persons = persons;
    
    ngOnInit(){
        $(document).ready(function(){
            (<any>$('[data-toggle="popover"]')).popover();   
        });
    }
}
