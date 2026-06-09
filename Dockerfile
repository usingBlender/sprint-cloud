FROM nginx

WORKDIR /app

COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

COPY . .

EXPOSE 80