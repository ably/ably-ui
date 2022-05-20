module AblyUi
  module Core
    class MeganavControl < ViewComponent::Base
      include AblyUi::Core::MeganavConfig

      def initialize(aria_controls:, theme_name:)
        @aria_controls = aria_controls
        theme_setup(theme_name)
      end
    end
  end
end
