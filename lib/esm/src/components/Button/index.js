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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import "./button.css";
export var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, backgroundColor = _a.backgroundColor, label = _a.label, onClick = _a.onClick, children = _a.children, disable = _a.disable, rounded = _a.rounded, ghost = _a.ghost, styles = _a.styles, props = __rest(_a, ["primary", "size", "backgroundColor", "label", "onClick", "children", "disable", "rounded", "ghost", "styles"]);
    var mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    var componentStyles = {
        backgroundColor: !disable
            ? !ghost
                ? backgroundColor
                : "transparent"
            : null,
        border: ghost ? "2px solid " + backgroundColor : null,
        borderRadius: !rounded && "7px",
    };
    var allS = __assign(__assign({}, styles), componentStyles);
    return (React.createElement(React.Fragment, null, !disable ? (React.createElement("button", __assign({ type: "button", onClick: onClick, className: [
            "" + (ghost ? "button-ghost" : "storybook-button"),
            "storybook-button--" + size,
            mode,
        ].join(" "), style: allS }, props), children)) : (React.createElement("button", __assign({ type: "button", onClick: function () { }, className: ["button-disable", "storybook-button--" + size, mode].join(" "), style: allS }, props), children))));
};
