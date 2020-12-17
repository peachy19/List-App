"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
class Item extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const item = this.props.item;
        return (jsx_runtime_1.jsx("li", { children: jsx_runtime_1.jsxs("div", Object.assign({ className: "alert alert-dark fade show" }, { children: [jsx_runtime_1.jsx("button", Object.assign({ className: "close", onClick: () => this.props.onDeleteClicked(item.id) }, { children: "\u00D7" }), void 0),
                    jsx_runtime_1.jsx("span", { children: item.name }, void 0)] }), void 0) }, item.id));
    }
}
exports.default = Item;
