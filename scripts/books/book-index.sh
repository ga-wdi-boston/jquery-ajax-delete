#!/bin/sh

# use like this:
#
#     ./scripts/book-index.sh
#
curl --include --request GET 'http://localhost:3000/books'
