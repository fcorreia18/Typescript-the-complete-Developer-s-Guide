"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rigthIndex) {
        return this.data[leftIndex].toLocaleLowerCase() > this.data[rigthIndex].toLocaleLowerCase();
    };
    /**
     * sort
   */
    CharactersCollection.prototype.swap = function (leftIndex, rigthIndex) {
        var characters = this.data.split(''); //Vai repartir a string num array 
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rigthIndex];
        characters[rigthIndex] = leftHand;
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
