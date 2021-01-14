require "json"

MEGANAV_DATA = JSON.parse(File.read(File.join(File.dirname(__FILE__), 'meganav', 'component.json')))

module AblyUi
  module Core
    module MeganavThemes
      def theme_setup(theme_name)
        @theme_name = theme_name
      end

      def themes
        MEGANAV_DATA["themes"].deep_transform_keys { |key| key.underscore.to_sym }
      end

      def theme(style)
        themes[@theme_name][style]
      end
    end
  end
end
