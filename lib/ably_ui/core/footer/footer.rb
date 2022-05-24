module AblyUi
  module Core
    class Footer < ViewComponent::Base
      include AblyUi::Core::SharedAssets
      include AblyUi::Core::Util

      attr_reader :url_base

      def initialize(url_base: AblyUi::Core::Util::DEFAULT_URL_BASE)
        @url_base = url_base
      end
    end
  end
end
