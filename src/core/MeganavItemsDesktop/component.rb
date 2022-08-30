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

      def bg_css(panel_id)
        if %w[platform-panel use-cases-panel].include?(panel_id)
          'ui-meganav-panel-split-bg'
        else
          ''
        end
      end
    end
  end
end
