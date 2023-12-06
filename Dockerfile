FROM ubuntu:22.04

WORKDIR ~/app

COPY ./build .

RUN apt-get update && apt-get install -y ca-certificates curl gnupg && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && NODE_MAJOR=20 && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && apt-get update && apt-get install nodejs -y

RUN npm install -g serve

EXPOSE 3000

CMD serve -s . -l 3000


# docker build -t front_ndl --rm . && docker run --rm --name front_ndl -p 80:3000 -d front_ndl
