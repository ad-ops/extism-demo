namespace CounterLib;

using Extism.Sdk;


public class Builder 
{
    public static Counter CreateCounter() 
    {
        Console.WriteLine("Hello, World!");
        var manifest = new Manifest(new PathWasmSource("../plugin-assemblyscript/build/example.wasm"));
        var plugin = new Plugin(manifest, new HostFunction[] { }, withWasi: true);
        if ( !plugin.FunctionExists("count_vowels") ) 
        {
            throw new Exception("Function 'count_vowels' not found in plugin");
        }

        return new Counter(plugin);
    }
}

public class CountVowlsResult {
    public uint Count { get; set; }
    public string? Config { get; set; }
    public string? A { get; set; }
}

public class Counter: IDisposable
{
    private readonly Plugin _plugin;

    public Counter(Plugin plugin) => _plugin = plugin;

    public uint CountVowls(string text) 
    {
        var output = _plugin.Call<CountVowlsResult>("count_vowels", text);

        // var result = JsonSerializer.Deserialize<CountVowlsResult>(output, new JsonSerializerOptions() { PropertyNameCaseInsensitive = true });

        return output.Count;
    }

    public void Dispose() {
        _plugin?.Dispose();
    }
    
    
}
