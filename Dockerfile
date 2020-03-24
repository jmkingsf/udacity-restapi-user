# Set the base image
FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Copy package.json AND package-lock.json
COPY package*.json ./
# Install all dependencies
RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y python
RUN npm ci 
RUN npm install bcrypt
# Copy the rest of the code
COPY . .
# Expose the port 
EXPOSE 8080
# Define the command that should be executed
CMD npm install bcrypt; npm run dev