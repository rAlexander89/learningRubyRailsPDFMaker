import React from 'react'
import { Switch } from 'react-router-dom'
import InvoiceCreate from '../components/invoice/InvoiceCreate'
import InvoiceIndex from '../components/invoice/InvoiceIndex'



function App(){

    return <div className='app-container'>
               <h1>Invoice PDF</h1>
               <InvoiceCreate/>
               <InvoiceIndex/>
            </div>
}

export default App