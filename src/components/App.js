import './App.css';
import React, { Component } from 'react'
import TicketInput from './TicketInput';
import TicketList from './TicketList';
import NavBar from './Navbar';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'

class App extends Component{

  render(){ 

  return (
    <div>
        <NavBar/>
        {/* <h1 className="header">Tickets</h1> */}
        <TicketInput addTicket={this.props.actions.addTicket} />
        <TicketList actions={this.props.actions} tickets= {this.props.tickets}/>
      </div>
  );

  }
}


function mapStateToProps(state) {  
  return state
}

function mapDispatchToProps(dispatch) {  
  return {    
    actions: bindActionCreators(actions, dispatch) 
   }
}
  
  
export default connect(mapStateToProps, mapDispatchToProps)(App)
