# Introduction to OAuth2

OAuth 2.0 is a protocol for governing delegated authorisation. 

The best model for thinking about its use is the idea that an app you use, like Evernote, wants to save things into your Google Calendar on your behalf. In this instance you get redirected to Google and asked if you want to allow Evernote to access your Google calendar. Assuming you click yes, then Evernote is then able to access the Google Calendar on your behalf.



### The Players

The OAuth specification specifies the flowing actors who interact in the following ways:



![OAuth2 Players](D:\Code\secondlife\Blog\.images\oauth2-overview-players.png)





| Player               | Role                                           |
| -------------------- | ---------------------------------------------- |
| Resource Owner       | The person who owns the resource               |
| Client               | The application that is to access the resource |
| Resource Server      | The server that hosts the resource             |
| Authorisation Server | The server that grants access to a resource    |



- The resource owner uses a client which accesses a resource on their behalf.
- Clients are registered with the Authorization Server.
- Clients can be trusted for example when an enterprise owns the Authorization Server, Resource Server and the Client app that is accessing then all apps are trusted.
- The Authorization Server provides an access key to the Client and the Client access the Resource Server
- The Resource Server and Authorization Server have a trust relationship so there is tight coupling between them.
- You can treat the Client as partially trusted.



### The OAuth 2.0 Flows

There are four different flows that OAuth 2.0 provides for:

| Name                      | Description                 | Url Type | Notes          |
| ------------------------- | --------------------------- | -------- | -------------- |
| Authorization Code Flow   | Web Application Clients     | code     | User Initiated |
| Implicit Flow             | Native Clients              |          | User Initiated |
| Resource Owner Credential | Trusted Clients             | password | No user        |
| Client Credential         | Client/Server communication |          | No User        |

