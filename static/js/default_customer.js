odoo.define('pos_default_customer.default_customer', function (require) {
    "use strict";

    const { PosGlobalState } = require('point_of_sale.models');
    const Registries = require('point_of_sale.Registries');

    const DefaultCustomerPos = (PosGlobalState) => class DefaultCustomerPos extends PosGlobalState {
        async _processData(loadedData) {
            await super._processData(loadedData);

            const default_customer_id = 501;
            const customer = this.db.get_partner_by_id(default_customer_id);

            if (customer) {
                this.default_customer = customer;
            }
        }
    };

    Registries.Model.extend(PosGlobalState, DefaultCustomerPos);
});
