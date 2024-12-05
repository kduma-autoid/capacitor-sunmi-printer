package dev.duma.capacitor.sunmiprinter;

import android.content.Context;

import dev.duma.android.sunmi.printerstatusbroadcastreceiver.IPrinterStatusBroadcastReceiver;
import dev.duma.android.sunmi.printerstatusbroadcastreceiver.IPrinterStatusBroadcastReceiver.PrinterStatusCallback;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterBarcodePrinting;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterCashDrawerRelated;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterChangePrintMode;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterCustomerDisplay;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterCuttingRelated;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterEscPosCommands;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterGetDeviceAndPrinterInformation;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterGetGlobalAttributes;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterImagePrinting;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterInitializationAndSettings;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterInstructionForPrinterStyleSetting;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterLabelPrintingInstructions;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterPaperMovingRelated;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterTablePrinting;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterTextPrinting;
import dev.duma.capacitor.sunmiprinter.internals.SunmiPrinterTransactionPrinting;

public class SunmiPrinter {
    private final SunmiCallbackHelper callbackHelper = new SunmiCallbackHelper();

    private final SunmiPrintServiceConnector connector;
    private final IPrinterStatusBroadcastReceiver broadcastReceiver;

    private final SunmiPrinterInitializationAndSettings initializationAndSettings; // 1.2.1 Printer initialization and setting
    private final SunmiPrinterGetDeviceAndPrinterInformation getDeviceAndPrinterInformation; // 1.2.2 Get device and printer information
    private final SunmiPrinterEscPosCommands escPosCommands; // 1.2.3 ESC/POS commands
    private final SunmiPrinterInstructionForPrinterStyleSetting instructionForPrinterStyleSetting; // 1.2.4 Instruction for printer style setting interface
    private final SunmiPrinterChangePrintMode changePrintMode; // 1.2.5 Change print mode
    private final SunmiPrinterTextPrinting textPrinting; // 1.2.6 Text printing
    private final SunmiPrinterTablePrinting tablePrinting; // 1.2.7 Print a table
    private final SunmiPrinterImagePrinting imagePrinting; // 1.2.8 Print an image
    private final SunmiPrinterBarcodePrinting barcodePrinting; // 1.2.9 Print a 1D/2D barcode
    private final SunmiPrinterTransactionPrinting transactionPrinting; // 1.2.10 Transaction printing
    private final SunmiPrinterPaperMovingRelated paperMovingRelated; // 1.2.11 Paper moving related
    private final SunmiPrinterCuttingRelated cuttingRelated; // 1.2.12 Cutter (paper cutting) related
    private final SunmiPrinterCashDrawerRelated cashDrawerRelated; // 1.2.13 Cash drawer related
    private final SunmiPrinterGetGlobalAttributes getGlobalAttributes; // 1.2.14 Get global attributes
    private final SunmiPrinterCustomerDisplay customerDisplay; // 1.2.15 Customer display interface description
    private final SunmiPrinterLabelPrintingInstructions labelPrintingInstructions; // 1.2.16 Label printing instructions

    public SunmiPrinter(Context context, PrinterStatusCallback statusCallback) {
        this.connector = new SunmiPrintServiceConnector(context);
        this.broadcastReceiver = IPrinterStatusBroadcastReceiver.Factory.make(context, statusCallback);

        this.initializationAndSettings = new SunmiPrinterInitializationAndSettings(connector, callbackHelper); // 1.2.1 Printer initialization and setting
        this.getDeviceAndPrinterInformation = new SunmiPrinterGetDeviceAndPrinterInformation(connector, callbackHelper); // 1.2.2 Get device and printer information
        this.escPosCommands = new SunmiPrinterEscPosCommands(connector, callbackHelper); // 1.2.3 ESC/POS commands
        this.instructionForPrinterStyleSetting = new SunmiPrinterInstructionForPrinterStyleSetting(connector, callbackHelper, escPosCommands); // 1.2.4 Instruction for printer style setting interface
        this.changePrintMode = new SunmiPrinterChangePrintMode(connector, callbackHelper); // 1.2.5 Change print mode
        this.textPrinting = new SunmiPrinterTextPrinting(connector, callbackHelper, escPosCommands);// 1.2.6 Text printing
        this.tablePrinting = new SunmiPrinterTablePrinting(connector, callbackHelper); // 1.2.7 Print a table
        this.imagePrinting = new SunmiPrinterImagePrinting(connector, callbackHelper); // 1.2.8 Print an image
        this.barcodePrinting = new SunmiPrinterBarcodePrinting(connector, callbackHelper); // 1.2.9 Print a 1D/2D barcode
        this.transactionPrinting = new SunmiPrinterTransactionPrinting(connector, callbackHelper); // 1.2.10 Transaction printing
        this.paperMovingRelated = new SunmiPrinterPaperMovingRelated(connector, callbackHelper); // 1.2.11 Paper moving related
        this.cuttingRelated = new SunmiPrinterCuttingRelated(connector, callbackHelper); // 1.2.12 Cutter (paper cutting) related
        this.cashDrawerRelated = new SunmiPrinterCashDrawerRelated(connector, callbackHelper); // 1.2.13 Cash drawer related
        this.getGlobalAttributes = new SunmiPrinterGetGlobalAttributes(connector, callbackHelper); // 1.2.14 Get global attributes
        this.customerDisplay = new SunmiPrinterCustomerDisplay(connector, callbackHelper); // 1.2.15 Customer display interface description
        this.labelPrintingInstructions = new SunmiPrinterLabelPrintingInstructions(connector, callbackHelper); // 1.2.16 Label printing instructions
    }

    public void register() {
        connector.bindService();
        broadcastReceiver.register();
    }

    public void unregister() {
        connector.unBindService();
        broadcastReceiver.unregister();
    }

    public SunmiCallbackHelper getCallbackHelper() {
        return callbackHelper;
    }

    public SunmiPrintServiceConnector getConnector() {
        return connector;
    }

    // 1.2.1 Printer initialization and setting
    public SunmiPrinterInitializationAndSettings getInitializationAndSettings() {
        return initializationAndSettings;
    }

    // 1.2.2 Get device and printer information
    public SunmiPrinterGetDeviceAndPrinterInformation getGetDeviceAndPrinterInformation() {
        return getDeviceAndPrinterInformation;
    }

    // 1.2.3 ESC/POS commands
    public SunmiPrinterEscPosCommands getEscPosCommands() {
        return escPosCommands;
    }

    // 1.2.4 Instruction for printer style setting interface
    public SunmiPrinterInstructionForPrinterStyleSetting getInstructionForPrinterStyleSetting() {
        return instructionForPrinterStyleSetting;
    }

    // 1.2.5 Change print mode
    public SunmiPrinterChangePrintMode getChangePrintMode() {
        return changePrintMode;
    }

    // 1.2.6 Text printing
    public SunmiPrinterTextPrinting getTextPrinting() {
        return textPrinting;
    }

    // 1.2.7 Print a table
    public SunmiPrinterTablePrinting getTablePrinting() {
        return tablePrinting;
    }

    // 1.2.8 Print an image
    public SunmiPrinterImagePrinting getImagePrinting() {
        return imagePrinting;
    }

    // 1.2.9 Print a 1D/2D barcode
    public SunmiPrinterBarcodePrinting getBarcodePrinting() {
        return barcodePrinting;
    }

    // 1.2.10 Transaction printing
    public SunmiPrinterTransactionPrinting getTransactionPrinting() {
        return transactionPrinting;
    }

    // 1.2.11 Paper moving related
    public SunmiPrinterPaperMovingRelated getPaperMovingRelated() {
        return paperMovingRelated;
    }

    // 1.2.12 Cutter (paper cutting) related
    public SunmiPrinterCuttingRelated getCuttingRelated() {
        return cuttingRelated;
    }

    // 1.2.13 Cash drawer related
    public SunmiPrinterCashDrawerRelated getCashDrawerRelated() {
        return cashDrawerRelated;
    }

    // 1.2.14 Get global attributes
    public SunmiPrinterGetGlobalAttributes getGetGlobalAttributes() {
        return getGlobalAttributes;
    }

    // 1.2.15 Customer display interface description
    public SunmiPrinterCustomerDisplay getCustomerDisplay() {
        return customerDisplay;
    }

    // 1.2.16 Label printing instructions
    public SunmiPrinterLabelPrintingInstructions getLabelPrintingInstructions() {
        return labelPrintingInstructions;
    }
}
