

* Page Object model (convert old articles to markdown)
* Setting up the Hooks.cs so that the config and web driver are created. Running headless and with options set.
* Using feature context and scenario context using injection
* Acceptance test template for .net 5.0

### Creating Selenium WebDriver for Chrome with ChromeOptions

By default `ChromeDriver` has basic setup for running Selenium tests. If you need to configure any settings you can pass `ChromeOptions` to the `ChromeDriver` constructor:

```c#
var displayHeadless = bool.Parse(config["DisplayHeadless"]);
var chromeOptions = new ChromeOptions();
var chromeExperimentalFlags = new List<string>();

chromeExperimentalFlags.Add("cookies-without-same-site-must-be-secure@2");
chromeOptions.AddLocalStatePreference("browser.enabled_labs_experiments", chromeExperimentalFlags);

if (displayHeadless)
{
	chromeOptions.AddArgument("headless");
}
var webDriver = new ChromeDriver(chromeOptions);
```



### Mocking an Api Call using MockServer

MockServer provides a great way to stub out calls to an api for a Microservices platform:

* [MockServer](https://www.mock-server.com/#what-is-mockserver)
* There is a .Net client at [Nuget](https://www.nuget.org/packages/MockServerClientNet/1.2.0), [github](https://github.com/picadoh/mockserver-client-net), [Samples](https://github.com/picadoh/mockserver-client-net/blob/master/docs/Samples.md)

You can run from a docker image. This sets up the server hosted on the port 1080:

```poweshell
docker pull mockserver/mockserver
docker run -d --rm -p 1080:1080 mockserver/mockserver
```

Now using the MockServer .net Client, we can create an expectation showing what

```c#

mockServerClient.Reset();
mockServerClient.When(new HttpRequest()
				   .WithMethod(HttpMethod.Get)
				   .WithPath("/projects")
				   .WithQueryStringParameter("id", "2")
				   .WithHeaders(
						new Header("Authorization", "Bearer"),
						new Header("Host", "localhost:1080"),
						new Header("Content-Length", "0")
						)
				   .WithBody("{\"name\": \"foo\"}")
				   .WithSecure(false)
				   .WithKeepAlive(true)
				   ,
			   Times.Unlimited())
		   .RespondAsync(new HttpResponse()
			   .WithStatusCode(201)
			   .WithHeader("Content-Type", "application/json; charset=utf-8")
			   .WithBody("{ \"message\": \"example response message\" }")
			   .WithDelay(TimeSpan.FromSeconds(1))
		   )
		   .GetAwaiter().GetResult();
```

You can see activity on the dashboard: http://localhost:1080/mockserver/dashboard

![image-20210408102140019](D:\Code\secondlife\Blog\.images\Selenium-Testing-MockServer-dashboardimage-20210408102140019.png)

The top log displays the messages, we can see first the log was cleared then an expectation creatd. Finally a request came in that was not matched and the reason for there being no match was given.

The middle pane shows the active expectations and the bottom left pane lists each request as they come in. You can uses the tree view to compare requests and see what its being requested.