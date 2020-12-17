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
const express_1 = require("express");
const ListService_1 = require("../services/ListService");
const errorCodes_1 = require("../errorCodes");
const router = express_1.Router();
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ListService_1.ListService.getListById(req.params.id).catch(err => {
            if (err.message === errorCodes_1.listMissing) {
                res.sendStatus(400);
            }
            console.log('db error', err);
            return res.sendStatus(500);
        });
        return res.send(result);
    }
    catch (err) {
        res.sendStatus(500);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = yield ListService_1.ListService.create().catch(err => {
            console.log('db error', err);
            return res.sendStatus(500);
        });
        return res.send(id);
    }
    catch (err) {
        res.sendStatus(500);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ListService_1.ListService.reset(req.params.id).catch(err => {
            console.log('db error', err);
            return res.sendStatus(500);
        });
        return res.sendStatus(200);
    }
    catch (err) {
        res.sendStatus(500);
    }
}));
exports.default = router;
