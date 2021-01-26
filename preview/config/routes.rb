Rails.application.routes.draw do
  get '/globals', to: 'pages#globals'
  get '/foundations/typography', to: 'pages#typography'

  get '/components/meganav', to: 'components#meganav'

  get '/api/me', to: 'api/user_session#me'

  root 'pages#index'
end
