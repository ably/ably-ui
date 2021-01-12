module AblyUi
  module Core
    class MeganavItemControl < ViewComponent::Base
      include AblyUi::Core::MeganavThemes

      def initialize(aria_controls:, theme_name:)
        @aria_controls = aria_controls
        theme_setup(theme_name)
      end
    end
  end
end
