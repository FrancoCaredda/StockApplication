sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/util/UriParameters"
], function(MockServer, UriParameters) {
    'use strict';
   
    return {
        init: function() {
            const mockserver = new MockServer({
                rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
            });

            const uri = new UriParameters(window.location.href);

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: uri.get("delay") || 500
            });

            const path = sap.ui.require.toUrl("stock/application/localService");
            mockserver.simulate(path + "/metadata.xml", path + "/mockdata");

            mockserver.start();
        }
    };
});