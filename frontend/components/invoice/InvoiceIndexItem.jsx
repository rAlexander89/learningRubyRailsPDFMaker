import React from 'react'

function InvoiceIndexItem({client, index}) {

    return  <div className='client-item'>
        <h2>{index}:</h2>
                <ul className='client-details'>
                    <li><h2>Client Name: {client.to_full_name}</h2></li>
                    <li>To Email: {client.to_email}</li>
                    <li>To phone: {client.to_phone}</li>
                    <li>To Address: {client.to_address}</li>
                </ul>
                <ul className='supplier-details'>
                    <li><h2>Supplier Name: {client.from_full_name}</h2></li>
                    <li>From Email: {client.from_email}</li>
                    <li>From phone: {client.from_phone}</li>
                    <li>From Address: {client.from_address}</li>
                </ul>
                <div className='button'>
                    Add Invoice Items
                </div>
            </div>
}

export default InvoiceIndexItem
