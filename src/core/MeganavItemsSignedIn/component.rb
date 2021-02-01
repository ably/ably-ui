module AblyUi
  module Core
    class MeganavItemsSignedIn < ViewComponent::Base
      include MeganavConfig

      def initialize(session_data:, theme_name:)
        @theme_name = theme_name
        @session_data = session_data
      end

      def account?
        @session_data[:account].present?
      end

      # Access tokens are behind a feature flag
      def access_tokens?
        @session_data[:accessTokens].present?
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
