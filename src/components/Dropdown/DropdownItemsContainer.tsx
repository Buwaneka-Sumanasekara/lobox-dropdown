import React from "react";
import { DropdownValueType } from "@/types/Common";
import styles from "./dropdown.module.scss";
type DropdownItemsContainerProps = {
    items: DropdownValueType[],
    selectedItem: DropdownValueType | null,
    onPressItem: (item: DropdownValueType) => void
}

const DropdownItemsContainer = (props: DropdownItemsContainerProps) => {
    const { items, selectedItem, onPressItem } = props;
    return (
        <ul>
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
    )
}
export default DropdownItemsContainer;