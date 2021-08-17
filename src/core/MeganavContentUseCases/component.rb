module AblyUi
  module Core
    class MeganavContentUseCases < ViewComponent::Base
      include Util

      attr_reader :url_base

      def initialize(url_base:)
        @url_base = url_base
      end
    end
  end
end
