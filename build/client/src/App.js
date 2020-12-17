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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Form_1 = __importDefault(require("./components/Form"));
const ListItems_1 = __importDefault(require("./components/ListItems"));
const api_1 = require("./services/api");
class List extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.getListId = () => {
            const url = window.location.href;
            const urlArr = url.split('/');
            const id = urlArr[urlArr.length - 1];
            return id;
        };
        this.onAddItem = (name, e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const id = yield api_1.addItem(name, this.getListId());
            const newItem = { id, name };
            this.setState({
                items: [...this.state.items, newItem]
            });
        });
        this.onReset = () => __awaiter(this, void 0, void 0, function* () {
            const listId = this.getListId();
            yield api_1.resetList(listId);
            this.setState({
                items: []
            });
        });
        this.onDeleteClicked = (id) => __awaiter(this, void 0, void 0, function* () {
            const list = this.state.items.filter((item) => item.id !== id);
            this.setState({ items: list });
            api_1.deleteItem(id);
        });
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        api_1.getData(this.getListId()).then(res => {
            this.setState({
                items: res.data
            });
        }).catch((err) => __awaiter(this, void 0, void 0, function* () {
            if (err.response.status === 400) {
                const id = yield api_1.createList();
                console.log(window.location);
                window.location.href = `${window.location.origin}/${id}`;
                alert('New list has been created!');
            }
        }));
    }
    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(prevState.items) !== JSON.stringify(this.state.items)) {
            api_1.getData(this.getListId()).then(res => {
                this.setState({
                    items: res.data
                });
            });
        }
    }
    render() {
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "App" }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: "container" }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: "row" }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: "col-12 mt-4" }, { children: [jsx_runtime_1.jsx(Form_1.default, { onAddItem: this.onAddItem, onResetClicked: this.onReset }, void 0),
                            jsx_runtime_1.jsx(ListItems_1.default, { items: this.state.items, onDeleteClicked: this.onDeleteClicked }, void 0)] }), void 0) }), void 0) }), void 0) }), void 0));
    }
}
exports.default = List;
