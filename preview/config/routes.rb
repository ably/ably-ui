Rails.application.routes.draw do
  get '/globals', to: 'pages#globals'

  root 'pages#index'
end
