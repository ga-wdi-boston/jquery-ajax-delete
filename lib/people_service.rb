require_relative 'people'

module PeopleApp

  class PeopleService

    def initialize(format)
      @format = format
    end

    def call(env)
      request = Rack::Request.new(env)
      response = Rack::Response.new

      media_type = mime_type(env)
      people =  PeopleApp::People.new(media_type)
      content = people.render

      response["Content-Type"] = media_type
      response.write(content)
      response.finish
    end

    private

    def mime_type(env)
      env["HTTP_ACCEPT"].split(',')[0]
    end

  end
end
