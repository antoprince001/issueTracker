let ticketId = 0;
let actions = {

    addTicket : function(title,issue,reporter){

        return {
            type : 'ADD_TICKET',
            title : title,
            issue : issue,
            reporter : reporter
        }
    },

    deleteTicket : function(id){

        return {
            type : 'DELETE_TICKET',
            id : id
        }
    }
}

export default actions;