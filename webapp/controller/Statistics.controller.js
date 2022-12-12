sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    'use strict';
    
    return Controller.extend("stock.application.controller.Statistics", {
        onInit: function() {
            this.getView()
                .setModel(new JSONModel({
                    currency: "EUR",
                    criticalValue: 15
                }), "view");
        }
    });
});