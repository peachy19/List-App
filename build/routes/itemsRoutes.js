"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemsService_1 = require("../services/itemsService");
const router = express_1.Router();
router.get('/items', (req, res) => {
    const result = itemsService_1.ItemsService.get();
    console.log('result', result);
    return res.send(200).json(result);
});
router.post('/items', (req, res) => {
    const result = itemsService_1.ItemsService.create(req.body.name);
    return res.send(200).json(result);
});
router.delete('items/:id', (req, res) => {
    const result = itemsService_1.ItemsService.delete(+req.params.id);
    return res.send(200).json(result);
});
exports.default = router;
