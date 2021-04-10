### Add Custom Settings to ASP.NET Website

Asp.Net Core implements configuration using `appSettings.js`, custom settings classes and then registering in the `Startup.cs` class. A detailed overview can be found at the MSDN documentation:

* [Configuration in ASP.NET](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-5.0)



An example `appSettings.js` looks like so:

```json
{    
  "Authentication": {
    "Authority": "http://identity-keycloak-http:32372/auth/realms/ranplan",
    "AuthorityClientId": "collab-hub",
    "AuthoritySecret": "9acc6df7-ee6a-4f5f-9172-a11ac23f737a",
    "RequiresHttps": false
  },
  "ProjectStoreSettings": {
    "ProjectStoreUrl": "http://localhost:5000/projectstore"
  }      
}
```

We need to add the following packages. For more information about [configuration providers see msdn](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-5.0#file-configuration-provider).

* Microsoft.Extensions.Configuration.Json
* Microsoft.Extensions.Configuration.Binder
* Microsoft.Extensions.Configuration.Json

Then in the `StartUp.cs` we can bind add the following ways:

```c#
// Bind to AuthSettings type to be used in Startup.cs
// Requires Microsoft.Extensions.Configuration.Binder
var authSettings = Configuration.GetSection("Authentication").Get<AuthSettings>()

// Add to dependency injection for the options pattern
services.Configure<ProjectStoreSettings>(Configuration.GetSection("ProjectStoreSettings"))
```



The settings classes look like so:

```c#
public class AuthSettings
{
    public string Authority { get; set; }
    public string AuthorityClientId { get; set; }
    public string AuthoritySecret { get; set; }
    public bool RequireHttps { get; set; }
}

public class ProjectStoreSettings
{
	public string ProjectStoreUrl { get; set; }
}
```



If we have added to the dependency injection framework using the `Configure` method, then we can inject into the pages and controllers:

```c#
public class EmployeeClient : IEmployeeClient
{	
	private string _employeeUri;

	public ProjectStoreClient(IOptions<EmployeeSettings> employeeSettings)
	{		
		_employeeUri = employeeSettings.Value.EmployeeUrl;		
	}
}
```

