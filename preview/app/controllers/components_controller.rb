class ComponentsController < ApplicationController
  def show
    component_name = params[:component_name]
    template = "components/#{component_name.underscore}_#{framework}.html.erb"

    if template_exists?(template)
      render template,
             locals: {
               framework: framework,
               component_parameters:
                 component_parameters(component_name.underscore)
             }
    else
      render status: 404, plain: "#{template} not found"
    end
  end

  def meganav
    session[:signed_in] = signed_in?
    template = "meganav_#{framework}.html.erb"

    render template,
           locals: {
             props: meganav_props,
             notice_props: notice_props,
             notice_config: notice_config,
             framework: framework,
             component_parameters: component_parameters('meganav')
           }
  end

  def footer
    template = "footer_#{framework}.html.erb"

    render template,
           locals: {
             props: framework == 'react' ? footer_react_props : {},
             framework: framework,
             component_parameters: component_parameters('footer')
           }
  end

  def icon
    template = "icon_#{framework}.html.erb"
    core_icons = %w[
      icon-gui-ably-badge
      icon-gui-arrow-bidirectional-horizontal
      icon-gui-arrow-bidirectional-vertical
      icon-gui-arrow-down
      icon-gui-arrow-left
      icon-gui-arrow-right
      icon-gui-arrow-up
      icon-gui-burger-menu
      icon-gui-check-circled-fill
      icon-gui-check-circled
      icon-gui-checklist-checked
      icon-gui-clock
      icon-gui-close
      icon-gui-cross-circled-fill
      icon-gui-cross-circled
      icon-gui-dash-circled
      icon-gui-disclosure-arrow
      icon-gui-document-generic
      icon-gui-enlarge
      icon-gui-external-link
      icon-gui-history
      icon-gui-info
      icon-gui-link-arrow
      icon-gui-live-chat
      icon-gui-minus
      icon-gui-plus
      icon-gui-quote-marks-solid
      icon-gui-refresh
      icon-gui-search
      icon-gui-tick
      icon-gui-warning
    ]

    display_icons = %w[
      icon-display-48hrs
      icon-display-api-keys
      icon-display-api
      icon-display-browser
      icon-display-calendar
      icon-display-call-mobile
      icon-display-cloud-servers
      icon-display-documentation
      icon-display-gdpr
      icon-display-general-comms
      icon-display-hipaa
      icon-display-it-support-access
      icon-display-it-support-helpdesk
      icon-display-laptop
      icon-display-live-chat
      icon-display-map-pin
      icon-display-message
      icon-display-padlock-closed
      icon-display-platform
      icon-display-play
      icon-display-privacy-shield-framework
      icon-display-servers
      icon-display-shopping-cart
      icon-display-sla
      icon-display-soc2-type2
      icon-display-tech-account-comms
    ]

    social_icons = %w[
      discord
      facebook
      github
      glassdoor
      linkedin
      twitter
    ]

    other_icons = %w[quote]

    render template,
           locals: {
             core_icons: core_icons,
             display_icons: display_icons,
             social_icons: social_icons,
             other_icons: other_icons,
             framework: framework,
             component_parameters: component_parameters('icon')
           }
  end

  private

  def component_parameters(component_name)
    path =
      Rails
        .root
        .join('app', 'views', 'components', "#{component_name}_params.yml")
        .to_s
    File.file?(path) ? YAML.load(File.read(path)) : []
  end

  def notice_props
    {
      title: 'Something something',
      body_text:
        'Lorem ipsum dolor sit amet, in nonumes delectus nominati eam, novum recusabo an mel. Aeque maiorum patrioque te per, congue epicurei qualisque at quo. An has quis ludus appellantur. Id vis solum assentior theophrastus',
      button_link: '/',
      button_label: 'CLICK ME',
      close_btn: notice_close_btn
    }
  end

  def notice_config
    { cookie_id: '2', notice_id: 'B', collapse: notice_collapse }
  end

  def meganav_props
    framework == 'react' ? meganav_react_props : meganav_vw_props
  end

  def meganav_react_props
    props = {
      paths: {
        logo: helpers.asset_path('ably_ui/core/images/ably-logo.svg'),
        icon_sprites: helpers.asset_path('ably_ui/core/sprites.svg'),
        ably_stack: helpers.asset_path('ably_ui/core/images/ably-stack.svg'),
        blog_thumb1: helpers.asset_path('ably_ui/core/images/blog-thumb1.jpg'),
        blog_thumb2: helpers.asset_path('ably_ui/core/images/blog-thumb2.jpg'),
        blog_thumb3: helpers.asset_path('ably_ui/core/images/blog-thumb3.jpg')
      },
      notice: {
        props: notice_props,
        config: notice_config
      }
    }

    props[:login_link] = '/custom-login-link' if custom_login_link?
    props[:url_base] = 'https://pages.ably.com' if custom_url_base?
    props
  end

  def meganav_vw_props
    props = {}
    props[:session_data] = helpers.session_data if signed_in?
    props[:login_link] = '/custom-login-link' if custom_login_link?
    props[:url_base] = 'https://pages.ably.com' if custom_url_base?
    props
  end

  def footer_react_props
    {
      paths: {
        ably_stack: helpers.asset_path('ably_ui/core/images/ably-stack.svg'),
        rocket_list:
          helpers.asset_path('ably_ui/core/images/rocket-list-2021.png'),
        flexible_companies:
          helpers.asset_path('ably_ui/core/images/flexible-companies.png')
      }
    }
  end

  def framework
    params['framework'].nil? ? 'react' : 'vw'
  end

  def signed_in?
    params['signed-in'] == 'true'
  end

  def custom_login_link?
    params['custom-login-link'] == 'true'
  end

  def custom_url_base?
    params['custom-url-base'] == 'true'
  end

  def notice_close_btn
    params['notice-close-btn'] != 'false'
  end

  def notice_collapse
    params['notice-collapse'] != 'false'
  end
end
