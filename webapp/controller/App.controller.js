
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap.training.exc.controller.App", {
        
        onInit: function () {
            this.getView().addStyleClass(
                this.getOwnerComponent().getContentDensityClass()
            );
        }

        
    });
});
/*
old code implementation :
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";
    console.log("App.controller.js loaded");
    return Controller.extend("sap.training.exc.controller.App", {
        onSayHello: function () {
            MessageBox.information("Hello World 2");
        }
    });
});
*/