class TitleComponent < ViewComponent::Base
  def initialize(react:, vw:)
    @react = react
    @vw = vw
  end

  def react_available?
    @react
  end

  def vw_available?
    @vw
  end
end
