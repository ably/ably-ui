module AblyUi
  module Core
    class MeganavContentCompany < ViewComponent::Base
      include Util
      include SharedAssets

      attr_reader :url_base

      def initialize(url_base:)
        @url_base = url_base
      end
    end
  end
end
