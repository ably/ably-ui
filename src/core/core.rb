require 'json'

MEGANAV_DATA =
  JSON.parse(
    File.read(File.join(File.dirname(__FILE__), 'meganav', 'component.json'))
  )

module AblyUi
  module Core
    module MeganavConfig
      def theme_setup(theme_name)
        @theme_name = theme_name
      end

      def themes
        MEGANAV_DATA['themes'].deep_transform_keys do |key|
          key.underscore.to_sym
        end
      end

      def panels
        MEGANAV_DATA['panels'].map do |panel|
          panel.deep_transform_keys { |key| key.underscore.to_sym }
        end
      end

      def theme(style)
        themes[@theme_name][style]
      end
    end

    module SharedAssets
      def ably_stack_path
        asset_path 'ably_ui/core/images/ably-stack.svg'
      end

      def rocket_list
        asset_path 'ably_ui/core/images/rocket-list-2021.png'
      end

      def flexible_companies
        asset_path 'ably_ui/core/images/flexible-companies.png'
      end
    end

    module Util
      # This is useful where we need to use an HTML id (like in aria-controls attribute) but we know the component
      # might be used multiple times per page so we can't just hard code one in HTML.
      # eg. my-component -> my-component-uur0cj2h
      # credits https://gist.github.com/mbajur/2aba832a6df3fc31fe7a82d3109cb626
      def append_random_postfix(id)
        "#{id}-#{rand(36**8).to_s(36)}"
      end
    end
  end
end
