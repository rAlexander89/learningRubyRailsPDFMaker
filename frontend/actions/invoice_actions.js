import * as InvoiceAPIUtils from '../utils/invoice_api_utils'

export const RECEIVE_INVOICES = 'RECEIVE_INVOICES'
export const RECEIVE_INVOICE = 'RECEIVE_INVOICE'

export const receiveInvoices = invoices => {
    return{
        type: RECEIVE_INVOICES,
        invoices
    }
}

export const receiveInvoice = invoice => {
    return{
        type: RECEIVE_INVOICE,
        invoice
    }
}

export const receiveInvoiceById = invoice => {
    return{
        type: RECEIVE_INVOICE,
        invoice
    }
}



export const fetchInvoiceById = invoiceId => dispatch => {
    return InvoiceAPIUtils.fetchInvoiceById(invoiceId)
        .then(invoice => dispatch(receiveInvoiceById(invoice)))
}


export const fetchInvoices = () => dispatch => {
    return InvoiceAPIUtils.fetchInvoices()
        .then(invoices => dispatch(receiveInvoices(invoices)))
}

export const createInvoice = invoice => {
    return InvoiceAPIUtils.createInvoice(invoice)
        .then(invoice => dispatch(invoice))
}