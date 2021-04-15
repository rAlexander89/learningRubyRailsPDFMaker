class Api::InvoicesController < ApplicationController
  def index
    @invoices = Invoice.all
    render :index
  end

  def create
    @invoice = Invoice.new(invoice_params)
    if @invoice.save
      render :index
    else
      render json: @invoice.errors.full_messages, status: 422
    end
  end

  def show
        @invoice = scope.find(params[:id])

        respond_to do |format|
            format.html
            format.pdf do
                render pdf: "Invoice No. #{@invoice.id}",
                page_size: 'A4',
                template: "invoices/show.html.erb",
                layout: "pdf.html",
                orientation: "Landscape",
                lowquality: true,
                zoom: 1,
                dpi: 75
            end
        end
    end

    private

    def invoice_params
      params.require(:invoice).permit(
          :to_address,
          :to_email,
          :to_phone,
          :to_full_name,
          :from_address, 
          :from_email, 
          :from_full_name,
          :from_phone
      )
    end
end
