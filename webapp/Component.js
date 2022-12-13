sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(UIComponent, Filter, FilterOperator) {
    'use strict';
    
    return UIComponent.extend("stock.application.Component", {
        metadata: {
            manifest: "json",
            async: true
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            const router = this.getRouter();
            router.initialize();
        },
        filter: function(binding, filterOperator, property, value) {
            let filter = null;

            if (value && value.length > 0) {
                filter = new Filter(property, filterOperator, value);
            }

            binding.filter(filter);
        }
    });
});