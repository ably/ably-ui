module AblyUi
  module Core
    class MobileMenuControl < ViewComponent::Base
      def initialize(aria_controls:)
        @aria_controls = aria_controls
      end
    end
  end
end
