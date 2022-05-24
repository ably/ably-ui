module AblyUi
  module Core
    class Code < ViewComponent::Base
      include AblyUi::Core::Util
      def initialize(language:, snippet:, text_size: 'ui-text-code')
        @language = language
        @snippet = snippet.try(:strip)
        @text_size = text_size
      end
    end
  end
end
