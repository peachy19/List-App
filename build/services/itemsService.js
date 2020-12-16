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
exports.ItemsService = void 0;
const dbConnector_1 = __importDefault(require("../dbConnector"));
class ItemsService {
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield dbConnector_1.default.connect();
                const { rows } = yield client.query('SELECT * from itemsList');
                client.release();
                return rows;
            }
            catch (err) {
                return err;
            }
        });
    }
    static create(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield dbConnector_1.default.connect();
                yield client.query('INSERT into itemsList(name) values ($1)', [name]);
                client.release();
            }
            catch (err) {
                return err;
            }
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield dbConnector_1.default.connect();
                yield client.query('DELETE from itemsList WHERE id = $1', [id]);
                client.release();
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.ItemsService = ItemsService;
