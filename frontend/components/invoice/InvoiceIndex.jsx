import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoices } from '../../actions/invoice_actions'
import InvoiceIndexItem from '../../components/invoice/InvoiceIndexItem'


function InvoiceIndex() {

    const invoices = useSelector((state =>  state.entities.invoices))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchInvoices())
    }, [])

    function invoicesVal(invoices){
        const clientList = Object.values(invoices).length > 0 ? 
            Object.values(invoices).reverse() : false

        if (clientList){
            return  <div><h1>Client List</h1>
                    {clientList.map((client, i) => (
                        <InvoiceIndexItem
                            index={i + 1} 
                            key={client.id} 
                            client={client}
                        />
                    ))}
                    </div>
        } else {
            return <div><h1>Client List</h1> no clients </div>
        }
    }

 
    return invoicesVal(invoices)
}

export default InvoiceIndex
