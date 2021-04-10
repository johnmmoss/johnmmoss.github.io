

### Sign In With Google

The signin with google solution outline in the msdn docs still creates an ASP.NET identity and the whole thing we are trying to do is avoid the need to persist any data and just use google auth to secure my pages.

* [External Provider Authentication in  ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/?view=aspnetcore-5.0&tabs=visual-studio) (Msdn)
* [Google External Login Setup in Asp.Net Core](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/social/google-logins?view=aspnetcore-5.0) (Msdn)
* [Integrating Google Sign-in to Your web app](https://developers.google.com/identity/sign-in/web/sign-in) (Google)
* [Google Console Credentials](https://console.cloud.google.com/apis/credentials?project=maps-125519)

From the google developer page there is Google Identity and then there is the Identity Platform.

```
RedirectURI: https://localhost:5001/signin-google
ClientID: 464387413494-8jt5ho1gih28nn12kblul2tkljh0kh3o.apps.googleusercontent.com
ClientSecret: VSfXukuhMc5KB9DgIcf1ydPR
```

Now we have an OAuth Client setup, we can start reading the docs to see how you can get profile data:

* [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2?hl=en)

Aim to use fiddler to mimic the requests!

## Next Articles



* Simple AspNetWeb site that auths using the Keycloak setup and the cookie middle ware.

* Use a 3rd party application to Login in with google example. Login with github?

* Investigate [Azure Containers](https://azure.microsoft.com/en-us/services/container-instances/#overview) as a deployment option.

  

## Potential Articles



* Citrus the mouse over tag item which you did based off the plural sight video.
* Citrus the graphs lined up using CSS
* Razor Pages - Client validation
* Bootstrap nav bars. Just the basics
* Bootstrap grids: Formatting and layout, fluid etc have a sample bootstrap 4 with the appropriate tags etc so you know how to actually load these up.
* Flex box how to use it to align basic elements. Do a practice page.
* CSS how to create a page that you can edit the CSS inline in the webpate and see the affect (see pluaral sight video.)
* Selenium Waits examples and maybe extension methods that you can use.
* Powershell: The integration test powershell to start and stop a service
* Powershell: Executing scripts from the internet like how chocolatey is installed (and ansible)
* IdentityServer4: In memory sample video ([Hanselman/Dom Video](https://www.youtube.com/watch?v=nyUD-CeBSiE)) ([IdentiyServer4.QuickStart.UI](https://github.com/IdentityServer/IdentityServer4.Quickstart.UI))
* Getting Started with WSL commandline examples ([MSDN - WSL Reference](https://docs.microsoft.com/en-us/windows/wsl/reference))