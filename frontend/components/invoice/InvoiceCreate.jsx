import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createInvoice } from '../../actions/invoice_actions'


function InvoiceCreate() {

    const inputForm = useRef(null)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        let formData = inputForm.current
        
        const newInvoice = {
            to_full_name: formData['to_full_name'].value,
            to_address: formData['to_address'].value,
            to_email: formData['to_email'].value,
            to_phone: formData['to_phone'].value,
            from_full_name: formData['from_full_name'].value,
            from_address: formData['from_address'].value,
            from_email: formData['from_email'].value,
            from_phone: formData['from_phone'].value
        }

        dispatch(createInvoice(newInvoice))
            .then(() => {
                inputForm.current.reset()
            })
    }

    return  <div>
                <div>
                    <h1>Client to Invoice</h1>
                    <form ref={inputForm} className='session-form' autoComplete="off" onSubmit={handleClick}>
                        <input
                            type='text'
                            className=''
                            placeholder='Client Name'
                            label={'to_full_name'}
                            name={'to_full_name'}/>
                        
                        <input
                            type='text'
                            className=''
                            placeholder='Client Billing Address'
                            label={'to_address'}
                            name={'to_address'}/> 

                        <input
                            type='email'
                            className=''
                            placeholder='Billing Email'
                            label={'to_email'}
                            name={'to_email'}/>
                        
                        <input
                            type='number'
                            className=''
                            placeholder='Billing Phone Numer'
                            label={'to_phone'}
                            name={'to_phone'}/>

                    <h1>Service/Goods Provider</h1>

                        <input
                            type='text'
                            className=''
                            placeholder="Service/Goods Provider's Name"
                            label={'from_full_name'}
                            name={'from_full_name'}/>
                        
                        <input
                            type='text'
                            className=''
                            placeholder='Provider Billing Address'
                            label={'from_address'}
                            name={'from_address'}/> 

                        <input
                            type='email'
                            className=''
                            placeholder='Provider Email'
                            label={'from_email'}
                            name={'from_email'}/>
                        
                        <input
                            type='number'
                            className=''
                            placeholder='Provider Phone Number'
                            label={'from_phone'}
                            name={'from_phone'}/>

                        <button type='submit' className='session-button'> Submit Form </button>
                    </form>
                </div>
            </div>
}

export default InvoiceCreate
