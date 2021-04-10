

### Some things to think about:

* How to access the cookie values
* Adding a custom validation handlers a [bit like this](https://stackoverflow.com/questions/60858985/addopenidconnect-and-refresh-tokens-in-asp-net-core).
* How to setup debug so you can see the logging of all the actions happening.
* What does AddAuthentication and AddAuthorisation do.
* Using cookies versus bearer tokens. Whats the difference? How to access claims or roles from the jwt through both of these methods?

### Securing a Website with with OpenID Connect

A quick start on how to use the middleware in .Net 5.0 to secure a page with an OIDC provider.

* Microsoft.AspNetCore.Authentication.OpenIdConnect

### Creating JWT Tokens in .Net

Code to create tokens using Standard Microsoft package. Write a console app that can take some settings and generate a JWT token. (Where to store the code?)

Show the JWT in jwt.io to see it deserialised.

Use the Dom. OAuth code excerpt.

### Consuming JWT Tokens in .Net

Code given a JWT to decode it and get the values out e.g. claims, scopes

Use the Dom. OAuth code excerpt.

### Signing JWT in .NET

How to sign a JWT and also how to validate that a token is valid. 



### OpenIDConnect UseTokenLifetime for Cookie based solutions

Seems to magically make Refresh Tokens work!

