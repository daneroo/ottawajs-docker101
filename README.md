# OttawaJS - Docker-101

Presented at OttawaJS meetup on 2015-05-11

## References

[Slides](https://slides.com/daneroo/docker101)
[DNS Round Robin](https://github.com/everett-toews/docker-dns-round-robin)

## TODO

- Separate static web from api

## Notes

```
docker pull ubuntu
docker pull ubuntu:14.04
docker pull ubuntu:16.04
docker pull nginx
docker pull redis
docker pull node:4
docker pull node:6

## docker run
docker run --rm -it ubuntu
docker run --rm -it ubuntu:14.04
docker run --rm -it ubuntu:16.04
docker run --rm -it centos

# pipes
time ( date | cat | wc )
time ( docker run --rm -i ubuntu date | docker run --rm -i centos wc | docker run --rm -i ubuntu wc )

# nginx
docker run -d --name nginx -p 8756:80 nginx
open http://0.0.0.0:8756
docker logs -f nginx
docker ps
docker stop nginx
docker ps -a
docker rm nginx

## docker build
cd web
docker build -t web .
docker run --rm -it -p 8000:8000 web

open http://0.0.0.0:8000
open http://$(docker-machine ip dev):8000

## docker-compose
docker-compose build
docker-compose up
docker-compose down

## docker-compose scale
docker-compose -f scale.yml build
docker-compose -f scale.yml up
docker-compose -f scale.yml scale web=3
docker-compose -f scale.yml scale web=1
docker-compose -f scale.yml down

```
