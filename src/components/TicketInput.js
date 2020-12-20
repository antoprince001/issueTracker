import React,{ Component } from 'react';
class TicketInput extends Component {
    
    constructor(props){

        super(props);
        this.state = {
            title : '',
            issue : '',
            reporter : ''
        }
    }

    handleIssue(e){
        this.setState({ issue : e.target.value });
    }

    handleTitle(e){
        this.setState({ title : e.target.value });
    }

    handleReporter(e){
        this.setState({ reporter : e.target.value });
    }

    handleSubmit(e){
        if( this.state.title !== '' && this.state.issue !==  '' && this.state.reporter !== '') {
        this.props.addTicket(this.state.title,this.state.issue, this.state.reporter);
        this.setState ({
            title : '',
            issue : '',
            reporter : ''
        })
    }
    }

    
    render(){
        return(
            <div className="container">
            
            <div className="row">
            <div className="col s12">
            <div className="row">
                <div className="input-field col s3">
                <label for="title">ISSUE TITLE</label>
                </div>
                <div className="input-field col s3">
                  <label for="issue">ISSUE</label>
                </div>  
                <div class="input-field col s3">
                  <label for="reporter">ISSUE FACED BY</label>
                </div>
    
            </div>
              <div className="row">
                <div className="input-field col s3">
                  <input 
                         onChange={ this.handleTitle.bind(this) } 
                         value = { this.state.title }
                         
                   />
                  
                </div>
                <div className="input-field col s3">
                  <input   
                    onChange={ this.handleIssue.bind(this) }
                    value = { this.state.issue }
                    />
                  
                </div>  
                <div class="input-field col s3">
                  <input   
                    onChange={ this.handleReporter.bind(this) }
                    value = { this.state.reporter }
                     />
                  
                </div>
                
                <button className="btn waves-effect waves-light green" type="submit" name="action" onClick={this.handleSubmit.bind(this)}>ADD TICKET
                 </button>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default TicketInput;