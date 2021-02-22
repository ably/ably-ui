Rails.application.routes.draw do
  get '/globals', to: 'pages#globals'
  get '/foundations/typography', to: 'pages#typography'

  get '/components/meganav', to: 'components#meganav'
  get '/components/footer', to: 'components#footer'
  get '/components/contact-footer', to: 'components#contact_footer'
  get '/components/showcase', to: 'components#showcase'

  get '/api/me', to: 'api/user_session#me'
  get '/api/blog', to: 'api/blog#recent_blog_posts'

  root 'pages#index'
end
