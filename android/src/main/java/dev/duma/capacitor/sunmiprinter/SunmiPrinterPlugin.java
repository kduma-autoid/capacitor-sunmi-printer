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
    public void isLabelMode(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("label_mode", implementation.isLabelMode());
        call.resolve(ret);
    }

    @PluginMethod
    public void labelOutput(PluginCall call) {
        implementation.labelOutput();

        call.resolve();
    }

    @PluginMethod
    public void labelLocate(PluginCall call) {
        implementation.labelLocate();

        call.resolve();
    }

    @PluginMethod
    public void sendTextsToLcd(PluginCall call) {
        implementation.sendTextsToLcd();

        call.resolve();
    }

    @PluginMethod
    public void sendTextToLcd(PluginCall call) {
        implementation.sendTextToLcd();

        call.resolve();
    }

    @PluginMethod
    public void controlLcd(PluginCall call) {
        int flag = call.getInt("flag");

        implementation.controlLcd(flag);

        call.resolve();
    }

    @PluginMethod
    public void openCashBox(PluginCall call) {
        implementation.openCashBox();

        call.resolve();
    }

    @PluginMethod
    public void getPrinterPaper(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("paper", implementation.getPrinterPaper());
        call.resolve(ret);
    }

    @PluginMethod
    public void getPrinterVersion(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("version", implementation.getPrinterVersion());
        call.resolve(ret);
    }

    @PluginMethod
    public void getDeviceModel(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("model", implementation.getDeviceModel());
        call.resolve(ret);
    }

    @PluginMethod
    public void getPrinterSerialNo(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("serial", implementation.getPrinterSerialNo());
        call.resolve(ret);
    }

    @PluginMethod
    public void sendRAWData(PluginCall call) {
        String value = call.getString("data");

        assert value != null;
        implementation.sendRAWData(value.getBytes());
        call.resolve();
    }

    @PluginMethod
    public void setMode(PluginCall call) {
        boolean bluetooth = Boolean.TRUE.equals(call.getBoolean("bluetooth"));
        implementation.setMode(bluetooth);
        call.resolve();
    }

    @PluginMethod
    public void initPrinter(PluginCall call) {
        implementation.initPrinter();

        call.resolve();
    }
}
