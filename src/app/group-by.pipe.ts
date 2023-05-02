import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {
  transform(value: any, key: string): Map<string, any[]> {
    const map = new Map<string, any[]>();

    if (!Array.isArray(value)) {
      return map;
    }

    value.forEach((item: any) => {
      const keyValue = item[key];
      if (!map.has(keyValue)) {
        map.set(keyValue, []);
      }
      map.get(keyValue)?.push(item);
    });

    return map;
  }
}
