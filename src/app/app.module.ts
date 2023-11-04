import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MainComponent } from './main/main.component';


import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DataCardsComponent } from './main/components/data-cards/data-cards.component';
import { RecentOrdersComponent } from './main/components/recent-orders/recent-orders.component';
import { SingleCardComponent } from './main/components/data-cards/single-card/single-card.component';
import { SvgIconComponent } from './main/components/data-cards/utils/svg-icon/svg-icon.component';
import { NewUsersComponent } from './main/components/new-users/new-users.component';
import { CustomModalComponent } from './main/components/recent-orders/custom-modal/custom-modal.component';
import { SingleUserComponent } from './main/components/new-users/single-user/single-user.component';
import { LineGraphComponent } from './main/components/charts/line-graph/line-graph.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { BarGraphComponent } from './main/components/charts/bar-graph/bar-graph.component';
import { DonutGraphComponent } from './main/components/charts/donut-graph/donut-graph.component';

import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

const materialModules = [
  MatTableModule,
  MatIconModule,
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    MainComponent,
    DataCardsComponent,
    RecentOrdersComponent,
    SingleCardComponent,
    SvgIconComponent,
    NewUsersComponent,
    CustomModalComponent,
    SingleUserComponent,
    LineGraphComponent,
    BarGraphComponent,
    DonutGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
    HttpClientModule,
    NgChartsModule,
    FusionChartsModule
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
