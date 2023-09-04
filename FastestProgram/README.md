# FastestProgram
A program that creates optimised for execution speed versions of other programs

Usage: go run FastestProgram.go (program) (arguments)

Output: (program)-fastest.out
## Quick start guide
You will need Go and Clang installed to run this program, you can get them from here: [Go](https://go.dev/dl/) and [Clang](https://releases.llvm.org/download.html)

Preferably you should get the latest versions due to the advanced features used in this project, The oldest known supported versions are go1.21.0 and clang-1403.0.22.14.1
## Tests
The node-fastest.out program used in the following test was created using the Fibonacci.ts program from this same repository and compiled with the following command: `go run FastestProgram.go node Fibonacci.js 105`

This program is already using memoisation as an optimization technique, for more info on it, check out [Fibonacci](../Fibonacci)

First, we will measure the speed of this program running only with node, it will generate the first 105 numbers of the Fibonacci sequence
```
me@PC FastestProgram % time node Fibonacci.js 105
0
1
...
2.4278932283999755e+21
3.9284137646068717e+21
node Fibonacci.js 105  0.04s user 0.01s system 93% cpu 0.055 total
```
0.055 seconds, not bad, but can it be further improved using the FastestProgram?
```
me@PC FastestProgram % time ./node-fastest.out 105
0
1
...
2.4278932283999755e+21
3.9284137646068717e+21
./node-fastest.out 105  0.00s user 0.00s system 69% cpu 0.005 total
```
From the results, it can be concluded that it's 11 times faster on average!

We will also test running a computationally lighter run which generates the first 10 numbers of the Fibonacci sequence
```
me@PC FastestProgram % time ./node-fastest.out 10
0
1
...
34
55
./node-fastest.out 10  0.00s user 0.00s system 67% cpu 0.003 total
```
0.003 seconds for the first 10 numbers of the Fibonacci sequence and 0.005 for the first 105, It seems like the time complexity is very logarithmic!
## Technical info
The program will also attempt to use metaprogramming to reprogram the input program and strip unneeded code, it's most efficient when it's trained with computationally expensive input options, so it can analyze and create optimal code for all use cases

Example usage: `go run FastestProgram.go node Fibonacci.js 105`

Example output: `node-fastest.out`

In this example, the program successfully merges the compiled Fibonacci.js program with only the binary code of the node execution environment needed to run it
