"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var dist_1 = require("../dist");
var App = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "UI - Library"),
        react_1.default.createElement(dist_1.Button, { onClick: function () { return alert(2); }, primary: true }, "Button"),
        react_1.default.createElement("div", null,
            react_1.default.createElement(dist_1.Button, { onClick: function () { return alert(2); }, backgroundColor: "red", rounded: true, primary: true }, "Button")),
        react_1.default.createElement("div", null,
            react_1.default.createElement(dist_1.Button, { onClick: function () { return alert(2); }, disable: true, backgroundColor: "red", primary: true }, "Button")),
        react_1.default.createElement("div", null,
            react_1.default.createElement(dist_1.Button, { onClick: function () { return alert(2); }, rounded: true, disable: true, primary: true }, "Button")),
        react_1.default.createElement("div", null,
            react_1.default.createElement(dist_1.Button, { onClick: function () { return alert(2); }, backgroundColor: "red", ghost: true, styles: { color: "#000" }, primary: true }, "Button")),
        react_1.default.createElement("div", null,
            react_1.default.createElement(dist_1.Button, { onClick: function () { return alert(2); }, rounded: true, ghost: true, styles: { color: "#000" }, primary: true }, "Button"))));
};
react_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById("root"));
