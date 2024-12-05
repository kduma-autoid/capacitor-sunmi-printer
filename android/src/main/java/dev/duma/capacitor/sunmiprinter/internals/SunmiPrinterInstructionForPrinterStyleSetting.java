package dev.duma.capacitor.sunmiprinter.internals;

import android.os.RemoteException;

import com.sunmi.peripheral.printer.SunmiPrinterService;

import dev.duma.capacitor.sunmiprinter.SunmiCallbackHelper;
import dev.duma.capacitor.sunmiprinter.SunmiPrintServiceConnector;

public class SunmiPrinterInstructionForPrinterStyleSetting {
    private final SunmiPrintServiceConnector connector;
    private final SunmiCallbackHelper callbackHelper;
    private final SunmiPrinterEscPosCommands escPosCommands;

    public SunmiPrinterInstructionForPrinterStyleSetting(SunmiPrintServiceConnector connector, SunmiCallbackHelper callbackHelper, SunmiPrinterEscPosCommands escPosCommands) {
        this.connector = connector;
        this.callbackHelper = callbackHelper;
        this.escPosCommands = escPosCommands;
    }

    public void setPrinterStyle(int key, int value) throws RuntimeException {
        SunmiPrinterService service = connector.getService();
        if(service == null) {
            throw new RuntimeException("Printer service is not initialized");
        }

        try {
            service.setPrinterStyle(key, value);
        } catch (RemoteException e) {
            throw new RuntimeException(e);
        }
    }

    public void SetLeftMargin(int width, SunmiCallbackHelper.Callback callback) {
        byte lByte = (byte) (width & 0xff);
        byte hByte = (byte) ((width >> 8) & 0xff);

        escPosCommands.sendRAWData(
                new byte[]{0x1D, 0x4C, lByte, hByte},
                callback
        );
    }

    public void SetPrintingAreaWidth(int width, SunmiCallbackHelper.Callback callback) {
        byte lByte = (byte) (width & 0xff);
        byte hByte = (byte) ((width >> 8) & 0xff);

        escPosCommands.sendRAWData(
                new byte[]{0x1D, 0x57, lByte, hByte},
                callback
        );
    }
}
