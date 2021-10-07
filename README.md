Do this:

oc login -u username -p password api.uat.ocp4.openshift.integrate.zone:6443  
oc new-project simple-nodejs  
oc new-app https://github.com/itsbanjo/simplenodejs  
oc expose svc/nodejs  
oc get route  
