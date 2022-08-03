"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const request = (reqObj) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let req = yield fetch(reqObj.input, reqObj.init);
        (_a = reqObj[`on${req.status}`]) === null || _a === void 0 ? void 0 : _a.call(reqObj, req);
        return req;
    }
    catch (error) {
        return error;
    }
});
exports.request = request;
