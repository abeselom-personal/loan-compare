# Use official Node.js image as a base image
FROM node:16-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application files
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Start the app using npm run watch
CMD ["npm", "run", "dev"]
