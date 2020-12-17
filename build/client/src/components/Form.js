"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
class Form extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    onAddClicked(e) {
        this.props.onAddItem(this.state.name, e);
        this.setState({ name: '' });
    }
    ;
    onResetClicked() {
        this.props.onResetClicked();
    }
    onValueChange(e) {
        this.setState({ name: e.target.value });
    }
    ;
    render() {
        return (jsx_runtime_1.jsx("div", Object.assign({ className: "container" }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: "row" }, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "col-6" }, { children: jsx_runtime_1.jsx("input", { type: "text", value: this.state.name, className: "form-control", placeholder: 'Add item', onChange: (e) => this.onValueChange(e) }, void 0) }), void 0),
                    jsx_runtime_1.jsx("div", Object.assign({ className: "col" }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: "btn btn-primary form-control", onClick: (e) => this.onAddClicked(e) }, { children: "Add" }), void 0) }), void 0),
                    jsx_runtime_1.jsx("div", Object.assign({ className: "col" }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: "btn btn-primary form-control", onClick: () => this.onResetClicked() }, { children: "Reset" }), void 0) }), void 0)] }), void 0) }), void 0));
    }
}
exports.default = Form;
