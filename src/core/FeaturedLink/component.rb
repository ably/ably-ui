module AblyUi
  module Core
    class FeaturedLink < ViewComponent::Base
      def initialize(
        url:,
        text_color: 'text-gui-default',
        text_size: 'text-menu3',
        text_weight: 'font-medium'
      )
        @url = url
        @text_color = text_color
        @text_size = text_size
        @text_weight = text_weight
      end
    end
  end
end
