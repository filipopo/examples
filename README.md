# Examples
Useless programs that demonstate something, each program has their own readme and install/run instructions + source code comments

You can create a container that demonstrates the FastestProgram and Fibonnaci programs by pulling/building and running the Dockerfile in this root directory:
```
docker pull filipmania/examples-test:latest
```
or
```
docker build -t filipmania/examples-test:latest .
```
and `docker run filipmania/examples-test:latest`

You may also interactively test it yourself: `docker run -it filipmania/examples-test:latest /bin/sh`
