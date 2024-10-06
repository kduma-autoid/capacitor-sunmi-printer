package dev.duma.android.sunmi.printerstatusbroadcastreceiver;

import android.annotation.SuppressLint;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;

import java.util.Objects;

public class PrinterStatusBroadcastReceiver implements IPrinterStatusBroadcastReceiver {
    private final Context context;

    private final PrinterStatusCallback callback;

    private final BroadcastReceiver receiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            switch (Objects.requireNonNull(intent.getAction())) {
                case "woyou.aidlservice.jiuv5.INIT_ACTION" -> callback.onInit();
                case "woyou.aidlservice.jiuv5.NORMAL_ACTION" -> callback.onNormal();
                case "woyou.aidlservice.jiuv5.ERROR_ACTION" -> callback.onError();
                case "woyou.aidlservice.jiuv5.OUT_OF_PAPER_ACTION" -> callback.onOutOfPaper();
                case "woyou.aidlservice.jiuv5.OVER_HEATING_ACITON" -> callback.onOverheating();
                case "woyou.aidlservice.jiuv5.NORMAL_HEATING_ACITON" -> callback.onNormalHeating();
                case "woyou.aidlservice.jiuv5.COVER_OPEN_ACTION" -> callback.onCoverOpen();
                case "woyou.aidlservice.jiuv5.COVER_ERROR_ACTION" -> callback.onCoverError();
                case "woyou.aidlservice.jiuv5.KNIFE_ERROR_ACTION_1" -> callback.onCutterStuck();
                case "woyou.aidlservice.jiuv5.KNIFE_ERROR_ACTION_2" -> callback.onCutterError();
                case "woyou.aidlservice.jiuv5.FIRMWARE_UPDATING_ACITON" -> callback.onFirmwareUpdate();
                case "woyou.aidlservice.jiuv5.FIRMWARE_FAILURE_ACITON" -> callback.onFirmwareFailure();
                case "woyou.aidlservice.jiuv5.PRINTER_NON_EXISTENT_ACITON" -> callback.onPrinterUndetected();
                case "woyou.aidlservice.jiuv5.BLACKLABEL_NON_EXISTENT_ACITON" -> callback.onBlackMarkUndetected();
            }
        }
    };

    protected PrinterStatusBroadcastReceiver(Context context, PrinterStatusCallback callback) {
        this.context = context;
        this.callback = callback;
    }

    @Override
    @SuppressLint("UnspecifiedRegisterReceiverFlag")
    public void register() {
        IntentFilter filter = new IntentFilter();
        filter.addAction("woyou.aidlservice.jiuv5.INIT_ACTION");
        filter.addAction("woyou.aidlservice.jiuv5.NORMAL_ACTION");
        filter.addAction("woyou.aidlservice.jiuv5.ERROR_ACTION");
        filter.addAction("woyou.aidlservice.jiuv5.OUT_OF_PAPER_ACTION");
        filter.addAction("woyou.aidlservice.jiuv5.OVER_HEATING_ACITON");
        filter.addAction("woyou.aidlservice.jiuv5.NORMAL_HEATING_ACITON");
        filter.addAction("woyou.aidlservice.jiuv5.COVER_OPEN_ACTION");
        filter.addAction("woyou.aidlservice.jiuv5.COVER_ERROR_ACTION");
        filter.addAction("woyou.aidlservice.jiuv5.KNIFE_ERROR_ACTION_1");
        filter.addAction("woyou.aidlservice.jiuv5.KNIFE_ERROR_ACTION_2");
        filter.addAction("woyou.aidlservice.jiuv5.FIRMWARE_UPDATING_ACITON");
        filter.addAction("woyou.aidlservice.jiuv5.FIRMWARE_FAILURE_ACITON");
        filter.addAction("woyou.aidlservice.jiuv5.PRINTER_NON_EXISTENT_ACITON");
        filter.addAction("woyou.aidlservice.jiuv5.BLACKLABEL_NON_EXISTENT_ACITON");

        context.registerReceiver(receiver, filter);
    }

    @Override
    public void unregister() {
        try {
            context.unregisterReceiver(receiver);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}