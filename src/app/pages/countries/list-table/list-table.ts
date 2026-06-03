import { Component, input } from '@angular/core';
import { Iso3ToIso2Pipe } from '../../../shared/pipes/iso3-to-iso2-pipe';

@Component({
  selector: 'app-list-table',
  imports: [Iso3ToIso2Pipe],
  templateUrl: './list-table.html',
  styleUrl: './list-table.css',
})
export class ListTable {
  listTable = input<
    {
      country: string;
      code: string;
      capital: string;
      pib: any;
      pibHabitant: any;
      pibGrow: any;
    }[]
  >([]);
}
