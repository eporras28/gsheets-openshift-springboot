# gsheets-openshift-springboot

oc login https://master.rhpds311.openshift.opentlc.com:443 --token=xxxxxxxxxxxxxxxxxxxxxxx

oc new-app -e POSTGRESQL_USER=dev \
             -e POSTGRESQL_PASSWORD=secret \
             -e POSTGRESQL_DATABASE=my_data \
             openshift/postgresql-92-centos7 \
             --name=my-database

mvn package fabric8:deploy -Popenshift -DskipTests

oc rollout status dc/rhoar-training

#URL de 3scale TG
https://tg-admin.3scale.net/apiconfig/services/2555417745472/applications/1409615103943
