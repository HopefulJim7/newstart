"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv = require("dotenv");
dotenv.config();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Newstart API is running");
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("server running on port http://localhost".concat(PORT));
});
