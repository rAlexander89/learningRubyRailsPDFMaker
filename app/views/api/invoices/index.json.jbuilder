@invoices.each do |invoice|
    json.set! invoice.id do #this sets an object and uses invoice.id as a key
        json.extract! invoice,
            :id,
            :from_address, 
            :from_email, 
            :from_full_name,
            :from_phone,
            :to_address,
            :to_email,
            :to_full_name,
            :to_phone
    end
end