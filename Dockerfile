# Use the official Node.js image as the base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app will run on
EXPOSE 60492

# Start the application
CMD ["npm", "start"]