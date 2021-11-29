module AblyUi
  module Core
    class FeaturedLink < ViewComponent::Base
      def initialize(
        url:,
        text_size: 'text-menu3',
        icon_color: 'text-cool-black',
        flush: false,
        additional_css: ''
      )
        @url = url
        @text_size = text_size
        @icon_color = icon_color
        @flush = flush
        @additional_css = additional_css
      end
    end
  end
end
