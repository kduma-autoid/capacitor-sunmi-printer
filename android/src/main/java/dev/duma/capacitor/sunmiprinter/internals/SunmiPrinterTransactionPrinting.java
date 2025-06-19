package dev.duma.capacitor.sunmiprinter.internals;

import android.os.RemoteException;
import com.sunmi.peripheral.printer.SunmiPrinterService;
import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterTransactionPrinting {

    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterTransactionPrinting(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public void enterPrinterBuffer(boolean clean) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.enterPrinterBuffer(clean);
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void exitPrinterBuffer(boolean commit) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.exitPrinterBuffer(commit);
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void exitPrinterBufferWithCallback(boolean commit, SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.exitPrinterBufferWithCallback(commit, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void commitPrinterBuffer() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.commitPrinterBuffer();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void commitPrinterBufferWithCallback(SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.commitPrinterBufferWithCallback(callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }
}
