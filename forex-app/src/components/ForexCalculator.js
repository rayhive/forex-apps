import React from 'react';

import ForexPriceQuotesTable from './ForexPriceQuotesTable';
import AddLocalQuote from './AddLocalQuote';

const CURRENCY_EXCHANGES = [
    {
        id: '1',
        name: 'Currency Exchange 1',
        location: 'William St, Perth CBD',
        forexPriceQuote: { baseCurrency: 'AUD', quoteCurrency: 'USD', bidPrice: 0, askPrice: 0.7311 }
    },
    {
        id: '2',
        name: 'Currency Exchange 2',
        location: 'Hay St, Perth CBD',
        forexPriceQuote: { baseCurrency: 'AUD', quoteCurrency: 'USD', bidPrice: 0, askPrice: 0.7312 }
    },
    {
        id: '3',
        name: 'Currency Exchange 3',
        location: 'Adelaide Tce, Perth CBD',
        forexPriceQuote: { baseCurrency: 'AUD', quoteCurrency: 'USD', bidPrice: 0, askPrice: 0.7313 }
    },
    {
        id: '4',
        name: 'Currency Exchange 4',
        location: 'Barrack St, Perth CBD',
        forexPriceQuote: { baseCurrency: 'AUD', quoteCurrency: 'USD', bidPrice: 0, askPrice: 0.7314 }
    },
    {
        id: '5',
        name: 'Currency Exchange 5',
        location: 'St Georges Tce, Perth CBD',
        forexPriceQuote: { baseCurrency: 'AUD', quoteCurrency: 'USD', bidPrice: 0, askPrice: 0.7315 }
    }
];

class ForexCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localQuotes: CURRENCY_EXCHANGES,
            baseCurrency: "AUD",
            quoteCurrency: "USD"
        };
        this.handleLocalQuoteAdd = this.handleLocalQuoteAdd.bind(this);
    }

    handleLocalQuoteAdd(quote) {
        let quoteId = this.state.localQuotes.length - 1;
        var newQuote = {
            id: quoteId,
            name: quote.currencyExchangeName,
            location: quote.currencyExchangeAddress,
            forexPriceQuote: {
                baseCurrency: this.state.baseCurrency,
                quoteCurrency: this.state.quoteCurrency,
                bidPrice: 0,
                askPrice: quote.askPrice
            }
        }

        this.setState({
            localQuotes: [].concat(this.state.localQuotes).concat(newQuote)
        });
    }

    render() {

        return (
            <div >
                <AddLocalQuote onLocalQuoteAdd={this.handleLocalQuoteAdd} />
                <ForexPriceQuotesTable currencyExchanges={this.state.localQuotes} />
            </div>
        );
    }
}

export default ForexCalculator;