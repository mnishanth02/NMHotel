import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatBadgeModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
} from '@angular/material';



@NgModule({
    imports: [
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
    ],
    exports: [
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
    ]
})

export class MaterialModule { }
