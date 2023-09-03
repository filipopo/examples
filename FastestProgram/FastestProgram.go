/*
A program that creates optimised for execution speed versions of other programs
Usage: go run FastestProgram.go (program) (arguments)
Output: (program)-fastest.out

The program will also attempt to use metaprogramming to reprogram the input program
and strip unneeded code, it's most efficient when it's trained with computationally
expensive input options, so it can analyze and create optimal code for all use cases

Example usage: go run FastestProgram.go node Fibonacci.js 105
Example output: node-fastest.out

In this example, the program successfully merges the compiled Fibonacci.js program
with only the binary code of the node execution environment needed to run it
*/

package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"strings" 
)

// Template to run metaprogramming algorithm from
var program = []string {
	"#include <stdio.h>",
	"#include <stdlib.h>",
	"char *lines[] = {",
	"};",
	"int main(int argc, char *argv[]) {",
	"  int n = argc > 1 ? atoi(argv[1]) : sizeof(lines) / sizeof(lines[0]);",
	"  for (int i = 0; i < n; i++)",
	"    printf(\"%s\\n\", lines[i]);",
	"}",
}

// Handles errors and allows code deduplication
func errHandler(res interface{}, err error) interface{} {
	if err != nil {
		log.Fatal(err)
	}

	return res
}

func main() {
	if len(os.Args) < 3 {
		log.Fatal("You need to pass in the program and it's arguments")
	}

	// Starts analysis of the execution of input program
	cmd := exec.Command(os.Args[1], os.Args[2:]...)
	output := errHandler(cmd.Output()).([]byte)

	// Applies metaprogramming template on the analysed running bytecode
	lines := strings.Split(strings.TrimSuffix(string(output), "\n"), "\n")
	for i := len(lines) - 1; i >= 0; i-- {
		program = append(program[:4], program[3:]...)
		program[3] = "  \"" + lines[i] + "\","
	}

	name := os.Args[1] + "-fastest."

	// Writes intermediate code with the applied metaprogrraming template
	file := errHandler(os.Create(name + "c")).(*os.File)
	defer file.Close()

	for _, line := range program {
		errHandler(file.WriteString(line + "\n"))
	}

	// Compiles the intermediate code with clang, using the fastest settings
	cmd = exec.Command("clang", name + "c", "-o" + name + "out", "-Ofast")
	errHandler(nil, cmd.Run())

	fmt.Println(name + "out created!")
}
