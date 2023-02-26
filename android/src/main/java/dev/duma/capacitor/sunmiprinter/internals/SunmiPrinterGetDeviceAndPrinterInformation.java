package dev.duma.capacitor.sunmiprinter.internals;

import android.os.Build;
import android.os.RemoteException;

import com.sunmi.peripheral.printer.SunmiPrinterService;

import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterGetDeviceAndPrinterInformation {
    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterGetDeviceAndPrinterInformation(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public String getPrinterSerialNo() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getPrinterSerialNo().trim();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public String getPrinterModel() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getPrinterModal().trim();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public String getPrinterVersion() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getPrinterVersion().trim();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public String getDeviceName() throws RuntimeException {
        return Build.MODEL;
    }

    public int updatePrinterState() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.updatePrinterState();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public String getServiceVersion() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getServiceVersion().trim();
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void getPrintedLength(SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.getPrintedLength(callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public int getPrinterPaper() throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            return service.getPrinterPaper() == 1 ? 58 : 80;
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

}
