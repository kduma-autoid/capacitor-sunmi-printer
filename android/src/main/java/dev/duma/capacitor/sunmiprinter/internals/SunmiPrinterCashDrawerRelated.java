package dev.duma.capacitor.sunmiprinter.internals;

import android.os.RemoteException;
import com.sunmi.peripheral.printer.SunmiPrinterService;
import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterCashDrawerRelated {

    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterCashDrawerRelated(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public void openDrawer(SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.openDrawer(callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public int getOpenDrawerTimes() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getOpenDrawerTimes();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean getDrawerStatus() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getDrawerStatus();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }
}
