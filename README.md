![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Ajax GET

## Objectives

By the end of this, students should be able to:

- Introduced to Asynchronous processing.
- Know what AJAX is.
- Know how to load JSON from a backend server.
- Know how to load HTML from a backend server.

## Setup

- Fork and clone
- Run `bundle install`

## Instructions

### Run the simplest Rack application.
*You remember Ruby, you're good ole friend, Don't you miss her?*

* Create a rack application, rackup.  
	In config.ru  
	
```
run lambda { |env|
  [
    200,
   {"Content-Type" => "text/html" },
   ["Hello World"]
  ]
}
```

* Run this rack application, this will be the backend server. *This will run a server on port 9292.*  
```
  rackup
```
* Load HTML from the backend.  
```
  http://localhost:9292
```

### Run a Rack app to serve static files
This will run the files in the public directory.  


* In config.ru  

```
 #Serve static files, (html, js, css, ...)                                       
root = "public"
urls = Dir.glob("#{root}/*").map { |fn| fn.gsub(/#{root}/, '')}

use Rack::Static,
    :urls => urls,
    :root => root,
    :index => 'index.html',
    :header_rules => [[:all, {'Cache-Control' => 'public, max-age=3600'}]]
    
 # Handle unknown URLs                                                           
headers = {'Content-Type' => 'text/html', 'Content-Length' => '9'}
run lambda { |env| [404, headers, ['Not Found']] }    

```

* Run the rack app on port 333.

```
rackup -p 3333 config.ru
```

* Look at public/index.html. *Pretty simple page ey?*    

* Create a simple javascript file in public/js/simple.js

```
$(document).ready(ƒ(){
  $('#messagesDiv').html('foobar');
});
```

* In the browser to to http://localhost:3333  


Here, we have created the simple of servers. All it will
do is load files from the file system. In production we would use a web server like Apache or NGINX to get these static files/assets.

### Send an Ajax GET request to the server.

* Create a *route*, /json , and ruby code to serve up JSON.  
In config.ru  

```
 # just returns simple json for /json
send_json = lambda do |env|
  [200, {"Content-Type" => "application/json"}, ["{name: 'tom', age: 57}"] ]
end

map "/json" do
  run send_json
end

 # Handle unknown URLs  
```

Go to /json URL in your browser. You should see the JSON.

* Create an Ajax GET request to get the json from the backend.

```
 
```




```javascript
function(){
  var x = 2
  var y = 3
  return x + y
};

```

## Bonus (Optional Section)

If you're looking for extra challenge or practice once you've completed the above, try to...

## Notes

Gotcha's and extra information

## Additional Resources

List additional related resources such as videos, blog posts and official documentation.

- Item 1
- Item 2
- Item 3
