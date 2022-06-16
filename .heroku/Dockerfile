# https://cirrus-ci.com/github/btwiuse/k0s

FROM btwiuse/k0s

RUN apk add nodejs npm yarn jq vim bash

RUN npm install -g subgenius

ENTRYPOINT ["sh", "-c"]

CMD ["/usr/bin/k0s hub --port :$PORT"]
