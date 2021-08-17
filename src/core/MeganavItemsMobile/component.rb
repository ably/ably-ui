module AblyUi
  module Core
    class MeganavItemsMobile < ViewComponent::Base
      include MeganavConfig
      include Util

      attr_reader :options, :login_link, :url_base

      def initialize(session_data:, theme_name:, login_link:, url_base:)
        @theme_name = theme_name
        @session_data = session_data
        @login_link = login_link
        @url_base = url_base
      end
    end
  end
end
