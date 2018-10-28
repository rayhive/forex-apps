import React from 'react';

class CurrencyExchangeRow extends React.Component {
    render() {
        const name = this.props.name;
        return (
            <tr>
                <th colSpan="4">
                    {name}
                </th>
            </tr>
        );
    }
}

export default CurrencyExchangeRow;