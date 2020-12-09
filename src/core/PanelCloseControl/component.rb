module AblyUi
  module Core
    class PanelCloseControl < ViewComponent::Base
      def initialize(aria_controls:)
        @aria_controls = aria_controls
      end
    end
  end
end
