# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy both client and server code
COPY . .

# Install server dependencies
RUN cd server && npm install

# Install client dependencies
RUN cd client && npm install && npm run build

# Expose your backend port
EXPOSE 5000

# Start app
CMD ["node", "server/index.js"]
