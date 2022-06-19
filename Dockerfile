FROM btwiuse/k0s AS k0s

FROM denoland/deno:debian AS deno

FROM node

RUN apt update

COPY --from=k0s /usr/bin/k0s /bin/hub
COPY --from=deno /usr/bin/deno /bin

# RUN apk add nodejs-current npm yarn jq vim bash tmux htop neofetch

RUN npm install -g subsh

RUN apt install -y jq vim bash tmux htop neofetch

ADD subsh-loop /bin/
ADD subsh-deno /bin/

COPY import_map.json .
COPY lock.json .
COPY cache.ts .
COPY init.ts .

ENV DENO_DIR=/cache

RUN subsh-deno cache

ENTRYPOINT ["bash", "-c"]

CMD ["hub --port :$PORT"]
