odoo.define('pos_default_customer.set_customer', function (require) {
    "use strict";

    const { onMounted } = owl;
    const ProductScreen = require('point_of_sale.ProductScreen');
    const Registries = require('point_of_sale.Registries');

    const DefaultCustomerProductScreen = (ProductScreen) => class extends ProductScreen {
        setup() {
            super.setup();
            onMounted(() => {
                const default_customer = this.env.pos.default_customer;
                if (default_customer) {
                    this.currentOrder.set_partner(default_customer);
                }
            });
        }
    };

    Registries.Component.extend(ProductScreen, DefaultCustomerProductScreen);
});

