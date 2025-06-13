# syntax=docker/dockerfile:1

# Use a specific Node.js version for reproducibility
ARG NODE_VERSION=22.13.1

# Use the slim Alpine image for a smaller footprint
FROM node:${NODE_VERSION}-alpine

# Set production environment
ENV NODE_ENV=production

# Set working directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev

# Run as non-root user for security
USER node

# Copy application files
COPY . .

# Expose the port your Express app uses (adjust if needed)
EXPOSE 5001

# Add a health check for the Express API
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5001/health || exit 1

# Run the Express application
CMD ["npm", "run","start"]