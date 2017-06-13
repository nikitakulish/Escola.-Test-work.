import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrapjs';

const customers = [
    {
        name: "Joanna Stanley1",
        desk: "Big Data Company",
        testimonials: " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "resources/img/customer.png",
        
    },
    {
        name: "Joanna Stanley2",
        desk: "Big Data Company",
        testimonials: " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "resources/img/customer.png",
        
    },
    {
        name: "Joanna Stanley3",
        desk: "Big Data Company",
        testimonials: " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "resources/img/customer.png",
        
    }
];

@Component({
    moduleId: module.id,
    selector: 'customers',
    templateUrl: 'customers.component.html',
    styleUrls: ['customers.component.css']
})

export class CustomersComponent {
    customers = customers;
    
    ngOnInit(){
      (<any>$('#quote-carousel')).carousel({
        pause: true,
        interval: 3000,
      });
    }
}
