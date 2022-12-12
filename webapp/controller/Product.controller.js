sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    
    return Controller.extend("stock.application.controller.Product", {
        onInit: function() {
           this.getOwnerComponent()
               .getRouter()
               .getRoute("productItem")
               .attachPatternMatched(this._patternMatched, this);
        },
        _patternMatched: function(event) {
            let modelPath = event.getParameters().arguments.product;
            
            do {
                modelPath = window.decodeURIComponent(modelPath);
            } while (modelPath.includes("%"));

            this.getView().bindElement({
                model: "products",
                path: modelPath
            });

            const model = this.getView().getBindingContext("products");
            const i18nBundle = this.getOwnerComponent()
                                   .getModel("i18n")
                                   .getResourceBundle();

            this.getView().byId("total-salary").setProperty("text", 
            i18nBundle.getText("totalSalaryElement") + ": " + (parseFloat(model.getProperty("Price")) * parseFloat(model.getProperty("Sold"))).toFixed(2));
        }
    })
});