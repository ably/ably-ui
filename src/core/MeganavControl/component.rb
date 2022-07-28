module AblyUi
  module Core
    class MeganavControl < ViewComponent::Base
      include AblyUi::Core::MeganavConfig
      attr_reader :aria_controls, :additional_css

      def initialize(aria_controls:, theme_name:, additional_css: '')
        @aria_controls = aria_controls
        @additional_css = additional_css
        theme_setup(theme_name)
      end
    end
  end
end
