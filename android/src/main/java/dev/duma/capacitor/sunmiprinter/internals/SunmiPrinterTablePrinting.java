package dev.duma.capacitor.sunmiprinter.internals;

import android.os.RemoteException;
import com.sunmi.peripheral.printer.SunmiPrinterService;
import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterTablePrinting {

    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;

    public SunmiPrinterTablePrinting(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
    }

    public void printColumnsText(String[] colsTextArr, int[] colsWidthArr, int[] colsAlign, SunmiCallbackHelper.Callback callback) {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.printColumnsText(colsTextArr, colsWidthArr, colsAlign, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void printColumnsString(String[] colsTextArr, int[] colsWidthArr, int[] colsAlign, SunmiCallbackHelper.Callback callback) {
        SunmiPrinterService service = connector.getService();
        if (service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.printColumnsString(colsTextArr, colsWidthArr, colsAlign, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }
}
