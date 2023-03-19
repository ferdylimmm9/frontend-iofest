import numeral from 'numeral';

export function string2money(
  value: string | number,
  presicion?: number,
): string {
  const fixed = '0'.repeat(presicion !== undefined ? presicion : 2);
  return numeral(`${value}`).format(`0,0.${fixed}`);
}

export function string2moneyDefault(value: string | number): string {
  const countDecimal = String(value).split('.')[1]?.length || 0;
  const fixed = '0'.repeat(countDecimal);
  return numeral(`${value}`).format(`0,0.${fixed}`);
}

export function string2number(value: string | number): string {
  return numeral(`${value}`).format('0,0');
}

export function money2number(value: string): number {
  return numeral(value).value() || 0;
}

export function replaceAll(str: string, find: string, replace: string) {
  return str.replace(new RegExp(find, 'g'), replace);
}

export function capitalize(value: string): string {
  const words = value.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
}
