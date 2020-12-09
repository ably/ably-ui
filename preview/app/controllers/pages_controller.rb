class PagesController < ApplicationController
  layout :page_layout

  def index; end
  def typography; end

  private

  def page_layout
    params['vw'].nil? ? "application" : "view_component"
  end
end
