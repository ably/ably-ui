module Api
  class UserSessionController < ApplicationController
    include ActionController::MimeResponds
    respond_to :json

    def me
      if session[:signed_in]
        render json: helpers.session_data
      else
        render json: { error: "not-found" }, status: 404
      end
    end
  end
end
