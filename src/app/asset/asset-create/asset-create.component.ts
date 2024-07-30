import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Asset } from 'src/app/shared/asset-model';

import { AssetService } from 'src/app/shared/asset.service';

@Component({
    selector: 'asset-create',
    templateUrl: './asset-create.component.html',
    styleUrls: ['./asset-create.component.scss'],
})
export class AssetCreateComponent implements OnInit {
    public investmentForm: FormGroup;

    // list of available stocks
    public assetList: string[] = [
        'Alphabet',
        'Amat',
        'Meta',
        'Adobe',
        'Microsoft',
        'Tesla',
        'StarLink',
        'Neuralink',
    ];

    public assetTypes: string[] = [
        'Stock',
        'Bond',
        'Real Estate',
        'Cryptocurrency',
        'Other',
    ];

    constructor(
        private fb: FormBuilder,
        private assetService: AssetService,
        private snackbar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.investmentForm = this.fb.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            quantity: ['', [Validators.required, Validators.min(1)]],
            price: ['', [Validators.required, Validators.min(0.01)]],
            date: ['', Validators.required],
        });
    }

    getFormatedFormValue(value): Asset {
        const datePipe = new DatePipe('en-US');

        let clonedFormValue = Object.assign({}, value);

        clonedFormValue.date = datePipe.transform(
            value.date,
            'yyyy-LL-dd hh:mm:ss'
        );

        return clonedFormValue;
    }

    public onSubmit(formDirective: FormGroupDirective): void {
        if (this.investmentForm.valid) {
            let data: Asset = this.getFormatedFormValue(
                this.investmentForm.value
            );

            this.snackbar.open('Asset has beed successfully added!', 'Close', {
                duration: 2000,
            });
            this.assetService.setUserData(data, 'sara@gmail.com');
            this.investmentForm.reset();
            formDirective.resetForm();
        }
    }
}
