sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
], function(Controller, JSONModel, History) {
    'use strict';
    
    return Controller.extend("stock.application.controller.Index", {
        onInit: function() {
            this.getView().setModel(new JSONModel({
                displayBackButton: true
            }), "view");

            this.getOwnerComponent()
                .getRouter()
                .getRoute("intro")
                .attachPatternMatched(this._introPatternMatched, this);
        },
        _introPatternMatched: function() {
            this.getView().getModel("view").setProperty("/displayBackButton", false);
        },
        _navTo: function(name) {
            this.getOwnerComponent()
                .getRouter()
                .navTo(name);
        },
        navToProducts: function() {
            this.getView().getModel("view").setProperty("/displayBackButton", true);
            this._navTo("products");
        },
        navToIntro: function() {
            const history = History.getInstance();

            if (!history.getPreviousHash()) {
                this._navTo("intro");
            } else {
                window.history.go(-1);
            }
        },
        navToStatistics: function() {
            this.getView().getModel("view").setProperty("/displayBackButton", true);
            this._navTo("statistics");
        }
    })
});