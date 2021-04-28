module AblyUi
  module Core
    class Code < ViewComponent::Base
      include AblyUi::Core::Util
      def initialize(props)
        @language = props[:language]
        @snippet = props[:snippet]
      end
    end
  end
end
