module AblyUi
  module Core
    class MeganavItemsMobile < ViewComponent::Base
      include MeganavConfig
      attr_reader :options

      def initialize(session_data:, theme_name:, options: {})
        @theme_name = theme_name
        @session_data = session_data
        @options = options
      end
    end
  end
end
