module AblyUi
  module Core
    class ContactFooter < ViewComponent::Base
      include AblyUi::Core::Util

      attr_reader :url_base

      def initialize(url_base: AblyUi::Core::Util::DEFAULT_URL_BASE)
        @url_base = url_base
      end
    end
  end
end
