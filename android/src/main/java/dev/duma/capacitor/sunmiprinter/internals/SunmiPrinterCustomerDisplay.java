package dev.duma.capacitor.sunmiprinter.internals;

import android.graphics.Bitmap;
import android.os.RemoteException;

import com.sunmi.peripheral.printer.SunmiPrinterService;

import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterCustomerDisplay {
    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterCustomerDisplay(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public void sendLCDCommand(int flag) {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.sendLCDCommand(flag);
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendLCDString(String string, SunmiCallbackHelper.Callback callback) {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.sendLCDString(string, callback.getInnerLcdCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendLCDDoubleString(String topText, String bottomText, SunmiCallbackHelper.Callback callback) {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.sendLCDDoubleString(topText, bottomText, callback.getInnerLcdCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendLCDMultiString(String[] text, int[] align, SunmiCallbackHelper.Callback callback) {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.sendLCDMultiString(text, align, callback.getInnerLcdCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendLCDFillString(String string, int size, boolean fill, SunmiCallbackHelper.Callback callback) {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.sendLCDFillString(string, size, fill, callback.getInnerLcdCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendLCDBitmap(Bitmap bitmap, SunmiCallbackHelper.Callback callback) {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.sendLCDBitmap(bitmap, callback.getInnerLcdCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

}
