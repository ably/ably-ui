# frozen_string_literal: true

lib = File.expand_path('lib', __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'ably_ui/version'

Gem::Specification.new do |spec|
  spec.name          = 'ably-ui'
  spec.version       = AblyUi::VERSION
  spec.authors       = ['Kenneth Kalmer']
  spec.email         = ['kenneth.kalmer@ably.com']
  spec.summary       = 'Shared component library and design system for Ably Real-time Ltd (ably.com)'
  spec.licenses      = ['Apache-2.0']
  spec.homepage      = 'https://github.com/ably/ably-ui'

  spec.metadata = {
    'source_code_uri' => 'https://github.com/ably/ably-ui'
  }

  spec.files = Dir['lib/**/*'] + %w[Gemfile Gemfile.lock LICENSE README.md ably-ui.gemspec]

  spec.add_dependency 'view_component', '>= 2.33', '< 2.50'

  spec.required_ruby_version = '>= 3.1', '< 3.3'
end
