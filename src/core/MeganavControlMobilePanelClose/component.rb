module AblyUi
  module Core
    class MeganavControlMobilePanelClose < ViewComponent::Base
      attr_reader :aria_controls, :display_hr

      def initialize(aria_controls:, display_hr: true)
        @aria_controls = aria_controls
        @display_hr = display_hr
      end
    end
  end
end
