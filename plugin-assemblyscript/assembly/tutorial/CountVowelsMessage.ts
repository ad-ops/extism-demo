// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.3

import { Writer, Reader } from "as-proto/assembly";

export class CountVowelsMessage {
  static encode(message: CountVowelsMessage, writer: Writer): void {
    writer.uint32(8);
    writer.uint32(message.count);

    writer.uint32(18);
    writer.string(message.config);

    writer.uint32(26);
    writer.string(message.a);
  }

  static decode(reader: Reader, length: i32): CountVowelsMessage {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CountVowelsMessage();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint32();
          break;

        case 2:
          message.config = reader.string();
          break;

        case 3:
          message.a = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  count: u32;
  config: string;
  a: string;

  constructor(count: u32 = 0, config: string = "", a: string = "") {
    this.count = count;
    this.config = config;
    this.a = a;
  }
}