Rails.application.routes.draw do
  get '/globals', to: 'pages#globals'
  get '/foundations/typography', to: 'pages#typography'

  root 'pages#index'
end
