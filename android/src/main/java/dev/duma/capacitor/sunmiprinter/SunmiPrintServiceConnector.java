package dev.duma.capacitor.sunmiprinter;

import android.content.Context;

import androidx.annotation.Nullable;

import com.sunmi.peripheral.printer.InnerPrinterCallback;
import com.sunmi.peripheral.printer.InnerPrinterException;
import com.sunmi.peripheral.printer.InnerPrinterManager;
import com.sunmi.peripheral.printer.SunmiPrinterService;

public class SunmiPrintServiceConnector {
    private final Context context;

    public SunmiPrintServiceConnector(Context context) {
        this.context = context;
    }

    enum PrinterStatusEnum {
        NoPrinter(0x00000000),
        CheckPrinter(0x00000001),
        FoundPrinter(0x00000002),
        LostPrinter(0x00000003);

        public final int value;

        PrinterStatusEnum(int value) {
            this.value = value;
        }
    }

    private PrinterStatusEnum printerStatus = PrinterStatusEnum.CheckPrinter;

    @Nullable
    private SunmiPrinterService sunmiPrinterService;

    private InnerPrinterCallback innerPrinterCallback = new InnerPrinterCallback() {
        @Override
        protected void onConnected(SunmiPrinterService service) {
            sunmiPrinterService = service;
            checkSunmiPrinterService(service);
        }

        @Override
        protected void onDisconnected() {
            sunmiPrinterService = null;
            printerStatus = PrinterStatusEnum.LostPrinter;
        }
    };

    /**
     * init sunmi print service
     */
    public void bindService(){
        try {
            boolean ret =  InnerPrinterManager.getInstance().bindService(context, innerPrinterCallback);
            if(!ret){
                printerStatus = PrinterStatusEnum.NoPrinter;
            }
        } catch (InnerPrinterException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     *  deInit sunmi print service
     */
    public void unBindService(){
        try {
            if(sunmiPrinterService != null){
                InnerPrinterManager.getInstance().unBindService(context, innerPrinterCallback);
                sunmiPrinterService = null;
                printerStatus = PrinterStatusEnum.LostPrinter;
            }
        } catch (InnerPrinterException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Check the printer connection,
     * like some devices do not have a printer but need to be connected to the cash drawer through a print service
     */
    private void checkSunmiPrinterService(SunmiPrinterService service){
        boolean ret = false;
        try {
            ret = InnerPrinterManager.getInstance().hasPrinter(service);
        } catch (InnerPrinterException e) {
            throw new RuntimeException(e);
        }

        printerStatus = ret ? PrinterStatusEnum.FoundPrinter : PrinterStatusEnum.NoPrinter;
    }


    public PrinterStatusEnum getPrinterStatus() {
        return printerStatus;
    }

    @Nullable
    public SunmiPrinterService getService() {
        return sunmiPrinterService;
    }
}
