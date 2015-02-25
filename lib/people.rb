require_relative 'person'

module PeopleApp
  class People
    @all = []

    # create a bunch of people
    20.times do
      @all << Person.new(Faker::Name.name, Faker::Job.title, Faker::Company.name, ADDRESSES.sample)
    end

    # find the first, should be only, person with a specific id.
    def self.find(id)
      @all.map do |person|
        person if person.id == id
      end.compact.first
    end

    def self.to_html
      content = '<dl>'
      @all.each do |person|
        content += person.to_html
      end
      content += '</dl>'
    end

    def self.to_json
      content = []
      @all.each do |person|
        content << person.to_h
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
