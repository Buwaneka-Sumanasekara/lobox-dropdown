import Dropdown from '@/components/Dropdown';
import React, { useCallback, useState } from 'react'
import data from '@/data/data.json';
import { DropdownValueType } from '@/types/Common';
import { convertStrArrayToDropdownItem, filterBySearchTextInDropdown } from '@/utils/utils';

const Header = () => {

  
    const [items, setItems] = useState<DropdownValueType[]>(convertStrArrayToDropdownItem(data) || []);
    const [selectedValue, setSelectedValue] = useState<DropdownValueType | null>(null);





    return (
        <Dropdown items={items}
            onPressItem={(item) => {
                setSelectedValue(item);
            }}
            selectedValue={selectedValue}
            onSubmit={(item) => setItems([...items, item])}
        />
    )

}
export default Header;