import React, { Component } from 'react'
import TicketItem from './TicketItem'

class TicketList extends Component { 
     render() {    
         return (  
        <div className="container"> 
           <div className="collection"> 
         <table>
             <tr>
                 <th>Index</th>
                 <th>
                     Title
                 </th>
                 <th>
                     Issue
                 </th>
                 <th>
                     Reported By
                 </th>
             </tr>
             
            
         {        
         this.props.tickets.map((ticket) => {             
                  return <TicketItem key={ticket.id} ticket={ticket}  actions ={ this.props.actions }/>       
                     
            })      
         }  

        </table>
        </div>
        </div>   
        )  
    }
}
    
export default TicketList