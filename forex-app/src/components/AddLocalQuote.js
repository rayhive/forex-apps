import React from 'react';

import './AddLocalQuote.css';
import ForexInput from './ForexInput';

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
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleAddLocalQuote(event) {
        event.preventDefault();
        this.props.onLocalQuoteAdd(Object.assign({}, this.state));
    }

    render() {
        return (
            <div className="local-quote-form">
                <form onSubmit={this.handleAddLocalQuote}>
                    <ForexInput
                        label="Currency Exchange"
                        name="currencyExchangeName"
                        type="text"
                        onInputChange={this.handleInputChange} />
                    <ForexInput
                        label="Address"
                        name="currencyExchangeAddress"
                        type="text"
                        onInputChange={this.handleInputChange} />
                    <ForexInput
                        label="Ask Price"
                        name="askPrice"
                        type="number"
                        onInputChange={this.handleInputChange} />
                    <button type="submit" className="btn btn-primary m-2">Add Quote</button>
                </form>
            </div>
        );
    }
}

export default AddLocalQuote;