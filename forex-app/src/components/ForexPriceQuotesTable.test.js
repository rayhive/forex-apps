import React from 'react';
import { shallow } from 'enzyme';

import ForexPriceQuotesTable from './ForexPriceQuotesTable';

describe('<ForexPriceQuotesTable/>', () => {
    test('should render correctly', () => {
        const mockCurrencyExchanges = [
            {
                id: '1',
                name: 'Currency Exchange 1',
                location: 'Misison St, San Francisco, CA',
                forexPriceQuote: { baseCurrency: 'USD', quoteCurrency: 'AUD', bidPrice: 0, askPrice: 1.3901 }
            },
            {
                id: '2',
                name: 'Currency Exchange 2',
                location: 'Market St, Francisco, CA',
                forexPriceQuote: { baseCurrency: 'USD', quoteCurrency: 'AUD', bidPrice: 0, askPrice: 1.3902 }
            }
        ];

        const wrapper = shallow(<ForexPriceQuotesTable currencyExchanges={mockCurrencyExchanges} />);
        expect(wrapper.find('table').length).toBe(1);
        expect(wrapper.find('CurrencyExchangeQuoteRow').length).toBe(2);
    });
});