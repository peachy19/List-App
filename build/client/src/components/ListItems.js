"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Item_1 = __importDefault(require("./Item"));
class ListItems extends react_1.Component {
    render() {
        let items = this.props.items.map((item) => jsx_runtime_1.jsx(Item_1.default, { item: item, onDeleteClicked: (id) => this.props.onDeleteClicked(id) }, void 0));
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "container mt-3" }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: "row" }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: "col-12" }, { children: jsx_runtime_1.jsx("ul", Object.assign({ className: "list-unstyled" }, { children: items }), void 0) }), void 0) }), void 0) }), void 0));
    }
}
exports.default = ListItems;
