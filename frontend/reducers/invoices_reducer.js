import { 
    RECEIVE_INVOICES,
    RECEIVE_INVOICE

} from '../actions/invoice_actions'

const invoiceReducer = (state = {}, action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_INVOICES:
            return Object.assign({}, state, action.invoices)
        case RECEIVE_INVOICE:
            const { invoice } = action.invoice
            return Object.assign({}, state, { [invoice.id]: invoice })
        default:
            return state
    }
}

export default invoiceReducer