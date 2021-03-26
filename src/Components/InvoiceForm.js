import React from 'react';
import FormServiceField from './FormServiceField';

class InvoiceForm extends React.Component
{
    constructor(data)
    {
        super(data);
        this.greet = this.greet.bind(this);
        this.generate = this.generate.bind(this);
        this.remove = this.remove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.NoteHandleChange = this.NoteHandleChange.bind(this);
        this.ListChanged = this.ListChanged.bind(this);
        this.greet = this.greet.bind(this);
        
        this.state = {
            form:{
                note:'',
                service: [],
                totalAmount: 0
            }
        };
    }

    handleChange(event) {
        this.state.form.sender = event.target.value;
        this.setState({form: this.state.form});
    }

 

    NoteHandleChange(event) {
        this.state.form.note = event.target.value;
        this.setState({form: this.state.form});
    }

    ListChanged() {
        var total = 0;
        this.state.form.service.map(x => (
            total += parseFloat(x.price)
        ))

        this.state.form.totalAmount = total;
        this.setState({form: this.state.form});
    }

    greet(value) 
    {
        this.ListChanged();
        this.setState( (state) => {
            let newState = JSON.parse(JSON.stringify(state));
            newState.form.service = newState.form.service.concat(
            {
                name:'123',
                amount:123,
                price:123,
            });
            return ({
                form: newState.form
            });
        });

        
    }

    remove(value) 
    {
        this.setState( (state) => {
            let newState = JSON.parse(JSON.stringify(state));
            newState.form.service = newState.form.service.splice(newState.form.service.indexOf(value), 1);
            return ({
                form: newState.form
            });
        });
    }

    generate() 
    {
        this.props.parentCallback(this.state.form);
    }

    render()
    {
        return (
            <div className="xxx">
               
                <div className="block">
                    <p>Bill List</p>
                    <ul>
                        {this.state.form.service.map(key => (
                            <FormServiceField data={key}></FormServiceField>
                        ))}
                    </ul>
                    <button onClick={this.greet}>+ Add Bill</button>
                    
                    <div className="block">
                        <p>Tax:</p><input type="text" id="fname" name="s_3"></input>
                        <p>Total: {this.state.form.totalAmount}$</p>
                        <p>Note</p>
                        <textarea onChange={this.NoteHandleChange}>
                            
                        </textarea>
                    </div>
                    <button onClick={this.generate}>Generate</button>
                </div>
            </div>
            );
    }
}

export default InvoiceForm;