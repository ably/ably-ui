module AblyUi
  module Core
    class Logo < ViewComponent::Base
      include AblyUi::Core::MeganavConfig

      def initialize(theme_name:, data_id: '')
        @data_id = data_id
        theme_setup(theme_name)
      end
    end
  end
end
