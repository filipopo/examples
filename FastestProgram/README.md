# FastestProgram
Program that creates optimised for execution speed versions of other programs
Usage: go run FastestProgram.go (program) (arguments)
Output: (program)-fastest.out
## Tests
The node-fastest.out program was created using the Fibonacci.ts program from this same repository
And compiled with the following command: `go run FastestProgram.go node Fibonacci.js 105`
For more info on the Fibonacci.ts program, check out the relevant folder

First we will measure the speed of this program running only with node, this program is already using memoisation as an optimization technique, it will generate the first 105 numbers of the fibonacci sequence
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
./node-fastest.out  0.00s user 0.00s system 69% cpu 0.005 total
```
From the results it can be concluded that it's 11 times faster on average!
We will also test a running a computationaily lighter run which generates the first 10 numbers of the fibonacci sequence
```
me@PC FastestProgram % time ./a.out 10
0
1
...
21
34
./node-fastest.out 10  0.00s user 0.00s system 67% cpu 0.003 total
```
0.003 seconds for the first 10 numbers of the fibonacci sequence and 0.005 for the first 105, it seems like the time complexity is very logarithmic!
## Technical info
The program will also attempt to use metaprogramming to reprogram the input program
and strip unneeded code, it's most efficient when it's trained with computationaly
expensive input options, so it can analyze and create optimal code for all use cases

Example usage: go run FastestProgram.go node Fibonacci.js 105
Example output: node-fastest.out

In this example, the program sucessfully merges the compiled Fibonacci.js program with
only the binary code of the node execution execution environment needed to run it
