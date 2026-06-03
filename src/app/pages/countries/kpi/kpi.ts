import { Component } from '@angular/core';
import { KPI } from '../../../services/kpi.json';

@Component({
  selector: 'app-kpi',
  imports: [],
  templateUrl: './kpi.html',
  styleUrl: './kpi.css',
})
export class Kpi {
  kpiData = KPI;
}
