
sap.ui.define( function (Text) { // and add ["sap/m/Text"],
    "use strict";

    return new sap.m.Text({ text: "Hello World" }).placeAt("content"); //or remove sap.m.
});
