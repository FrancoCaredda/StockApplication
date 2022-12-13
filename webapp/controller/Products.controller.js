sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
], function(Controller, Filter, FilterOperator, JSONModel) {
    'use strict';
    
    return Controller.extend("stock.application.controller.Products", {
        _tableExpanded: false,
        _searchCutList: [
            "Total",
            "All"
        ],
        _filter: function(binding, filterOperator, property, value) {
            let filter = null;

            if (value && value.length > 0) {
                filter = new Filter(property, filterOperator, value);
            }

            binding.filter(filter, "Products");
        },
        onInit: function() {
            
        },
        onAfterRendering: function() {
            // const binding = this.getView().byId("products-table").getBinding("items");

            // this._filter(binding, FilterOperator.EQ, "Type", "Console");
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
            const model  = event.getSource().getBindingContext("products");
            console.log(model);

            if (model != undefined) {
                router.navTo("productItem", {
                    product: window.encodeURIComponent(model.getPath())
                })
            }
        },
        searchFieldChanged: function(event) {
            const binding = this.getView().byId("products-table").getBinding("items");
            
            this._filter(binding, FilterOperator.Contains, "Name", event.getSource().getValue())
        },
        typeChanged: function(event) {
            const binding = this.getView().byId("products-table").getBinding("items");

            this._filter(binding, FilterOperator.EQ, "Type", event.getSource().getSelectedItem().getText())
        },
        generateSearchList: function(id, context) {
            const element = this.getView().byId("search-list-item-type");

            if (!this._searchCutList.includes(context.getProperty("TypeName"))) {
                return element.clone(id);
            }

            return undefined;
        }
    })
});