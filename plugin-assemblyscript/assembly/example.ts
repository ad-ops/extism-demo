import { Host, Var, Config } from '@extism/as-pdk';
import { CountVowelsMessage } from './tutorial/CountVowelsMessage';
import { Protobuf } from "as-proto/assembly";


function myAbort(
  message: string | null,
  fileName: string | null,
  lineNumber: u32,
  columnNumber: u32
): void { }

export function count_vowels(): i32 {
  let str: string = Host.inputString();
  var count = 0;
  for (let i: i32 = 0; i < str.length; i++) {
    let x: string = str[i];
    if (x == 'a' || x == 'A' ||
      x == 'e' || x == 'E' ||
      x == 'i' || x == 'I' ||
      x == 'o' || x == 'O' ||
      x == 'u' || x == 'U') {
      count += 1;
    }
  }

  // Additional plug-in APIs:

  // persistent variables (scoped to individual plugin)
  var a = Uint8Array.wrap(String.UTF8.encode("this is var a"))
  Var.set('a', a);

  let data = Var.get('a');
  let var_a = (data == null) ? "null" : String.UTF8.decode(data.buffer);

  // config, provided by the host
  const thing = Config.get("thing");

  // write data back to host for use in program
  var out = '{"count": ' + count.toString() + ', "config": "' + (thing == null ? "null" : thing) + '", "a": "' + var_a + '"}';
  Host.outputString(out);
  Var.remove('a');

  return 0;
}

export function count_vowels_proto(): i32 {
  let str: string = Host.inputString();
  var count = 0;
  for (let i: i32 = 0; i < str.length; i++) {
    let x: string = str[i];
    if (x == 'a' || x == 'A' ||
      x == 'e' || x == 'E' ||
      x == 'i' || x == 'I' ||
      x == 'o' || x == 'O' ||
      x == 'u' || x == 'U') {
      count += 1;
    }
  }

  // Additional plug-in APIs:

  // persistent variables (scoped to individual plugin)
  var a = Uint8Array.wrap(String.UTF8.encode("this is var a"))
  Var.set('a', a);

  let data = Var.get('a');
  let var_a = (data == null) ? "null" : String.UTF8.decode(data.buffer);

  // config, provided by the host
  const thing = Config.get("thing");

  const countVowels = new CountVowelsMessage(count, thing == null ? "null" : thing, var_a);
  const out = Protobuf.encode(countVowels, CountVowelsMessage.encode);
  // write data back to host for use in program
  Host.output(out);
  Var.remove('a');

  return 0;
}