export var stylesRender = function (stylesObject) {
    var properties = Object.keys(stylesObject);
    return properties.map(function (key) { return key + ": " + stylesObject[key]; }).join(";");
};
