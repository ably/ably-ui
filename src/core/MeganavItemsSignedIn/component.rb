module AblyUi
  module Core
    class MeganavItemsSignedIn < ViewComponent::Base
      include MeganavConfig

      def initialize(session_data:, theme_name:)
        @theme_name = theme_name
        @session_data = session_data
      end

      def account_name
        truncate(@session_data[:accountName], length: 20)
      end

      def preferred_email
        truncate(@session_data[:preferredEmail], length: 20)
      end
    end
  end
end
