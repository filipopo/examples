FROM golang:1.21-bookworm

WORKDIR /usr/src/app

# Install clang and nodejs
RUN apt update && apt install -y clang nodejs npm time

# Copy FastestProgram
COPY FastestProgram/FastestProgram.go FastestProgram/go.mod ./

# Copy Fibonacci program
COPY Fibonacci/Fibonacci.ts Fibonacci/tsconfig.json Fibonacci/package.json Fibonacci/package-lock.json ./

# Install and compile Fibonacci program
RUN npm install && npx tsc

# Create fastest version of Fibonacci program
RUN go run FastestProgram.go node Fibonacci.js 105

# Run tester script
CMD [ "/bin/sh", "-c", "echo testing regular version; time -p node Fibonacci.js 105; echo '\ntesting fastest version'; time -p ./node-fastest.out" ]
