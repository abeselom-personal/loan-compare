# Use official Node.js image as a base image
FROM node:16-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application files
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Start the app using the 'start' script
CMD ["npm", "start"]
# CMD ["npm", "start", "dev"]
