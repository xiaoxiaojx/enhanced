"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (command, args) => {
    console.log(command, args)
    const cp = require("child_process");
    return new Promise((resolve, reject) => {
        const executedCommand = cp.spawn(command, args, {
            stdio: "inherit",
            shell: true
        });
        executedCommand.on("error", error => {
            reject(error);
        });
        executedCommand.on("exit", code => {
            if (code === 0) {
                resolve();
            }
            else {
                reject();
            }
        });
    });
};