# `/v2`

`/v2` provides a human-readable description of the second version of the API. A machine readable version of the page can be requested via `/v2.json`.

The `routes` field of the `/v2.json` response contains a list of `route` objects (one per endpoint) that look like this:


```json
{
    "path": "/v2/account",
    "lang": false,
    "active": true
}
```

`path` indicates the URL path for the endpoint, `lang` indicates whether or not the endpoint accepts a `lang` query parameter and `active` is true iff the endpoint is currently enabled.

The list of languages that can be passed as a `lang` parameter are included in the response of `/v2.json` in the `langs` field.

# General `/v2/ Notes

## Bulk-Expansion

`/v2` is the rewrite of the legacy `/v1` endpoints; it largely uses a paradigm we're calling "bulk-expansion" to serve objects by id. A "bulk-expanded" endpoint provides two interfaces -- one for listing all object IDs and another for resolving object IDs to their data. This provides a uniform interface for retrieving data.

### ID List

The base endpoint of a bulk-expanded endpoint will always return the entire list of IDs that are available:

```http
GET /v2/colors HTTP/1.1
Host: api.guildwars2.com

HTTP/1.1 200 OK
Content-Type: application/json
X-Result-Count: 480
X-Result-Total: 480

[ 1, 2, 3, ... ]
```

Note that all bulk-expanded requests will return an `X-Result-Total` header which contains the total number of objects this endpoint exposes. Requests which return multiple objects (like the above) will additionally return an `X-Result-Count` which indicates how many objects (or IDs) have been returned in the response body.

### Retrieving Individual Objects

Objects can be retrieved individually by ID by passing an `id=` query parameter to the endpoint (or usually by appending `/$id` to the path):

```http
GET /v2/colors?id=1 HTTP/1.1
Host: api.guildwars2.com

HTTP/1.1 200 OK
Content-Type: application/json
X-Result-Total: 480

{
	"id" : 1,
	"name" : "Dye Remover",
	...
}
```

Or alternatively,

```http
GET /v2/colors/1 HTTP/1.1
Host: api.guildwars2.com
```

### Retrieving Paginated Objects

Bulk-expanded endpoints also support pagination -- this is the most efficient way to enumerate all objects.

```http
GET /v2/colors?page=0&page_size=50
Host: api.guildwars2.com

HTTP/1.1 200 OK
Content-Type: application/json
X-Page-Size: 50
X-Page-Total: 10
X-Result-Count: 50
X-Result-Total: 480
Link: </v2/colors?page=1&page_size=50>; rel=next, </v2/colors?page=0&page_size=50>; rel=self, </v2/colors?page=0&page_size=50>; rel=first, </v2/colors?page=9&page_size=50>; rel=last

[
	{ "id" : 1, "name" : "Dye Remover", ... },
	{ "id" : 2, "name" : "Black", ... },
	...
]
```

In addition to normal response headers, paginated requests return some additional metadata: `X-Page-Size` returns the page size chosen for pagination (default is 50, max page size is usually 200); `X-Page-Total` returns the total number of pages.

There's also an [RFC 5988](https://tools.ietf.org/html/rfc5988) `Link` header which includes links to various pages (next, previous, current, first and last) which some may find useful.

### Retrieving Specific Object Sets

In many cases, applications will want to retrieve a specific set of objects. You can pass list of arbitrary IDs via comma-delimited list in the `ids` query parameter to a bulk-expanded endpoint to request a specific set of objects --

```http
GET /v2/colors?ids=1,2
Host: api.guildwars2.com

HTTP/1.1 200 OK
Content-Type: application/json
X-Result-Count: 2
X-Result-Total: 480

[
	{ "id" : 1, "name" : "Dye Remover", ... },
	{ "id" : 2, "name" : "Black", ... }
]
```

There is a maximum of 200 objects/request.

If one or more IDs requested is invalid, the endpoint will return `206 Partial Content` instead of `200 OK`; the body will contain the objects that the endpoint was able to resolve. If all requested IDs are invalid, the endpoint will return `404 Not Found`.

## Authenticated Endpoints

A subset of endpoints are authenticated -- they require an API key for usage and return data specific to the account associated with that API key. API keys can be created by end-users via [the account management site](https://account.guildwars2.com/applications).

Once an API key is acquired from a user, it can be used indefinitely until the user manually revokes it. The permission set associated with an API key is fixed and can be checked mechanically with `/v2/tokeninfo`.

To interact with an authenticated endpoint, pass the API key via the `?access_token` query parameter or via an `Authorization` header. We don't support non-simple CORS requests, so the latter is not viable from within a browser context.

```http
GET /v2/tokeninfo?access_token=017A2B0C-A6C5-CC4D-A055-680F427CE8FDFD19A439-15C7-4EC1-AA3C-B84C4F6E5A71 HTTP/1.1
Host: api.guildwars2.com

HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "017A2B0C-A6C5-CC4D-A055-680F427CE8FD",
    "name": "public key",
    "permissions": [
        "account",
        "characters"
    ]
}
```

```http
GET /v2/tokeninfo HTTP/1.1
Authorization: Bearer 017A2B0C-A6C5-CC4D-A055-680F427CE8FDFD19A439-15C7-4EC1-AA3C-B84C4F6E5A71
Host: api.guildwars2.com
```

## Errors

Generally, when an error is encountered a non-2XX HTTP response code will be returned and the body will contain a JSON object with a human-readable error string in the `text` field:

```http
GET /v2/colors?ids=-1 HTTP/1.1
Host: api.guildwars2.com

HTTP/1.1 404 Not Found
Content-Type: application/json

{
    "text": "all ids provided are invalid"
}
```

There are times where something absolutely terrible happens (e.g., the backend API servers go down) and you get an IIS HTTP 502 error -- double-check the `Content-Type` header (or parse the maybe-not-JSON response body carefully).
