require_relative 'car'

module CarsApp
  class Cars
    @all = []

    # create a bunch of cars
    20.times do
      # name and year
      @all << Car.new(['Chevy', 'Taurus', 'Camry', 'Tesla'].sample, (1999..2016).to_a.sample)
    end

    # find the first, should be only, car with a specific id.
    def self.find(id)
      @all.map do |car|
        car if car.id == id
      end.compact.first
    end

    def self.to_html
      content = '<dl>'
      @all.each do |car|
        content += car.to_html
      end
      content += '</dl>'
    end

    def self.to_json
      content = []
      @all.each do |car|
        content << car.to_h
      end
      content.to_json
    end

    def self.render(format)
      if format == "text/html"
        self.to_html
      else format == "application/json"
        self.to_json
      end
    end

  end
end
