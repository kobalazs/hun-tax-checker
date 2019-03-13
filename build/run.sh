#!/bin/sh

printf 'Waiting Selenium server to load...'
until $(curl --output /dev/null --silent --head --fail http://selenium:4444/wd/hub); do
    printf '.'
    sleep 1
done
printf '\n'

codeceptjs run
