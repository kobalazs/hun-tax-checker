FROM codeception/codeceptjs

WORKDIR /tests

RUN apt-get update -qq \
  && apt-get install -y curl

COPY ./run.sh /usr/local/bin/run.sh

RUN chmod +x /usr/local/bin/run.sh
