package dev.duma.capacitor.sunmiprinter.internals;

import android.os.RemoteException;

import com.sunmi.peripheral.printer.SunmiPrinterService;

import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterPaperMovingRelated {
    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterPaperMovingRelated(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public void lineWrap(int lines, SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.lineWrap(lines, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }
}
