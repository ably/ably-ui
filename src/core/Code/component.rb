module AblyUi
  module Core
    class Code < ViewComponent::Base
      include AblyUi::Core::Util
      def initialize(language:, snippet:)
        @language = language
        @snippet = snippet.try(:strip)
      end
    end
  end
end
