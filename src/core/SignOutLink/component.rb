require 'json'

module AblyUi
  module Core
    class SignOutLink < ViewComponent::Base
      include Util

      attr_reader :url_base

      def initialize(session_data: {}, classes: [], url_base:)
        @session_data = session_data
        @classes = classes
        @url_base = url_base
      end
    end
  end
end
