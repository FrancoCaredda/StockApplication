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
        _filter: function(binding, filterOperator, property, value) {
            let filter = null;

            if (value && value.length > 0) {
                filter = new Filter(property, filterOperator, value);
            }

            binding.filter(filter, "Products");
        },
        clearFilter: function(event) {
            const binding = this.getView().byId("products-table").getBinding("rows");
            this._filter(binding, FilterOperator.Contains, "Type", undefined);

            this.getView().byId("search-field").clear();
            this.getView().byId("type-select").setValue(null);
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
            const binding = this.getView().byId("products-table").getBinding("rows");
            
            this._filter(binding, FilterOperator.Contains, "Name", event.getSource().getValue())
        },
        typeChanged: function(event) {
            const binding = this.getView().byId("products-table").getBinding("rows");

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