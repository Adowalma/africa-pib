import { Component, computed, signal } from '@angular/core';
import { paises } from '../../services/country.json';
import { Title } from '../../shared/components/title/title';
import { Pagination } from '../../shared/components/pagination/pagination';
import { Iso3ToIso2Pipe } from '../../shared/pipes/iso3-to-iso2-pipe';
import { CommonModule } from '@angular/common';
import { ListTable } from './list-table/list-table';
import { Kpi } from './kpi/kpi';

@Component({
  selector: 'app-countries',
  imports: [Title, Pagination, Iso3ToIso2Pipe, CommonModule, ListTable, Kpi],
  templateUrl: './countries.html',
  styleUrl: './countries.css',
})
export class Countries {
  countriesData = signal(paises);
  showList = signal(false);

  years = [
    '2000',
    '2006',
    '2009',
    '2010',
    '2014',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2000_2023',
    '2000_2015',
  ];

  selectedYear = signal<string>('2000');

  selectedYearData = computed(() => {
    const year = this.selectedYear();

    const countryList = this.countriesData();

    return countryList.map((country) => {
      const countryData = country as any;
      return {
        country: country.Pais,
        code: country.Codigo_ISO3,
        capital: country.Capital,

        pib: countryData[`PIB_${year}_USD_Bilhoes`] || 'N/A',
        pibHabitant: countryData[`PIB_por_Habitante_${year}_USD`] || 'N/A',
        pibGrow: countryData[`Crescimento_PIB_${year}`] || 'N/A',
      };
    });
  });

  onYearChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedYear.set(selectElement.value);
  }

  page = signal(1);
  pageSize = 6;

  totalPages = computed(() => Math.ceil(this.selectedYearData().length / this.pageSize));

  start: number = 0;
  end: number = 0;

  paginatedData = computed(() => {
    this.start = (this.page() - 1) * this.pageSize;
    this.end = this.start + this.pageSize;

    return this.selectedYearData().slice(this.start, this.end);
  });
}
