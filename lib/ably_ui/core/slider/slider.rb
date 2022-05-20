module AblyUi
  module Core
    class Slider < ViewComponent::Base
      attr_reader :classes,
                  :additional_attributes,
                  :slide_min_width,
                  :slide_max_width

      renders_many :slides, 'Slide'

      def initialize(
        classes: '',
        slide_min_width: '16.875rem',
        slide_max_width: '1fr',
        **additional_attributes
      )
        @classes = classes
        @additional_attributes = additional_attributes
        @slide_min_width = slide_min_width
        @slide_max_width = slide_max_width
      end

      class Slide < ViewComponent::Base
        attr_reader :classes

        def initialize(classes: '')
          @classes = classes
        end

        def call
          tag.li class: classes, data: { id: 'slider-slide' } do
            content
          end
        end
      end
    end
  end
end
