# == Schema Information
#
# Table name: invoice_items
#
#  id          :bigint           not null, primary key
#  description :string
#  name        :string
#  price       :decimal(, )
#  qty         :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  invoice_id  :bigint
#
# Indexes
#
#  index_invoice_items_on_invoice_id  (invoice_id)
#
# Foreign Keys
#
#  fk_rails_...  (invoice_id => invoices.id)
#
class InvoiceItem < ApplicationRecord
  belongs_to :invoice
end
