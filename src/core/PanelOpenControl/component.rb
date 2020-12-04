module AblyUi
  module Core
    class PanelOpenControl < ViewComponent::Base
      def initialize(aria_controls:)
        @aria_controls = aria_controls
      end
    end
  end
end
