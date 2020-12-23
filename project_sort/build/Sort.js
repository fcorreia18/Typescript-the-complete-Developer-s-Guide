"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
var Sort = /** @class */ (function () {
    function Sort(collection) {
        this.collection = collection;
    }
    Sort.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sort;
}());
exports.Sort = Sort;
