require_relative 'people'

module PeopleApp

  class PeopleService

    # Listen to info about the incoming HTTP request.
    def http_say(request, media_type)
      ajax_msg = "This is " + (request.xhr? ? '' : 'not') + " an ajax request"

      %x{ say "request method is #{request.request_method.downcase()}" }
      %x{ say  "#{ajax_msg}" }
      %x{ say "request path is #{request.path}" }
      %x{ say "request media type is #{media_type}" }
    end

    def call(env)
      request = Rack::Request.new(env)
      response = Rack::Response.new
      content = ''

      media_type = mime_type(env)

      http_say(request, media_type)

      if request.path == '/people'
        content = PeopleApp::People.render(media_type)
      elsif request.path =~ /\/people\/+\d/
        id = request.path.split('/').last.to_i
        content = PeopleApp::People.find(id).render(media_type)
      else
        content = "Undefined route: #{request.path}"
      end

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
