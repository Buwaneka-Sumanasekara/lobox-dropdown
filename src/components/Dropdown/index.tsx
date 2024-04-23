import React, { useState, useEffect, useCallback } from 'react';
import DropdownContainer from './DropdownContainer';
import DropdownInput from './DropdownInput';
import DropdownItemsContainer from './DropdownItemsContainer';

import { DropdownValueType } from '@/types/Common';
import { convertStrToDropdownItem, convertToSearchableText } from '@/utils/utils';

type DropdownProps = {
    selectedValue: DropdownValueType | null,
    onPressItem: (item: DropdownValueType | null) => void,
    items: DropdownValueType[],
    onSubmit: (item: DropdownValueType) => void
}

const Dropdown = (props: DropdownProps) => {
    const { selectedValue, onPressItem, items, onSubmit } = props;
    const [isVisibleSuggestions, setIsVisibleSuggestions] = useState<boolean>(true);
    const [searchText, setSearchText] = useState<string>(convertToSearchableText(selectedValue?.value || ""));




    useEffect(() => {
        if (selectedValue) {
            setSearchText(selectedValue?.value || "");
        }
    }, [selectedValue])


 

    const onChangeSuggestionVisibility = useCallback((value: boolean) => {
        setIsVisibleSuggestions(value);
    }, [setIsVisibleSuggestions])


    const onSubmitText = () => {
        const item = convertStrToDropdownItem(searchText);
        onSubmit(item);
        onPressItem(item);
    }

    return (
        <DropdownContainer  onClickOutside={() => onChangeSuggestionVisibility(false)}>
            <DropdownInput isVisibleSuggestions={isVisibleSuggestions} setVisibleSuggestions={onChangeSuggestionVisibility} onSubmit={onSubmitText} value={searchText} onChageText={(text) => setSearchText(text)} />
            {isVisibleSuggestions ? <DropdownItemsContainer items={items} selectedItem={selectedValue} onPressItem={onPressItem} /> : null}
        </DropdownContainer>
    )
}

export default Dropdown;