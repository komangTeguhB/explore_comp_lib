var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export var Dropdown = function (_a) {
    var options = _a.options, containerClasses = _a.containerClasses, buttonClasses = _a.buttonClasses, menuClasses = _a.menuClasses, onSelect = _a.onSelect;
    var _b = useState(null), selectedOption = _b[0], setSelectedOption = _b[1];
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var handleOptionClick = function (option) {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };
    var toggleDropdown = function () { return setIsOpen(!isOpen); };
    return (_jsxs("div", __assign({ className: containerClasses }, { children: [_jsx("button", __assign({ onClick: toggleDropdown, className: "rounded relative ".concat(buttonClasses) }, { children: selectedOption || "Select an option" })), isOpen && (_jsx("div", __assign({ className: "absolute ".concat(menuClasses) }, { children: options.map(function (option) { return (_jsx("div", __assign({ onClick: function () { return handleOptionClick(option); } }, { children: option }), option)); }) })))] })));
};
