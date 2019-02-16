import React from 'react';

import './AddLocalQuote.css';

class AddLocalQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyExchangeName: '',
            currencyExchangeAddress: '',
            askPrice: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddLocalQuote = this.handleAddLocalQuote.bind(this);
    }

    handleInputChange(event) {
        this.setState({ value: event.target.value });
    }

    handleAddLocalQuote(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="local-quote-form">
                <form onSubmit={this.handleAddLocalQuote}>
                    <div className="formGroup">
                        <label for="currencyExchangeName">Currency Exchange:</label>
                        <input
                            id="currencyExchangeName"
                            name="currencyExchangeName"
                            type="text"
                            value={this.state.currencyExchangeName}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="formGroup">
                        <label for="currencyExchangeAddress">Address:</label>
                        <input
                            id="currencyExchangeAddress"
                            name="currencyExchangeAddress"
                            type="text"
                            value={this.state.currencyExchangeAddress}
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="formGroup">
                        <label for="askPrice">Ask Price:</label>
                        <input
                            id="askPrice"
                            name="askPrice"
                            type="number"
                            value={this.state.askPrice}
                            onChange={this.handleInputChange} />
                    </div>
                    <button type="submit">Add Quote</button>
                </form>
            </div>
        );
    }
}

export default AddLocalQuote;