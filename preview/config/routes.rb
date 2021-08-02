Rails
  .application
  .routes
  .draw do
    get '/layout', to: 'pages#layout'

    get '/components/meganav', to: 'components#meganav'
    get '/components/footer', to: 'components#footer'
    get '/components/icon', to: 'components#icon'
    get '/components/:component_name', to: 'components#show'

    get '/api/me', to: 'api/user_session#me'
    get '/api/blog', to: 'api/blog#recent_blog_posts'
    get '/api/uptime', to: 'api/uptime#uptime_json'

    root 'pages#index'
  end
