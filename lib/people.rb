require_relative 'person'

module PeopleApp
  class People
    attr_accessor :all, :format

    def initialize(format)
      # default format
      @format = format || 'text/html'

      # collection of people
      @all = []

      # create a bunch
      20.times do
        @all << Person.new(Faker::Name.name, Faker::Job.title, Faker::Company.name, ADDRESSES.sample)
      end
    end

    def to_html
      #      content = '<ul>People '
      content = '<dl>'
      @all.each do |person|
        content += person.to_html
      end
      #      content += '</ul>'
      content += '</dl>'
    end

    def to_json
      content = '['
      @all.each do |person|
        content += person.to_json
      end
      content += ']'
    end

    def render
      if format == "text/html"
        self.to_html
      else format == "application/json"
        self.to_json
      end
    end

  end
end
