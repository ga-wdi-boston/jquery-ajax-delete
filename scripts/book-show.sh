#!/bin/sh

# use like this:
#
#     ID=123 ./scripts/book-show.sh
#
curl --include --request GET "http://localhost:3000/books/$ID"
