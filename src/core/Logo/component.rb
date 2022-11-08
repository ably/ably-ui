module AblyUi
  module Core
    class Logo < ViewComponent::Base
      include AblyUi::Core::MeganavConfig

      attr_reader :href,
                  :logo_url,
                  :data_id,
                  :additional_img_attrs,
                  :additional_link_attrs

      def initialize(
        href:,
        logo_url:,
        data_id: '',
        additional_img_attrs: {},
        additional_link_attrs: {}
      )
        @data_id = data_id
        @href = href
        @logo_url = logo_url
        @additional_img_attrs = additional_img_attrs
        @additional_link_attrs = additional_link_attrs
      end

      def logo_href
        href.blank? ? '/' : href
      end
    end
  end
end
