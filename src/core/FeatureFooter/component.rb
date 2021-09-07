module AblyUi
  module Core
    class FeatureFooter < ViewComponent::Base
      include AblyUi::Core::Util

      attr_reader :url_base, :image_url, :cta_text, :text

      def initialize(
        url_base: AblyUi::Core::Util::DEFAULT_URL_BASE,
        image_url: '',
        cta_text: '',
        text: ''
      )
        @url_base = url_base
        @image_url = image_url
        @cta_text = cta_text
        @text = text
      end
    end
  end
end
