"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dbConnector_1 = __importDefault(require("./dbConnector"));
const itemsRoutes_1 = __importDefault(require("./routes/itemsRoutes"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.dbSetup();
        this.routerSetup();
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    dbSetup() {
        dbConnector_1.default.connect(function (err, client, done) {
            if (err)
                throw err;
            console.log('db setup done');
        });
    }
    routerSetup() {
        this.app.use('/items', itemsRoutes_1.default);
    }
}
exports.default = new App().app;
