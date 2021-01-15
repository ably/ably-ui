module AblyUi
  module Core
    class MeganavItemsDesktop < ViewComponent::Base
      include MeganavConfig

      def initialize(theme_name:)
        @theme_name = theme_name
      end
    end
  end
end
