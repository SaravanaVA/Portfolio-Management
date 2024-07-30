import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AssetService } from './shared/asset.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'portfolio-management';

    constructor(private assetService: AssetService) {}

    ngOnInit(): void {
        this.assetService.setDefaultAsset();
    }
}
