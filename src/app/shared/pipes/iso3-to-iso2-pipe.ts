import { Pipe, PipeTransform } from '@angular/core';
import * as countries from 'i18n-iso-countries';

@Pipe({
  name: 'iso3ToIso2',
})
export class Iso3ToIso2Pipe implements PipeTransform {
  transform(iso3: string): string {
    return countries.alpha3ToAlpha2(iso3) || iso3;
  }
}
