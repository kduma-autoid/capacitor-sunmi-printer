package dev.duma.capacitor.sunmiprinter;

import android.os.RemoteException;

import androidx.annotation.NonNull;

import com.sunmi.peripheral.printer.InnerResultCallback;

public class SunmiCallbackHelper {
    public SimpleCallback make(onRunResult callback) {
        return new SimpleCallback(callback);
    }

    public SimpleCallback make(onRunResult callback, onReturnString returnStringCallback) {
        return new SimpleCallback(callback, returnStringCallback);
    }

    public interface Callback {
        @NonNull
        InnerResultCallback getInnerResultCallback();
    }

    public interface onRunResult {
        void run(boolean isSuccess) throws RemoteException;
    }

    public interface onReturnString {
        void run(String result) throws RemoteException;
    }

    public interface onRaiseException {
        void run(int code, String msg) throws RemoteException;
    }

    public interface onPrintResult {
        void run(int code, String msg) throws RemoteException;
    }

    public static class SimpleCallback implements Callback {
        private onRunResult onRunResultCallback = null;
        private onReturnString onReturnStringCallback = null;
        private onRaiseException onRaiseExceptionCallback = null;
        private onPrintResult onPrintResultCallback = null;

        public SimpleCallback(onRunResult onRunResultCallback) {
            this.onRunResultCallback = onRunResultCallback;
        }

        public SimpleCallback(onRunResult onRunResultCallback, onRaiseException onRaiseExceptionCallback) {
            this.onRunResultCallback = onRunResultCallback;
            this.onRaiseExceptionCallback = onRaiseExceptionCallback;
        }

        public SimpleCallback(onRunResult onRunResultCallback, onReturnString onReturnStringCallback) {
            this.onRunResultCallback = onRunResultCallback;
            this.onReturnStringCallback = onReturnStringCallback;
        }

        public SimpleCallback(onRunResult onRunResultCallback, onReturnString onReturnStringCallback, onRaiseException onRaiseExceptionCallback) {
            this.onRunResultCallback = onRunResultCallback;
            this.onReturnStringCallback = onReturnStringCallback;
            this.onRaiseExceptionCallback = onRaiseExceptionCallback;
        }

        public SimpleCallback(onRunResult onRunResultCallback, onPrintResult onPrintResultCallback) {
            this.onRunResultCallback = onRunResultCallback;
            this.onPrintResultCallback = onPrintResultCallback;
        }

        public SimpleCallback(onRunResult onRunResultCallback, onPrintResult onPrintResultCallback, onRaiseException onRaiseExceptionCallback) {
            this.onRunResultCallback = onRunResultCallback;
            this.onRaiseExceptionCallback = onRaiseExceptionCallback;
            this.onPrintResultCallback = onPrintResultCallback;
        }

        @NonNull
        @Override
        public InnerResultCallback getInnerResultCallback() {
            return new InnerResultCallback() {
                @Override
                public void onRunResult(boolean isSuccess) throws RemoteException {
                    if(onRunResultCallback != null)
                        onRunResultCallback.run(isSuccess);
                }

                @Override
                public void onReturnString(String result) throws RemoteException {
                    if(onReturnStringCallback != null)
                        onReturnStringCallback.run(result);
                }

                @Override
                public void onRaiseException(int code, String msg) throws RemoteException {
                    if(onRaiseExceptionCallback != null)
                        onRaiseExceptionCallback.run(code, msg);
                }

                @Override
                public void onPrintResult(int code, String msg) throws RemoteException {
                    if(onPrintResultCallback != null)
                        onPrintResultCallback.run(code, msg);
                }
            };
        }
    }
}
