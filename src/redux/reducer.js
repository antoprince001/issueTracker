import actions from './actions';

const initialState = {
    tickets : []
};
function getId(state) {  
    return state.tickets.reduce((maxId, ticket) => {    
        return Math.max(ticket.id, maxId)  }, 
        -1) 
+ 1}

let reducer = (state = initialState ,action = actions)=>{

    switch(action.type) {

        case 'ADD_TICKET':
            console.log('here');
            return Object.assign({}, state, {
                tickets : [{
                    id : getId(state),
                    title : action.title,
                    issue : action.issue,
                    reporter : action.reporter
                }, ...state.tickets]
            })
        
        case 'DELETE_TICKET':
            console.log('here');
            return Object.assign({}, state, {
                tickets : state.tickets.filter((ticket) => {          
                    return ticket.id !== action.id        
                })
            })

        default:
            return state;
        
    }
}   
export default reducer;