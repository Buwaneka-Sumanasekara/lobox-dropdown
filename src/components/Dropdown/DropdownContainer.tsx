import useClickOutsideComponent from "@/hooks/common";
import React, { useRef, useState } from "react";

type DropdownProps = {
    children: React.ReactNode;
    refItem?:React.RefObject<HTMLDivElement>,
    onClickOutside:()=>void
    className:string
}

 const DropdownContainer = (props:DropdownProps) => {
    const {onClickOutside,className} = props;
    const ref = useRef<HTMLDivElement>(null);

    useClickOutsideComponent(ref, () => onClickOutside());

    return (
        <div className={className} ref={ref}>
            {props.children}
        </div>
    )

}
export default DropdownContainer;
