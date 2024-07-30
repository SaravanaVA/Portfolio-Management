import { Injectable } from '@angular/core';
import { Asset } from 'src/app/shared/asset-model';
import { AssetService } from 'src/app/shared/asset.service';

@Injectable({
    providedIn: 'root',
})
export class ChartService {
    constructor(private assetService: AssetService) {}

    /*
     * Method to give the data set for the chart
     * Data to be collected from the assetService and filtered it based
     * on the need for chart display
     * */
    public getStocksDetails() {
        const stocksList: Asset[] = this.assetService.getUserData();
        let stocks = [];
        let buyPrice = [];
        let currrentMarketPrice = [];
        let alertList = [];
        stocksList.forEach((val) => {
            // as of Now, if we have more than one asset, taking the first asset
            // count and ignoring the remaining
            // this logic needs to be improved
            if (!stocks.includes(val.name)) {
                stocks.push(val.name);
                buyPrice.push(val.price);
                const currentPrice = this.getCurrentMarketValue(
                    val.name,
                    val.price
                );
                currrentMarketPrice.push(currentPrice);

                // list of asset whose net value is negative
                if (currentPrice - +val.price < 0) {
                    alertList.push(val.name);
                }
            }
        });

        return { stocks, buyPrice, currrentMarketPrice, alertList };
    }

    /*
     *
     * Helper method to set the current market value - Simulation purpose only
     * If stock is "starlink", then its value is redued by 1 percentage
     * All other stocks market value will be always 10 percent higher
     * than the buy price
     *
     * */
    private getCurrentMarketValue(stock: string, purchasePrice: string) {
        const numericValue = +purchasePrice;
        if (stock.toLowerCase() == 'starlink') {
            return numericValue - numericValue * 0.01;
        } else {
            return numericValue + numericValue * 0.1;
        }
    }
}
