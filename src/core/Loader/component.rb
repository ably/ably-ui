module AblyUi
  module Core
    class Loader < ViewComponent::Base
      attr_reader :size
      attr_reader :ring_color
      attr_reader :additional_css

      def initialize(
        size: '1.5rem',
        ring_color: 'text-dark-grey',
        additional_css: ''
      )
        @size = size
        @ring_color = ring_color
        @additional_css = additional_css
      end
    end
  end
end
