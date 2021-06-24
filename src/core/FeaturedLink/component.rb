module AblyUi
  module Core
    class FeaturedLink < ViewComponent::Base
      def initialize(
        url:,
        text_size: 'text-menu3',
        icon_color: 'ui-icon-cool-black',
        flush: false
      )
        @url = url
        @text_size = text_size
        @icon_color = icon_color
        @flush = flush
      end
    end
  end
end
