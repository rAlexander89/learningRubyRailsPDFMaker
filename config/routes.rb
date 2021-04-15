Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api do
    # get 'invoices/index'
    # get 'invoices/show'
    resources :invoices, only: [:index, :show, :create] do 
      resources :invoice_items, only: [:show, :index, :create]
    end
  end
  # get 'invoices/index'
  # get 'invoices/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
