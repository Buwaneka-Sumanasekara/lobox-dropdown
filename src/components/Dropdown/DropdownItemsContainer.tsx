import React, { useEffect, useRef } from "react";
import { DropdownValueType } from "@/types/Common";
import styles from "./dropdown.module.scss";
type DropdownItemsContainerProps = {
    items: DropdownValueType[],
    selectedItem: DropdownValueType | null,
    onPressItem: (item: DropdownValueType) => void
}

const DropdownItemsContainer = (props: DropdownItemsContainerProps) => {
    const { items, selectedItem, onPressItem } = props;
    const sugViewRef=useRef<HTMLUListElement>(null);

    useEffect(() => {
        if(sugViewRef.current){
            sugViewRef.current?.lastElementChild?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
    }
    ,[items])

    return (
        <div className={styles.dropdown_suggestions} >
        <ul ref={sugViewRef}>
            {items.map((item, index) => {
                const isSelected = (selectedItem?.key === item.key);
                return (
                    <li key={item.key} className={isSelected ? styles.selected_item : ""} onClick={() => onPressItem(item)}>
                        <div >
                            {item.value}
                        </div>
                        <div >
                            {isSelected ? "✓" : ""}
                        </div>

                    </li>
                )
            })}
            {items.length===0 && <li key={"no_items"} >- No items found -</li>}
        </ul>
        </div>
    )
}
export default DropdownItemsContainer;