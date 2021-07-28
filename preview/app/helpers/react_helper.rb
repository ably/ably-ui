module ReactHelper
  def react_component(name, props = {}, options = {})
    format_keys = (options || {}).fetch(:format_keys, true)
    props = props.deep_transform_keys { |key| String(key).camelize(:lower) } if format_keys
    # Pass name as dash-case, like the file or HTML attributes, but keep the convention
    # of upper camelcase for React components
    camelized_name = name.underscore.camelcase
    classnames = options[:classnames] || '';

    content_tag(:div, "", class: classnames, data: { react: camelized_name, react_props: props })
  end
end
