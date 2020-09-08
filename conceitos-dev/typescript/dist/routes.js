"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
function helloWorld(request, response) {
    return response.json({ message: "Hi there, my name is Nilton" });
}
exports.helloWorld = helloWorld;
