#Serve static files, (html, js, css, ...)
root = "public"
urls = Dir.glob("#{root}/*").map { |fn| fn.gsub(/#{root}/, '')}
puts "urls are #{urls}"

use Rack::Static,
    :urls => urls,
    :root => root,
    :index => 'index.html',
    :header_rules => [[:all, {'Cache-Control' => 'public, max-age=3600'}]]

# just returns simple json for /json
send_json = lambda do |env|
  [200, {"Content-Type" => "application/json"}, ["{name: 'tom', age: 57}"] ]
end

map "/people" do
  run send_json
end

# Handle unknown URLs
headers = {'Content-Type' => 'text/html', 'Content-Length' => '9'}
run lambda { |env| [404, headers, ['Not Found']] }

# rackup
