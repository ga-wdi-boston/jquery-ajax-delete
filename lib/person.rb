require_relative 'util'
require_relative 'address'

module PeopleApp
  class Person
    @id = 0; # reset id counter

    include Util

    attr_accessor :name, :occupation, :company_name, :address, :id

    def initialize(name, occupation, company_name, address)
      @name, @occupation = name, occupation
      @company_name, @address = company_name, address
      @id = self.class.gen_id
    end

    def to_html
      person_markup = <<-END.gsub(/^ {6}/, '')
      <dt id="person-#{self.id}" class="person">Person</dt>
      <dd>#{self.name}</dd>
      <dt>Occupation</dt>
      <dd>#{self.occupation}</dd>
      <dt>Company<dt>
      <dd>#{self.company_name}</dd>
      #{self.address.to_html}
      <hr><br>
      END
    end
  end

end

# person =  PeopleApp::Person.new(Faker::Name.name, Faker::Job.title, Faker::Company.name, PeopleApp::ADDRESSES.sample)
# puts "Person is #{person.to_html}"

# person =  PeopleApp::Person.new(Faker::Name.name, Faker::Job.title, Faker::Company.name, PeopleApp::ADDRESSES.sample)
# puts "Person is #{person.to_html}"
