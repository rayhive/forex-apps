import React from 'react';

class CurrencyExchangeQuoteRow extends React.Component {
    render() {
        const currencyExchange = this.props.currencyExchange;

        return (
            <tr>
                <td></td>
                <td>{currencyExchange.forexPriceQuote.askPrice}</td>
                <td>{currencyExchange.location}</td>
                <td>{currencyExchange.forexPriceQuote.baseCurrency}/{currencyExchange.forexPriceQuote.quoteCurrency}</td>
            </tr>
        );
    }
}

export default CurrencyExchangeQuoteRow;