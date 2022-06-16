# https://cirrus-ci.com/github/btwiuse/k0s

FROM btwiuse/k0s

RUN apk add nodejs-current npm yarn jq vim bash tmux htop

RUN npm install -g subsh

RUN echo exec subsh > /.bashrc

ENTRYPOINT ["bash", "-c"]

CMD ["/usr/bin/k0s hub --port :$PORT"]
