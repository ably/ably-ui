module Api
	class CompanyDataController < ApplicationController
	  include ActionController::MimeResponds
	  respond_to :json

	  def companies
	    render json: [
	      {
          name: "Apple",
          domain: "apple.com",
          logo: "https://logo.clearbit.com/apple.com"
        },
        {
          name: "All Things Apple",
          domain: "apple.news",
          logo: "https://logo.clearbit.com/apple.news"
        },
        {
          name: "AppleInsider",
          domain: "appleinsider.com",
          logo: "https://logo.clearbit.com/appleinsider.com"
        },
        {
          name: "Applebee's Grill + Bar",
          domain: "applebees.com",
          logo: "https://logo.clearbit.com/applebees.com"
        },
        {
          name: "Apple Federal Credit Union",
          domain: "applefcu.org",
          logo: "https://logo.clearbit.com/applefcu.org"
        }
      ]
	  end
	end
end
