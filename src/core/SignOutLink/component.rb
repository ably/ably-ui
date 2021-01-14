require "json"

module AblyUi
  module Core
    class SignOutLink < ViewComponent::Base
      def initialize(session_data: {}, classes: [])
        @session_data = session_data
        @classes = classes
      end
    end
  end
end
