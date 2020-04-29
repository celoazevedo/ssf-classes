"use strict";
exports.__esModule = true;
var planet = /** @class */ (function () {
    function planet(width, color) {
        this.width = width;
        this.color = color;
    }
    return planet;
}());
exports.planet = planet;
exports.krypton = new planet(33000, "red");
exports.omicronPersei8 = new planet(86000, "blue");
exports.nemesis = new planet(70000, "green");
