import cf from 'currency-formatter';

export const formatPrice = (value) => cf.format(value, { code: 'BRL' });
