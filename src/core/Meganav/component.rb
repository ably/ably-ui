require "json"

module AblyUi
  module Core
    class Meganav < ViewComponent::Base
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
