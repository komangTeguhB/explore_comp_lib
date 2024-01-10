import React from "react";
export interface DropdownProps {
    options: string[];
    containerClasses: string;
    buttonClasses: string;
    menuClasses: string;
    onSelect: (selectedOption: string) => void;
    defaultCaption?: string;
}
export declare const Dropdown: React.FC<DropdownProps>;
