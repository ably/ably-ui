require 'json'

module AblyUi
  module Core
    class CustomerLogos < ViewComponent::Base
      attr_reader :companies

      def initialize(companies:)
        @companies = companies
      end
    end
  end
end
