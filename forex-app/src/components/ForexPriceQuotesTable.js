import React from 'react';

import CurrencyExchangeQuoteRow from './CurrencyExchangeQuoteRow';

class ForexPriceQuotesTable extends React.Component {
    render() {
        const rows = [];

        this.props.currencyExchanges.forEach((currencyExchange) => {
            rows.push(
                <CurrencyExchangeQuoteRow
                    currencyExchange={currencyExchange}
                    key={currencyExchange.id} />
            );
        });

        return (
            <table>
                <caption>Forex Price Quotes:</caption>
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Ask Price</th>
                        <th scope="col">Location</th>
                        <th scope="col">Currency pair</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ForexPriceQuotesTable;