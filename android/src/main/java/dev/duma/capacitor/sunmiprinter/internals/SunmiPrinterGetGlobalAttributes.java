package dev.duma.capacitor.sunmiprinter.internals;

import android.os.RemoteException;
import com.sunmi.peripheral.printer.SunmiPrinterService;
import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterGetGlobalAttributes {

    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterGetGlobalAttributes(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public int getForcedDouble() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getForcedDouble();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean isForcedAntiWhite() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.isForcedAntiWhite();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean isForcedBold() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.isForcedBold();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean isForcedUnderline() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.isForcedUnderline();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public int getForcedRowHeight() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getForcedRowHeight();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public int getFontName() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getFontName();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public int getPrinterDensity() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getPrinterDensity();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }
}
