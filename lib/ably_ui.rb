require "ably_ui/version"

module AblyUi
  module Core
  end
end

Dir[File.join(File.dirname(__FILE__), 'ably_ui', '**' , 'component.rb')].each {|file| require file }
