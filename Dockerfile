# https://cirrus-ci.com/github/btwiuse/k0s

FROM btwiuse/k0s

RUN apk add nodejs npm yarn jq vim bash tmux htop

RUN npm install -g subgenius

RUN echo subsh > /.bashrc

ADD subsh /bin/

ENTRYPOINT ["bash", "-c"]

CMD ["/usr/bin/k0s hub --port :$PORT"]
