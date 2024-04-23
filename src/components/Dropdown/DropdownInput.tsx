import React from "react";
import styles from "./dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

type DropdownInputrops = {
  value?: string,
  onChageText: (value: string) => void,
  isVisibleSuggestions: boolean
  setVisibleSuggestions?: (value: boolean) => void
  onSubmit:()=>void
}

const DropdownInput = (props: DropdownInputrops) => {
  const { value, onChageText, isVisibleSuggestions,onSubmit,setVisibleSuggestions } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      onSubmit();
    }
  }
  return (
    <div className={styles.dropdown_input}>
      <input value={value} onFocus={()=>setVisibleSuggestions?.(true)} onChange={(e) => onChageText(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)} />
      <div className={styles.right_icon}>{isVisibleSuggestions ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</div>
    </div>

  )
}
export default DropdownInput;