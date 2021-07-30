module AblyUi
  module Core
    class Icon < ViewComponent::Base
      attr_reader :name
      attr_reader :size
      attr_reader :color
      attr_reader :additional_css
      attr_reader :additional_attributes

      def initialize(
        name:,
        size: '0.75rem',
        color: '',
        additional_css: '',
        **additional_attributes
      )
        @name = name
        @size = size
        @color = color
        @additional_css = additional_css
        @additional_attributes = additional_attributes
      end
    end
  end
end
