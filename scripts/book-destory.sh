#!/bin/sh

# use like this:
#
#     ID=123 ./scripts/book-destory.sh
#
curl --include --request DELETE "http://localhost:3000/books/$ID"
