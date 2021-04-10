# AspNet Razor net 5.0 Website



* Create A Razor net 5.0 Website in visual studio

* Add a new Razor Page which calls an Api using a Bearer Token and `Flurl.Http` and then displays the results on the page as a list.

* Write a Client for the above with a generic method and typed Dto class that is returned from above. (E.g. ProjectStoreClient, ProjectStoreSettings, Project, CustomFieldValue and GetAsync<T> classes/methods)

* Add Custom Settings for AuthSettings and ProjectStoreUrl using dotnet core Configuration.

* Format the entities listed above in a responsive bootstrap table.

* Used `IHttpContextAccessor` to access the context to get a token `HttpContext.GetTokenAsync("access_token")`

* Add a BasePageModel for all Razor pages to inherit providing which pulls the email address out of the claim and provides it for the `_Layout.cshtml` to render using `ViewData`

* Customize the `_Layout.cshtml` so the page header looks decent

* Implement Open Id Connect using the `Microsoft.AspNetCore.Authentication.OpenIdConnect` middleware.

* How a rest controller's four different FromForm, FromQuery, FromBody can be used and how to post to them from Postman or Fiddler.

* How to post a file like the tesla processor post also second life.

* Configuration using command line. [msdn docs](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-5.0#command-line)

  ```powershell
  dotnet run ProjectStoreSettings:ProjectStoreUrl="http://localhost:1080"
  ```
  
* Configuring console apps, so far done manual stitch up in the `Hooks.cs` of the acceptance tests, but the [Microsoft documentation](https://docs.microsoft.com/en-us/dotnet/core/extensions/configuration) has more to say on how to do that.

* By default both the Newtonsoft and built-in Serializer ([JsonConvert](https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-customize-properties)) create json the same as the C# poco class. To create camel case we need to do some extra work. Using `Newtonsoft.Json` to create camelCase json from a poco:

```c#
DefaultContractResolver contractResolver = new DefaultContractResolver
{
	NamingStrategy = new CamelCaseNamingStrategy()
};
var settings = new JsonSerializerSettings
{
	ContractResolver = contractResolver
};

string camelCase = JsonConvert.SerializeObject(projects, settings);
```

