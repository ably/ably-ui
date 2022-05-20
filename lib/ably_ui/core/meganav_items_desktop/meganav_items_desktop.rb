module AblyUi
  module Core
    class MeganavItemsDesktop < ViewComponent::Base
      include MeganavConfig
      include Util

      attr_reader :url_base

      def initialize(theme_name:, url_base:)
        @theme_name = theme_name
        @url_base = url_base
      end
    end
  end
end
