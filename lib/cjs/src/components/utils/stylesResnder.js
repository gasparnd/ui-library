"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylesRender = void 0;
var stylesRender = function (stylesObject) {
    var properties = Object.keys(stylesObject);
    return properties.map(function (key) { return key + ": " + stylesObject[key]; }).join(";");
};
exports.stylesRender = stylesRender;
