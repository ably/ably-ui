
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "ably_ui/version"

Gem::Specification.new do |spec|
  spec.name          = "ably-ui"
  spec.version       = AblyUi::VERSION
  spec.authors       = ["Dominik Piatek", "Arti Mathanda", "Bruce Thomas"]
  spec.email         = ["dominik.piatek@ably.com", "arti.mathanda@ably.com", "bruce.thomas@ably.com"]
  spec.summary       = "Shared component library and design system for Ably Real-time Ltd (ably.com)"
  spec.licenses      = ['Apache-2.0']
  spec.homepage      = "https://github.com/ably/ably-ui"

  spec.metadata = {
    "source_code_uri" => "https://github.com/ably/ably-ui",
  }

  spec.files         = Dir['lib/**/*'] + %w[Gemfile Gemfile.lock LICENSE README.md ably-ui.gemspec]

  spec.add_dependency "view_component", '>= 2.33', '< 3.10'
end
