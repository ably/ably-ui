require "ably_ui/version"

module AblyUi
  module Integration
    class << self
      def asset_paths
        File.expand_path("../lib", File.dirname(__FILE__))
      end

      def precompile_images_paths
        ["*.svg", "*.png", "*.jpg", "*.jpeg"].map do |ext|
          Dir[File.join(File.dirname(__FILE__), 'ably_ui', '**', 'images' , ext)]
        end.flatten
      end

      def icon_sprites_paths
        Dir[File.join(File.dirname(__FILE__), 'ably_ui', '**' , "sprites.svg")]
      end
    end
  end
end

Dir[File.join(File.dirname(__FILE__), 'ably_ui', '**' , 'component.rb')].each {|file| require file }
