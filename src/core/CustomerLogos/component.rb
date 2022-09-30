require 'json'

module AblyUi
  module Core
    class CustomerLogos < ViewComponent::Base
      attr_reader :companies

      def initialize(companies:, additional_css: "")
        @companies = companies
        @additional_css = additional_css
      end
    end
  end
end
