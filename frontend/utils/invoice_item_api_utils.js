export const fetchInvoiceItems = invoiceId => {
    return $.ajax({
        method: 'GET',
        url: `/api/invoices/${userId}`
    })
};