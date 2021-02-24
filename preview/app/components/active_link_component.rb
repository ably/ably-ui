class ActiveLinkComponent < ViewComponent::Base
  def initialize(to:, classes: "", active_classes: "")
    @to = to
    @classes = classes
    @active_classes = active_classes
  end
end
