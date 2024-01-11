import React, { useState } from "react";

export interface DropdownProps {
  options: string[];
  containerClasses: string;
  buttonClasses: string;
  menuClasses: string;

  onSelect: (selectedOption: string) => void;
  defaultCaption?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, containerClasses, buttonClasses, menuClasses, onSelect, defaultCaption = "Select an option" }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={`relative ${containerClasses}`}>
      <button onClick={toggleDropdown} className={`bg-grayscale-9 rounded absolute ${buttonClasses}`}>
        {selectedOption || defaultCaption}
      </button>
      {isOpen && (
        <div className={`absolute top-10 ${menuClasses}`}>
          {options.map((option) => (
            <div className="cursor-pointer" key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
