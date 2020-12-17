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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createList = exports.resetList = exports.getData = exports.deleteItem = exports.addItem = exports.apiUrl = void 0;
const axios_1 = __importDefault(require("axios"));
exports.apiUrl = 'http://localhost:3000';
const getData = (id) => {
    return axios_1.default({ method: 'get', url: `${exports.apiUrl}/${id}` });
};
exports.getData = getData;
const addItem = (name, id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default({
        method: 'post',
        url: `${exports.apiUrl}/items`,
        data: {
            name,
            listId: id
        }
    }).catch(e => {
        throw new Error(e);
    });
    return res.data.id;
});
exports.addItem = addItem;
const deleteItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield axios_1.default({
        method: 'delete',
        url: `${exports.apiUrl}/items/${id}`
    }).catch(e => {
        throw new Error(e);
    });
});
exports.deleteItem = deleteItem;
const resetList = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield axios_1.default({
        method: 'delete',
        url: `${exports.apiUrl}/${id}`
    }).catch(e => {
        throw new Error(e);
    });
});
exports.resetList = resetList;
const createList = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default({
        method: 'post',
        url: `${exports.apiUrl}`
    }).catch(e => {
        throw new Error(e);
    });
    return res.data;
});
exports.createList = createList;
