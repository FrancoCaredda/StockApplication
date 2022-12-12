sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    'use strict';
    
    return Controller.extend("stock.application.controller.Statistics", {
        _types: [],
        onInit: function() {
            this.getView().setModel(new JSONModel({
                criticalValue: 15,
                currency: "EUR"
            }), "view");
        },
        constructTable: function(sId, oContext) {
            return this.getView().byId("stat-row").clone(sId);
        }
    });
});