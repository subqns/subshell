# https://cirrus-ci.com/github/btwiuse/k0s

FROM btwiuse/k0s

RUN apk add nodejs-current npm yarn jq vim bash tmux htop neofetch

RUN npm install -g subsh

ADD loop /bin/

ENTRYPOINT ["bash", "-c"]

CMD ["/usr/bin/k0s hub --port :$PORT"]
