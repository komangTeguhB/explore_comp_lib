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
import { jsx as _jsx } from "react/jsx-runtime";
export var Button = function (_a) {
    var text = _a.text, customClasses = _a.customClasses, _b = _a.type, type = _b === void 0 ? "primary" : _b, onClick = _a.onClick;
    var buttonClasses = type === "primary"
        ? "bg-primary-6 hover:bg-primary-5 text-white"
        : "bg-grayscale-8 hover:bg-grayscale-7 text-black";
    return (_jsx("button", __assign({ className: "rounded ".concat(buttonClasses, " ").concat(customClasses), onClick: onClick }, { children: text })));
};
