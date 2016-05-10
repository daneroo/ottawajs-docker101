

## Notes

```
docker pull ubuntu
docker pull ubuntu:14.04
docker pull ubuntu:16.04
docker pull node:4
docker pull node:6

# docker run
docker run --rm -it ubuntu
docker run --rm -it ubuntu:14.04
docker run --rm -it ubuntu:16.04
docker run --rm -it centos

# docker build
cd web
docker build -t web .
docker run --rm -it -p 8000:8000 web




```