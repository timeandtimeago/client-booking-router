# Use Node.js 18 Alpine image as a base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if you use it)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining app files
COPY . .

# Expose port 8080 (can be changed)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]