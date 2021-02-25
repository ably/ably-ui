class ComponentsController < ApplicationController
  layout :page_layout

  def meganav
    session[:signed_in] =  signed_in?
    template = "meganav_#{framework}.html.erb"
    render template, locals: { props: framework == "react" ? react_props : vw_props }
  end

  def contact_footer
    template = "contact_footer_#{framework}.html.erb"
    render template, locals: { props: framework == "react" ? react_props : vw_props }
  end

  def footer
    template = "footer_#{framework}.html.erb"
    render template, locals: { props: framework == "react" ? react_footer_props : {} }
  end

  private

  def react_props
    {
      paths: {
        logo: helpers.asset_path('ably_ui/core/images/ably-logo.svg'),
        icon_sprites: helpers.asset_path('ably_ui/core/sprites.svg'),
        ably_stack: helpers.asset_path('ably_ui/core/images/ably-stack.svg'),
        blog_thumb1: helpers.asset_path('ably_ui/core/images/blog-thumb1.jpg'),
        blog_thumb2: helpers.asset_path('ably_ui/core/images/blog-thumb2.jpg'),
        blog_thumb3: helpers.asset_path('ably_ui/core/images/blog-thumb3.jpg')
      }
    }
  end

  def react_footer_props
    {
      paths: {
        ably_stack: helpers.asset_path('ably_ui/core/images/ably-stack.svg'),
        rocket_list: helpers.asset_path('ably_ui/core/images/rocket-list-2021.png'),
        flexible_companies: helpers.asset_path('ably_ui/core/images/flexible-companies.png'),
      }
    }
  end

  def vw_props
    signed_in? ? { session_data: helpers.session_data } : {}
  end

  def page_layout
    params['framework'].nil? ? "application" : "view_component"
  end

  def framework
    params['framework'].nil? ? "react" : "vw"
  end

  def signed_in?
    params['signed-in'] == "true"
  end
end
