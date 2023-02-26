package dev.duma.capacitor.sunmiprinter;

import android.os.Build;
import android.os.RemoteException;

import com.sunmi.peripheral.printer.SunmiPrinterService;

public class SunmiPrinterGetDeviceAndPrinterInformation {
    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterGetDeviceAndPrinterInformation(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    String getPrinterSerialNo() throws RuntimeException {
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

    String getPrinterModel() throws RuntimeException {
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

    String getPrinterVersion() throws RuntimeException {
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

    String getDeviceName() throws RuntimeException {
        return Build.MODEL;
    }

    int updatePrinterState() throws RuntimeException {
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

    String getServiceVersion() throws RuntimeException {
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

    void getPrintedLength(SunmiCallbackHelper.Callback callback) throws RuntimeException {
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

    int getPrinterPaper() throws RuntimeException {
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
