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

| Number | Full Name            | VM/Azure Login                                    | Password      | Resource Group  |
| ------ | -------------------- | ------------------------------------------------- | ------------- | --------------- |
| 1      | Alexander Darby      | ga-student-202306-0001@majorguidancesolutions.com | Cuta6486#932! | ga-student-0001 |
| 2      | Andrew Kania         | ga-student-202306-0002@majorguidancesolutions.com | Vovo5110#256! | ga-student-0002 |
| 3      | Ashley Didriksen     | ga-student-202306-0003@majorguidancesolutions.com | Yofo9571#572! | ga-student-0003 |
| 4      | Christopher Gyumolcs | ga-student-202306-0004@majorguidancesolutions.com | Guvu1796#289! | ga-student-0004 |
| 5      | Davonta Wallace      | ga-student-202306-0005@majorguidancesolutions.com | Vulu9707#710! | ga-student-0005 |
| 6      | Faith Lovell         | ga-student-202306-0006@majorguidancesolutions.com | Sumu0067#653! | ga-student-0006 |
| 7      | Jordan Reeves        | ga-student-202306-0007@majorguidancesolutions.com | Yuza4016#482! | ga-student-0007 |
| 8      | Matthew Hansen       | ga-student-202306-0008@majorguidancesolutions.com | Podu5472#826! | ga-student-0008 |
| 9      | Matthew Holdorf      | ga-student-202306-0009@majorguidancesolutions.com | Tobo8804#379! | ga-student-0009 |
| 10     | Neil Hajela          | ga-student-202306-0010@majorguidancesolutions.com | Wona2062#195! | ga-student-0010 |
| 11     | Nicholas DiGirolamo  | ga-student-202306-0011@majorguidancesolutions.com | Duku5646#743! | ga-student-0011 |
| 12     | Robert Berti         | ga-student-202306-0012@majorguidancesolutions.com | Hana3595#958! | ga-student-0012 |
| 13     | Rohandra Malcolm     | ga-student-202306-0013@majorguidancesolutions.com | Raco4168#684! | ga-student-0013 |
| 14     | Ryan Ong             | ga-student-202306-0014@majorguidancesolutions.com | Jufa6176#139! | ga-student-0014 |
| 15     | Sai Sakhamuri        | ga-student-202306-0015@majorguidancesolutions.com | Vuba1399#222! | ga-student-0015 |
| 16     | Sergio Hernandez     | ga-student-202306-0016@majorguidancesolutions.com | Gozo6628#805! | ga-student-0016 |
| 17     | Siraj Mughal         | ga-student-202306-0017@majorguidancesolutions.com | Fabu3222#256! | ga-student-0017 |
| 18     | Thomas Flaglor       | ga-student-202306-0018@majorguidancesolutions.com | Joho3158#899! | ga-student-0018 |
| 19     | Varun Kumar          | ga-student-202306-0019@majorguidancesolutions.com | Wuba0465#003! | ga-student-0019 |
| 20     | Vina Vo              | ga-student-202306-0020@majorguidancesolutions.com | Dono7692#881! | ga-student-0020 |
| 21     | Vishal Agarwal       | ga-student-202306-0021@majorguidancesolutions.com | Rajo7404#204! | ga-student-0021 |
| 22     | William Yang         | ga-student-202306-0022@majorguidancesolutions.com | Ruza9012#771! | ga-student-0022 |
| 23     | Yatin Vij            | ga-student-202306-0023@majorguidancesolutions.com | Goqa2204#907! | ga-student-0023 |
| 24     | Yushu Lyu            | ga-student-202306-0024@majorguidancesolutions.com | Coba1740#479! | ga-student-0024 |
| 25     | Zachary England      | ga-student-202306-0025@majorguidancesolutions.com | Sujo3176#376! | ga-student-0025 |
| 26     | Zoe Valladares       | ga-student-202306-0026@majorguidancesolutions.com | Jaja7873#828! | ga-student-0026 |
| 27     | Kevin Zhou           | ga-student-202306-0027@majorguidancesolutions.com | Goju8010#295! | ga-student-0027 |



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
