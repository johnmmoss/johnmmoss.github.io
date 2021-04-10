

Clients need to be registered at the Authorisation Server.

I want access to the resource called e.g. scope

State is a random string that the client stores so it knows the redirect is valid.

```http
GET /authorize?
	client_id=WebClient1&
	scope=resource&
	redirect_uri=https://localhost:5005&
	response_type=code&
	state=123
```

