host="tweeprint.com"

# Build app
npm run build

# Make temp directory on the server
ssh alex@$host "mkdir ~/$host-temp"

# Upload app
scp -r build/* alex@$host:~/$host-temp/

# Empty app directory
ssh alex@$host "rm -r ~/$host/* >& /dev/null"

# Copy app over
ssh alex@$host "cp -r ~/$host-temp/* $host/"

# Remove temp folder
ssh alex@$host "rm -r ~/$host-temp"