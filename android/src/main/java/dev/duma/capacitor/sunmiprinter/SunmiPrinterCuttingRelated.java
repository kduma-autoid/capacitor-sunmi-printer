package dev.duma.capacitor.sunmiprinter;

import android.os.RemoteException;

import com.sunmi.peripheral.printer.SunmiPrinterService;

public class SunmiPrinterCuttingRelated {
    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterCuttingRelated(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public void cutPaper(SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.cutPaper(callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    int getCutPaperTimes() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getCutPaperTimes();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }
}
