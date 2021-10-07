Do this:

oc new-project simple-nodejs  
oc new-app https://github.com/itsbanjo/simplenodejs  
oc expose svc/nodejs  
oc get route  
