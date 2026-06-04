sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";
    console.log("App.controller.js loaded");
    return Controller.extend("my.second.component.controller.App", {
        onSayHello: function () {
            MessageBox.information("Hello World 2");
        }
    });
});