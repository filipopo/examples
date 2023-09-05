FROM golang:1.21-bookworm as build

WORKDIR /opt

# Install build dependencies
RUN apt update && apt install -y nodejs npm

# Copy FastestProgram
COPY FastestProgram/FastestProgram.go FastestProgram/go.mod ./

# Compile FastestProgram
RUN go build

# Copy Fibonacci program
COPY Fibonacci/Fibonacci.ts Fibonacci/tsconfig.json Fibonacci/package.json Fibonacci/package-lock.json ./

# Install and compile Fibonacci program
RUN npm install && npx tsc

FROM debian:bookworm-slim

WORKDIR /usr/src/app

# Install run dependencies
RUN apt update && apt install -y clang nodejs time

# Copy compiled FastestProgram
COPY --from=build /opt/FastestProgram .

# Copy compiled Fibonacci program
COPY --from=build /opt/Fibonacci.js .

# Create fastest version of Fibonacci program
RUN ./FastestProgram node Fibonacci.js 105

# Run tester script
CMD [ "/bin/sh", "-c", "echo testing regular version; time -p node Fibonacci.js 105; echo '\ntesting fastest version'; time -p ./node-fastest.out" ]
