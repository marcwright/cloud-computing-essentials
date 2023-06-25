# Cloud Computing Essentials

M & T Summer Workshop

| Session |	Lesson | Lab | 
| --- | --- | --- |
| Morning |	[Discover Cloud Computing, Benefits and Drawbacks](./IntroToCloud/01_intro-to-cloud.md) <br> [Moving to the Cloud](./IntroToCloud/02_intro-to-paas.md) | N/A |  
| Afternoon | [Traditional to Modern Applications](./TraditionalToModernContainerization/03_docker-intro.md) <br> [Docker Commands](TraditionalToModernContainerization/05_docker-commands.md) <br> [Containerization (locally)](TraditionalToModernContainerization/06_dockerfile.md) <br> [Containerization (Azure Ecosystem)](TraditionalToModernContainerization/09_containerized-apps.md)| [Creating and Deploying a containerized application in Azure](TraditionalToModernContainerization/PracticalLab-ProvisionResourcesAndDeployAContainerizedApplication.md) |  

# Welcome to Cloud Computing Essentials

In this course you will learn how to get started with the basics of creating and deploying cloud-native applications with Azure

## What you will learn

During this course you will learn the following:

- Benefits and Drawbacks to Cloud Solutions
- Concepts and terms associated with Cloud Computing
- How to work with Docker from the command line
- How to package code into an image
- How to provision Azure Resources, including:
    - Azure Container Registry (ACR)
    - Azure Container Instances (ACI)

## What you will need

At a minimium, you need the following items to complete this course 

- A development machine with the following:
    - Docker
    - VS Code
    - A Terminal
- An Azure Subscription
- The source code associated with this course

>**Note:** The above (and more) is likely provided for you as part of this course

## Pre-Provisioned Environment

If the environment is provisioned for you, then you will need to go through the following steps:

<!-- 1) Send your work email and your personal email (likely your-name@somecompany.com and your-email@someemaillikegmailyahoooroutlook.com)
2) Once we have both of your emails, you will receive an invitation to get a cloud lab machine from us, sent to your work email -->

1. As we get started, please make sure you're in the **M+T Guest WIFI**.

2. Please use your credentials below to login to [Azure Labs](https://labs.azure.com) where you will get a VM assigned to you. You'll need your `VM/Azure Login` and `Password`.





3. Once you login, you can start and stop the machine from **labs.azure.com**. You will also be able to get the VM RDP (Remote Desktop) information there (you should already have this software on your PC).

    ![azure Labs](./images/image.png)

4. Start the VM by clicking the "Stopped" toggle button. It may take a few seconds to warm up. Once the VM is "Running" you can click on the PC icon on the bottom right to launch the Remote Desktop.

    ![Alt text](./images/vm-running.png)

5. If asked for a password, use `ClearPanda#082022!`. Your username _may_ be different from the screenshot.

    ![Alt text](./images/image-1.png)




<!-- 1. Once you are on the Dev Machine, open a browser to your personal email. -->


### To access Azure Portal in the VM

1. Open Google Chrome
2. Go to [the Azure Portal](https://portal.azure.com). Please use your `VM/Azure Login` and `Password` from the table above to login.
<!-- 1. From your personal email, you'll have an invitation to join the Azure Subscription via a link to [the Azure Portal](https://portal.azure.com) 
    > **IMPORTANT** Do not use your work machine or try to log into the Azure portal from your work machine with your personal email.  This needs to be done from the Lab VM only.  If you use your work email you will likely be in your work's Azure subscription or blocked from ours so you will not be able to complete the work for this course. -->
3. After logging into Azure, validate you can see one resource group (something like `student0025` where the number is just the student number we have assigned you in the table above.
    > **Note**: You can view resource groups by typing `Resource Group` in the top middle search bar on the browser and hitting enter.


### To test Docker commands in the VM

1) Start any terminal or powershell
2) Type `wsl` and enter WSL Mode
3) Enter the same credentials to log in
student
ClearPanda#082022!
4) in the ubuntu instance, type
`sudo service docker start`
5) run docker commands at will.

You are now ready to begin the class.  Good Luck! Have Fun! Enjoy the training!
