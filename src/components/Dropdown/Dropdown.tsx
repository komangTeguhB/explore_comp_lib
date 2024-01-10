import React, { useState } from "react";
import "./../../../lib/style.css";

export interface DropdownProps {
  options: string[];
  containerClasses: string;
  buttonClasses: string;
  menuClasses: string;

  onSelect: (selectedOption: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, containerClasses, buttonClasses, menuClasses, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={containerClasses}>
      <button onClick={toggleDropdown} className={`rounded relative ${buttonClasses}`}>
        {selectedOption || "Select an option"}
      </button>
      {isOpen && (
        <div className={`absolute ${menuClasses}`}>
          {options.map((option) => (
            <div key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
