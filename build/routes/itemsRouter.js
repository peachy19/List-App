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
const ItemsService_1 = require("../services/ItemsService");
const router = express_1.Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, listId } = req.body;
        if (!name || !listId) {
            console.log('Either name or listId is not provided');
            return res.sendStatus(400);
        }
        yield ItemsService_1.ItemsService.create(name, listId).catch(err => {
            console.log('db error', err);
            return res.sendStatus(500);
        });
        return res.sendStatus(201);
    }
    catch (err) {
        res.sendStatus(500);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield ItemsService_1.ItemsService.delete(+id).catch(err => {
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
