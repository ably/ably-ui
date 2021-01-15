module AblyUi
  module Core
    class MeganavItemsSignedIn < ViewComponent::Base
      include MeganavConfig

      def initialize(session_data:, theme_name:)
        @theme_name = theme_name
        @session_data = session_data
      end
    end
  end
end
