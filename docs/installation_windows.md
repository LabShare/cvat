### **Computer Vision and Automation TOOL [CVAT]**

Powerful and efficient Computer Vision Annotation Tool (CVAT)
Computer Vision Annotation Tool (CVAT) is an open source tool for annotating digital images and videos. The main function of the application is to provide users with convenient annotation instruments. For that purpose, we designed CVAT as a versatile service that has many powerful features.

CVAT is a browser-based application for both individuals and teams that supports different work scenarios. The main tasks of supervised machine learning can be divided into three groups:

*   Object detection
*   Image classification
*   Image segmentation


### **Local Setup Documentation Guide on Windows 10 for CVAT**

*   Install WSL2 (Windows subsystem for Linux) refer to this [official guide]([https://docs.microsoft.com/en-gb/windows/wsl/install-win10]). WSL2 requires Windows 10, version 2004 or higher. Note: you may not install any Linux distribution unless necessary.
*   Download and install Docker Desktop for Windows. Double-click Docker for Windows Installer to run the installer. More instructions can be found [here](https://docs.docker.com/docker-for-windows/install/). Official guide for docker WSL2 backend can be found [here](https://docs.docker.com/docker-for-windows/wsl/). Note: check that using exaclty WSL2 backend for docker.
 
*   Download and install Git for Windows. When installing the package please keep all options by default. More information about the package can be found here.
*   Download and install Google Chrome. It is the only browser which is supported by CVAT.
*   Go to windows menu, find Git Bash application and run it. You should see a terminal window.
*   Clone CVAT source code from the GitHub repository.
> 
```
  git clone https://github.com/opencv/cvat
  cd cvat
```
*   Build docker images by default. It will take some time to download public docker image ubuntu:16.04 and install all necessary ubuntu packages to run CVAT server.
>
```
  docker-compose build
```
*   Run docker containers. It will take some time to download public docker images like postgres:10.3-alpine, redis:4.0.5-alpine and create containers.
>
```
  docker-compose up -d
```
*   You can register a user but by default it will not have rights even to view list of tasks. Thus you should create a superuser. A superuser can use an admin panel to assign correct groups to other users. Please use the command below:
>
``` 
    winpty docker exec -it cvat bash -ic 'python3 ~/manage.py createsuperuser'
```

*   Choose login and password for your admin account. For more information please read [Django documentation](https://docs.djangoproject.com/en/2.2/ref/django-admin/#createsuperuser).


*   Open the installed Google Chrome browser and go to [localhost:8080](localhost:8080). Type your login/password for the superuser on the login page and press the Login button. Now you should be able to create a new annotation task. Please read the CVAT user's guide for more details.
