#!/bin/sh

# use like this:
#
#     ID=123 ./scripts/book-delete.sh
#
curl --include --request DELETE "http://localhost:3000/books/$ID"
