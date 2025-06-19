package dev.duma.capacitor.sunmiprinter.internals;

import android.graphics.Bitmap;
import android.os.RemoteException;
import com.sunmi.peripheral.printer.SunmiPrinterService;
import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterImagePrinting {

    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterImagePrinting(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public void printBitmap(Bitmap bitmap, SunmiCallbackHelper.Callback callback) {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.printBitmap(bitmap, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void printBitmapCustom(Bitmap bitmap, int type, SunmiCallbackHelper.Callback callback) {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.printBitmapCustom(bitmap, type, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }
}
