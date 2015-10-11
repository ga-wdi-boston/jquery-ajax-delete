require_relative 'util'

module CarsApp
  class Car
    @id = 0; # reset id counter

    include ::PeopleApp::Util

    attr_accessor :name, :year, :id

    def initialize(name, year)
      @name, @year = name, year
      @id = self.class.gen_id
    end

    def to_html
      car_markup = <<-END.gsub(/^ {6}/, '')
      <dt id="car-#{self.id}" class="car">Car</dt>
      <dd>#{self.name}</dd>
      <dt>Year</dt>
      <dd>#{self.year}</dd>
      <hr><br>
      END
    end
  end

end
