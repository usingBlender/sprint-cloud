FROM nginx

WORKDIR /app

COPY index.html /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080