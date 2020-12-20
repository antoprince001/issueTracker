import React, { Component } from 'react';

class TicketItem extends Component{


    handleSubmit(e){
        console.log('delete');
        this.props.actions.deleteTicket(this.props.ticket.id);
    }
    render(){
        return (
           
        <tr>
        <td>
        { this.props.ticket.id }
        </td>
        <td>
         { this.props.ticket.title }
         </td>
         <td>
         { this.props.ticket.issue }
         </td>
         <td>
         { this.props.ticket.reporter }
         </td>
         <td>
         <button 
                    className="waves-effect waves-light btn red"
                    onClick={this.handleSubmit.bind(this)}>
                        Delete
        </button>
        </td>
        </tr>
        
        )
    }
}

export default TicketItem;