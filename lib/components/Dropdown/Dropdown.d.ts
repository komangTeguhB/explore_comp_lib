import React from "react";
export interface DropdownProps {
    options: string[];
    containerClasses: string;
    buttonClasses: string;
    menuClasses: string;
    defaultCaption?: string;
    onSelect: (selectedOption: string) => void;
}
export declare const Dropdown: React.FC<DropdownProps>;
