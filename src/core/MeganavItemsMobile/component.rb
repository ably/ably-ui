module AblyUi
  module Core
    class MeganavItemsMobile < ViewComponent::Base
      include MeganavConfig
      attr_reader :options, :login_link

      def initialize(session_data:, theme_name:, login_link:)
        @theme_name = theme_name
        @session_data = session_data
        @login_link = login_link
      end
    end
  end
end
