class PagesController < ApplicationController
  def index
  end

  def globals
    render :globals, layout: 'view_component'
  end
end
