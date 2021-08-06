require 'json'
require_relative '../notice/notice.rb'

module AblyUi
  module Core
    class Meganav < ViewComponent::Base
      include MeganavConfig
      attr_reader :options

      renders_one :notice, AblyUi::Core::Notice

      def initialize(
        session_data: {},
        theme_name: :white,
        options: { login_link: '/login' }
      )
        @session_data = session_data
        @theme_name = theme_name
        @options = options
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
