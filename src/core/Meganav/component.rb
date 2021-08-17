require 'json'
require_relative '../notice/notice.rb'

module AblyUi
  module Core
    class Meganav < ViewComponent::Base
      include MeganavConfig
      include Util
      attr_reader :options, :login_link, :url_base

      renders_one :notice, AblyUi::Core::Notice

      def initialize(
        session_data: {},
        theme_name: :white,
        login_link: '/login',
        url_base: AblyUi::Core::Util::DEFAULT_URL_BASE
      )
        @session_data = session_data
        @theme_name = theme_name
        @options = options
        @login_link = login_link
        @url_base = url_base
        theme_setup(theme_name)
      end

      def panels
        [
          {
            label: 'Platform',
            id: 'platform-panel',
            class: 'AblyUi::Core::MeganavContentPlatform'
          },
          {
            label: 'Use Cases',
            id: 'use-cases-panel',
            class: 'AblyUi::Core::MeganavContentUseCases'
          },
          {
            label: 'Why Ably',
            id: 'why-ably-panel',
            class: 'AblyUi::Core::MeganavContentWhyAbly'
          },
          {
            label: 'Developers',
            id: 'developers-panel',
            class: 'AblyUi::Core::MeganavContentDevelopers'
          }
        ]
      end
    end
  end
end
