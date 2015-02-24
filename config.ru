run  lambda { |env|
  [
    200,
   {"Content-Type" => "text/html" },
   ["Hello World"]
  ]
}

# default port for rackup is 9292
# rackup config.ru
# curl http://localhost:9292

# OR
# default port for rackup run on thin is 3000
# thin --rackup config.ru start
# curl http://localhost:3000
