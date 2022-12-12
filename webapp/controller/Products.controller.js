sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    
    return Controller.extend("stock.application.controller.Products", {
        _tableExpanded: false,
        onInit: function() {
            this.getOwnerComponent().getModel("products")
        },
        expandTable: function(event) {
            const control = event.getSource();
            const model = this.getView().getModel("view");

            if (!this._tableExpanded) {
                control.setProperty("icon", "sap-icon://navigation-up-arrow");
            } else {
                control.setProperty("icon", "sap-icon://navigation-down-arrow");
            }

            this._tableExpanded = !this._tableExpanded;
        },
        buildLines: function(sId, oContext) {
            if (oContext.getProperty("Quantity") == 0) {
                return this.getView().byId("itemUnavailable").clone(sId);
            }

            return this.getView().byId("simpleItem").clone(sId);
        },
        moveToProduct: function(event) {
            const router = this.getOwnerComponent().getRouter();
            const model = event.getSource().getBindingContext("products");
            console.log(model);

            if (model != undefined) {
                router.navTo("productItem", {
                    product: window.encodeURIComponent(model.getPath())
                })
            }
        }
    })
});