# Learning Docker

## Core concepts
(git) repo -> (docker) image -> container (app)

## CLI Commands

For all of the following commands, you have to first navigate to the directory that hosts either the `Dockerfil` or the `docker-compose.yml` files.

### 1. Images

#### 1.1. Building
```sh
docker build .
# OR to tag an image
docker build -t author/repo:tag .
```

#### 1.2. Listing
```sh
docker images
# OR
docker image ls
```

#### 1.3. Removing
```sh
docker rmi $IMAGE_IDENTIFIER
```

Where `$IMAGE_IDENTIFIER` is either `Image ID` or image tag, i.e. `author/repo:tag`.

### 2. Containers

#### 2.1. Running
This will essentially CREATE a new container off of an image. You can create multiple containers from a single image.

```sh
docker run $IMAGE_IDENTIFIER
# OR to name a container
docker run --name app $IMAGE_IDENTIFIER
# OR to forward the port to host
docker run --name app -p 4000:4000 $IMAGE_IDENTIFIER
# OR to create a volume from a host directory
docker run --name app -p 4000:4000 -v /absolute/path/to/host/dir:/absolute/path/to/docker/dir $IMAGE_IDENTIFIER

# OR to automatically remove the container after being stopped
docker run --name app -p 4000:4000 -v /absolute/path/to/host/dir:/absolute/path/to/docker/dir --rm $IMAGE_IDENTIFIER
# OR to run the container in detached/daemon (background) mode
docker run --name app -p 4000:4000 -v /absolute/path/to/host/dir:/absolute/path/to/docker/dir -d $IMAGE_IDENTIFIER
```

#### 2.2. Listing
```sh
# To list running containers
docker ps
# OR to include stopped containers
docker ps -a
```

#### 2.3. Stopping
Stopped containers are not entirely removed and they can be started again later, but their initialization commands are already executed.

```sh
docker stop $CONTAINER_IDENTIFIER
```

Where `$CONTAINER_IDENTIFIER` is either `Container ID` or randomly generated container name, i.e. `scary_ship`.

#### 2.4. Starting
Note that contrary to `docker run`, in this command you are NOT creating a _new_ image and that you are working with `$CONTAINER_IDENTIFIER` instead of `$IMAGE_IDENTIFIER`. Also note that `docker start` always starts the container in _detached_ mode.

```sh
docker start $CONTAINER_IDENTIFIER
```

#### 2.5. Removing
```sh
docker rm $CONTAINER_IDENTIFIER
```

### 3. Compose

#### 3.1. Build and run resources
```sh
docker compose up
# OR to override the default .env file with another one
docker compose --env-file .development.env up
# OR to run in the detached/daemon (background) mode
docker compose up -d
```

#### 3.2 View container logs
```sh
docker comopse logs
```

#### 3.3. List images
```sh
docker compose images
```

#### 3.4. List services
```sh
docker compose ls
# OR to list stopped services as well
docker compose ls -a
```

#### 3.5. Stop resources
```sh
docker compose down
```

#### 3.6. Remove resources
```sh
docker compose rm
```

### Miscellaneous

#### Run something inside container
```sh
# For starting an interactive shell in Ubuntu flavors
docker exec -it $CONTAINER_IDENTIFIER /bin/bash
# OR for Alpine flavors
docker exec -it $CONTAINER_IDENTIFIER /bin/sh
# OR for shorter version
docker exec -it $CONTAINER_IDENTIFIER sh
# OR to run a specific command
docker exec -it $CONTAINER_IDENTIFIER psql
```

#### List volumes
```sh
docker volume ls
```

#### List networks
```sh
docker network ls
```
