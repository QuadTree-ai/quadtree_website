# Use the official Node.js image as the base image
FROM node:14 AS build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the app
RUN npm run build

# Use a smaller image for production
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the app build from the previous stage
COPY --from=build /app/build ./build

# Install serve to run the app
RUN npm install -g serve

# Set the command to run when the container starts
CMD ["serve", "-s", "build"]
