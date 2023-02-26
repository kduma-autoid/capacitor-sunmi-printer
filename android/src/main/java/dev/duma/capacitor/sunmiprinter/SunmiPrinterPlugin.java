package dev.duma.capacitor.sunmiprinter;

import android.os.RemoteException;
import android.util.Base64;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.sunmi.peripheral.printer.SunmiPrinterService;
import com.sunmi.peripheral.printer.WoyouConsts;

import java.util.Objects;

@CapacitorPlugin(name = "SunmiPrinter")
public class SunmiPrinterPlugin extends Plugin {

    private final SunmiPrinter implementation = new SunmiPrinter();

    @PluginMethod
    public void bindService(PluginCall call) {
        try {
            implementation.connector.bindService(getContext());
            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void unBindService(PluginCall call) {
        try {
            implementation.connector.unBindService(getContext());
            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void getServiceStatus(PluginCall call) {
        SunmiPrintServiceConnector.PrinterStatusEnum status = implementation.connector.getPrinterStatus();
        JSObject ret = new JSObject();
        switch (status) {
            case NoPrinter:
                ret.put("status", "NoPrinter");
                break;
            case CheckPrinter:
                ret.put("status", "CheckPrinter");
                break;
            case FoundPrinter:
                ret.put("status", "FoundPrinter");
                break;
            case LostPrinter:
                ret.put("status", "LostPrinter");
                break;
        }
        call.resolve(ret);
    }




    // 1.2.1 Printer initialization and setting

    @PluginMethod
    public void printerInit(PluginCall call) {
        try {
            implementation.initializationAndSettings.printerInit(
                implementation.callbackHelper.make(isSuccess -> {
                    if (isSuccess) {
                        call.resolve();
                    } else {
                        call.reject("Printer init failed");
                    }
                })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void printerSelfChecking(PluginCall call) {
        try {
            implementation.initializationAndSettings.printerSelfChecking(
                implementation.callbackHelper.make(isSuccess -> {
                    if (isSuccess) {
                        call.resolve();
                    } else {
                        call.reject("Printer self checking failed");
                    }
                })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }




    // 1.2.2 Get device and printer information

    @PluginMethod
    public void getPrinterSerialNo(PluginCall call){
        try {
            String serial_number = implementation.getDeviceAndPrinterInformation.getPrinterSerialNo();

            JSObject ret = new JSObject();
            ret.put("serial_number", serial_number);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void getPrinterModel(PluginCall call){
        try {
            String model = implementation.getDeviceAndPrinterInformation.getPrinterModel();

            JSObject ret = new JSObject();
            ret.put("model", model);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void getPrinterVersion(PluginCall call){
        try {
            String version = implementation.getDeviceAndPrinterInformation.getPrinterVersion();

            JSObject ret = new JSObject();
            ret.put("version", version);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void getDeviceName(PluginCall call){
        try {
            String name = implementation.getDeviceAndPrinterInformation.getDeviceName();

            JSObject ret = new JSObject();
            ret.put("name", name);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void updatePrinterState(PluginCall call){
        try {
            int status = implementation.getDeviceAndPrinterInformation.updatePrinterState();

            String statusString = "";
            switch (status) {
                case 1: statusString = "NormalOperation"; break; // Printer is under normal operation
                case 2: statusString = "UnderPreparation"; break; // Printer is under preparation
                case 3: statusString = "AbnormalCommunication"; break; // Communication is abnormal
                case 4: statusString = "OutOfPaper"; break; // Out of paper
                case 5: statusString = "Overheated"; break; // Overheated
                case 6: statusString = "CoverIsOpen"; break; // Cover is open
                case 7: statusString = "CutterError"; break; // Cutter error
                case 8: statusString = "CutterRecovered"; break; // Cutter recovered
                case 9: statusString = "BlackMarkNotDetected"; break; // Black mark not detected
                case 505: statusString = "PrinterNotDetected"; break; // Printer not detected
                case 507: statusString = "FirmwareUpdateFailed"; break; // Printer firmware update failed
                default: statusString = "Unknown"; break;
            }

            JSObject ret = new JSObject();
            ret.put("status", statusString);
            ret.put("code", status);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void getServiceVersion(PluginCall call){
        try {
            String version = implementation.getDeviceAndPrinterInformation.getServiceVersion();

            JSObject ret = new JSObject();
            ret.put("version", version);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void getPrintedLength(PluginCall call){
        try {
            implementation.getDeviceAndPrinterInformation.getPrintedLength(
                implementation.callbackHelper.make(isSuccess -> {
                    if (!isSuccess) {
                        call.reject("Getting printed length failed");
                    }
                }, length -> {
                    JSObject ret = new JSObject();
                    ret.put("length", Integer.valueOf(length));
                    call.resolve(ret);
                })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void getPrinterPaper(PluginCall call){
        try {
            int paper = implementation.getDeviceAndPrinterInformation.getPrinterPaper();

            JSObject ret = new JSObject();
            ret.put("paper", paper);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }




    // 1.2.3 ESC/POS commands

    @PluginMethod
    public void sendRAWData(PluginCall call) {
        String value = call.getString("data");
        assert value != null;

        try {
            implementation.escPosCommands.sendRAWData(
                    value.getBytes(),
                    implementation.callbackHelper.make(isSuccess -> {
                        if (isSuccess) {
                            call.resolve();
                        } else {
                            call.reject("Sending RAW data failed");
                        }
                    })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void sendRAWBase64Data(PluginCall call) {
        String value = call.getString("data");
        assert value != null;

        try {
            implementation.escPosCommands.sendRAWData(
                    Base64.decode(value, Base64.DEFAULT),
                    implementation.callbackHelper.make(isSuccess -> {
                        if (isSuccess) {
                            call.resolve();
                        } else {
                            call.reject("Sending RAW data failed");
                        }
                    })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }




    // 1.2.4 Instruction for printer style setting interface

    @PluginMethod
    public void setPrinterStyle(PluginCall call){
        try {
            String key = call.getString("key", "");
            int keyId = 0;

            switch (key) {
                case "EnableDoubleWidth": keyId = WoyouConsts.ENABLE_DOUBLE_WIDTH; break;
                case "EnableDoubleHeight": keyId = WoyouConsts.ENABLE_DOUBLE_HEIGHT; break;
                case "EnableBold": keyId = WoyouConsts.ENABLE_BOLD; break;
                case "EnableUnderline": keyId = WoyouConsts.ENABLE_UNDERLINE; break;
                case "EnableAntiWhite": keyId = WoyouConsts.ENABLE_ANTI_WHITE; break;
                case "EnableStrikethrough": keyId = WoyouConsts.ENABLE_STRIKETHROUGH; break;
                case "EnableItalic": keyId = WoyouConsts.ENABLE_ILALIC; break;
                case "EnableInvert": keyId = WoyouConsts.ENABLE_INVERT; break;
                case "SetTextRightSpacing": keyId = WoyouConsts.SET_TEXT_RIGHT_SPACING; break;
                case "SetRelativePosition": keyId = WoyouConsts.SET_RELATIVE_POSITION; break;
                case "SetAbsolutePosition": keyId = WoyouConsts.SET_ABSOLUATE_POSITION; break;
                case "SetLineSpacing": keyId = WoyouConsts.SET_LINE_SPACING; break;
                case "SetLeftSpacing": keyId = WoyouConsts.SET_LEFT_SPACING; break;
                case "SetStrikethroughStyle": keyId = WoyouConsts.SET_STRIKETHROUGH_STYLE; break;
            }

            String value = call.getString("value", "");
            int valueId = 0;

            switch (value) {
                case "Enable": valueId = WoyouConsts.ENABLE; break;
                case "Disable": valueId = WoyouConsts.DISABLE; break;
                default: valueId = Integer.parseInt(value); break;
            }

            implementation.instructionForPrinterStyleSetting.setPrinterStyle(keyId, valueId);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setDoubleWidthPrintStyle(PluginCall call){
        try {
            boolean enable = call.getBoolean("enable", true);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.ENABLE_DOUBLE_WIDTH, enable ? WoyouConsts.ENABLE : WoyouConsts.DISABLE);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setDoubleHeightPrintStyle(PluginCall call){
        try {
            boolean enable = call.getBoolean("enable", true);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.ENABLE_DOUBLE_HEIGHT, enable ? WoyouConsts.ENABLE : WoyouConsts.DISABLE);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setBoldPrintStyle(PluginCall call){
        try {
            boolean enable = call.getBoolean("enable", true);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.ENABLE_BOLD, enable ? WoyouConsts.ENABLE : WoyouConsts.DISABLE);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setUnderlinePrintStyle(PluginCall call){
        try {
            boolean enable = call.getBoolean("enable", true);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.ENABLE_UNDERLINE, enable ? WoyouConsts.ENABLE : WoyouConsts.DISABLE);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setAntiWhitePrintStyle(PluginCall call){
        try {
            boolean enable = call.getBoolean("enable", true);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.ENABLE_ANTI_WHITE, enable ? WoyouConsts.ENABLE : WoyouConsts.DISABLE);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setStrikethroughPrintStyle(PluginCall call){
        try {
            boolean enable = call.getBoolean("enable", true);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.ENABLE_STRIKETHROUGH, enable ? WoyouConsts.ENABLE : WoyouConsts.DISABLE);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setItalicPrintStyle(PluginCall call){
        try {
            boolean enable = call.getBoolean("enable", true);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.ENABLE_ILALIC, enable ? WoyouConsts.ENABLE : WoyouConsts.DISABLE);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setInvertPrintStyle(PluginCall call){
        try {
            boolean enable = call.getBoolean("enable", true);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.ENABLE_INVERT, enable ? WoyouConsts.ENABLE : WoyouConsts.DISABLE);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setTextRightSpacingPrintStyle(PluginCall call){
        try {
            int value = call.getInt("value", 0);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.SET_TEXT_RIGHT_SPACING, value);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setRelativePositionPrintStyle(PluginCall call){
        try {
            int value = call.getInt("value", 0);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.SET_RELATIVE_POSITION, value);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setAbsolutePositionPrintStyle(PluginCall call){
        try {
            int value = call.getInt("value", 0);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.SET_ABSOLUATE_POSITION, value);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setLineSpacingPrintStyle(PluginCall call){
        try {
            int value = call.getInt("value", 0);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.SET_LINE_SPACING, value);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setLeftSpacingPrintStyle(PluginCall call){
        try {
            int value = call.getInt("value", 0);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.SET_LEFT_SPACING, value);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setStrikethroughStylePrintStyle(PluginCall call){
        try {
            int value = call.getInt("value", 0);
            implementation.instructionForPrinterStyleSetting.setPrinterStyle(WoyouConsts.SET_STRIKETHROUGH_STYLE, value);

            call.resolve();
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }




    // 1.2.5 Change print mode

    @PluginMethod
    public void getPrinterMode(PluginCall call){
        try {
            int mode = implementation.changePrintMode.getPrinterMode();

            String modeString = "";
            switch (mode) {
                case 0: modeString = "General"; break; // General mode
                case 1: modeString = "BlackMark"; break; // Black mark mode
                case 2: modeString = "Label"; break; // Label mode
                default: modeString = "Unknown"; break;
            }

            JSObject ret = new JSObject();
            ret.put("mode", modeString);
            ret.put("code", mode);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void isLabelMode(PluginCall call){
        try {
            JSObject ret = new JSObject();
            ret.put("label_mode", implementation.changePrintMode.getPrinterMode() == 2);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void getPrinterBBMDistance(PluginCall call){
        try {
            int distance = implementation.changePrintMode.getPrinterBBMDistance();

            JSObject ret = new JSObject();
            ret.put("distance", distance);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }




    // 1.2.6 Text printing

    @PluginMethod
    public void setAlignment(PluginCall call) {
        String alignment = call.getString("alignment", "");
        int alignmentInt = 0;
        switch (Objects.requireNonNull(alignment)) {
            case "left": alignmentInt = 0; break;
            case "center": alignmentInt = 1; break;
            case "right": alignmentInt = 2; break;
        }

        try {
            implementation.textPrinting.setAlignment(
                    alignmentInt,
                    implementation.callbackHelper.make(isSuccess -> {
                        if (isSuccess) {
                            call.resolve();
                        } else {
                            call.reject("Setting alignment failed");
                        }
                    })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setFontName(PluginCall call) {
        String typeface = call.getString("typeface");

        try {
            implementation.textPrinting.setFontName(
                    typeface,
                    implementation.callbackHelper.makeWithException(isSuccess -> {
                            if (isSuccess) {
                                call.resolve();
                            } else {
                                call.reject("Setting font name failed");
                            }
                        }, (code, msg) -> {
                            call.reject(msg, String.valueOf(code));
                        }
                    )
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setFontSize(PluginCall call) {
        int size = call.getInt("size", 0);

        try {
            implementation.textPrinting.setFontSize(
                    size,
                    implementation.callbackHelper.make(isSuccess -> {
                        if (isSuccess) {
                            call.resolve();
                        } else {
                            call.reject("Setting font size failed");
                        }
                    })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void setBold(PluginCall call) {
        boolean enable = call.getBoolean("enable", true);

        try {
            implementation.textPrinting.setBold(
                    enable,
                    implementation.callbackHelper.make(isSuccess -> {
                        if (isSuccess) {
                            call.resolve();
                        } else {
                            call.reject("Setting bold failed");
                        }
                    })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void printText(PluginCall call) {
        String text = call.getString("text");

        try {
            implementation.textPrinting.printText(
                    text,
                    implementation.callbackHelper.make(isSuccess -> {
                        if (isSuccess) {
                            call.resolve();
                        } else {
                            call.reject("Printing text failed");
                        }
                    })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void printTextWithFont(PluginCall call) {
        String text = call.getString("text");
        String typeface = call.getString("typeface");
        int size = call.getInt("size", 0);

        try {
            implementation.textPrinting.printTextWithFont(
                    text,
                    typeface,
                    size,
                    implementation.callbackHelper.make(isSuccess -> {
                        if (isSuccess) {
                            call.resolve();
                        } else {
                            call.reject("Printing text failed");
                        }
                    })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void printOriginalText(PluginCall call) {
        String text = call.getString("text");

        try {
            implementation.textPrinting.printOriginalText(
                    text,
                    implementation.callbackHelper.make(isSuccess -> {
                        if (isSuccess) {
                            call.resolve();
                        } else {
                            call.reject("Printing text failed");
                        }
                    })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }




    // 1.2.7 Print a table




    // 1.2.8 Print an image




    // 1.2.9 Print a 1D/2D barcode




    // 1.2.10 Transaction printing




    // 1.2.11 Paper moving related




    // 1.2.12 Cutter (paper cutting) related

    @PluginMethod
    public void cutPaper(PluginCall call) {
        try {
            implementation.cuttingRelated.cutPaper(
                    implementation.callbackHelper.make(isSuccess -> {
                        if (isSuccess) {
                            call.resolve();
                        } else {
                            call.reject("Cutting paper failed");
                        }
                    })
            );
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }

    @PluginMethod
    public void getCutPaperTimes(PluginCall call){
        try {
            int times = implementation.cuttingRelated.getCutPaperTimes();

            JSObject ret = new JSObject();
            ret.put("times", times);
            call.resolve(ret);
        } catch (RuntimeException e) {
            call.reject(e.getMessage(), e);
        }
    }




    // 1.2.13 Cash drawer related




    // 1.2.14 Get global attributes




    // 1.2.15 Customer display interface description




    // 1.2.16 Label printing instructions





    // Old methods

    @Override
    public void load() {
        super.load();

//        implementation.init(this.getContext());
    }

    @PluginMethod
    public void labelOutput(PluginCall call) {
        implementation.labelOutput();

        call.resolve();
    }

    @PluginMethod
    public void labelLocate(PluginCall call) {
        implementation.labelLocate();

        call.resolve();
    }

    @PluginMethod
    public void sendTextsToLcd(PluginCall call) {
        implementation.sendTextsToLcd();

        call.resolve();
    }

    @PluginMethod
    public void sendTextToLcd(PluginCall call) {
        String text = call.getString("text", "Text");
        int size = call.getInt("size", 16);
        Boolean fill = call.getBoolean("fill", true);

        implementation.sendTextToLcd(text, size, fill);

        call.resolve();
    }

    @PluginMethod
    public void clearLcd(PluginCall call) {
        implementation.controlLcd(4);
        call.resolve();
    }

    @PluginMethod
    public void disableLcd(PluginCall call) {
        implementation.controlLcd(3);
        call.resolve();
    }

    @PluginMethod
    public void enableLcd(PluginCall call) {
        implementation.controlLcd(2);
        call.resolve();
    }

    @PluginMethod
    public void initLcd(PluginCall call) {
        implementation.controlLcd(1);
        call.resolve();
    }

    @PluginMethod
    public void openCashBox(PluginCall call) {
        implementation.openCashBox();

        call.resolve();
    }


    @PluginMethod
    public void getDeviceModel(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("model", implementation.getDeviceModel());
        call.resolve(ret);
    }

    @PluginMethod
    public void setMode(PluginCall call) {
        boolean bluetooth = Boolean.TRUE.equals(call.getBoolean("bluetooth"));
        implementation.setMode(bluetooth);
        call.resolve();
    }

    @PluginMethod
    public void initPrinter(PluginCall call) {
        implementation.initPrinter();

        call.resolve();
    }
}
