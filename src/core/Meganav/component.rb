require "json"

module AblyUi
  module Core
    class Meganav < ViewComponent::Base
      include MeganavThemes

      def initialize(session_data: {}, theme_name: :white)
        @session_data = session_data
        @theme_name = theme_name
        theme_setup(theme_name)
      end

      def panels
        [
          { label: "Platform", id: "platform-panel", class: "AblyUi::Core::PlatformPanel" },
          { label: "Use Cases", id: "use-cases-panel", class: "AblyUi::Core::UseCasesPanel" },
          { label: "Why Ably", id: "why-ably-panel", class: "AblyUi::Core::WhyAblyPanel" },
          { label: "Developers", id: "developers-panel", class: "AblyUi::Core::DevelopersPanel" },
        ]
      end
    end
  end
end
