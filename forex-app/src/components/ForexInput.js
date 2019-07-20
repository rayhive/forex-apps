import React from 'react';

class ForexInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { inputValue: '' };
    }

    handleChange(e) {
        this.props.onInputChange(e);
        this.setState({ inputValue: e.target.value });
    }

    render() {
        const inputLabel = this.props.label;
        const nameAttributeValue = this.props.name;
        const typeAttributeValue = this.props.type;
        const inputValue = this.state.inputValue;

        return (
            <fieldset>
                <legend>{inputLabel}</legend>
                <input
                    name={nameAttributeValue}
                    type={typeAttributeValue}
                    value={inputValue}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default ForexInput;