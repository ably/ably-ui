class ParameterTableComponent < ViewComponent::Base
  attr_reader :rows

  def initialize(rows)
    @rows = rows
  end

  def data
    rows.map { |row| row.merge({ name: row[:name].camelize(:lower) }) }
  end
end
