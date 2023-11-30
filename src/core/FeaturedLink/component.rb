module AblyUi
  module Core
    class FeaturedLink < ViewComponent::Base
      def initialize(
        url:,
        text_size: 'text-p2',
        icon_color: 'text-cool-black',
        flush: false,
        reverse: false,
        additional_css: ''
      )
        @url = url
        @text_size = text_size
        @icon_color = icon_color
        @flush = flush
        @reverse = reverse
        @additional_css = additional_css
      end
    end
  end
end
