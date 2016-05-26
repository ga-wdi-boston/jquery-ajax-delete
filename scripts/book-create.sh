curl --include --request "POST" "http://localhost:3000/books" \
  --header "Content-Type: application/json" \
  --data $'{
    "book": {
      "title": "The Moon is a Harsh Mistress",
      "author": "Robert A. Heinlein"
    }
  }'
