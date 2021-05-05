module AblyUi
  module Core
    class Showcase < ViewComponent::Base
      include AblyUi::Core::Util
      def initialize(companies: default_companies, layout: 'quotes')
        @random_id = append_random_postfix('showcase-slides')
        @companies =
          companies.map do |key|
            logo = company_logos[key]
            logo[:layout] = layout

            content = layout != 'quotes' ? case_studies : quotations

            if !content[key]
              # Exception errors can not be rescued
              raise Exception.new "Showcase Error: Can't find content item [#{key}] for layout [#{layout}]"
            end

            logo.merge(content[key])
          end
      end

      def default_companies
        %i[hubspot vitac split]
      end

      def company_logos
        {
          hubspot: {
            name: 'Hubspot',
            logo:
              asset_path('ably_ui/core/images/cust-logo-hubspot-col-pos.png'),
            logo2x:
              asset_path('ably_ui/core/images/cust-logo-hubspot-col-pos@2x.png')
          },
          vitac: {
            name: 'Vitac',
            logo: asset_path('ably_ui/core/images/cust-logo-vitac-col-pos.png'),
            logo2x:
              asset_path('ably_ui/core/images/cust-logo-vitac-col-pos@2x.png')
          },
          split: {
            name: 'Split',
            logo: asset_path('ably_ui/core/images/cust-logo-split-col-pos.png'),
            logo2x:
              asset_path('ably_ui/core/images/cust-logo-split-col-pos@2x.png')
          },
          lightspeed: {
            name: 'Lightspeed',
            logo:
              asset_path(
                'ably_ui/core/images/cust-logo-lightspeed-syst-col-pos.png'
              ),
            logo2x:
              asset_path(
                'ably_ui/core/images/cust-logo-lightspeed-syst-col-pos@2x.png'
              )
          },
          australian_open: {
            name: 'Australian Open',
            logo:
              asset_path('ably_ui/core/images/cust-logo-ausopen-col-pos.png'),
            logo2x:
              asset_path('ably_ui/core/images/cust-logo-ausopen-col-pos@2x.png')
          }
        }
      end

      def quotations
        {
          hubspot: {
            quote:
              "Ably’s realtime infrastructure layer seamlessly supports HubSpot's entire realtime needs and helps us meet technical, business, and product development requirements.",
            author: {
              name: 'Max Freiert',
              thumbnail:
                asset_path(
                  'ably_ui/core/images/cust-photo-hubspot-max-freiert.jpg'
                ),
              title: 'Product Group Lead / HubSpot'
            }
          },
          vitac: {
            quote:
              'In a high-stakes, highly competitive industry, VITAC sought a provider that could operate realtime infrastructure for transporting live data to end-users via a complex, multi-hop process. In media accessibility environments - where there’s zero margin for error - Ably’s infrastructure performs and exceeds expectations.',
            author: {
              name: 'Joe Antonio',
              thumbnail:
                asset_path(
                  'ably_ui/core/images/cust-photo-vitac-joe-antonio.jpg'
                ),
              title: 'Chief Information Officer / VITAC'
            }
          },
          split: {
            quote:
              'You miss so much by not using a platform like Ably. When you need to implement a new feature, the capabilities are there, ready to go. Or when you need to scale, the capacity is seamlessly available. There’s no need to even think about these things. Building on Ably was the only logical choice because we managed to bypass a hefty DevOps debt and rapidly ship our new streaming capabilities while keeping our architecture as simple and reliable as possible.',
            author: {
              name: 'Pato Echagüe',
              thumbnail:
                asset_path(
                  'ably_ui/core/images/cust-photo-split-pato-echague.jpg'
                ),
              title: 'Chief Technical Officer / Split'
            }
          }
        }
      end

      def case_studies
        {
          hubspot: {
            columns: [
              {
                heading: '$600k',
                text: 'annual savings on infrastructure and DevOps'
              },
              {
                heading: 'LIVE CHAT AND REMOTE COLLABORATION',
                text:
                  "Ably’s realtime platform seamlessly supports HubSpot's entire realtime needs and helps us meet technical, business, and product development, requirements.",
                button: {
                  label: 'View case study',
                  href: '#'
                }
              }
            ]
          },
          lightspeed: {
            columns: [
              {
                heading: '75 million',
                text: 'Students supported in 28,000 schools in 38 countries'
              },
              {
                heading: 'REMOTE LEARNING AND DEVICE MANAGEMENT',
                text:
                  'Lightspeed Systems relies on Ably’s realtime platform to enable realtime student safety for remote and classroom learning solutions at scale.',
                button: {
                  label: 'View case study',
                  href: '#'
                }
              }
            ]
          },
          australian_open: {
            columns: [
              {
                heading: '1.2 million',
                text: 'Fans receiving billions of realtime messages'
              },
              {
                heading: 'SPORTS, MEDIA, & AUDIENCE ENGAGEMENT',
                text:
                  'Only Ably meets The Australian Open’s exacting performance targets, reliably delivering realtime scores, updates and commentary to a huge global fan base.',
                button: {
                  label: 'View case study',
                  href: '#'
                }
              }
            ]
          },
          split: {
            columns: [
              {
                heading: '>1 trillion',
                text: 'Monthly feature flags sent over Ably’s network'
              },
              {
                heading: 'REALTIME FEATURE FLAGS AND ANALYTICS',
                text:
                  'Ably’s realtime platform and SSE support enable Split to deliver more than one trillion business-critical feature flags to tens of millions of client apps every month.',
                button: {
                  label: 'View case study',
                  href: '#'
                }
              }
            ]
          }
        }
      end
    end
  end
end
