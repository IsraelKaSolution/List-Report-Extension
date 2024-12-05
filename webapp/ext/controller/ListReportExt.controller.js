sap.ui.define([
    "sap/m/MessageBox"
], function(MessageBox) {
    'use strict';

    return {
        openMessage: function(oEvent) {
            MessageBox.success("Custom handler invoked.");
        }
    };
});