import { Queue } from './../core';
// The clock circuit ticks at a constant rate; each tick is called a cycle.

import { getAllLines } from '../utils';

// addx V takes two cycles to complete. After two cycles, the X register is increased by the value V. (V can be negative.)

// noop takes one cycle to complete. It has no other effect.

abstract class Instruction {
  private type: string;
  time: number;

  constructor(type: string, time: number) {
    this.type = type;
    this.time = time;
  }

  operation(callback: Function) {}
}

class NoOpp extends Instruction {}

class AddX extends Instruction {
  constructor(readonly callback?: Function) {
    super('addx', 2);
  }

  operation() {
    this.callback?.call();
  }
}

class CPU {
  private register: number;
  private instructions: Queue<Instruction>;

  constructor() {
    this.register = 1;
    this.instructions = new Queue<Instruction>();
  }

  addInstruction(instruction: Instruction) {
    this.instructions.enqueue(instruction);
  }

  process() {
    // let instruction = this.instructions.dequeue();
    // instruction.operation(() => this.register++);
    while (!this.instructions.isEmpty()) {
      if (this.instructions.front()?.time != 0) {
        this.instructions.front()!.time--;
      } else {
        const instruction = this.instructions.dequeue();
        instruction?.operation();
      }
      //     if(this.)
      //     if(this.instructions.front().time > 1) {
      //   let instruction = this.instructions.dequeue();
      //   instruction.operation(() => this.register++);
    }
  }
}

async function run() {
  const instructions = await getAllLines(__dirname, 'sample-input.txt');
  console.log(instructions);
}

run();
