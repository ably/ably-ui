require 'json'
require_relative '../notice/notice.rb'

module AblyUi
  module Core
    class Meganav < ViewComponent::Base
      include MeganavConfig
      include Util
      include SharedAssets
      attr_reader :options, :login_link, :logo_link, :url_base

      renders_one :notice, AblyUi::Core::Notice

      def initialize(
        session_data: {},
        theme_name: :white,
        login_link: '/login',
        logo_link: '',
        url_base: AblyUi::Core::Util::DEFAULT_URL_BASE
      )
        @session_data = session_data
        @theme_name = theme_name
        @options = options
        @login_link = login_link
        @url_base = url_base
        @logo_link = logo_link || url_base
        theme_setup(theme_name)
      end

      def panels
        [
          {
            label: 'Platform',
            short_label: 'Platform',
            id: 'platform-panel',
            class: 'AblyUi::Core::MeganavContentPlatform'
          },
          {
            label: 'Use Cases & Solutions',
            short_label: 'Use Cases',
            id: 'use-cases-panel',
            class: 'AblyUi::Core::MeganavContentUseCases'
          },
          {
            label: 'Company',
            short_label: 'Company',
            id: 'company-panel',
            class: 'AblyUi::Core::MeganavContentCompany'
          },
          {
            label: 'Developers',
            short_label: 'Developers',
            id: 'developers-panel',
            class: 'AblyUi::Core::MeganavContentDevelopers'
          }
        ]
      end
    end
  end
end
