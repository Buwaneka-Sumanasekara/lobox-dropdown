import useClickOutsideComponent from "@/hooks/common";
import React, { useRef } from "react";
import styles from "./dropdown.module.scss";

type DropdownProps = {
    children: React.ReactNode;
    refItem?:React.RefObject<HTMLDivElement>,
    onClickOutside:()=>void
}

 const DropdownContainer = (props:DropdownProps) => {
    const {onClickOutside} = props;
    const ref = useRef<HTMLDivElement>(null);

    useClickOutsideComponent(ref, () => onClickOutside());

    return (
        <div className={styles.dropdown} ref={ref}>
            {props.children}
        </div>
    )

}
export default DropdownContainer;
