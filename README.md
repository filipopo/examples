# Examples
Useless programs that demonstate something, each program has their own readme and install/run instructions + source code comments

You can create a container that demonstrates the FastestProgram and Fibonnaci programs by building and running the Dockerfile in this root directory
```
docker build -t examples-test:latest .
docker run examples-test:latest
```
You may also interactively test it yourself: `docker run -it examples-test:latest /bin/sh`
