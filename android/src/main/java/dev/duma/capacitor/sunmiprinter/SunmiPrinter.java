package dev.duma.capacitor.sunmiprinter;

import android.content.Context;
import android.util.Log;

import dev.duma.capacitor.sunmiprinter.helpers.utils.BluetoothUtil;
import dev.duma.capacitor.sunmiprinter.helpers.utils.BytesUtil;
import dev.duma.capacitor.sunmiprinter.helpers.utils.ESCUtil;
import dev.duma.capacitor.sunmiprinter.helpers.utils.SunmiPrintHelper;

public class SunmiPrinter {

    public void initPrinter() {
        if(BluetoothUtil.isBlueToothPrinter){
            BluetoothUtil.sendData(ESCUtil.init_printer());
        }else{
            SunmiPrintHelper.getInstance().initPrinter();
        }
    }

    public boolean isLabelMode() {
        return SunmiPrintHelper.getInstance().isLabelMode();
    }

    public void labelOutput() {
        SunmiPrintHelper.getInstance().labelOutput();
    }

    public void labelLocate() {
        SunmiPrintHelper.getInstance().labelLocate();
    }

    public void sendTextsToLcd() { //todo
        SunmiPrintHelper.getInstance().sendTextsToLcd();
    }

    public void sendTextToLcd() { //todo
        SunmiPrintHelper.getInstance().sendTextToLcd();
    }

    public void controlLcd(int flag) {
        SunmiPrintHelper.getInstance().controlLcd(flag);
    }

    public void openCashBox() {
        SunmiPrintHelper.getInstance().openCashBox();
    }

    public String getPrinterPaper() {
        return SunmiPrintHelper.getInstance().getPrinterPaper();
    }

    public String getPrinterVersion() {
        return SunmiPrintHelper.getInstance().getPrinterVersion();
    }

    public String getDeviceModel() {
        return SunmiPrintHelper.getInstance().getDeviceModel();
    }

    public String getPrinterSerialNo() {
        return SunmiPrintHelper.getInstance().getPrinterSerialNo();
    }

    public void sendRAWData(byte[] data) {
        if(BluetoothUtil.isBlueToothPrinter){
            BluetoothUtil.sendData(data);
        }else{
            SunmiPrintHelper.getInstance().sendRawData(data);
        }
    }

    public void setMode(boolean bluetooth) {
        BluetoothUtil.isBlueToothPrinter = bluetooth;
    }

    public void init(Context context) {
        if(BluetoothUtil.isBlueToothPrinter){
            BluetoothUtil.connectBlueTooth(context);
        }else{
            SunmiPrintHelper.getInstance().initSunmiPrinterService(context);
        }
    }
}
