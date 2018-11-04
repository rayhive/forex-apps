import React, { Component } from 'react';
import './App.css';

import ForexPriceQuotesTable from './components/ForexPriceQuotesTable';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <ForexPriceQuotesTable currencyExchanges={CURRENCY_EXCHANGES} />
      </div>
    );
  }
}

export default App;