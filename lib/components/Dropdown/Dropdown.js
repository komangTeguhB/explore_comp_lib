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
    var options = _a.options, containerClasses = _a.containerClasses, buttonClasses = _a.buttonClasses, menuClasses = _a.menuClasses, _b = _a.defaultCaption, defaultCaption = _b === void 0 ? "Select an option" : _b, onSelect = _a.onSelect;
    var _c = useState(null), selectedOption = _c[0], setSelectedOption = _c[1];
    var _d = useState(false), isOpen = _d[0], setIsOpen = _d[1];
    var handleOptionClick = function (option) {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };
    var toggleDropdown = function () { return setIsOpen(!isOpen); };
    return (_jsxs("div", __assign({ className: "relative ".concat(containerClasses) }, { children: [_jsx("button", __assign({ onClick: toggleDropdown, className: "rounded absolute ".concat(buttonClasses) }, { children: selectedOption || defaultCaption })), isOpen && (_jsx("div", __assign({ className: "absolute top-10 ".concat(menuClasses) }, { children: options.map(function (option) { return (_jsx("div", __assign({ className: "cursor-pointer", onClick: function () { return handleOptionClick(option); } }, { children: option }), option)); }) })))] })));
};
