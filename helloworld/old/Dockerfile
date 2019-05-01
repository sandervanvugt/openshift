FROM node

# Create work directory

WORKDIR /app
COPY package.json .

# Install dependency

RUN npm install express --save

# Install node.js / express app

COPY helloworld.js /app/

RUN npm install

# Bundle app source
CMD mkdir /app/public
COPY public/* /app/public/

EXPOSE 8081

HEALTHCHECK CMD curl --fail http://localhost:8081/health || exit 1
CMD [ "node", "helloworld.js" ]
