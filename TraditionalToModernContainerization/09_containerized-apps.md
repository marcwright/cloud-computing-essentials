# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Docker Containers In Azure

# Learning Objectives

- Azure Container Registry (ACR)
- Pushing and pulling images to and from ACR
- Azure Container Instances (ACI)
- Hosting a containerized application using ACI

# Lesson Guide

| TIMING  | TYPE  | TOPIC  |
|:--|---|---|  
| 5 min  | Overview | Containerized applications in the Azure ecosystem |  
| 15 min | Lecture | Azure Cloud-Native PaaS Offerings |
| 60 min | Activity | Creating and utilizing ACR and ACI for containerized applications |  

# Overview  

To this point, you've learned about containerized apps using Docker and Docker Desktop.  You've also seen an introduction to Azure platform services as they would traditionally be used to host a web application. In today's training, you'll learn about using containerized applications and Azure platform services together to create a modern cloud-native application.   

![](https://media.giphy.com/media/NmerZ36iBkmKk/giphy.gif)

Containerized applications are not only useful for moving your production workloads to the cloud, but they are also useful for microservice architectures.  Additionally, the elasticity and scalability of the cloud in combination with the portability of containers give you and your team the ability to create powerful and effective solutions quickly. Since the applications are containerized, you also have the flexibility to move between services in any cloud, or even to other cloud platforms if the need should arise. 

As usual, should you desire to have even more control over underlying architecture, you could even deploy the solution on an IaaS backbone, such as a fleet of VMs behind a load balancer inside a virtual network.  However, the focus of the remainder of this training will be on utilizing platform services at Azure.  

## Azure Cloud-Native Application PaaS offerings.

Within Azure, you can create a containerized application that runs on any of three different platform services.  

### Azure App Service (App Service)

One of the options to deploy a containerized application on an Azure platform service is the `Azure App Service`, you've already learned about.  

While the first look at this service showed the traditional approach of utilizing the App Service as a platform for traditional web development, the other option is to deploy the application to the App Service as a containerized application.  

When you use this approach, you get all the compute power and ability to work with the Azure application service while also easily hosting your containers.  

#### Deploy and run a containerized web app with Azure App Service 

There is not enough time to work with all three options.  For this reason, the use of Azure App Service to deploy and work with containers is not in scope for this training.  However, [this learn module on deploying and running container app service](https://docs.microsoft.com/en-us/learn/modules/deploy-run-container-app-service/) is a great opportunity to learn on your own if you would like to try it out.   

### Azure Container Instances (ACI)

The first place that you should look when learning about deploying containerized applications to Azure is Azure Container Instances (ACI).  The ACI offering at Azure gives you the ability to quickly and easily deploy a containerized application that lives with one container or a small container group and doesn't require a lot of overhead or have an extremely high workload. 

ACI gives you the ability to quickly deploy your solutions, and has the ability to directly integrate with the Azure Container Registry (ACR).  You can then easily push images to your ACR and deploy changes to your ACI instance.  You will get a chance to see all of this in action soon!

More information about ACI can be found in the [Azure Container Instances Documentation](https://docs.microsoft.com/en-us/azure/container-instances/)  

### Azure Kubernetes Service (AKS)

In a production workload, you'll likely need to use something more powerful than ACI or the Azure App service to orchestrate and manage your containers.  For example, consider a workload with thousands of containers running.  In this case, you want the ability to easily manage the lifecycle of containers, perform health checks on the containers, and ultimately be able to scale appropriately to your workload needs.

In this case, you will want to leverage the full power of Azure Kubernetes Service (AKS). AKS Also has another learning curve that is too large to cover in this training. 

If you would like to try a getting started with AKS activity, you can [review this tutorial](https://learn.microsoft.com/en-us/azure/aks/tutorial-kubernetes-prepare-app).  Follow through at least the first four tutorials to get to a working application, with tutorials 5, 6, and 7 as additional/optional learning.

>**Note:** If you are using a provided subscription for this training you will not be able to deploy an AKS cluster as that option will not be allowed on the subscription.

### Azure Container Registry (ACR)  

Earlier in the course you were exposed to working with Docker containers, and at one point you likely pulled and/or pushed container images to DockerHub.  DockerHub has traditionally been the most common platform to work with container images. Truly you will find most public container images are hosted at DockerHub.

In your private organization, you really have two options. The first option is to utilize DockerHub and create a private registry there. In fact, if you already have a private registry at DockerHub, you may desire to continue utilizing DockerHub as your container registry.

However, you may find that you want a bit more control and segregation for your images. At Azure, the Azure Container Registry (ACR) is a platform service that functions just like DockerHub - as a centralized repository for your organization's images.  The advantages to using ACR are that this is a unique registry that is only for your organization.  You will have full control over all access to the images.  You can even restrict access to your ACR to a private network, making it even more secure.

Like Docker itself, container registries have a bit of a learning curve.  While being similar to a Git repository with push and pull commands, as well as versions, the interaction with a container registry is a little less obvious as you must leverage tags to utilize the repository, rather than having branches and commit histories.  Tags (versions) on your images allow you to have multiple instances available for deployment.  This does give you quite a bit of power.  However, we all know:  

![With great power comes great responsibility](https://media.giphy.com/media/MCZ39lz83o5lC/giphy.gif)  

## Completing the learning

To complete the learning for this cloud essentials course, [move on to the guided activity](./PracticalLab-ProvisionResourcesAndDeployAContainerizedApplication.md), which will help you to learn how to provision resources and deploy an application into an Azure Container Instance using images stored in an Azure Container Registry.

## Conclusion 

Today you've had a quick overview of the ACI and ACR and have had a chance to wire everything up with a working container on the happy-path.  
