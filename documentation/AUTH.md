# Authentication

- https://docs.nestjs.com/recipes/passport

- https://github.com/nestjs/jwt

POST `auth/login`

_Passport_

- https://www.passportjs.org/concepts/authentication/strategies/

_Next.js_

_Using Auth.js_

- https://authjs.dev/reference/nextjs#auth

_Coookies in server components_

- import { cookies } from 'next/headers'
- https://nextjs.org/docs/app/api-reference/functions/cookies

## Headers

**Access-Control-Allow-Origin**

The Access-Control-Allow-Origin header is a CORS (Cross-Origin Resource Sharing) response header that indicates which origins are allowed to access the resource. The value \* means that any origin is allowed to access the resource. In other words, the server is allowing any website to access the resource, regardless of the domain name or protocol. This is useful for public APIs that need to be accessed by multiple websites.

**Access-Control-Allow-Credentials**

When the Access-Control-Allow-Credentials header is set to true, it means that the server allows cross-origin requests to include credentials such as cookies, TLS client certificates, or authentication headers containing a username and password 1. In other words, the server is allowing the client to send and receive cookies or other sensitive data in cross-origin requests.

## Error log

### Problem: Browser setzt keine Cookies.

Response aus dem Backend

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Set-Cookie: access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzQGVtYWlsLmNvbSIsInV1aWQiOiJjNWYwMjVmMi00NjM5LTRmZmYtOWVkYi1hYjdiODY4NzQ5OTkiLCJpYXQiOjE3MDUyNDY5MDUsImV4cCI6MTcwNzgzODkwNX0.uv9TFxqCrUrCZIrnls5P3Z1yzt6oBAnIp_SB_q9pOiw; Domain=localhost; Path=/; Expires=Tue, 13 Feb 2024 15:41:45 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 107
ETag: W/"6b-mOKxMV1qkQfQjnA8C8G3Of4NReY"
Date: Sun, 14 Jan 2024 15:41:45 GMT
Connection: close

{
  "uuid": "c5f025f2-4639-4fff-9edb-ab7b86874999",
  "name": "Kilian",
  "lastname": "Schrenk",
  "email": "ks@email.com"
}
```

Lösung 1: cookie options modifizieren

```
  {
  secure: false,
  sameSite: 'lax',
  dommain: localhost
  }
```

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Set-Cookie: access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzQGVtYWlsLmNvbSIsInV1aWQiOiJjNWYwMjVmMi00NjM5LTRmZmYtOWVkYi1hYjdiODY4NzQ5OTkiLCJpYXQiOjE3MDUyNDcxNTIsImV4cCI6MTcwNzgzOTE1Mn0.tcmiWNDvSxqt23_8ncnJANzkgM_SpbloOm1huNNa2pc; Domain=localhost; Path=/; Expires=Tue, 13 Feb 2024 15:45:52 GMT; SameSite=Lax
Content-Type: application/json; charset=utf-8
Content-Length: 107
ETag: W/"6b-mOKxMV1qkQfQjnA8C8G3Of4NReY"
Date: Sun, 14 Jan 2024 15:45:52 GMT
Connection: close

{
  "uuid": "c5f025f2-4639-4fff-9edb-ab7b86874999",
  "name": "Kilian",
  "lastname": "Schrenk",
  "email": "ks@email.com"
}
```

Lösung 2. fetch api genauer betrachten

- was hat es mit axio und withCredentials auf sich?
- gibt es ein credentials prop in fetch?

```

```
