## Setting Up Keycloak using Helm

This walkthrough describes setting up Keycloak using the bitnami helm package:

* [Kubeapps Hub Keycloack](https://hub.kubeapps.com/charts/bitnami/keycloak/1.0.5#!)

### Create a Values file

Start by creating the following values.yml locally.

```
service:
  type: NodePort
extraEnv: |
  - name: KEYCLOAK_FRONTEND_URL
    value: http://identity-keycloak-http/auth
  - name: PROXY_ADDRESS_FORWARDING
    value: "true"
```



### Run Helm Commands

Open the console in the same directory as the values.yml file. First we add the bitnami repo and then run the command to create the Keycloak instance:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo up
helm upgrade identity bitnami/keycloak -f values.yml --install
```

Check its all up and running:

```
k get pods

k get services
```



### Update Host file

Update your local windows host file with:

```
127.0.0.1 identity-keycloak-http
```



### Get the url and credentials

![keycloak-helm-read-ip](../.images\keycloak-helm-read-ip.png)

Read the port from get services command as shown above. Now the url is:

```powershell
http://identity-keycloak-http:32372
```

Run the command:

```powershell
kubectl get secret identity-keycloak -o jsonpath="{.data.admin-password}"
```

This will print out you password base64 encoded. So the output from this needs to be base64 decoded.

The user name is determined by the configuration of the helm package. As we are using the bitnami one the username is **User**

Now you can login to see Keycloak ui:

![image-20210305102955017](../.images\keycloak-realmsettings-screenshot.png)



## Upgrading Keycloak Installation

When upgrading an existing installation you need to provide the password. The UI explains all this:

```bash
helm upgrade identity bitnami/keycloak -f values.yml --install --set auth.adminPassword=SHIxNGs3enl5Sg==
```



![image-20210305093334092](../.images\keycloack-helm-upgrade-cmd.png)



### Summary

Previously we saw how to setup Keycloak using a docker image which meant we could get an OAuth 2.0/Open ID Connect standards compliant Identity solution setup in minutes. However, when the docker image stopped we lost all our data.

In this tutorial we used the official Helm chart to setup a Keycloak instance which can be used for development locally and should not disappear when you reboot your machine.