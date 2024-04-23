import { DropdownValueType } from "@/types/Common";


export function convertToSearchableText(text: string): string {
  return text.trim().toLowerCase();
}


/* ====================Drop down items ======================================= */
export function convertStrArrayToDropdownItem(items: string[]): DropdownValueType[] {
  return items.map((item) => convertStrToDropdownItem(item));
}
export function convertStrToDropdownItem(item: string): DropdownValueType {
  return ({
    key: convertToSearchableText(item),
    value: item,
  });
}

export function filterBySearchTextInDropdown(searchText: string, items: DropdownValueType[]): DropdownValueType[] {
  return items.filter((item) => item.key.includes(convertToSearchableText(searchText)));
}