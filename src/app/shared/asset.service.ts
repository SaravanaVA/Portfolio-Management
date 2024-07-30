import { Injectable } from '@angular/core';
import { Asset } from './asset-model';

@Injectable({
    providedIn: 'root',
})
export class AssetService {
    constructor() {}

    /*
     * Set the asset data of specific user in local storage
     * instead of real time api, using localstorage
     * @param {*} data - actual data of the form submission
     * @param {string} [user='sara@gmail.com'] - Need to pass the current logged-in user
     *         as of now, we don't have login scree. so used this email as static value
     *
     * @memberOf AssetService
     * */
    public setUserData(data: Asset | Asset[], user = 'sara@gmail.com') {
        const existingAssets = this.getUserData();
        let completeAsset;

        if (existingAssets.length == 0) {
            completeAsset = data;
        } else {
            existingAssets.push(data);
            completeAsset = existingAssets;
        }

        console.log('save asset --', completeAsset);
        localStorage.setItem(user, JSON.stringify(completeAsset));
    }

    /*
     * Returns the available assets from local storage
     *
     * @param {string} [user='sara@gmail.com'] - If we have multiple user,
     *         we can pass the user email to retrive correct data
     * @returns asset details
     *
     * @memberOf AssetService
     * */
    public getUserData(user = 'sara@gmail.com') {
        const assetDetails = JSON.parse(localStorage.getItem(user));
        console.log('get asset --', assetDetails);

        return assetDetails ? assetDetails : [];
    }

    public clearData() {
        localStorage.clear();
    }

    public setDefaultAsset() {
        const existingAssets = this.getUserData();
        if (existingAssets.length <= 0) {
            this.clearData();
            let stockList: Asset[] = [
                {
                    name: 'Amat',
                    type: 'stock',
                    quantity: 10,
                    price: '100',
                    date: '2024-07-31 12:00:00',
                },

                {
                    name: 'Google',
                    type: 'stock',
                    quantity: 10,
                    price: '100',
                    date: '2024-07-31 12:00:00',
                },

                {
                    name: 'StarLink',
                    type: 'stock',
                    quantity: 10,
                    price: '100',
                    date: '2024-07-31 12:00:00',
                },
            ];
            this.setUserData(stockList);
        }
    }
}
