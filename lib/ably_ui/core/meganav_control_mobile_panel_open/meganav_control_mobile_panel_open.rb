module AblyUi
  module Core
    class MeganavControlMobilePanelOpen < ViewComponent::Base
      def initialize(aria_controls:)
        @aria_controls = aria_controls
      end
    end
  end
end
