# Setting up Keycloak using Docker

Keycloak is a standalone, opensource identity provider written by JBoss. Its an excellent way of being able to start up a standards compliant OAuth 2.0 and Open ID Connect Server for testing and demo purposes:

* [Keycloak on Docker](https://www.keycloak.org/getting-started/getting-started-docker)
* [Keycloak Docker Image](https://registry.hub.docker.com/r/jboss/keycloak#!)



### Getting Started

With the magic that is docker simply run the following command from your console of choice. The parameters should be pretty self explanatory:

```poweshell
docker run -p 8090:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak
```

Of course, this being docker, none of your data will be saved when the docker container stops. For a more long lived solution, you might want to take a look at [using helm to setup a development instance](https://hub.kubeapps.com/charts/bitnami/keycloak/1.0.5#!).



### Keycloak Configuration

It will take a few moments for your keycloak instance to startup. But once its there, you can navigate to the url `http://localhost:8090` and you will see the Keycloak homepage:

![Keycloack Homescreen](D:\Code\secondlife\Blog\.images\keycloak-homescreen.png)



On clicking the link Administration Console, you will be redirected to the login screen. If you used the docker command above then you want to enter **admin** as the username and **admin** as the password. You will then be shown the Keycloak Administration Console:

![Keycloak Homepage](D:\Code\secondlife\Blog\.images\keycloak-loggedin-homescreen.png)



### Setting up an Open ID Connect User

In order to be able to actually to use Keycloak as an Open ID Connect provider, you need:

* Add a Client
* Add a user

#### Add a Client

Click the clients menu on the left hand side and click the add link. From here fill out the ClientID and also set the access type from public to confidential. Scroll down the page and add a valid referrer and then scroll all the way to the bottom and add save:

![Keycloak Create Client](D:\Code\secondlife\Blog\.images\keycloak-createclient-homepage.png)

When the Access Type is switched from "public" to confidential, a new tab called Credentials appears. If you click that tab, you will get the client secret. 

![Keycloack Client Secret](D:\Code\secondlife\Blog\.images\keycloak-clientcredentials-screenshot.png)



Authority:			 http://localhost:8090/auth/realms/master
Client Secret:   	27168819-e551-40eb-874a-6bf1f13dfb35
Client Name:		WebClient1

#### Add a User

We already have an admin user setup, but that user is not configured to authenticate by default. So we add a new user who can be used for the testing.

If you click the Users link in the left hand side menu then you shown the Users list. Click the add button and add in the appropriate details to create a new user.

The temporary password is on by default, so click the ON button to turn it off. Then provide a password in the "password" textbox:

![Keycloak Setup User](D:\Code\secondlife\Blog\.images\keycloak-create-user-temppassword.png)



### Testing the Keycloak Server

Now that we have setup a Keycloak instance using our docker container, we can get a token from the token endpoint.

This all the data we need to be able to make a request:

| Name         | Value                                                        |
| ------------ | ------------------------------------------------------------ |
| AuthorityUrl | http://localhost:8090/auth/realms/master/protocol/openid-connect/token |
| ClientName   | WebClient1                                                   |
| ClientSecret | 27168819-e551-40eb-874a-6bf1f13dfb35                         |
| Username     | me@my.com                                                    |
| Password     | Password1!                                                   |
| grant_type   | password                                                     |

So a raw http request:

```http
POST /auth/realms/master/protocol/openid-connect/token HTTP/1.1
Host: localhost:8090
Content-Type: application/x-www-form-urlencoded
Content-Length: 132

client_secret=27168819-e551-40eb-874a-6bf1f13dfb35&client_id=WebClient1&username=me%40my.com&password=Password1!&grant_type=password
```

And postman shows the response:

![Keycloack Postman Result](D:\Code\secondlife\Blog\.images\keycloak-postman-testresult.png)



## Summary

This tutorial showed you how to setup an OAuth 2.0/Open ID Connect Identity Provider in super quick fashion using Docker. 

In later articles we will dive into the intricacies of OAuth 2.0 and Open ID Connect using our new Keycloak server to help us study.