require_relative  'util'

module PeopleApp
  class Address
    @id = 0;  # reset id counter

    include Util

    attr_accessor :street, :city, :state, :zipcode, :id

    def initialize(street, city, state)
      @street, @city, @state = street, city, state
      @id = self.class.gen_id
    end

    def to_html
      addr_markup = <<-END.gsub(/^ {6}/, '')
      <dt id="address-#{self.id}" class="address">Address</dt>
      <dd>#{street}, #{city}, #{state}</dd>
      </dt>
      END
    end
  end

  ADDRESSES = []

  5.times do
    ADDRESSES << Address.new(Faker::AddressUS.street_address, Faker::AddressUS.city, Faker::AddressUS.state_abbr)
  end

end

# PeopleApp::ADDRESSES.each do |a| puts a.to_html end
# PeopleApp::ADDRESSES.each do |a| puts a.to_h end
# PeopleApp::ADDRESSES.each do |a| puts a.to_json end
