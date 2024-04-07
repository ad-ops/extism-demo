using System;
using Extism.Sdk;
using CounterLib;
using Demo.Protobuf.Extism.Count;
using System.Text;

Console.WriteLine("Basic");
var manifest = new Manifest(new PathWasmSource("../plugin-assemblyscript/build/example.wasm"));
using var plugin = new Plugin(manifest, new HostFunction[] { }, withWasi: true);
var output = plugin.Call("count_vowels", "Hello, World!");
Console.WriteLine(output);

Console.WriteLine("Lib");
using var counter = Builder.CreateCounter();
Console.WriteLine(counter.CountVowls("Hello, World!"));
Console.WriteLine(counter.CountVowls("adsasdasdsad"));

Console.WriteLine("Protobuf");
ReadOnlySpan<byte> input = Encoding.UTF8.GetBytes("Hello, World!");
var manifestProto = new Manifest(new PathWasmSource("../plugin-assemblyscript/build/example.wasm"));
using var pluginProto = new Plugin(manifestProto, new HostFunction[] { }, withWasi: true);
var outputProto = plugin.Call("count_vowels_proto",input );
CountVowelsMessage message = CountVowelsMessage.Parser.ParseFrom(outputProto);
Console.WriteLine(message.Count);