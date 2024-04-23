import Dropdown from '@/components/Dropdown';
import React, { useCallback, useState } from 'react'
import data from '@/data/data.json';
import { DropdownValueType } from '@/types/Common';
import { convertStrArrayToDropdownItem, filterBySearchTextInDropdown } from '@/utils/utils';

const Header = () => {

    const [searchText, setSearchText] = useState<string>("");
    const [items, setItems] = useState<DropdownValueType[]>(convertStrArrayToDropdownItem(data) || []);
    const [selectedValue, setSelectedValue] = useState<DropdownValueType | null>(null);



    const getFilterItems = useCallback((text: string) => {
        return filterBySearchTextInDropdown(text, items);
    }, [items]);

    const filteredItems = getFilterItems(searchText);

    return (
        <Dropdown items={filteredItems}
            onPressItem={(item) => {
                setSelectedValue(item);
            }}
            selectedValue={selectedValue}
            onSubmit={(item) => setItems([...items, item])}
            onChangeText={(text) => setSearchText(text)}
        />
    )

}
export default Header;