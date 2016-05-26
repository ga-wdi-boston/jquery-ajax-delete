#!/bin/sh

# use like this:
#
#     TITLE="Harry Potter: Deathly Hallows" $AUTHOR="J.K. Rowling" ./scripts/books.sh
#

curl --include --request "POST" "http://localhost:3000/books" \
  --header "Content-Type: application/json" \
  --data $'{
    "book": {
      "title": $TITLE,
      "author": $AUTHOR
    }
  }'
