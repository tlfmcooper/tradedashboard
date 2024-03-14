# Use the official Node.js image as the base image
FROM node:latest AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight base image with a shell
FROM alpine:latest

# Install Nginx
RUN apk add --no-cache nginx

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that Nginx will listen on
EXPOSE 60492

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]