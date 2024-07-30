import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/shared/asset.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    constructor(private assetService: AssetService) {}

    // member variable for display list of column
    public displayedColumns: string[] = [
        'index',
        'name',
        'type',
        'quantity',
        'price',
        'date',
    ];

    // member vaiable to hold the stock list retrived from localstorage
    public stockList;

    ngOnInit(): void {
        this.stockList = this.assetService.getUserData();
    }
}
