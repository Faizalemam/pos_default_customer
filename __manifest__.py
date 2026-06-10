{
    'name': 'POS Default Customer',
    'version': '16.0.1.0.0',
    'summary': 'Automatically set default customer in POS (OWL Compatible)',
    'author': 'FAIZAL EMAM',
    'website': 'https://www.itdelhi.in',
    'email': 'info@itdelhi.in',
    'category': 'Point of Sale',
    'depends': ['point_of_sale'],
    'assets': {
        'point_of_sale.assets': [
            'pos_default_customer/static/src/js/default_customer.js',
            'pos_default_customer/static/src/js/set_customer.js',
        ],
    },
    'installable': True,
}

