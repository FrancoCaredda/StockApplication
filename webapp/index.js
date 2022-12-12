sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    'use strict';
    
    new ComponentContainer({
        name: "stock.application",
        settings: {
            id: "app"
        },
        async: false
    }).placeAt("root");
});