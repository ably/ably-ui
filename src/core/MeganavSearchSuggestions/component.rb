module AblyUi
  module Core
    class MeganavSearchSuggestions < ViewComponent::Base
      include Util

      attr_reader :url_base

      def initialize(url_base:, display_support_link: true)
        @url_base = url_base
        @display_support_link = display_support_link
      end

      def display_support_link?
        @display_support_link
      end
    end
  end
end
