module AblyUi
  module Core
    class MobileMenuControl < ViewComponent::Base
      include AblyUi::Core::MeganavThemes

      def initialize(theme_name:)
        theme_setup(theme_name)
      end
    end
  end
end
