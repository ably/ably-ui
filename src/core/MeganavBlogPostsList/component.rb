module AblyUi
  module Core
    class MeganavBlogPostsList < ViewComponent::Base
      include AblyUi::Core::Util

      attr_reader :url_base

      def initialize(url_base:)
        @url_base = url_base
      end
    end
  end
end
