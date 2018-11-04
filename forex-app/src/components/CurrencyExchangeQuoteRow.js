import React from 'react';

class CurrencyExchangeQuoteRow extends React.Component {
    render() {
        const currencyExchange = this.props.currencyExchange;

        return (
            <tr>
                <th scope="row">{currencyExchange.name}</th>
                <td>{currencyExchange.forexPriceQuote.askPrice}</td>
                <td>{currencyExchange.location}</td>
                <td>{currencyExchange.forexPriceQuote.baseCurrency}/{currencyExchange.forexPriceQuote.quoteCurrency}</td>
            </tr>
        );
    }
}

export default CurrencyExchangeQuoteRow;