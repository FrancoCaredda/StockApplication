sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
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
        }
    });
});