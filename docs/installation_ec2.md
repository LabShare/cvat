### **Local Setup Documentation Guide on EC2 Instance of type [Amazon Linux 2 AMI] for CVAT**

* We will be connecting to our Linux Instance using SSH. To connect to your instance using SSH - In a terminal window, use the ssh command to connect to the instance. You specify the path and file name of the private key (.pem), the user name for your instance, and the public DNS name or IPv6 address for your instance. For more information about how to find the private key, the user name for your instance, and the DNS name or IPv6 address for an instance, see Locate the private key and Get information about your instance. To connect to your instance, use one of the following commands -- 

*   (Public DNS) To connect using your instance's public DNS name, enter the following command.

``` 
 ssh -i /path/my-key-pair.pem my-instance-user-name@my-instance-public-dns-name

```
(Make sure to modify the permissions to limit access to your current user for your .pem file (on Unix based machines: chmod 700)

* Once you are succesfully logged in into your EC2 instance. We will need to first install the git and docker within our EC2 instance -
```
sudo yum install git
sudo yum install docker

```

* Once we are done with setting up both Git and Docker. We will now clone the GitHub Repository for CVAT using command -
```
git clone https://github.com/opencv/cvat.git

cd cvat
```

* Now we need to Build docker images by default. It will take some time to download public docker image ubuntu:16.04 and install all necessary ubuntu packages to run CVAT server.

```
docker-compose build
```

* Run docker containers. It will take some time to download public docker images like postgres:10.3-alpine, redis:4.0.5-alpine and create containers.
```
docker-compose up -d
```

* Once we are done with the above step, our cvat/ui is ready and we can check the running port using - 

```
docker ps
```
(If you look at the nginx application, 0.0.0.0:8080->80/tcp indicates that we are mapping the host machine port 8080 to port 80 within the docker container)

*  If you want to access your instance of CVAT outside of your localhost which in our case will be our public DNS you should specify the CVAT_HOST environment variable. The best way to do that is to create docker-compose.override.yml and put all your extra settings here.

version: "2.3"

services:
  cvat_proxy:
    environment:
      CVAT_HOST: .example.com

(We will have to replace .example.com with our public DNS [my-instance-public-dns-name] and we are all set)

* You can register a user but by default it will not have rights even to view list of tasks. Thus you should create a superuser. A superuser can use an admin panel to assign correct groups to other users. Please use the command below:

```
docker exec -it cvat bash -ic 'python3 ~/manage.py createsuperuser'
```

We can now run our cvat/ui on http://my-instance-public-dns-name:80
 