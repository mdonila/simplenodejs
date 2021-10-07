*Requirements:*

1. oc client
2. git 

*Prep work*

1. Create a github account
2. Go to https://github.com/itsbanjo/simplenodejs and hit "Fork"
3. You will have a fork version in your git page.  
4. Save the URL that you will use later... its usualy https://github.com/<username>/simplenodejs
4. Click "Code" button and copy the git URL or hit the copy button
5. clone the repo in your PC using git

```
git clone <your own git url> 
```



*Deploy*


```
$ oc login -u username -p password api.uat.ocp4.openshift.integrate.zone:6443  
$ oc new-project simplenodejs-<your username>
$ oc new-app https://github.com/<your username>/simplenodejs  

$ oc get pods -w
 NOTE: wait for the BUILD pod to finish, and the SECOND pod running.

$ oc get pods
NAME                            READY   STATUS      RESTARTS   AGE
simplenodejs-1-build            0/1     Completed   0          2m14s
simplenodejs-766564fb79-x2qwk   1/1     Running     3          48s

$ oc expose svc/simplenodejs
route.route.openshift.io/simplenodejs exposed

$ oc get route  
Grab the Domain name in the above output and browse the website. 

```
