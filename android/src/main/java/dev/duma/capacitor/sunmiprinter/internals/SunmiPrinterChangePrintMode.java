package dev.duma.capacitor.sunmiprinter.internals;

import android.os.RemoteException;
import com.sunmi.peripheral.printer.SunmiPrinterService;
import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterChangePrintMode {

    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterChangePrintMode(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public int getPrinterMode() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getPrinterMode();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public int getPrinterBBMDistance() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getPrinterBBMDistance();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }
}
