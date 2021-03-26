import React from 'react';

class FormServiceField extends React.Component
{
    constructor(props)
    {
        super(props);

        /*this.state = {
            name: '',
            amount: '',
            price: ''
        }*/

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleNameChange(event) {
        const target = this.props.data;
        target.name = event.target.value;
        
        this.setState({
            target: target
          });
    }

    handleAmountChange(event) {
        const target = this.props.data;
        target.amount = event.target.value;
        
        this.setState({
            target: target
          });
    }

    handlePriceChange(event) {
        const target = this.props.data;
        target.price = event.target.value;
        
        this.setState({
            target: target
          });
    }

    render()
    {
        return (
            <li class="">
                    <span>itemName</span>
                    <input type="text" id="fname" name="name" onChange={this.handleNameChange}></input>
                    <span>Amount</span>
                    <input type="text" id="fname" name="s_2" onChange={this.handleAmountChange}></input>
                    <span>Price</span>
                    <input type="text" id="fname" name="s_3" onChange={this.handlePriceChange}></input>
                    <span>Currency</span>
                    <select>
                        <option value="USD">USD</option>
                    </select>
                    <button onClick={this.remove}>Remove</button>
                    </li>
        );
    }
}

export default FormServiceField;