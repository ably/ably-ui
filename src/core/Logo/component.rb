module AblyUi
  module Core
    class Logo < ViewComponent::Base
      def logo_path
        asset_path 'ably_ui/core/images/ably-logo.svg'
      end
    end
  end
end
