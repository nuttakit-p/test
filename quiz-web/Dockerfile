# Stage 1: Build the application
FROM node:18-alpine3.18 AS build
WORKDIR /app

# Copy package.json for dependency installation
COPY package.json ./

#Install dependency installation
RUN npm install

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM nginx:alpine

# Copy the build artifacts from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
