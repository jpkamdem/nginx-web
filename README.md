git clone https://github.com/jpkamdem/nginx-web.git
yarn
yarn build

sudo docker run -tid --rm -p 8090:80 \
chemin vers le dist/build qui contient ton index.html
  -v /home/lejipe/www/nginx-web/dist/:/usr/share/nginx/html \ # Changez dist par build si nécessaire
  -v /home/lejipe/www/nginx-web/nginx/nginx.conf:/etc/nginx/conf.d/default.conf \
  --name webserver nginx:latest
