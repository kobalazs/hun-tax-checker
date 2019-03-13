#!/bin/sh
# wait-for-selenium.sh

printf 'Waiting Selenium server to load'
until $(curl --output /dev/null --silent --head --fail http://selenium:4444/wd/hub); do
    printf '.'
    sleep 1
done
printf '\n'

>&2 echo "Running tests..."
exec $@
>&2 echo "Done."
