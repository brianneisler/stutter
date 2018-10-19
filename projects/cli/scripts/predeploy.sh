echo "Preparing @stutter/cli for deployment..."
printf "//registry.npmjs.org/:_authToken=$NPM_TOKEN\nemail=$NPM_EMAIL" > .npmrc
