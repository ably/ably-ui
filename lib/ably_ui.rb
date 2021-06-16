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

# Module shared code
require File.join(File.dirname(__FILE__), 'ably_ui', 'core', 'core.rb')

# Components; can be loaded in any order as they don't depend on each other at require time
Dir[File.join(File.dirname(__FILE__), 'ably_ui', '**' , '*.rb')].each {|file| require file }
