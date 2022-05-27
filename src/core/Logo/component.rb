require 'securerandom'

module AblyUi
  module Core
    class Logo < ViewComponent::Base
      include AblyUi::Core::MeganavConfig

      attr_reader :href, :data_id, :gradient_id_0, :gradient_id_1

      def initialize(data_id: '', href:)
        @data_id = data_id
        @href = href
        @gradient_id_0 = "paint_linear_#{SecureRandom.uuid}"
        @gradient_id_1 = "paint_linear_#{SecureRandom.uuid}"
      end

      def logo_href
        href.blank? ? '/' : href
      end
    end
  end
end
