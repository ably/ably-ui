module ReactHelper
  def react_component(name, props = {}, options = {})
    format_keys = options.fetch(:format_keys, true)
    wrapper_css = options.fetch(:wrapper_css, '')
    props =
      props.deep_transform_keys do |key|
        String(key).camelize(:lower)
      end if format_keys

    # Pass name as dash-case, like the file or HTML attributes, but keep the convention
    # of upper camelcase for React components
    camelized_name = name.underscore.camelcase
    content_tag(
      :div,
      '',
      data: {
        react: camelized_name,
        react_props: props
      },
      class: wrapper_css
    )
  end
end
