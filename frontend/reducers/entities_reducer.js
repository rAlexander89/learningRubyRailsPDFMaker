import { combineReducers } from 'redux';
import invoiceReducer from './invoices_reducer'

export default combineReducers({
    invoices: invoiceReducer
})