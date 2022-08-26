module AblyUi
  module Core
    class MeganavControl < ViewComponent::Base
      include AblyUi::Core::MeganavConfig
      attr_reader :aria_controls, :aria_label, :additional_css

      def initialize(
        aria_controls:,
        aria_label:,
        theme_name:,
        additional_css: ''
      )
        @aria_controls = aria_controls
        @aria_label = aria_label
        @additional_css = additional_css
        theme_setup(theme_name)
      end
    end
  end
end
