sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    
    return Controller.extend("stock.application.controller.Statistics", {
        selectTypeChanged: function(event) {
            this._calculateDataFor(event.getSource().getSelectedItem().getBindingContext("products").getProperty("TypeName"));
        },
        _calculateDataFor: function(type) {

        }
    });
});