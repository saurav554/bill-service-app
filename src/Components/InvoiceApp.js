import React from 'react'
import InvoiceForm from './InvoiceForm.js';
import InvoiceView from './InvoiceView.js';

class InvoiceApp extends React.Component
{
    constructor(data)
    {
        super(data);
        this.state = {
            form: {
                service:[]
            }
        };

        this.callbackFunction = this.callbackFunction.bind(this);
    }
    
    callbackFunction(childData)  
    {
        let newState = JSON.parse(JSON.stringify(childData));
        newState.form = childData;

        this.setState({form: childData});
    }

    render()
    {
        return(
            <div>
                <InvoiceForm parentCallback = {this.callbackFunction}></InvoiceForm>
                <InvoiceView form={this.state.form}></InvoiceView>
            </div>
        );
    }
}

export default InvoiceApp;