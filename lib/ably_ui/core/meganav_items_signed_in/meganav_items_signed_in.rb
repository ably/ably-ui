module AblyUi
  module Core
    class MeganavItemsSignedIn < ViewComponent::Base
      include MeganavConfig
      include Util

      attr_reader :url_base

      def initialize(session_data:, theme_name:, url_base:)
        @theme_name = theme_name
        @session_data = session_data
        @url_base = url_base
      end

      def account?
        @session_data[:account].present?
      end

      # Access tokens are behind a feature flag
      def access_tokens?
        @session_data[:myAccessTokens].present?
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
