class ColoursListComponent < ViewComponent::Base
  def colours
    [
      {
        group_name: "Primary",
        group_colours: [
          { bg: 'bg-cool-black', name: "Cool Black", hex: '#03020D', rgb: '0, 2, 13' },
          { bg: 'bg-active-orange', name: "Active Orange", hex: '#FF5416', rgb: '255, 84, 22' },
          { bg: 'bg-white', name: "White", hex: '#FFFFFF', rgb: '255, 255, 255' }
        ]
      },
      {
        group_name: "Secondary",
        group_colours: [
          { bg: 'bg-electric-cyan', name: "Electric Cyan", hex: '#4AF7FF', rgb: '74, 247, 255' },
          { bg: 'bg-zingy-green', name: "Zingy Green", hex: '#08FF13', rgb: '8, 255, 19' },
          { bg: 'bg-bright-red', name: "Bright Red", hex: '#FF2739', rgb: '255, 39, 57' },
          { bg: 'bg-jazzy-pink', name: "Jazzy Pink", hex: '#FF17D2', rgb: '255, 23, 210' }
        ]
      },
      {
        group_name: "Neutrals",
        group_colours: [
          { bg: 'bg-light-grey', name: "Light Grey", hex: '#F5F5F6', rgb: '245, 245, 246' },
          { bg: 'bg-mid-grey', name: "Mid Grey", hex: '#D9D9DA', rgb: '217, 217, 218' },
          { bg: 'bg-dark-grey', name: "Dark Grey", hex: '#76767C', rgb: '118, 118, 124' },
          { bg: 'bg-charcoal-grey', name: "Charcoal Grey", hex: '#292831', rgb: '41, 40, 49' }
        ]
      }
    ]
  end
end
