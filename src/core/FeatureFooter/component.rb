module AblyUi
  module Core
    class FeatureFooter < ViewComponent::Base
      include AblyUi::Core::Util

      attr_reader :url_base,
                  :image_url,
                  :title,
                  :subtitle,
                  :live_chat_label,
                  :live_chat_disabled_label

      def initialize(
        url_base: AblyUi::Core::Util::DEFAULT_URL_BASE,
        image_url: nil,
        title: 'Talk to our technical team',
        subtitle: "If you're having technical or account issues just get in touch.",
        live_chat_label: 'Start a live chat',
        live_chat_disabled_label: 'Live chat unavailable'
      )
        @url_base = url_base
        @image_url = image_url
        @title = title
        @subtitle = subtitle
        @live_chat_label = live_chat_label
        @live_chat_disabled_label = live_chat_disabled_label
      end
    end
  end
end
