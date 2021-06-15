module AblyUi
  module Core
    class Notice < ViewComponent::Base
      def initialize(contents)
        @contents = contents
      end

      def close_btn?
        @contents[:close_btn]
      end

      def bg_color
        @contents[:bg_color] || 'bg-gradient-active-orange'
      end

      def text_color
        @contents[:text_color] || 'text-white'
      end

      def content_wrapper(*args, &block)
        if @contents[:button_link].present?
          link_to(@contents[:button_link], *args, &block)
        else
          tag.div(*args, &block)
        end
      end
    end
  end
end
