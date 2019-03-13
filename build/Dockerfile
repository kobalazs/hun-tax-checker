FROM codeception/codeceptjs

WORKDIR /tests

RUN apt-get update -qq \
  && apt-get install -y curl

COPY ./wait-for-selenium.sh /usr/local/bin/wait-for-selenium.sh

RUN chmod +x /usr/local/bin/wait-for-selenium.sh
