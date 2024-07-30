import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetCreateComponent } from './asset-create/asset-create.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },

    {
        path: 'list',
        component: ListComponent,
    },
    {
        path: 'create',
        component: AssetCreateComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AssetRoutingModule {}
