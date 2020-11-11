require "ably_ui/version"

module AblyUi
  module Integration
    class << self
      def asset_paths
        File.expand_path("../lib", File.dirname(__FILE__))
      end
    end
  end
end

Dir[File.join(File.dirname(__FILE__), 'ably_ui', '**' , 'component.rb')].each {|file| require file }
