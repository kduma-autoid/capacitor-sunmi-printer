package dev.duma.android.sunmi.printerstatusbroadcastreceiver;

import android.content.Context;


public interface IPrinterStatusBroadcastReceiver {
    void register();

    void unregister();

    interface PrinterStatusCallback {
        void onInit();
        void onNormal();
        void onError();
        void onOutOfPaper();
        void onOverheating();
        void onNormalHeating();
        void onCoverOpen();
        void onCoverError();
        void onCutterStuck();
        void onCutterError();
        void onFirmwareUpdate();
        void onFirmwareFailure();
        void onPrinterUndetected();
        void onBlackMarkUndetected();
    }

    class Factory
    {
        static public IPrinterStatusBroadcastReceiver make(Context context, PrinterStatusCallback callback) {
            return new PrinterStatusBroadcastReceiver(context, callback);
        }
    }
}
