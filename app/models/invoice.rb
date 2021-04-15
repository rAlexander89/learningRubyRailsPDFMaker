# == Schema Information
#
# Table name: invoices
#
#  id             :bigint           not null, primary key
#  discount       :decimal(, )
#  from_address   :string
#  from_email     :string
#  from_full_name :string
#  from_phone     :string
#  status         :string
#  to_address     :string
#  to_email       :string
#  to_full_name   :string
#  to_phone       :string
#  vat            :decimal(, )
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Invoice < ApplicationRecord

    has_many :invoice_items, dependent: :destroy

    validates   :from_address, 
                :from_email, 
                :from_full_name,
                :from_phone,
                :to_address,
                :to_email,
                presence: true

    STATUS_CLASS = {
        :draft => "badge badge-secondary",
        :sent => "badge badge-primary",
        :paid => "badge badge-success"
    }

    def subtotal
        self.invoice_items.map { |item| item.qty * item.price }.sum
    end

    def discount_calculated
        subtotal * (self.discount / 100.0)
    end

    def vat_calculated
        (subtotal - discount_calculated) * (self.vat / 100.0)
    end

    def total
        subtotal - discount_calculated + vat_calculated
    end

    def status_class
        STATUS_CLASS[self.status.to_sym]
    end


end
