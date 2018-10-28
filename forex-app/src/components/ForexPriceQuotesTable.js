import React from 'react';

import CurrencyExchangeRow from './CurrencyExchangeRow';
import CurrencyExchangeQuoteRow from './CurrencyExchangeQuoteRow';

class ForexPriceQuotesTable extends React.Component {
    render() {
        const rows = [];

        this.props.currencyExchanges.forEach((currencyExchange) => {
            rows.push(
                <CurrencyExchangeRow
                    name={currencyExchange.name}
                    key={currencyExchange.name} />
            );
            rows.push(
                <CurrencyExchangeQuoteRow
                    currencyExchange={currencyExchange}
                    key={currencyExchange.id} />
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Forex Price Quotes</th>
                        <th>Ask Price</th>
                        <th>Location</th>
                        <th>Currency pair</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ForexPriceQuotesTable;