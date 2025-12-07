import { Routes } from '@angular/router';
import { DailyServiceRecord } from './daily-service-record/daily-service-record';
import { RabiesCase } from './rabies-case/rabies-case';
import { WaterAnalysis } from './water-analysis/water-analysis';

export const routes: Routes = [
  { path: '', redirectTo: 'daily-service', pathMatch: 'full' },
  { path: 'daily-service', component: DailyServiceRecord },
  { path: 'rabies-case', component: RabiesCase },
  { path: 'water-analysis', component: WaterAnalysis }
];