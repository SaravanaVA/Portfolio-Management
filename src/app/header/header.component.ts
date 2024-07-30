import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.url.subscribe((event) => {
            console.log(event[0]); // It's an array remember [0]
            console.log(event[0].path); // e.g. /products
            console.log(event[0].parameters); // e.g. { id: 'x8klP0' }
        });
    }

    public handleNavigation(type: string) {
        this.router.navigate(['/asset/' + type]);
    }
}
