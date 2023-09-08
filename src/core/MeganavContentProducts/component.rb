module AblyUi
  module Core
    class MeganavContentProducts < ViewComponent::Base
      include SharedAssets
      include Util

      attr_reader :url_base

      def initialize(url_base:)
        @url_base = url_base
      end
    end
  end
end
