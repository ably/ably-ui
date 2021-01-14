module AblyUi
  module Core
    class MeganavControlMobileDropdown < ViewComponent::Base
      include AblyUi::Core::MeganavThemes

      def initialize(theme_name:)
        theme_setup(theme_name)
      end
    end
  end
end
