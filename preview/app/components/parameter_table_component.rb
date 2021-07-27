class ParameterTableComponent < ViewComponent::Base
  attr_reader :rows, :framework

  def initialize(rows, framework)
    @rows = rows
    @framework = framework
  end

  def data
    if framework === 'vw'
      rows
    else
      rows.map { |row| row.merge({ name: row[:name].camelize(:lower) }) }
    end
  end
end
