package dev.duma.capacitor.sunmiprinter.internals;

import android.os.RemoteException;

import com.sunmi.peripheral.printer.SunmiPrinterService;

import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterTextPrinting {
    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;
    private final SunmiPrinterEscPosCommands escPosCommands;

    public SunmiPrinterTextPrinting(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper, SunmiPrinterEscPosCommands escPosCommands) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
        this.escPosCommands = escPosCommands;
    }

    public void setAlignment(int alignment, SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.setAlignment(alignment, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void setFontName(String typeface, SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.setFontName(typeface, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void setFontSize(float fontsize, SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.setFontSize(fontsize, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void setBold(boolean enable, SunmiCallbackHelper.Callback callback) throws RuntimeException {
        escPosCommands.sendRAWData(
            enable
                ? new byte[]{0x1B, 0x45, 0x01}
                : new byte[]{0x1B, 0x45, 0x00},
            callback
        );
    }

    public void printText(String text, SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.printText(text, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void printTextWithFont(String text, String typeFace, float fontSize, SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.printTextWithFont(text, typeFace, fontSize, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void printOriginalText(String text, SunmiCallbackHelper.Callback callback) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.printOriginalText(text, callback.getInnerResultCallback());
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

}
