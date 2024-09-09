export const formsHtml = `
<div class="ui-checkbox-p1">
  <input
    data-ui-checkbox-native
    type="checkbox"
    id="checkbox"
    name="checkbox"
    value="yes"
    class="ui-checkbox-input" />

  <div
    data-ui-checkbox-styled
    class="ui-checkbox-styled">
    <svg class="ui-checkbox-styled-tick">
      <use xlink:href="#sprite-icon-gui-tick"></use>
    </svg>
  </div>

  <label for="checkbox-example" class="ui-checkbox-label-p1">Yes</label>
</div>
`;

export const togglesHtml = `
<div className="flex items-center gap-24 mb-16">
  <label className="ui-toggle">
    <input type="checkbox" />
    <span className="ui-toggle-slider"></span>
  </label>
  Default
</div>
`;
