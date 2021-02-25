module AblyUi
  module Core
    class Showcase < ViewComponent::Base
      def initialize(companies: default_companies)
        @companies = companies
      end

      def default_companies
        [
          {
            name: "Hubspot",
            logo: asset_path("ably_ui/core/images/cust-logo-hubspot-col-pos.png"),
            logo2x: asset_path("ably_ui/core/images/cust-logo-hubspot-col-pos@2x.png"),
            quote: "Ably’s realtime infrastructure layer seamlessly supports HubSpot's entire realtime needs and helps us meet technical, business, and product development requirements.",
            author: {
              name: "Max Freiert",
              thumbnail: asset_path("ably_ui/core/images/cust-photo-hubspot-max-freiert.jpg"),
              title: "Product Group Lead / HubSpot"
            }
          },
          {
            name: "Vitac",
            logo: asset_path("ably_ui/core/images/cust-logo-vitac-col-pos.png"),
            logo2x: asset_path("ably_ui/core/images/cust-logo-vitac-col-pos@2x.png"),
            quote: "In a high-stakes, highly competitive industry, VITAC sought a provider that could operate realtime infrastructure for transporting live data to end-users via a complex, multi-hop process. In media accessibility environments - where there’s zero margin for error - Ably’s infrastructure performs and exceeds expectations.",
            author: {
              name: "Joe Antonio",
              thumbnail: asset_path("ably_ui/core/images/cust-photo-vitac-joe-antonio.jpg"),
              title: "Chief Information Officer / VITAC"
            }
          },
          {
            name: "Split",
            logo: asset_path("ably_ui/core/images/cust-logo-split-col-pos.png"),
            logo2x: asset_path("ably_ui/core/images/cust-logo-split-col-pos@2x.png"),
            quote: "You miss so much by not using a platform like Ably. When you need to implement a new feature, the capabilities are there, ready to go. Or when you need to scale, the capacity is seamlessly available. There’s no need to even think about these things. Building on Ably was the only logical choice because we managed to bypass a hefty DevOps debt and rapidly ship our new streaming capabilities while keeping our architecture as simple and reliable as possible.",
            author: {
              name: "Pato Echagüe",
              thumbnail: asset_path("ably_ui/core/images/cust-photo-split-pato-echague.jpg"),
              title: "Chief Technical Officer / Split"
            }
          }
        ]
      end
    end
  end
end
