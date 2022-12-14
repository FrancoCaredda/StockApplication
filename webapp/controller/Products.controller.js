sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
], function(Controller, Filter, FilterOperator, JSONModel) {
    'use strict';
    
    return Controller.extend("stock.application.controller.Products", {
        _searchCutList: [
            "Total",
            "All"
        ],
        clearFilter: function(event) {
            const binding = this.getView().byId("products-table").getBinding("rows");
            this.getOwnerComponent().filter(binding, FilterOperator.Contains, "Type", undefined);

            this.getView().byId("search-field").clear();
            this.getView().byId("type-select").setValue(null);
        },
        moveToProduct: function(event) {
            const router = this.getOwnerComponent().getRouter();
            const model  = event.getSource().getParent().getBindingContext("products");
            console.log(model);

            if (model != undefined) {
                router.navTo("productItem", {
                    product: window.encodeURIComponent(model.getPath())
                })
            }
        },
        searchFieldChanged: function(event) {
            const binding = this.getView().byId("products-table").getBinding("rows");
            this.getOwnerComponent().filter(binding, FilterOperator.Contains, "Name", event.getSource().getValue())
        },
        typeChanged: function(event) {
            const binding = this.getView().byId("products-table").getBinding("rows");
            this.getOwnerComponent().filter(binding, FilterOperator.EQ, "Type", event.getSource().getSelectedItem().getText())
        },
        generateSearchList: function(id, context) {
            const element = this.getView().byId("search-list-item-type");

            if (!this._searchCutList.includes(context.getProperty("TypeName"))) {
                return element.clone(id);
            }

            return undefined;
        },
        insertButtonPressed: function(event) {
            alert("You added a new record!");
        },
        deleteButtonPressed: function(event) {
            confirm("Do you want to delete this record?");
        },
        updateButtonPressed: function(event) {
            alert("You updated this record!");
        }
    })
});