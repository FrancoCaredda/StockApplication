sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
    'use strict';
    
    return Controller.extend("stock.application.controller.Statistics", {
        onInit: function() {
            this.getView()
                .setModel(new JSONModel({
                    currency: "EUR",
                    criticalValue: 15
                }), "view");
        },
        searchType: function(event) {
            const searchValue = event.getSource().getValue();
            const binding =  this.getView()
                                 .byId("stat-table")
                                 .getBinding("rows");

            this.getOwnerComponent().filter(binding, FilterOperator.Contains, "TypeName", searchValue)
        },
        clearFilter: function(event) {
            const binding =  this.getView()
                                 .byId("stat-table")
                                 .getBinding("rows");


            this.getView().byId("search-field").clear();
            this.getOwnerComponent().filter(binding, FilterOperator.Contains, "TypeName", undefined)
        }
    });
});