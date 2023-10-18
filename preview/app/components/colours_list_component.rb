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
          { bg: 'bg-electric-cyan', name: "Electric Cyan", hex: '#4AD4FF' },
          { bg: 'bg-zingy-green', name: "Zingy Green", hex: '#08FF13' },
          { bg: 'bg-bright-red', name: "Bright Red", hex: '#FE372B' },
          { bg: 'bg-jazzy-pink', name: "Jazzy Pink", hex: '#FF17D2' }
        ]
      },
      {
        group_name: "Neutrals",
        group_colours: [
          { bg: 'bg-extra-light-grey', name: "Extra Light Grey", hex: '#F8FAFC' },
          { bg: 'bg-light-grey', name: "Light Grey", hex: '#F4F8FB' },
          { bg: 'bg-mid-grey', name: "Mid Grey", hex: '#C6CED9' },
          { bg: 'bg-dark-grey', name: "Dark Grey", hex: '#667085' },
          { bg: 'bg-charcoal-grey', name: "Charcoal Grey", hex: '#2B303B' },
          { bg: 'bg-neutral-500', name: "Neutral 500", hex: '#C6CED9' },
          { bg: 'bg-neutral-900', name: "Neutral 900", hex: '#39414E' }
        ]
      },
      {
        group_name: "GUI",
        group_colours: [
          { bg: 'bg-gui-default', name: "Default (Light)", hex: '#006EDC' },
          { bg: 'bg-gui-hover', name: "Hover (Light)", hex: '#0862B9' },
          { bg: 'bg-gui-active', name: "Active (Light)", hex: '#074095' },
          { bg: 'bg-gui-default-dark', name: "Default (Dark)", hex: '#4DA6FF' },
          { bg: 'bg-gui-hover-dark', name: "Hover (Dark)", hex: '#2894FF' },
          { bg: 'bg-gui-active-dark', name: "Active (Dark)", hex: '#0080FF' },
          { bg: 'bg-gui-visited', name: "Visited", hex: '#4887c2' },
          { bg: 'bg-gui-focus', name: "Focus", hex: '#80B9F2' },
          { bg: 'bg-gui-focus-outline', name: "Focus Outline", hex: '#80B9F2' },
          { bg: 'bg-gui-unavailable', name: "Unavailable", hex: '#a8a8a8' },
          { bg: 'bg-gui-success', name: "Success", hex: '#11CB24' },
          { bg: 'bg-gui-error', name: "Error", hex: '#FB0C0C' },

        ]
      }
    ]
  end
end
