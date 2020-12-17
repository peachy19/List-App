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
exports.ListService = void 0;
const uuid_1 = require("uuid");
const dbConnector_1 = __importDefault(require("../dbConnector"));
const errorCodes_1 = require("../errorCodes");
class ListService {
    static getListById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!uuid_1.validate(id))
                    throw new Error(errorCodes_1.listMissing);
                const client = yield dbConnector_1.default.connect();
                const { rows } = yield client.query('SELECT * from items WHERE list_id = $1', [id]);
                client.release();
                return rows;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = uuid_1.v4();
                const client = yield dbConnector_1.default.connect();
                yield client.query('INSERT into list(id) values ($1)', [id]);
                client.release();
                return id;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static reset(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield dbConnector_1.default.connect();
                yield client.query('DELETE from items WHERE list_id = $1', [id]);
                client.release();
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.ListService = ListService;
