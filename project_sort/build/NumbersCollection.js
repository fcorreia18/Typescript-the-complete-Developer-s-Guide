"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * compare
     */
    NumbersCollection.prototype.compare = function (leftIndex, rigthIndex) {
        return this.data[leftIndex] > this.data[rigthIndex];
    };
    /**
     * swap
     */
    NumbersCollection.prototype.swap = function (leftIndex, rigthIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rigthIndex];
        this.data[rigthIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
