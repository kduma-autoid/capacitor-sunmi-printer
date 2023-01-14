package dev.duma.capacitor.sunmiprinter;

import android.content.Context;
import android.util.Log;

import dev.duma.capacitor.sunmiprinter.helpers.utils.BluetoothUtil;
import dev.duma.capacitor.sunmiprinter.helpers.utils.BytesUtil;
import dev.duma.capacitor.sunmiprinter.helpers.utils.ESCUtil;
import dev.duma.capacitor.sunmiprinter.helpers.utils.SunmiPrintHelper;

public class SunmiPrinter {

    public String echo(String value) {
        Log.i("Echo", value);

        SunmiPrintHelper.getInstance().sendRawData(BytesUtil.getBaiduTestBytes());
        return value;
    }

    public void initPrinter() {
        if(BluetoothUtil.isBlueToothPrinter){
            BluetoothUtil.sendData(ESCUtil.init_printer());
        }else{
            SunmiPrintHelper.getInstance().initPrinter();
        }
    }

    public void init(Context context) {
        SunmiPrintHelper.getInstance().initSunmiPrinterService(context);
    }
}
