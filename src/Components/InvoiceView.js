import React from 'react';

class InvoiceView extends React.Component
{
    render()
    {
        return(
            <div>
               

                <div className="block">
                    <div>
                        <table className="form-table">
                            <tbody>
                            <tr>
                                <th>Towar</th>
                                <th>Ilość</th>
                                <th>Cena</th>
                            </tr>
                            {
                                this.props.form.service.length > 0 ? this.props.form.service.map((value, index) => {
                                    return <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.amount}</td>
                                        <td>{value.price}</td>
                                        </tr>
                                }): <tr><td></td><td></td><td></td></tr>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                
                
                <div className="block">
                    <div className="right">
                        <p>Kwota: {this.props.form.totalAmount}$</p>
                    </div>
                </div>

                <div className="block">
                    <div className="right">
                        <p>Note:{this.props.form.note}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default InvoiceView;