"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  height: ", ";\n  width: ", ";\n  overflow: hidden;\n"], ["\n  position: relative;\n  height: ", ";\n  width: ", ";\n  overflow: hidden;\n"])), function (props) { return (props.height ? props.height : '100vh'); }, function (props) { return (props.width ? props.width : '100vw'); });
var templateObject_1;
