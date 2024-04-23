import React, { useState, useEffect, useCallback } from 'react';
import DropdownContainer from './DropdownContainer';
import DropdownInput from './DropdownInput';
import DropdownItemsContainer from './DropdownItemsContainer';
import styles from "./dropdown.module.scss";
import { DropdownValueType } from '@/types/Common';
import { convertStrToDropdownItem, convertToSearchableText } from '@/utils/utils';

type DropdownProps = {
    selectedValue: DropdownValueType | null,
    onPressItem: (item: DropdownValueType | null) => void,
    items: DropdownValueType[],
    onSubmit: (item: DropdownValueType) => void
    onChangeText: (text: string) => void
}

const Dropdown = (props: DropdownProps) => {
    const { selectedValue, onPressItem, items, onSubmit, onChangeText } = props;
    const [isVisibleSuggestions, setIsVisibleSuggestions] = useState<boolean>(true);
    const [searchText, setSearchText] = useState<string>(convertToSearchableText(selectedValue?.value || ""));


    useEffect(() => {
        onChangeText(selectedValue?.value || "");
    }, [selectedValue, onChangeText])

    useEffect(() => {
        if (selectedValue) {
            setSearchText(selectedValue?.value || "");
        }

    }, [selectedValue])


    useEffect(() => {
        onChangeText(searchText);
    }, [searchText, onChangeText])

    const onChangeSuggestionVisibility = useCallback((value: boolean) => {
        setIsVisibleSuggestions(value);
    }, [setIsVisibleSuggestions])


    const onSubmitText = () => {
        const item = convertStrToDropdownItem(searchText);
        onSubmit(item);
        onPressItem(item);
    }

    return (
        <DropdownContainer className={styles.dropdown} onClickOutside={() => onChangeSuggestionVisibility(false)}>
            <DropdownInput isVisibleSuggestions={isVisibleSuggestions} setVisibleSuggestions={onChangeSuggestionVisibility} onSubmit={onSubmitText} value={searchText} onChageText={(text) => setSearchText(text)} />
            {isVisibleSuggestions ? <DropdownItemsContainer items={items} selectedItem={selectedValue} onPressItem={onPressItem} /> : null}
        </DropdownContainer>
    )
}

export default Dropdown;