FROM apachepulsar/pulsar:2.8.0

COPY admin-token.txt /pulsar/conf/admin-token.secret
COPY admin-jwt.txt /pulsar/conf/admin-jwt.txt
COPY client.conf /pulsar/conf/client.conf

ENTRYPOINT bin/apply-config-from-env.py conf/standalone.conf && bin/pulsar standalone