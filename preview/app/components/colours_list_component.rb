class ColoursListComponent < ViewComponent::Base
  def colours
    [
      {
        group_name: "Primary",
        group_colours: [
          { bg: 'bg-cool-black', name: "Cool Black", hex: '#03020D' },
          { bg: 'bg-active-orange', name: "Active Orange", hex: '#FF5416' },
          { bg: 'bg-white', name: "White", hex: '#FFFFFF' }
        ]
      },
      {
        group_name: "Secondary",
        group_colours: [
          { bg: 'bg-electric-cyan', name: "Electric Cyan", hex: '#4AF7FF' },
          { bg: 'bg-zingy-green', name: "Zingy Green", hex: '#08FF13' },
          { bg: 'bg-bright-red', name: "Bright Red", hex: '#FF2739' },
          { bg: 'bg-jazzy-pink', name: "Jazzy Pink", hex: '#FF17D2' }
        ]
      },
      {
        group_name: "Neutrals",
        group_colours: [
          { bg: 'bg-extra-light-grey', name: "Extra Light Grey", hex: '#FAFAFB' },
          { bg: 'bg-light-grey', name: "Light Grey", hex: '#F5F5F6' },
          { bg: 'bg-mid-grey', name: "Mid Grey", hex: '#D9D9DA' },
          { bg: 'bg-dark-grey', name: "Dark Grey", hex: '#76767C' },
          { bg: 'bg-charcoal-grey', name: "Charcoal Grey", hex: '#292831' }
        ]
      },
      {
        group_name: "GUI",
        group_colours: [
          { bg: 'bg-gui-success', name: "Success", hex: '#11CB24' },
          { bg: 'bg-gui-error', name: "Error", hex: '#fb0c0c' },
          { bg: 'bg-gui-default', name: "Default", hex: '#0073e6' },
          { bg: 'bg-gui-hover', name: "Hover", hex: '#0867c4' },
          { bg: 'bg-gui-focus', name: "Focus", hex: '#0073e6' },
          { bg: 'bg-gui-focus-outline', name: "Focus Outline", hex: '#80b9f2' },
          { bg: 'bg-gui-active', name: "Active", hex: '#074095' },
          { bg: 'bg-gui-visited', name: "Visited", hex: '#4887c2' },
          { bg: 'bg-gui-unavailable', name: "Unavailable", hex: '#a8a8a8' }
        ]
      }
    ]
  end
end
