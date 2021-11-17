import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../dist";
var App = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "UI - Library"),
        React.createElement(Button, { onClick: function () { return alert(2); }, primary: true }, "Button"),
        React.createElement("div", null,
            React.createElement(Button, { onClick: function () { return alert(2); }, backgroundColor: "red", rounded: true, primary: true }, "Button")),
        React.createElement("div", null,
            React.createElement(Button, { onClick: function () { return alert(2); }, disable: true, backgroundColor: "red", primary: true }, "Button")),
        React.createElement("div", null,
            React.createElement(Button, { onClick: function () { return alert(2); }, rounded: true, disable: true, primary: true }, "Button")),
        React.createElement("div", null,
            React.createElement(Button, { onClick: function () { return alert(2); }, backgroundColor: "red", ghost: true, styles: { color: "#000" }, primary: true }, "Button")),
        React.createElement("div", null,
            React.createElement(Button, { onClick: function () { return alert(2); }, rounded: true, ghost: true, styles: { color: "#000" }, primary: true }, "Button"))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
