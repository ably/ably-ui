module AblyUi
  module Core
    class Logo < ViewComponent::Base
      include AblyUi::Core::MeganavConfig

      attr_reader :href, :data_id

      def initialize(theme_name:, data_id: '', href: '/')
        @data_id = data_id
        @href = href
        theme_setup(theme_name)
      end
    end
  end
end
