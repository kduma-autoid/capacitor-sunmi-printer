package dev.duma.capacitor.sunmiprinter;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "SunmiPrinter")
public class SunmiPrinterPlugin extends Plugin {

    private SunmiPrinter implementation = new SunmiPrinter();

    @Override
    public void load() {
        super.load();

        implementation.init(this.getContext());
    }

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void initPrinter(PluginCall call) {
        implementation.initPrinter();

        call.resolve();
    }
}
