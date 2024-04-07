# Extism Demo
This is a simple demo of the [Extism](https://extism.org) which is a plugin library to write and run WebAssembly in different languages.

## Layout
Plugins are the programs which will be called by the host applications. They output a `wasm` file, that can then be loaded into an Extism runtime.

Hosts are the programs running the actual application code and using the plugin functions produced by extism.

#### plugin-assemblyscript
[Assemblyscript](https://www.assemblyscript.org/) is a typescript subset which is made to compile to WebAssembly.

```sh
cd ./plugin-assemblyscript
npm install
npm run protoc
npm run extism
```

#### host-dotnet
Using wasm from the `plugin-assemblyscript` project and 3 different ways:
- Directly from wasm-file using Extism
- Directly from wasm-file using Extism, but parsing the result using protobuf
- Using `LibDotnet` as a wrapper to call the function for a more standard feeling.

```sh
dotnet restore
dotnet run
```

#### LibDotnet
Simple wrapper library to test
```sh
dotnet restore
dotnet build
```

## Future ideas
- Combine different modules that can work together
- Add more examples
- 