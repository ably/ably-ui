module AblyUi
  module Core
    class FeaturedLink < ViewComponent::Base
      def initialize(url:)
        @url = url
      end
    end
  end
end
