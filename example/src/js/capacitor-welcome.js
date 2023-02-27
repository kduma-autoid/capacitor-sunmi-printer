import { SplashScreen } from '@capacitor/splash-screen';
import base64_decode from "locutus/php/url/base64_decode";
import {
    SunmiPrinter,
    AlignmentModeEnum,
    Barcode2DSymbologyEnum,
    BarcodeSymbologyEnum,
    BarcodeTextPositionEnum,
    BitmapPrintTypeEnum,
    LcdBarcodeFormatEnum,
    LcdCommandEnum,
    PrinterStyleKeysEnum,
    PrinterStyleValuesEnum
} from "@kduma-autoid/capacitor-sunmi-printer";

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `
    <style>
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: block;
        width: 100%;
        height: 100%;
      }
      h1, h2, h3, h4, h5 {
        text-transform: uppercase;
      }
      .button {
        display: inline-block;
        padding: 10px;
        background-color: #73B5F6;
        color: #fff;
        font-size: 0.9em;
        border: 0;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;
      }
      main {
        padding: 15px;
      }
      main hr { height: 1px; background-color: #eee; border: 0; }
      main h1 {
        font-size: 1.4em;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      main h2 {
        font-size: 1.1em;
      }
      main h3 {
        font-size: 0.9em;
      }
      main p {
        color: #333;
      }
      main pre {
        white-space: pre-line;
      }
    </style>
    <div>
      <capacitor-welcome-titlebar>
        <h1>@kduma-autoid/capacitor-sunmi-printer</h1>
      </capacitor-welcome-titlebar>
      <main>
        <p>
          <button class="button" id="bindService">bindService()</button>
          <button class="button" id="unBindService">unBindService()</button>
          <button class="button" id="getServiceStatus">getServiceStatus()</button>
          
          <hr>
          <strong>1.2.1 Printer initialization and setting</strong>
          <br>
          <button class="button" id="printerInit">printerInit()</button>
          <button class="button" id="printerSelfChecking">printerSelfChecking()</button>
          
          <hr>
          <strong>1.2.2 Get device and printer information</strong>
          <br>
          <button class="button" id="getPrinterSerialNo">getPrinterSerialNo()</button>
          <button class="button" id="getPrinterModel">getPrinterModel()</button>
          <button class="button" id="getPrinterVersion">getPrinterVersion()</button>
          <button class="button" id="getDeviceName">getDeviceName()</button>
          <button class="button" id="updatePrinterState">updatePrinterState()</button>
          <button class="button" id="getServiceVersion">getServiceVersion()</button>
          <button class="button" id="getPrintedLength">getPrintedLength()</button>
          <button class="button" id="getPrinterPaper">getPrinterPaper()</button>
          
          <hr>
          <strong>1.2.3 ESC/POS commands</strong>
          <br>
          <button class="button" id="sendRAWData">sendRAWData()</button>
          <button class="button" id="sendRAWBase64Data">sendRAWBase64Data()</button>
          <button class="button" id="sendRAWBase64DataLabel">sendRAWBase64Data(label)</button>
          
          <hr>
          <strong>1.2.4 Instruction for printer style setting interface</strong>
          <br>
          <button class="button" id="setPrinterStyle">setPrinterStyle()</button>
          <button class="button" id="setDoubleWidthPrintStyle">setDoubleWidthPrintStyle()</button>
          <button class="button" id="setDoubleHeightPrintStyle">setDoubleHeightPrintStyle()</button>
          <button class="button" id="setBoldPrintStyle">setBoldPrintStyle()</button>
          <button class="button" id="setUnderlinePrintStyle">setUnderlinePrintStyle()</button>
          <button class="button" id="setAntiWhitePrintStyle">setAntiWhitePrintStyle()</button>
          <button class="button" id="setStrikethroughPrintStyle">setStrikethroughPrintStyle()</button>
          <button class="button" id="setItalicPrintStyle">setItalicPrintStyle()</button>
          <button class="button" id="setInvertPrintStyle">setInvertPrintStyle()</button>
          <button class="button" id="setTextRightSpacingPrintStyle">setTextRightSpacingPrintStyle()</button>
          <button class="button" id="setRelativePositionPrintStyle">setRelativePositionPrintStyle()</button>
          <button class="button" id="setAbsolutePositionPrintStyle">setAbsolutePositionPrintStyle()</button>
          <button class="button" id="setLineSpacingPrintStyle">setLineSpacingPrintStyle()</button>
          <button class="button" id="setLeftSpacingPrintStyle">setLeftSpacingPrintStyle()</button>
          <button class="button" id="setStrikethroughStylePrintStyle">setStrikethroughStylePrintStyle()</button>
          
          <hr>
          <strong>1.2.5 Change print mode</strong>
          <br>
          <button class="button" id="getPrinterMode">getPrinterMode()</button>
          <button class="button" id="isLabelMode">isLabelMode()</button>
          <button class="button" id="getPrinterBBMDistance">getPrinterBBMDistance()</button>
          
          <hr>
          <strong>1.2.6 Text printing</strong>
          <br>
          <button class="button" id="setAlignment">setAlignment()</button>
          <button class="button" id="setFontName">setFontName()</button>
          <button class="button" id="setFontSize">setFontSize()</button>
          <button class="button" id="setBold">setBold()</button>
          <button class="button" id="printText">printText()</button>
          <button class="button" id="printTextWithFont">printTextWithFont()</button>
          <button class="button" id="printOriginalText">printOriginalText()</button>
          
          <hr>
          <strong>1.2.7 Print a table</strong>
          <br>
          <button class="button" id="printColumnsText">printColumnsText()</button>
          <button class="button" id="printColumnsString">printColumnsString()</button>
          
          <hr>
          <strong>1.2.8 Print an image</strong>
          <br>
          <button class="button" id="printBitmap">printBitmap()</button>
          <button class="button" id="printBitmapCustom">printBitmapCustom()</button>
          
          <hr>
          <strong>1.2.9 Print a 1D/2D barcode</strong>
          <br>
          <button class="button" id="printBarCode">printBarCode()</button>
          <button class="button" id="printQRCode">printQRCode()</button>
          <button class="button" id="print2DCode">print2DCode(PDF417)</button>
          <button class="button" id="print2DCodeDM">print2DCode(DataMatrix)</button>
          
          <hr>
          <strong>1.2.10 Transaction printing</strong>
          <br>
          <button class="button" id="enterPrinterBuffer">enterPrinterBuffer()</button>
          <button class="button" id="exitPrinterBuffer">exitPrinterBuffer()</button>
          <button class="button" id="exitPrinterBufferWithCallback">exitPrinterBufferWithCallback()</button>
          <button class="button" id="commitPrinterBuffer">commitPrinterBuffer()</button>
          <button class="button" id="commitPrinterBufferWithCallback">commitPrinterBufferWithCallback()</button>
          
          <hr>
          <strong>1.2.11 Paper moving related</strong>
          <br>
          <button class="button" id="lineWrap">lineWrap()</button>
          
          <hr>
          <strong>1.2.12 Cutter (paper cutting) related</strong>
          <br>
          <button class="button" id="cutPaper">cutPaper()</button>
          <button class="button" id="getCutPaperTimes">getCutPaperTimes()</button>
          
          <hr>
          <strong>1.2.13 Cash drawer related</strong>
          <br>
          <button class="button" id="openDrawer">openDrawer()</button>
          <button class="button" id="getOpenDrawerTimes">getOpenDrawerTimes()</button>
          <button class="button" id="getDrawerStatus">getDrawerStatus()</button>
          
          <hr>
          <strong>1.2.14 Get global attributes</strong>
          <br>
          <button class="button" id="getForcedDouble">getForcedDouble()</button>
          <button class="button" id="isForcedAntiWhite">isForcedAntiWhite()</button>
          <button class="button" id="isForcedBold">isForcedBold()</button>
          <button class="button" id="isForcedUnderline">isForcedUnderline()</button>
          <button class="button" id="getForcedRowHeight">getForcedRowHeight()</button>
          <button class="button" id="getFontName">getFontName()</button>
          <button class="button" id="getPrinterDensity">getPrinterDensity()</button>
          
          <hr>
          <strong>1.2.15 Customer display interface description</strong>
          <br>
          <button class="button" id="sendLCDCommand">sendLCDCommand()</button>
          <button class="button" id="sendLCDInitializationCommand">sendLCDInitializationCommand()</button>
          <button class="button" id="sendLCDWakeUpCommand">sendLCDWakeUpCommand()</button>
          <button class="button" id="sendLCDHibernateCommand">sendLCDHibernateCommand()</button>
          <button class="button" id="sendLCDClearCommand">sendLCDClearCommand()</button>
          <button class="button" id="sendLCDString">sendLCDString()</button>
          <button class="button" id="sendLCDDoubleString">sendLCDDoubleString()</button>
          <button class="button" id="sendLCDMultiString">sendLCDMultiString()</button>
          <button class="button" id="sendLCDFillString">sendLCDFillString()</button>
          <button class="button" id="sendLCDBase64Bitmap">sendLCDBase64Bitmap()</button>
          <button class="button" id="sendLCDAsciiBitmap">sendLCDAsciiBitmap()</button>
          <button class="button" id="sendLCDBarcodeQR">sendLCDBarcode(QR)</button>
          <button class="button" id="sendLCDBarcodeURL">sendLCDBarcode(URL)</button>
          <button class="button" id="sendLCDBarcodeC128">sendLCDBarcode(C128)</button>
          
          <hr>
          <strong>1.2.16 Label printing instructions</strong>
          <br>
          <button class="button" id="labelLocate">labelLocate()</button>
          <button class="button" id="labelOutput">labelOutput()</button>
          
          
<!--          <button class="button" id="getPrinterSerialNo">getPrinterSerialNo()</button>-->
<!--          <button class="button" id="getDeviceModel">getDeviceModel()</button>-->
<!--          <button class="button" id="getPrinterPaper">getPrinterPaper()</button>-->
<!--          <button class="button" id="getPrinterVersion">getPrinterVersion()</button>-->
<!--          <button class="button" id="sendRAWData">sendRAWData()</button>-->
<!--          <hr>-->
<!--          <button class="button" id="isLabelMode">isLabelMode()</button>-->
<!--          <button class="button" id="sendRAWDataLabel">sendRAWDataLabel()</button>-->
<!--          <hr>-->
<!--          <button class="button" id="openCashBox">openCashBox()</button>-->
<!--          <hr>-->
<!--          <button class="button" id="initLcd">initLcd()</button>-->
<!--          <button class="button" id="enableLcd">enableLcd()</button>-->
<!--          <button class="button" id="clearLcd">clearLcd()</button>-->
<!--          <button class="button" id="disableLcd">disableLcd()</button>-->
<!--          -->
<!--          <button class="button" id="sendTextToLcd">sendTextToLcd(...)</button>-->
<!--          <button class="button" id="sendTextsToLcd">sendTextsToLcd(...)</button>-->
        </p>
        <h2>Demo Events</h2>
        <p id="output"></p>
      </main>
    </div>
    `;
    }

    connectedCallback() {
        const self = this;

        self.shadowRoot.querySelector('#bindService').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.bindService();
                output.innerHTML = "<b>bindService():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>bindService() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#unBindService').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.unBindService();
                output.innerHTML = "<b>unBindService():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>unBindService() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getServiceStatus').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getServiceStatus();
                output.innerHTML = "<b>getServiceStatus():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getServiceStatus() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.1 Printer initialization and setting
        self.shadowRoot.querySelector('#printerInit').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printerInit();
                output.innerHTML = "<b>printerInit():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printerInit() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#printerSelfChecking').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printerSelfChecking();
                output.innerHTML = "<b>printerSelfChecking():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printerSelfChecking() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.2 Get device and printer information
        self.shadowRoot.querySelector('#getPrinterSerialNo').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getPrinterSerialNo();
                output.innerHTML = "<b>getPrinterSerialNo():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getPrinterSerialNo() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getPrinterModel').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getPrinterModel();
                output.innerHTML = "<b>getPrinterModel():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getPrinterModel() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getPrinterVersion').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getPrinterVersion();
                output.innerHTML = "<b>getPrinterVersion():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getPrinterVersion() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getDeviceName').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getDeviceName();
                output.innerHTML = "<b>getDeviceName():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getDeviceName() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#updatePrinterState').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.updatePrinterState();
                output.innerHTML = "<b>updatePrinterState():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>updatePrinterState() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getServiceVersion').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getServiceVersion();
                output.innerHTML = "<b>getServiceVersion():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getServiceVersion() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getPrintedLength').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getPrintedLength();
                output.innerHTML = "<b>getPrintedLength():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getPrintedLength() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getPrinterPaper').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getPrinterPaper();
                output.innerHTML = "<b>getPrinterPaper():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getPrinterPaper() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.3 ESC/POS commands
        self.shadowRoot.querySelector('#sendRAWData').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const encodedData = "G0AbYQEdIRJ7e3BsYW4ubmFtZX19Ch0hERshABtFAUludGVybmV0IEFjY2VzcyBDYXJkCh0hABtFAAobYQBQbGFuIElEOiB7e3BsYW4uaWR9fQpOYW1lOiB7e3BsYW4ubmFtZX19CkRlc2NyaXB0aW9uOiB7e3BsYW4uZGVzY3JpcHRpb259fQpEZXZpY2VzOiB7e3BsYW4udXNlX2xpbWl0fX0KVGltZToge3twbGFuLnZhbGlkX21pbnV0ZXN9fQpEYXRhOiB7e3BsYW4uZGF0YV9xdW90YX19ClVwbG9hZDoge3twbGFuLnVwbG9hZF9zcGVlZH19CkRvd25sb2FkOiB7e3BsYW4uZG93bmxvYWRfc3BlZWR9fQobYQEKVG8gdXNlIGludGVybmV0LCBwbGVhc2UgY29ubmVjdAp0byBXaUZpIG5ldHdvcmsgbmFtZWQ6CgobRQEdQgEdIRF7e3dpZml9fQodIQAdQgAbRQAKd2hlbiB5b3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvCmNhcHRpdmUgcG9ydGFsIG9yIGxvZ2luIHNjcmVlbiwKZW50ZXIgeW91ciB2b3VjaGVyIGNvZGU6CgodIRIbRQEdQgF7e2NvZGV9fQodQgAbRQAbIQAKUGxlYXNlIGFjdGl2YXRlIHZvdWNoZXIgYmVmb3JlOgobRQF7e2V4cGlyZXN9fQobRQAKe3tpZH19CgoKHVZCAw==";
                const data = base64_decode(encodedData);
                const response = await SunmiPrinter.sendRAWData({data: data});
                output.innerHTML = "<b>sendRAWData():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendRAWData() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendRAWBase64Data').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const encodedData = "G0AbYQEdIRJ7e3BsYW4ubmFtZX19Ch0hERshABtFAUludGVybmV0IEFjY2VzcyBDYXJkCh0hABtFAAobYQBQbGFuIElEOiB7e3BsYW4uaWR9fQpOYW1lOiB7e3BsYW4ubmFtZX19CkRlc2NyaXB0aW9uOiB7e3BsYW4uZGVzY3JpcHRpb259fQpEZXZpY2VzOiB7e3BsYW4udXNlX2xpbWl0fX0KVGltZToge3twbGFuLnZhbGlkX21pbnV0ZXN9fQpEYXRhOiB7e3BsYW4uZGF0YV9xdW90YX19ClVwbG9hZDoge3twbGFuLnVwbG9hZF9zcGVlZH19CkRvd25sb2FkOiB7e3BsYW4uZG93bmxvYWRfc3BlZWR9fQobYQEKVG8gdXNlIGludGVybmV0LCBwbGVhc2UgY29ubmVjdAp0byBXaUZpIG5ldHdvcmsgbmFtZWQ6CgobRQEdQgEdIRF7e3dpZml9fQodIQAdQgAbRQAKd2hlbiB5b3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvCmNhcHRpdmUgcG9ydGFsIG9yIGxvZ2luIHNjcmVlbiwKZW50ZXIgeW91ciB2b3VjaGVyIGNvZGU6CgodIRIbRQEdQgF7e2NvZGV9fQodQgAbRQAbIQAKUGxlYXNlIGFjdGl2YXRlIHZvdWNoZXIgYmVmb3JlOgobRQF7e2V4cGlyZXN9fQobRQAKe3tpZH19CgoKHVZCAw==";
                const response = await SunmiPrinter.sendRAWBase64Data({data: encodedData});
                output.innerHTML = "<b>sendRAWBase64Data():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendRAWBase64Data() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendRAWBase64DataLabel').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const encodedData = "G0AbYQEdIRFXaUZpIEFjY2VzcyBDb2RlChtFAR0hEHt7cGxhbi5uYW1lfX0KG0UAHSETe3tjb2RlfX0KHSEAG0UBe3tleHBpcmVzfX0KG0UA";
                const response = await SunmiPrinter.sendRAWBase64Data({data: encodedData});
                output.innerHTML = "<b>sendRAWBase64Data(label):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendRAWBase64Data(label) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.4 Instruction for printer style setting interface
        self.shadowRoot.querySelector('#setPrinterStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setPrinterStyle({ key: PrinterStyleKeysEnum.ENABLE_INVERT, value: PrinterStyleValuesEnum.ENABLE });
                output.innerHTML = "<b>setPrinterStyle(ENABLE_INVERT, ENABLE):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setPrinterStyle(ENABLE_INVERT, ENABLE) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setDoubleWidthPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setDoubleWidthPrintStyle({ enable: true });
                output.innerHTML = "<b>setDoubleWidthPrintStyle(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setDoubleWidthPrintStyle(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setDoubleHeightPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setDoubleHeightPrintStyle({ enable: true });
                output.innerHTML = "<b>setDoubleHeightPrintStyle(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setDoubleHeightPrintStyle(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setBoldPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setBoldPrintStyle({ enable: true });
                output.innerHTML = "<b>setBoldPrintStyle(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setBoldPrintStyle(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setUnderlinePrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setUnderlinePrintStyle({ enable: true });
                output.innerHTML = "<b>setUnderlinePrintStyle(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setUnderlinePrintStyle(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setAntiWhitePrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setAntiWhitePrintStyle({ enable: true });
                output.innerHTML = "<b>setAntiWhitePrintStyle(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setAntiWhitePrintStyle(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setStrikethroughPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setStrikethroughPrintStyle({ enable: true });
                output.innerHTML = "<b>setStrikethroughPrintStyle(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setStrikethroughPrintStyle(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setItalicPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setItalicPrintStyle({ enable: true });
                output.innerHTML = "<b>setItalicPrintStyle(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setItalicPrintStyle(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setInvertPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setInvertPrintStyle({ enable: true });
                output.innerHTML = "<b>setInvertPrintStyle(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setInvertPrintStyle(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setTextRightSpacingPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setTextRightSpacingPrintStyle({ value: 1 });
                output.innerHTML = "<b>setTextRightSpacingPrintStyle(1):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setTextRightSpacingPrintStyle(1) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setRelativePositionPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setRelativePositionPrintStyle({ value: 1 });
                output.innerHTML = "<b>setRelativePositionPrintStyle(1):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setRelativePositionPrintStyle(1) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setAbsolutePositionPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setAbsolutePositionPrintStyle({ value: 1 });
                output.innerHTML = "<b>setAbsolutePositionPrintStyle(1):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setAbsolutePositionPrintStyle(1) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setLineSpacingPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setLineSpacingPrintStyle({ value: 1 });
                output.innerHTML = "<b>setLineSpacingPrintStyle(1):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setLineSpacingPrintStyle(1) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setLeftSpacingPrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setLeftSpacingPrintStyle({ value: 1 });
                output.innerHTML = "<b>setLeftSpacingPrintStyle(1):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setLeftSpacingPrintStyle(1) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setStrikethroughStylePrintStyle').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setStrikethroughStylePrintStyle({ value: 1 });
                output.innerHTML = "<b>setStrikethroughStylePrintStyle(1):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setStrikethroughStylePrintStyle(1) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.5 Change print mode
        self.shadowRoot.querySelector('#getPrinterMode').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getPrinterMode();
                output.innerHTML = "<b>getPrinterMode():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getPrinterMode() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#isLabelMode').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.isLabelMode();
                output.innerHTML = "<b>isLabelMode():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>isLabelMode() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getPrinterBBMDistance').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getPrinterBBMDistance();
                output.innerHTML = "<b>getPrinterBBMDistance():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getPrinterBBMDistance() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.6 Text printing
        self.shadowRoot.querySelector('#setAlignment').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setAlignment({ alignment: AlignmentModeEnum.CENTER });
                output.innerHTML = "<b>setAlignment(CENTER):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setAlignment(CENTER) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setFontName').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setFontName({ typeface: "test" });
                output.innerHTML = "<b>setFontName(test):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setFontName(test) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setFontSize').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setFontSize({ size: 10 });
                output.innerHTML = "<b>setFontSize(10):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setFontSize(10) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#setBold').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.setBold({ enable: true });
                output.innerHTML = "<b>setBold(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>setBold(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#printText').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printText({ text: "text\n" });
                output.innerHTML = "<b>printText(text\\n):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printText(text\\n) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#printTextWithFont').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printTextWithFont({ text: "other text\n", typeface: "test", size: 10 });
                output.innerHTML = "<b>printTextWithFont(other text\\n, test, 15):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printTextWithFont(other text\\n, test, 15) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#printOriginalText').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printOriginalText({ text: "original text\n" });
                output.innerHTML = "<b>printOriginalText(original text\\n):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printOriginalText(original text\\n) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.7 Print a table
        self.shadowRoot.querySelector('#printColumnsText').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printColumnsText({ lines: [ { text: "Col 1", width: 10, align: AlignmentModeEnum.RIGHT }, { text: "Col 2", width: 15, align: AlignmentModeEnum.CENTER }, { text: "Col 3", width: 20, align: AlignmentModeEnum.LEFT } ] });
                output.innerHTML = "<b>printColumnsText(Line 1, Line 2, Line 3):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printColumnsText(Line 1, Line 2, Line 3) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#printColumnsString').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printColumnsString({ lines: [ { text: "Col 1", proportion: 1, align: AlignmentModeEnum.RIGHT }, { text: "Col 2", proportion: 2, align: AlignmentModeEnum.CENTER }, { text: "Col 3", proportion: 3, align: AlignmentModeEnum.LEFT } ] });
                output.innerHTML = "<b>printColumnsString(Line 1, Line 2, Line 3):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printColumnsString(Line 1, Line 2, Line 3) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.8 Print an image
        self.shadowRoot.querySelector('#printBitmap').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printBitmap({ bitmap: "iVBORw0KGgoAAAANSUhEUgAAAYAAAAFcCAIAAABOWf68AAAAAXNSR0IArs4c6QAAAKZlWElmTU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAExAAIAAAAVAAAAZodpAAQAAAABAAAAfAAAAAAAB3+HAAAGZgAHf4cAAAZmUGl4ZWxtYXRvciBQcm8gMy4yLjMAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAGAoAMABAAAAAEAAAFcAAAAABr19DEAAAAJcEhZcwAALiMAAC4jAXilP3YAAAOeaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjM0ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zODQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+MzAwMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+MzAwMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIFBybyAzLjIuMzwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIzLTAyLTI3VDAxOjI2OjU3KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KAIn1/QAAQABJREFUeAHtnXvgVVP6/82M+TKDr0uD3GbShVIhySVSlGukJDKSRLlEyDW3Io1rhWokisj9TuNeVCSiMaGLqIyEQmbMjDHf74zfS/vnfI/zOXvvZ+/97L3XOec5f9T+7L32Ws96r7We/axnPZeffPfdd2vZzxAwBAyBPBD4aR6NWpuGgCFgCHyPgDEgmweGgCGQGwLGgHKD3ho2BAwBY0A2BwwBQyA3BIwB5Qa9NWwIGALGgGwOGAKGQG4IGAPKDXpr2BAwBNY2CAyBGkHg3//+99///ve//OUvX3755d/+9revvvrq66+//uabb7jzj3/843//93//85//eFD85Cc/+dnPfrbOOutssMEG66233rrrrrvhD7969epxkzs1Alra3TQGlDbCVn9uCMBfFixYMG/Nb/HixR9//PHq1athQ/Aa/vV+MB3vAiqLjXLhQR4bghP99Kc/5V/vt/baa//iF7/YaqutmjZt2qJFi5YtW+6www6bbrophXPrZyU3/JNi0Cu5I0Z7jSIAB0F++etf/4pQ8/nnn3/44Yfz589fuHDh22+//ec//xkBJ21cYEwwoGbNmsGJmjdvDmPaYost1l9//f/+7/9GeuJp2gRUdP3GgCp6+GqXeD6cK1eufOutt2A0cJxFixYtW7aMO0g3+YKCuPSrX/3qN7/5zXbbbQdL4oeUxJ+ITvkS5mbrxoDcHBejyheBFStWTJ069fnnn//jH/+4atUqdlX/+te/fEvn+gCmg+4IftS4ceOOHTseeOCByEdwqFyJcqtxY0BujYdRUxeB//mf/2GTtXz58ieeeOLRRx+dO3cuWpu6xSriTpMmTY5a80Mm+uUvf/nzn/+8IshOj0hjQOlhazUnQoBN1mefffanP/1p9uzZiDxz5sz55z//mahGZ17mEG3XXXft1KnTbrvtxgZtyy23rFmxyBiQM7PSCPkBAQQclDsPPfTQjBkzPvjgA/ZZhQPyH4pUw/+etmjbbbeFDR155JFt27atQT2RMaBqmMpV0wd2Wy+88MLw4cNfffXVqmQ6fiPFKX7r1q2HDBmCnqim9mXGgPymhN3PDgFO0N97773p06dPnjyZPVflqngSQsaZ/Y477njcccd16NCBQzRO8RNW6P7rxoDcH6NqphBe8+yzzz788MNwn6VLl9aU1OM3rmzNGjVqtM8++3Tv3v2AAw6obksiY0B+08Dup4sArOell1665JJL3nnnHQ65jPWUwA0b4pgMFfUVV1yx7777VisbMgZUMu72Z+oIYLX87rvv3nDDDRyrV83BVnqo4ZKGYujss89md7bxxhtXmc+HMaD0Zo7VXIoA7ObFF1984IEHnnzyyS+++KL0sf3tjwAesAcffPAxxxzDpgzJyL9ghT0xBlRhA1a55KJmvvjii9H1wHpswxVjHJF9Ntlkk7322mvYsGFIQzFqcPAVY0AODkq1kYQhz5133okug81XtfUtj/4gAZ155pknn3zyNttsU+kWjMaA8phBNdMmHOe5554bP348go+zHluVOBrwnZ122qlfv36HH344htSV2AWPZmNAlTt2TlOOIwXWzNdccw0MCH9Rp2mtWOJw6WjXrt3gwYPbt29foaKQMaCKnX0OE45B88SJEy+44AKCDTpMZpWQBhu66KKLzj33XC4q7ozMGFCVzEJHuoF1DwF6rr766vvvv98RkmqEDE8UwmIINlRBXTYGVEGD5TqpcB98KUaNGoVtIdeuk1td9CH7ECj2t7/9LYInh2WV0jljQJUyUq7TyVEXRzOPPPLIt99+6zqt1UsfBtNEqr799ttbtWpVEb204GwVMUxOE4nG55lnnjnkkEPuu+8+4z75DhWCJ9683bp1w+4BB5d8iZG0bhKQBCUr44sAVoWjR4/moP2TTz7xLWQPMkeAkPi9evU655xzGjZsmHnjERo0BhQBLCtaggARCzl8wbXCbHxKkHHhT7ZjBDm78cYbXd6OGQNyYapUJA0YGQ4cOPCuu+6qCL8KdLQsyP/6r/8i3Jf3408uMJ/h2IjIOzwqnGHTI9zWyGLI7pJr9jUk2+CaHxdwW/6tiF4zsYjscccdd+yxxx5uhls0BlSRiz93olmBRNK4/vrrXT7tgqeQogt/BWyFuSB7FwkqSG2KTznJKnDv5F+yDMKAirmPhy39Qp/FD3ZDvDS4rZdSlQvU7Ww8kf7Iz/HRRx8RLZ8MiLmPSAABdPl3v/sdB2RkKwsolssjY0C5wF7xjWLf3LVr1wzS/kVFCilms80223333XHa3HnnneE7cBkvRyDyTtTa/MrDnhCR4DvkdybRM4nJ8DWZOXMm/MhNyQiei7h6/vnnu+ZJbwzIb47ZfV8EOF454ogjiGToWyLDB3Ac5BcEme233/6ggw4iZgVOUrkY47FBgxM9teZHwCO4M9KTO/yIzWbfvn2x0nJKDjIGlOFaqZamiBt//PHHswHJt0PsoUiITGAKPKHQtpJpC7VOviR5rcN0yEP/2muvIRORPZH89OSMdoEwaOjcuTN26uRrdcR3zNLFOjIxKoYMvvOvvPIKGpC8KEbk4Wj5sMMOI68WUg8qHmIG5kVM2XZZ21DFj10q1gmLFy+GEz322GM4qeSuMsNiCzWWQ0djeC3bzxCQI4Bre5cuXcouvLRvsrA5zSGCPVphVrKc5txLejqjadOmYa7JhjFtoELrb9CgAeqq3GGBANuChQ6WFfgRAp9++ikhiufNm/eju2n+gUKH7H177rlnnz59YECKuuQ0qS5fN7sz1EPYLpDbHsmIk/7y5dK/C6R33303ORHz3bcaA0p/qKurBb6c8AJ0HBl0i90W51nkUu/YsSNqCzctWWLgwJd/yZIlqNKQ5hCLctmXgS2nhDfddBPHhVzH6IXOKy6IYUZDBSHw5z//eeutt9aZfIG1NG3a9J577kF9i9apgvCRk4otFftZDBpg6LmohOE7pD+EFcppVi+5lnqNVmF1I8AWjCTCgawj0UM2XM2bN+e0GBOb6kay0Ds2Yhgr77LLLrmkQiWIB0d1eenUjAEVpoFdiBDAIJg9USIe4/MyygjO1IniumzZMhEp1VUIzj5mzBg2RNkrudq0afP666+jn8oeUWNA2WNe2S2yIRo+fLi65pKzofPOO2/hwoXVuuGSjDqbsg8//HDEiBGYbvtw6VRuM5oEVESvJyFSt0zOSmhmG2a12Izy0WPy4VaDjhM7Be67Y0KaypinUym7eiYTi5mNDJMYLSPSirpZMCc4GCJqxd+AWr7AfPyhNh1UKq9WlsOAAQNI4pilswt2VcSTw7wzU7x0+ZmwNjac6DLJzEumug4dOlRfwtlMh9C/MVSb9957r3BQ5MVQnWJQ699shCe//vWvL7/8cniZvPUaKYmL2dixY3EryfKICl8NXG2zRDgHCWjRokXYQXD6SKpMUKa3ESasFY2CAHMXaYUz7CgvicpSLV5XSc6POVPHKo90DkSrydg2jymHHynKLBYbzBSJG+92NMHsgAqzEd6NLga3KeIr8y8erZtvvjlfSvTEmXEENgEsFk7KMwtviKvqhRdeSIwnfOtE8yB5oSy5HVIPLFZdfZAchGqtAZ2ut6jSGGVcq2PjhvME0TwwaE6DsJI6Wcb82MugZ73qqqvgepgRxJuEMEo8znr06AFT8ALve5WXtKj7Jx6tBJzM7IAMbvvkk0/qdiGgtoyU0LgOEbgT48vYU9ZejIoAM2nChAmskIDhT/IIkeHYY4+NqmBiDWNbyBRP9dyXOD4oE994441HH3106NCheMkTo0NXcqE2ZCK2oqScpjucZLORTE+DjmsrkmxUtKPOGa88MUxwXktv5hTPutQZEN149dVXSSCbDXbxEK++t1gehx56aNq6FRb5GWecIT82RsFJVBpcEIqnoOI14h7pWPnUIWijW8RnNZtZx4YFi77999//1FNPJSPF+++/nwZ7Be2zzz47G1EIu/M333xTcWj8qkqdAf3hD39gHuh+fKqPX6j3iGmKiW0GHzG2NhydoEsO7QLmhTgfEMfLby4muY8exws8irKG/V1e8w3NEcwIaQt/XeICIYgl6VTdd0GblLMZqMwAEKGBjUtdGnTvpMiAENEnTZrEhAidmlZAFwFmT//+/dP4CPtNPrS5WK9gS0IEYjYmG220EcIO6lusbAnZw1TmMI7F4/d6vPt0EBHvpZdeQgoj6KouhslrYxSIFkIsVPLkoOpW/Bi8/PLLaPfiqbHk/UKwZfeang7RG/S0TsH4IiEJDxs2jI+AvM9WUgWBli1bckoFI1CpTV4JJl04FmHPhhcF2hCOVIjBjHCE0lfXjxTWg085IsbUqVPnzJnjeAZ6VCpkTEYPxY+41HI8/UrCy1A5XXbZZSDgV0blPh+Sm2++uWfPniq1la8k3scn+C309tlbc5bvXu3dZdk/+OCDwQNU0U9RhZx++ukcaGSwE9GaPkhD2IXyYeD4DHaZHH94ENLfiSeeSM1aRJath4D2MLvkBPvVoL8F4+tEkIFsVGVlIavlm0xHDonxIPcb78q9z1cN8QrL1YqeWgwQBt+PP/64yqYMNoQ1A8edqc55gk9CbUozR5kBgcjTTz8N10wVEavcDwHUn+Cf0lzJq1o+aQQzRR/BSVPaH3w/YHXvI7thxkk8sORmx+g6rr322lQ1rVT++9//PiULA2UGRFYAogrojpbVJkfgtNNOS+mYKS/uw4aF7TwnaLpaJDmk6ZVEw4JWCIcvPttJ4OW0B9eCVH24mjRpkpLxhCYD4pjjrLPOyiW0UnqzpIJqRterol9IshgU30XwQZ+NcU11SD0BEwnbqJUrVyZkQ+g9UpWDiMObhhCkyYBmzZrFsWsA0PYoPQT4ADIFFdd/jlWxFNE0k3aVQ7T0EHOnZr7ZhAFCMcQxYmzYkXw5d8ZbLb1+EaoJTVxsCsu+qMmAMMxPr/NWcwACyAi9e/dGHVB2jCvuJjYEBxxwQHb+kAHIZviIE3oMmpIEY8O37rrrrkvPPgiLCqyudKeTGgPirK76dukZTr9ETZGCiugCujMjl9r4jA8ZMgT/iarfdpUdb0QhQiOhcY8NPnaDaOtTQo9qSTCveyKmw4AQzLp161YWU7uZAQLYxajLxrHXQOwXcaEizlkFWfekNLJYkBJ/I/Y6Rw+IOCx30IvUC3b6bBVjD3HdF3UYEG7HdvQeaSAVCyP+5JvYoO6sinoHpc/06dMxF05v+6AIeAZVYU3KR4XwNVGR9MoTRSiNIFBexznm9sJ4xaOt5C0FBsTsufLKK1PiuBkMdkU3gdBe6XbP7BomT56cTaqfChprJEE4MqdjJStW8idLkoT0Km4fdRFjI0YoKAkZkjIKDAi7W2wl6xJqd9JGgKmAn2dFb7442b311ltxW00bqwqtH75MNJt459+EEMIwNY2OM15z586V8JfQMgoMiAgseP2m0U+rMxgBZicHRqFj7GwBZB9MbLHHC+5mjT/F/puAJzG80jGkwpU0jYN5dsrEzFcJaKnAgIg7k7Y3So1PwbLdZ/NF+CusYJ3lL6GEPfTQQ6na75bFreJuIuei5oun+kUhfdJJJzFV1HvdoEEDJKzQIQ4tkJQBwZgJBKXePaswGAEmJUYZ5JAKHWBnC0A8KYmDu2lPCwigY4Vfx5CDyHeIDFWoR/HizDPPTD671k5IEIgQFiBhJX6vI+lhW+Txb5acX7Gaug8mCNUEdiCbjSQOoZvgoCVl8zhv3jw3yXOQKtRAnIvxb/fu3SMd+HCof8899xxxxBGcqen2i6MDLCcJQZekWgUGhKI+CQUl76L858PIj/QDaAeIvQADMu5TQAkGhMsPo57SGUehoVQvMDh89tln2T+m2kqVVY4sQzQSFMCYiUfqWuvWrS+99FLiSaO1ifRicGFyGREMBO6WaHkmFKI8q6dgQuVP4TXE9IbNoz/jI5mQNnvdWQQ4Oa1fv758YljJAgIwII7Yo44sljtHH310oRKtCxYsESmjElNcPqkEBKeAEWr1B7fgPn36aNVm9TiLAJaTBDzPlzx299j7cX7Cv/id4f+B9O3t91khfP+IJswPMY0fiQy9OCf50kzrsJKuXbvef//9hIWWix5s2wnV8sorr5D9XLELoHTLLbe0aNEidvaRpAyIoWJgVLrEJDB3VhUk3a8EU11mTvZ0snvFZIQNLBFdidyAmQwrk2Cp/OBErCJ2uFAFbXxZ4Tu4pxPfGq8Ilj2xQVCjLF3zQ4NO8Jns6fdaJDQP+UuxYIiUaK9t27annHIKmyZdsolnRNR9cr3FqzYpA6JVhipe2yVvodSoaL1GSXfszwAEWNIBT9Uf8W3DqpjPG1EvYDTk7eGHBBQsQZQEA2GeoxxAJsLyE70nKYbQwmKPhxSgTnBwhbRI6yRERF8RXLL4Kf1FDfTYY4/hOFV8P+E17vvPPPMMaibqj1MVzD7Jj/1X+/bt4zRc5x1OdvjIJCHG3q0UBIjNXmf8lW+wmULA2WOPPYhQgdTColUHhzrRgJx88skEDGQfp9yBsOrgnldffXVUO3jiaahbfpLFMHYGsaR2QIoMiGDdK1asUJ8lVqGDCCA7hK2v+M9hPSyJQYMGER6bDVTa3UcyYk80duxYHJIytqtEssMTMBJv5SCMs/OY0orPmAA4ScDj4ewQA2rVqpUxoHijWHFvITgEb398pnr4bXbxuEZzTuTpjDNDBjbEvgz5AoubSHY64V0KLEH8IFKkReomOZcbN24cWGvkh02bNo0qi3k0GwOKNHZWWAcBjuFxL4g8zf1f4CPM+TRK1th7AZ2OffcdeqInnnhip512yoYNwcc5O46UdRaJafDgwf5YxnxCEvYYGOo7icQk316rJQTQmChGm8daFSMXPDYJipyS/7d8cNjdsBdDL0toR86nvWM1+etRS7LmyRYPy5O/CM/ClVQ9/gl52BGC5GT8/5IxmFbxK4o6INuCFQNb3dd8hAmhX3LMFHnurnmBRY4ehHnoGmJsyohT3K9fv7R5EDBgUoBfSyQExo0bp7sLxriB8/hINFDYtmBREbPyOggQQr9Lly7xmI73FuuH9H6xwwbqdENQCyffacTEKIEOiTJSfAysnDg7L6kkyZ9ItRglCvD4URHbgiXB3N6NjwAHRvjTRjKlK26MrdZ5551377336uqSipvQuiZo3NSpU8mrlapWiOAYuGUhdgnJxuqS1PKcownLhxbDaBNLa74roSV/VOBH7Cj6H7YFi46ZvfF/CMyYMaNZs2Y/mpGCPzhzIa9xjNgU/9dwtldsOfE+IX5TqtsxzJHJpybvGfboukIQu7CoCVRNAhLMdyuSGgLt2rVDeYkJmLwFltkDDzzQs2fPVBeznB5JSXaLyHqjRo0ijztG2JJXYpTBuCGSgRWH8Z06deIAMUZbZV+Byb7++utlH/nelPPLsiVNAioLi92MhADm/Dghs5kK2KTgQoH75ciRIzM28InUkdDCEH/DDTeoaN/LLmlsESKlNkRtrGs8yQlgJMPIWO4bZbtuNw2BuAgQ+4nQ9LNnz545cyYnR4jxGPVh24LgwPLgwBjLZpwqOnToQCRQxS92XHrjv4f4079/f9zuSSyhG53HowmnWTRr48ePF9o6c4Z46KGHokqL36Ufv4lvKubEEVK0h/Ls4AImAQXjY08jIYAVH36qKDJIUoiGgt8HH3xAyE3WaqTvaqRGsy+MRytrHvOlHy9enb9Qz8PH5Z2aP39+gOAZgya8UuStq23/YhBqrxgCJQjw3cZVEpEHdSaRjPk1bNiQ0GWsVV2jlZJ2M/4TCahHjx7Dhg1LgwdhZc5xmDxaCIcAhApQRIDY1fLDOGNAishbVYaAFAE06Ki9+vbtq76jRFQk3C1yjZSUtdY65phjFIUgmn7vvfeErRsDEgJlxQwBZQSwTiQ8GLaUyvWutRZ6aKwf5dXuuuuuiJzy8sEliR5JMsXgMoWnxoAKUNhF9SOAboLdAS5LnEYRzpw4QXgwcHqNFR/nQYSjwj4YBQ2qKOSIDOBAX4NLCp6rum1BPA5idERYLYcAOEIJC4cWY/dHnDastEJLUsBOwSQoWZnKRoAlQSxkdNuEUiVSB3sElNweu4ElFfqGBooDcg7aCNuKZgQNFImP+JOz7fQ0UJyLYR90wgknQFuBkuQXHEVxsEgmH0lVHDUSsPXRRx+FL0vKB5cBUuAV5h0wBhQMpj2tYAQQBJBxpkyZMmvWLGzkYECsigD9KB9tUt/wwyAAjoNzE8fJ7E1IEkUceE6sU2JD1A8Duuqqq+Qyi2RUbrzxxt69exPuWlJ4n332oaQKA6I5YF+1apUo8Yn8wKxsSTuGLwuL3cwdAWYmeSDq1asntIgJWKUojPGZ6tatGzZKMLU0uga12DoF0BDjEXplNEFCamG+e++9d4xWyr4CXCSelDRtOqCyANrNSkXAk3qGDx+OnwF5I1jYQmVEQIcRmtjEsUMh/DmRdNAW6YoqNM0ub8SIEYquodRJxzkOE3YfJquYOAy43n777QBIC4+MARWgsIuKR4DFhoEf+w6sgdNIvIGr980330zQVVy6ULLo4kW+0169einWiQCCMpiNp7BOvCgU/dTQ64valYhJAWVsCxYAjj3KEgE4AgtYqPIQrQ3/QixUgjGzI9PtINpxNN/+zUZ+wg70qaeeEhKJ8Ig2KnIbPi9wsiZp1yQgH/zsduUgwBYJ5wPCmxGjI3I8mljdZAvG4T3LlV0eZi+x6ijzEtvG4447DjvpMs9i3UI+QBIJ0LsX14qKvXPnzsV3klwTKA43mtAajAGFQmQFnEaAgxtsXkg6SL49PrlZ0krTRHcfOnQoJkUq7aI2Zn+H94lKbV4lKIPlGiuio2ixP8aCwNihHTEGFAqRFXAXAZbWmDFjCI0o13TodgaBCyGISGNYMKrUjAnSIYccolKVVwlqIHk+eLzwttxyS63Wp02bFlqVMaBQiKyAowigs8DrEpdOLQEkXj+Rg9B8w4NU9mKcRpFqVdEzC/KwhBJ2jaBLivKXZPeXlAFlLPQKcbRiVY8AEw8jlwsuuCAbpU8onnhUkChZRQ5CD00Y6dAW5QUkWyGvNmwvsfyW1xxcEltErDqDyyRlQNTOhyi4DXtqCKgjMH36dExymOLqNcerkJDsnNATKzbe6yVvkT1ZUQgiTCrklTRR9k8MkQgdq+Wgz0cCVXTZhgo3FRiQCUEFNO0iGwRw47roootCv67ZEFNoBcsjeOLChQsLd2Jf4J4aKU52cENsUYXROdgA4v6mFaUIzhA6RgoMKLjz9tQQ0EUAxTNuluhWdatVqQ0LYHLdhK660LbYCpHGR0sSoTl5rHi2YFq2VDAgolkGd1aBAaXkoRdMtz2tWQQw/7vtttvkR8sZAwVnTE4e+6/ddtsN/wwt4rFaEu5UYEAEpVRpNyMJyBiQymhZJRIEcLYYNGgQWzBJ4VzKcOpEoiF5SEA/IvFNxZjY72nU+9AjPKTDhV0raUdGDEjIWaNCZuUNgRIEmGlsvuTR9kpez+xPouHcddddCZsjSZFilEKyZQhNpTBEbNKkSULivdcZL7KbwJEDalPYghkDCsDXHikiwBIaN26cYoXpVXXHHXeEHgAFtw4jUExbirFCqDqmQI9iYBDsEoKzDykwoALddmEIpIrACy+8QFyxVJvQqhz7AHIoJqyNszAt/UYkBqQoecF9grd+CgxIUVefcMDs9SpGgCVE0rvgz6lT3UcTlPA4TNEznuM5dkPCzYqi7omzApoOGBcFBqTFpAOotEeGAIv5zTffrCAc2H384Q9/SELw5ptvvu666yapofAuDvGfffYZwfYLdwIutthiC61FDfcJ/mYkZUBahAbAYY8MARAgtoMkvIM7WHFgN2PGDDJwxCYJu2RF11B2hUJiOIbHECk22cUvIgGlroQubs+uDYGUEHj55ZeF6yclAqJWy36Hw+8kgRP5uhMJP2q7fuXxxhAGBkL/rWUKhMwVPGpJJSC/3tp9Q0AXAUKO6VaYQW3EwZCHwihLj6I+GElE7rZJ0sSy9ES9SaOp64Ci0mTlDYGoCKBPIRR81LdyL8+uR2h940cqMRL9HkW9z2mUMEA9NaN+ilp/2fJZKKHLNmw3DQFFBN555x1Hwm5E6hTLD72VcONTtmb0wWXvx7jJFkwuAZGqMEYTdV+h78Fcz7ZgdUGzO84h4L71sx9kixcvli/7upUoKqFhBHJKtGxrUITxq9uvwh1jQAUo7MJdBOTO3K71AXto+bKvS7yWJELNkcjI7HTbGFDdQbc7ziGQ3Lczry7hABFp5ZfQSYCekjtV9qcxoCob0CrsDnoEfCkrtGMEAwvegwT3K8m7wTU78tQYkCMDYWT4IoAEEazI9H3TgQdQnoSJKHY8s11VJNSNAUWCywrngMDaa6+t5ZGQPfVoc5OsfMWEH+zm5JQk2TYWg0yLwY0aAyqGy65dRIAZrGUXl333cKdI0mhCO8biprFvlp9tBVsPFlcbfE2LwY0aAwoG0J46gYBWiKzsO8M5evAKDCYpoR1jceVEepartLXSjRBbdp111ikmo+TaGFAJIPaniwgopojIuHskmUjCgBYsWKBFMP6lcgZEhg+VdhEAg3NsGANSwdkqSReBNm3apNtAarXjSyFf9nWpePvtt+vejHcHXiCnJDiGhpwA9n0mAcnhspKOIoAEpBUgIssesgEhqFhsCYgjMMUIkPXq1RMmO8SDNDiMoRxDTg+CtWAmAcnBtJK5IbDhhhu2bNkyt+bjNrzpppsSXTD4GCigbqyftAygYIL4lwoZ0FdffRUcxCeA5pJHMKDgL4cxoBLE7E9HEWjfvr2jlPmTRWYLdED+z0Oe4MiaxIaouHYYAQxIuAXj6E2rXVNCF4+CXVcwAh06dBB+wB3pJIIP+6+tttoqNj3EANBiBPiUyR3rFdOu2RYs9ujbi24hgDa3sg7jsZ9s27YtWth4OOKA8sYbb8R7t+5bnMHLHeuXLVtWt4Z4dzgCC070bFuweMDaW1kjwAecbMVZt5qgPT7+5HePXcHnn3++cOHC2K+XvEiI1a233rrkpt+fixYt8nsU9X5oeGljQFEhtfL5ILD++ut37Ngx+HOaD2U+rR5++OHbbrutz8Pw2wQS+vDDD8PLyUpAiTDTPFGctRgfm1CyPCMJBtCYlAFp7VEDSLRHhoCHQKdOnRRTZaWKKr4jl1xySewmcMWaO3dukoD2JU3vuuuuwsM40h+RQazk9Xh/0mKo4ikpA4Iy40HxhsfeiopA/fr1TzvttKhv5VK+d+/e22+/feymCZ9KGlhhGi9JK/LdKxHUtKLfwoA222yzYPIUGJCW42wwofbUEACB448/fs8993QcioYNG/bt2zcJkYghzz//fJIait9FEb7LLrsU3wm41mVAWUhAAZ2xR4aALgIY1I0YMQIDP91qFWtjtR977LFJxB+IGT16tJYpILW1atVKGNoVYYIjMC0/DE8HFIytggQk3FsG02FPDQEhAiynE044IfbxtrCV2MWw2Eb8CXaACq4cGWTy5MnBZSI93X///YXlicKRMI1HcUNwhtCjN2NAxYjZdQUgwPH2gAEDYEMO0grfGTNmTIMGDZLQNnHiRC0PDMiAC3AeJ6SH/GtLly4VFg4thqCK2i64WFIGRPf4BbdhTw0BXQTwbxg1alSofkG30dDaMLobOXLkHnvsEVoyoABH7w8//HBAgaiP2Aw2a9ZM+BYMSNEKEc13qPNHUgYk7JgVMwR0EUAVjaSQxNBGlx7ksn79+nH4laRa3N8ff/xxRRkEYjCekm9XUX4r+mHsu+++oWgYAwqFyAo4isABBxxwzTXXOCIHHXrooYMHD8ZaMglYrP+7774bMSRJJcXvIpTts88+waaAxeVfeeUVsrkW34l9zcaIAQp9PchIMfRlK2AI5IgAJ2Ldu3fHaOWcc85RDN4etUe4yOJycccddwSH/pNU+8ADD8yZM0dSUlgGB7rmzZsLlSQY9E2ZMkVYc2gxvHAlVqMmAYUiaQXcRQAexInYTTfdlNdejEBFp5566j333JOc+8yfP//aa69VNOuF7+y0006NGjUSjh/an9mzZwsLhxZjjyxhfMaAQpG0Ak4jAA867rjjxo0b17p1a8mMV+wMobauuOKKoUOHCq1sApomAuF555332WefBZSJ+ggFMKIZyinhiw8++KDW/osWiQQgadcYkAQlK+M0AvAd1A2obzF4gR9lQCstIlm89tprAwcOTJ4yCKkHw58XX3xRl3Kks8MOO0xYJ24f9957r7BwaDHkwR133DG0GAWyGC0JHVbGEEiIAEqHJ598ku0YJkKphi4jsA4uaVOnTm3RokVCmr3X582bN378eK1UXAWSTj/9dLlo9tZbbymefxGIlgCMBUoCLkwJHQCOPaowBDhvPuWUU/bbb79HHnlkwoQJuufZYEFc927duvXs2RNjn+RKHw9cjt45y1PMfuFVy/pHOSUfv1mzZmkFoqdRTDGF7jImAcnHyEpWAAIoPrC7u+CCCzhOYmHLwwAG9w2R6sQTT5w+fTqGzljWaHEfGkWLxOEX8Q+DCYj69OijjxbKINTMSSLbSS3vM3bB7E+F4YdMAoo6sla+AhDA8gVp5fzzz8ct66GHHkK9iosT2T4JcyGkHi0P+WSoBKvrgw46CAvDJOHlyzaK7IPR89VXX63OfWA9Rx11VNlGy97k/IvwQ2UfxbiJ2pvTN6HxUVIGpHhqGKOr9oohEIwAEfnYlPXq1YsA7++++y5ptojy9cknnxBzC6s/8s94mhfkJtgNZoRsHAhhgwcT7IajfYQp7GiSq5nrEsnC4cz78ssvVwz647UC6yRyG2TXbdTvzssvvwyD9nsa9T4w7r777sK3kjIgmrF4QEKsrVheCLAk0NrwY7Vz0lz4IRBhwYgAAvdBX8s+C29SFEn8yx2+4SzmlGiG/Q0aNEgx+nKBTqLWHnnkkRyBFe6EXmBFiTgWWkxYAO+zpk2bCgsrMCATgoRYW7HcEYDF8EvoMJGwF6wXAm507dqVg6eEVZV9nUPAgw8+WM46X3rpJcX0G5DE7k+4/6KwghLaGFDZeWA3DYG6CLBdePPNN9EopcR90I6j1ZZHI0LwQQmluIQhAN5at+N+dxQkIL+q7b4hYAiUIMBh0xlnnJES96EtWNtee+1V0mjAn1Ayc+bMgAJRH+H7GikXozGgqAhbeUMgDgLIGthJ4jWi6OxeQgdac/RKcltwxLH7779f6/QdYtj3oX6S7/54RWELJu9wCV72pyFQIwisXr0aoyQi6qfHfTj8xlIpkq3A+++/P23aNMVDJE4P0fRHGlMFCSgSw4tEnBU2BKoAAWQfjttvv/12RVPjurBgMXDMMcfIY4/Bd/AmWbBgQd2qYt+B+4TGYC2p3BhQCSD2pyGgiQBn/BgiwX0UBY2y9GH8TTqgso/K3mTnBVWKDmhovtu3bx/VZkqBAZXtnt00BAwBzI5w3Zg0aVKq3AcdCKqlHj16RAIcI2zd03d0z2igo+6HFHRAimd4kRC0woaA4whgfn3bbbexBUuVTsyOr7zyykiqWAzB2RXqrlyyP0cyv/YwUWBAqXL3VEfOKjcE0kOAzddTTz2Vhq1zMc24fV144YWRTr55/eabb1b0vfDo6dOnj1wDVeiCAgPS5aMFyuzCEKhoBFCy4Aer7mhajAlSD8seX9lIGx9sfwh9X1xP8mtU4PL0h8XNKTCg4urs2hAwBDwECPHDFixVNEjFQSDXSHIH7m94fikm/6KD8EFU4HL3i2JMjAEVo2HXhoAaAoSITVX7g+qHOIoEDIlEMeIP4V91XfARf/A+i0RGobACA4ok/hUatgtDoLoRwOsivQ5icDhixAh5yDGPkn/961+IKl988YUiYYg/RxxxRNTT9wIBCgwokvq90LBdGALVjcDy5ctT6iChNi655BISH0eqH23U6NGjCf0T6a3Qwttssw0ZAYgxEFqybAEFBmQSUFlk7WaNIxCaFj0ePqhahgwZcuyxx0Zd86+//joMKF6jAW+xE9x5550DCgQ/SsqAjPsE42tPaxaBNHIlstsYNmzY2WefTUqySMAS+xHuQxyiSG+FFmb5E20ySXylpAwolEQrYAjUJgLysKRCfAjSeNZZZ5ERSFi+uBhRsZ944gl1ixmcv8h9WNxQ1GtjQFERs/KGgAgBzsjjnUz71U4SasLsE3HVr4DffVwukJvUHfERfEaNGhXJCKAuhcaA6mJidwwBBQQ4nCY5hEJFa+LsnHnmmdddd13UYy9aJwI/u6SPPvpIhZLiSsiPFlURXvy6d20MqC4mdscQUECAAD3Ex4iqKq7bMCIPgg+BU6PqfaiKhF+XXXbZ4sWL61ab8A6HX6Q8Sq4CNgaUcCDsdUOgPAIojDt37ixMkV6+irXWYpvDmdfgwYNhZ35l/O7jpHnfffeRJFbdW5MDPiwPW7Zs6de0/L4xIDlWVtIQiIZAkyZNCAYUWwgiuBfK4wEDBkTKsVMgEUcQXN6//PLLwh2tC9giwaeTHH4VKDEGVIDCLgwBZQSQFNAc9+vXT56mwqMA6QnRCe6Do2nUd70aOHE/7LDDyMKo3KU1Cim2lpFC3wfQYAwoABx7ZAgkRQAedOONN+IAIY9Viq6HzO6EMYu9yFE5Dxw4UN3qx8OiRYsWZP5JissP7xsD+gEJ+98QSAcBDuNhQLfcckvomRGCD4oVgvUQRxHz4ngqXvzdR44c+eyzz6bRG08nRQJrrcqNAWkhafUYAr4IINR06dJl1qxZd955JxIEtjNIRrAb78c1d9hz4d3+6quvol7ZZJNNfOsKfICpITEYb7rpJsVkO8UNYtzUsWPH4jsJr5PGhKbD/BISYa8bArWAAIyG4M1kLn7vvfc4Gl+1ahUOoshHW2yxBcnUCSlPgSQ4/O1vf4P7ECFI/djLo4q4iyeddNJGG22UhMiSd5MyIKpLqbclhNqfhkB1IIBSmX0WP93usPMaN24cwaHTC0KEQePee++tS7YCAzIJSHdIrDZDIAYCd911FxZDsKEY70peQUa79NJL4x3JBdSvwIACardHhoAhkDYCMB2OzPDV0I1zWEw2Wmc2d+utt17xTZVrBSV0PF29CvVWiSFQ4wig9xk7dix6n/S4D174GEOSdScNqI0BpYGq1WkIZIEA2g8OztD7qHu6F1NPXJH+/furb768JhS2YKYDKh4tuzYEskEAR1NkH3xN09M60xEMfwjlwTldSp1SYEApUWbVGgKGQFkE+OQvWbLkqquumjhxYqqff8yXrr322tgG2WWJL7mpwIBMB1SCqf1pCKSKAGZExEUkvHyq3AcjSbzYTjzxxFQXuDGgVKeKVW4IaCLAbmvGjBk9evRIw8e9hFBMfogAmzDgYUmddf80JXRdTOyOIeAiAp9//vn111+fDfch7xhWRQ0aNEgbiKQSUKriWdqdt/oNgUpBANf2c84555lnnuHcPW2aN9hgAzz4O3TokHZD1J+UAWVAojVhCNQ4AjiOEdwH1U+qSh8PZPzRrrnmmsMPPzwb2UJhC1bjk8O6bwikisCCBQtQBmfDfdD40BbxxrLhPuBmDCjVyWOVGwKJECCbO1mY0z7wKpC43377EbpI19+9UHnZC9uClYXFbhoCTiBAZDISChK1IwNqdthhhwkTJmy55ZYZtFVowiSgAhR2YQi4hcDHH3+ctqGz12E2XM2bN3/44Ycz5j60bgzIrTln1BgCBQRIqpOqk1ehIUJt3HDDDdttt13hTmYXtgXLDGpryBCIgACsZ/r06RFeiFuUxIejR49u3749ps9x64j/nkMMiMiKGZwyxofK3jQEMkSAlMpswdJu8Fe/+tXjjz/etm3btBvyqz8HnudHCgp/Y0B+4Nj9WkNg9erVX3/9daq9Jgo1UVz33HPPVFsJrjypBKTIMojjn422PxgRe2oIuIAAy4FPcnqUIPuQvYcMy5mZ/JTtS1IGRKVaQenhPorsrGxv7aYhYAiAAHqfp556qk2bNrmjobAF0+IahFxLmJYkdzSNAENACwECMK+77rpatRXqQdOMvQ9Jn13gPlClwIAKfUt4Ady56OETkm2vGwJpIMAWKQ2L5F122eX3v/89Fs9p0ByjTgUGpLWHNPEnxvjZK9WKAFFQt9lmG93e4eD+5JNP7rPPPmRD1K05dm0KDEhLbNHaysXGwl40BNxB4Oc///mBBx6oRQ+ZLUjK+tBDD9WvX19LYlChLSkDUuwMeUWMB6kMqlVSHQgQgoPAYMn7QmjnQYMGEd25Xr16yWvTrSEpA1Kk5ptvvrFjeEU8rapKR2DzzTcnBGLCHQZbubvvvvuiiy5C9nEQEIcYkBkiOjg/jKR8ESAAa8+ePeOpR9md7LTTTg888ADRxRCC8u2IX+sOMSDF3Zxfb+2+IVBxCOAQv++++0aVgzhThnmRMJ6kOi6vLGNAFTchjeDaQqBJkyY4i3bu3FnebXZbZA3DzaJly5Yucx965MppnBxcDK9TtZn2BqwwbFwUfnIio5akR/yivqVens8s0j79Da05lGAqoapI321yzmhZ1Xv0FzriXfBv4RfaQXcKgCHhMnAZve66666++uqvvvrK76yG3lGYbdctt9zSunVr/nSnF36UOMSAvMnhR6h3/y9/+QuBS9jWrlq1Sn3FMnicfZKLdsMNN0SCxTKbCw4O+JdPyqabboptGP9uvfXWm222Wbxtednevf3228OHD3/llVdIeMDc8hZt9rOH/jLRSb0Q+rElQwOLAVt+sgOXZRmAA1CEFiZ/3iabbFK21yU3Z82aBQjz5s3jLMJvgZW8EvAnBBDemOwO+Bxw4V0zfIwmMbf4od/daqutGMqUUp4H0BbvEfPh3HPPPeSQQyZPnjx79uwVK1aQGgx/MbBi0tJNesTwcXCGxqdSOvU9FHQgye+LL74gkkg8TEvewjeXmR1MzHPPPYeJesmL2fwJX2BCN2rUCCtSVukLL7zgDX8wwaFPqeTUU0/1mE42HQluhUnsnQb4UQ7fR7bHriS4Hp7Cekgj41dP8f1vv/02y4gQ8CPOhnbfffe+ffsS9IuVXEyM49dwfCJ1zJkz5+mnn37kkUcIY0jMViIHkTnD492O019CnkMMqFmzZh999FEJfSV/8uENnfcZFIBfcKyAXelrr71WQmHUP5lMnTp1yoBmYRN8aSEpoBewp4svvlhYG3sBFkxAbd4jUu4hVArrVCxGZxEWGjduPHbsWJXPSWhPrUAJAg4poZEkQwUBPpWK8y92VSyqf/zjHy+99BLHEwjGS5Ys4U682ljPjnTKo5/5wVIM6AsFUNYEFCh+RO+K//S7pkKq9Xua3n0aBfz3339/wIABOEndc889sMJcKEmvj47X7BADgvuEKj5CC2QMN2xoxIgRxx9/PMwoNg9ybcaH0iMfhdCqMh6vgObmz59PSqzTTz997ty5AcXskS4CDjEg3Y5lWRv64/79+6NAjdEoizlU7otRbXqvQDC/9OrPsWY+J3hLdevWbcqUKTmSUVNNO8SAkCBCP5ixpYxUBxWyP/jggyOOOGLZsmVRG8Ivmb1n1LesfEoIoGJHEfnb3/4W9wXh/jElSmqkWocYEM6oofwltECOw7Z06VJOnaMGEudEppIOTXPEN8OmCcY8ePDg+++/P8M2a7QphxiQRBMZKiLlO4wvvvji7bffHunLifjjmgTkTrCYHEcTOej888/nhDtHGmqhaYcYEMZjocoFxxkQ50cwIE5V5FOHLjulA0Iiw6pNTn8Vl/z000+POuqoN998s4r7mHvXHGJATH2nlmK8seFIftKkSfJ3v9foOqPTZQjwYMTyW05/dZfkkJ692PLly6u7mzn2ziFXDMkxfCSkMFwm5xEW96F7HAQr9k34eeAMgRTDxWeffYa3RzyB64477kB6Tyn4E24EmPBiZKzoCwKqMEGMm7fffvtQP4xIQ5BGYeYJ/pk777wzklox70Y/yNjhKkVOURgHg4iJM/9ytpWEDI44UUgT0Ct0FiVppWbfTcqA4i3RDODGe2vixIkYGQulKq8jhX+ZzXz3Hn300VtvvRUj90gEr1y5EgN/bNsivSUpjLEczihIKMULT/KisIz6N0DYbqRiuDshY+KRUxeEwvBRIdf8YEnspDDtmTZtGv6cfFQitUVh+NeoUaM4F1OP0ByVkuos741T7H+xHG3Xrp0KNHjxcoQUTMmQIUOEbbF7x1UyuDbJU2Qisghst912dad7ACVg4kWYDW2CT3TXrl0Dqio8ggAiiodWmHYBREV2JQWqgi9uuukmWHkoSfAInFeDq/KewiIXLFgQWmHZArASPKdAG69USVvFZYgKhlRVtlq7mQQBBR0QzRcPVexrZrZWVUxTvA3xa49NTOFFvrQ4i+J+2aJFi8LN0AsWCY61ocUogOGJ0LMBB328liR1VnEZxjQ2COwxsdVigzx+/HgyQ0T6osC5cP6sYmDz6poCA9IiXTcmNMY1kWZYcC+Yr2yp5I749OWdd94JrtN7iqAkPLb//ri+5k0WGdaEVgJsYBGCsPFhVyXcnjNSDBOJjBFXJWNqZeQIKDAg+SgGk+XtWYLLCJ8qsh6vRTS+HA9tu+22QgIQatQlIGHT1V1MZWSpBBXhNddcQ3gdOVzvvvsuiiQtIV3ebnWXVGBAKnMClL2dpLNwc/AkVNbQBTZWqKKFfdECUNicFfMQ4Hj0yiuvlOe9Wb169fPPP5/wTM3AL0EgKQOqqcVz0EEHlcDn9yfMFJ2l39Pi++YLVoxGxtc77rjjmDFjhAYNaNORgOTflYz7UqHNJWVAit1mK+c4OyNaoHC/CQNivkrAQa2D+Z+kpJVRR4D5xqF+ly5dhDW/9957b7zxhrCwFZMg4BADkpCbbxksGzmKktDAzOYnKcnnV/gFltRmZWIgcMIJJwiNv/muEAU1RhP2ih8CxoD8kClzHzW58Micl4UnVnJWVYYgu6WBQKs1P2FNRF+WzwFhnX7F4HdYTuKa71egCu47xICEe5YcQcdOUnhkjlAjzAaRY3esaQ8BvFtIYiPcXBMwm9hPaUPHWnj11VcPPPBAcl0Q9hezsrRbzKt+hxgQ/J5fXkBI2pWboqFaJuWLpE4rkzsCsJ42bdrIkxeTQSglmuE7WG8QlRG1FCkPOHRjRcB93nrrrZRazL3apL5guXcgMwIwQiMfmbA59MporIWFrVjuCJCRBRNH3G4klJASB7WRpGSkMoTTxDySjxx6bvxpC++y4xPK3YVXKujCIQYk1NrmBS5+WGQQFLaOKzye5cLCwmJMRMyLhIWtWCQEsAaSx6X805/+FKny0MIk18NpDrdnLuryGtaFcHsY2pCDBRxiQIroILjqrlWiUt14441ydSDZKYXnZfJe495BmD7cYuWvWEkhApyCsWUm3aikPGES8HNOHrYNm8YPP/yQDxvezlz4NV3dxxQOMSBFJTQMCLtVTAHlnzW/4WeWPPvssyRElEfGQ5tw4okn+lUY+z6dIsDIHnvsIXdJi91Wrb3IIoezv/7665KOM68IF5WEAfEtmTlzJrk3yBxL/ExGVtJuVZZxiAExDFojQT1//OMfCU7I3j72sBFphPTnBKNiT05oK3k9eGykpABCPcnU33///dnioSZALYXEjqwXAzeWHEd15CPFEk/u4yYHoeJKknRbSDN7YU7HCYomLF9cDEsOVMtI0+iV2XDpyunFDVXKtVsMSBE1GBDuzn369EG0ZpgJlIcsw/AjZ9VdrtyhDHI1TId/KYxGEKk4hsUHcW3OPPPMlDbtsJupa36KQE2YMAEmGynYiGLr7lTVsGFDITHMIg7jhYW9Ysw65hWJvIcPH06IRUVhPxIZDhZ2iAGpo8NH5qyzzlKvNqBCDr/Iktq8efOAMq49wr0AraoxIHlyej5LCC/CcYTXEFGTxLmYUPNvXR2zsJ5qLeYQA2JTUOkoE6g4UtggF/rLciJuKTJgFeCfBE+53ZacAbFzHzt2LBtnFD3mRl92dBxiQNBX0WsAvcydd97ZoEGDskA7e5PdIoJbRSOvgq08Tiu7dQk3gU9dccUVo0ePtg1XwAA5ZAlduWuANYzsQxI7ddufgJHTegTs5g0LmJxqCc9MkRZhQHU1iSUjwhkI+jXjPiWwlPzpEAMKHdES0t35E5+dW265hQNyd0gySqIiQMRofpK34CnYTCPgBBcmTa7QtDq4nup+6tYWrOKwxiTnkksuOeOMM7D9qVAJDr4fupYqblxiEBxJEvSOU4NbkdvNB9dT3U/dYkCVIgTxqSRLVPv27QcOHFjp50dwH+ziQL5CGaji+pRvl9i0hsJlEewlQ+MWA5JQnGMZQvzgNLTrrruSJGOvvfbiuD1hhoYc+1Jo2iQgDwrsm/kVYAm4gPUg+YYOPVJSQCX2yEPALQYU+lXJa9iYbUceeSRbLRgQ2kqyU6Vkaph9B5HmOL9zFvnMAMFQEElQ0hxDDwMKnQCVIs5LupxeGbcYUHr9TFgz0cV69erVtm3bhPUkfx1OgZsrDDE5y6AGZLq9997bhX4lRyZhDRjBC1kGrEcePCghVVX/ukMMKPmKKhktLDt22GEHvvBMLGw3cJ7CxwJfKv4VTrVChbi24rXMWhUGDy68qHvBh/eYY47hyB8yQr/AwU2Dthe2kXzzFrwRrHC+CUas8BTuLzEaUp/PBQKq6cIhBhSVKQQPA3slMs+hqfFiM6NfxAoek19ORhctWvTYY4/hiCw/JWU/P3nyZPS1uBHCBYKbTu/paaedNmTIkBwJSK9rudccEBCjhDZmFJFSS27W/TPhF6JuhVV5xyEGpIsvrAc/77JrFS3yscceS6JL3CYIrylUFiJAYVfGd3LSpElEEc7++8aH96ijjirbI13oarM2fOKEHcdwnKSGoYXNvDMUIgo4ZIgINVpCEB8fvlHBG3XOsJ577rnLL79c8jUrQIl1GR726jHxCvUHXKD62WijjQIK2KMkCCxcuFD4OgbTEsex7D9RQvqdKuYWA1KERuLfRBkMeS699FKhCSzksZUjPebJJ588f/58RWolVcFVbU5LgIpRhgN4/EWFL6IAIuhKaGHUjqFlrIBDDEhL/GFQ5QuVHc2pp546dOhQ+VSABxE67+CDD84gPYucKiuZBAGOJjiGF9ZAQme2w6GFjQGFQkQBhxiQhNw0yiBZnHvuuQg1nrpa2AThmQk8xr/C8lbMZQQQf4RWiPRi9913l/RF8YMqaa5CyzjEgHIcMHjQhRdeiH2zXHSC2hdeeOH666+3D12FTv1istlQc0JafCfg2symAsCJ+sghBsTWJkce9Jvf/Oaiiy6S7O0LEPPNxAmeGECFO3ZRiQgwjgTPFEpAnANUVsRLx0fELQaUI1jIPuTAJYSrZHtfoJNZiwqJLLo5ss4CMXYRDwEsgIggLhxBgq5wdhGvIXurLgIOMaC6xGV8Bx4EA+revbt8IwaF8CAicpBRN2NqrTktBPh+CJOvMzEwLtNq1+oBAYcYkAvHzJzHE0YzaoQNrBmxk7Z445W4olDhjRs3TuiGigEqMVgqsZvO0uwWA3IBpsaNG59++umRDI7RX+KiIfyKutBHo8FDgG3XbbfdNnv2bAkg3iZdYoIoqc3KeAg4xIAibXzSGz8EMRIrR/3QkakOtoVHdXqEWc26CMB9EF0HDx4srJYwLAcddFCShKjChmqqmEMMyB3ccc7APDqSEATxJJwjgzNnee50pPooEaqKJR0nZOoFF1xAnANJYcqQcaBTp06OfCaFNLtfzCEGxNC6M7ocdowcOTLS+LE20ATxUY30lhWOhICW1RWupzgk882Qt37CCSdEchuU11zLJd1iQE6NBDlOjz766Eg+zZ9++ikaTflH1an+VgQxX3/9NSDHJpVQUGh82HYREeGdd96R10MMppkmnWoAAAr8SURBVN69e8vLW0khAuEuLcKKkhdzR/zx+oLT86BBg+bNmyfXLrP/Im4ZWXqOO+645IBYDXURIHbKzTffjMmoMIcXR5NEfVq5ciWOe8QwmDNnDjaHONBEkqTQ+1x77bXBwRXqkmp3JAi4xYBc40F8J0855ZRzzjlHnrgGn0a8Ojp37mxhBiXzL0YZFG0kWccjFOGUcSlhJXwDYFLkROZYAHGJ1BQkEaQYN2FGwthPxVQxJ9mstWvXrvimXWsh4BYD0uqVVj2ciPXv35/YiU8//bS8zhUrVnAiNnHiRCL4hL7FguEXWswKFBDAZmfGml/hTqoXbL5wVJYMZapkVGvlpgMKGVlm3pgxYxo2bBhS7seP2YhNmTJFcmTDN1nohfTjFuyvLBBg24XCqGXLllk0VpNtOMSAnMUf7nPxxRcLlQ5eL4jfeuuttyIKhXYK7iP3ww6tzQooIoBX4OjRo7t27YogrFitVVWMgCFbjIbvdZcuXXACkk9EZB/0FMhBvjX+8AD1BL8f/rL/XUEA2eeyyy7r27dvpChRrlBfOXQ4xIAkG5a8gCUKJ36qpGOWE4DKE3VpaKBPel3FOiDXThWEw7fBBhsQow5FnrC8FYuNgEMMyPHJimkiG7FIRC5ZsuSkk05iOxYwPDAgfgEFKvqR0IrKKQTw9mL7DAPaeOONKxr8iiDeIQbEZI20vDPGF/L69evXs2fPSEROnz4dHbbKAovUbnrgfM8vxRxTuGnlKF1eZ3pdI9AP9hOYR2OAihCUXkNWcwEBhxiQJI9F7otw2LBhUYN1EDIxOI2PsFMsZmHJwuimdCFnFkKCsRWU15lGp4hzuN9++40fP/6+++4jpWUaTVidZRFwiAFxzBT6wZSbYwiF/7KgBNwkciuWQZE+j4sXL3788cf9TOCgU0gqalFhyQD6kz+Cp4QOk9cKJYUaXNTweTEgIkAh7xBa9+6778b5Zv31108OkdUgR8AhBsSpZ+gHk1zvoWXoPFVtttlmchTkJakZNwuSxMtfgfUQvh573LKvYOYv1DU0atRInr+sbFsqN2GCYAsOobURTgDvTcl4UWHGcU6harvttrvyyiv5PJDqtkePHvXr1w/tkRVQRyB8Gqk36Vchc4Kf31PvPprgXr16zZw5E9uZst9MakCSatasGeYbwVXFfrrhhhvefvvtKCnJDoalP/yFRgv7I649wvjXu0Bqw2/ATxaAATH7cTcjlhDlC1y4GAoqZ4kiedWrVy822VovQgw50dBtzZ07l5M+r48llUM8vHL//fdv3bp1yaOyf5ILgPgnKMvAs8S1omz50JsQCaOEqYEn1/zLrODHaSYyLIaFTKSmTZv6DUpo/VZACwGHGJCkS8xUYg+SRZeZWvb0mtnG/oi5lepa5cOOpwVc4+OPP0a08aY4/xa4xve857vvWEvcgR7yKPi5MlKALQBfYzwk6RGLpLgeMKEA6wfFBBKQC1swSCIyDuoSRoEDPr9RQKvCZwBmLRlWyuBzhxZm+fLlMHSgE75VthiIedwHEQw8ueZfGD1/whaBt+xbdjMXBCqMAYERG5Y999wzF7CKG+XjiVzDr/hmvGv4S5s1v3iv5/IWXwJ+ik3DF/hs8FOs06pyHwH7Grg/RkahIVC1CBgDqtqhtY4ZAu4jYAzI/TEyCg2BqkXAGFDVDq11zBBwHwFjQO6PkVFoCFQtAsaAqnZorWOGgPsIGANyf4yMQkOgahEwBlS1Q2sdMwTcR8AYkPtjZBQaAlWLgDGgqh1a65gh4D4CxoDcHyOj0BCoWgSMAVXt0FrHDAH3EXCIASX0gXYfa6PQEDAEShBIyoAUuQZVKdZW0k/70xAwBBxEICkDoksqEaS8eowBOThFjCRDID0EkjIgWIZftOOoRJcNbRW1EitvCDiCgEU+kwyEQwyIyHXEspMQbWUMAfcRcCR8peNAJWVAXsBQlU4a91GB0SpxBAGbz5KBUGBAWvkMiDNvuzDJmFmZikBASzVREZ2NTWRSBkTDWqLml19+aWMWeyDtRdcQ+OSTT1wjyUF6kjIg5EwtBrR69eqlS5c6iJGRZAhEReDbb78laUrUt/zKV/FuToEBaW3BOM6fMGGC1qG+31jafUMgAwSmTZtGojeVhjhNq+IDtaQMCPFHMQPXww8/PHz4cL8koirDaZUYAqkigGHKW2+9NXToUC2jNpYYiZtSpTnHypN2DGgUkyAjuF5++eX33XcfuTdJEbXFFluQVhT5MzMRlEnDz9OFe+16/+Y4QpGa9ohHlUa2dYaG5GXex9O7j3RJd5jQ3CyB9Ptur/nRd/6nUQp8/+Vdk8avpHAkkpwqTNeKO0i/vDteZ/mXn5BgDyUg9dDmLdI0rlixYvbs2WTiJnGmsJ7QYqS0JLdlaLEKLaDAgLbaaivFzjM/2Dwr7p8VabOqDIHsEYABkdY1+3azaTHpFozP7NZbb+19J7Oh2FoxBGoKAbgPKe2rtctJGRCsp379+vIU4NWKo/XLEEgJAVQcW265ZUqV515tUgZEBzbffPMGDRrk3hMjwBCoSgR23HHH9ddfvyq7RqcUGBBbsGbNmsm1d9UKpfXLEEgDgU6dOqVRrSN1KjAg2HO7du3WWWcdR7pkZBgCVYPApptu2qFDh6rpTt2OKDAgKj3wwAMVrYHqUml3DIHaRODcc8/FEqWK+67DgNABde3atYphsq4ZAtkjgIFL3759s283yxZ1GBAKoMGDB1exqizLIbG2DAEPgaOPPrqKD+C9PuowIOqCWw8YMMAMgmzxGAIqCGyzzTbdu3dXqcrlStQYEJ3s06cPx2Eu99ZoMwQqAgHcZQ4//HAO4CuC2iREajKgRo0awYOwHE9CkL1rCBgCmLYMHDiwJnQa+NQp/r766quOHTvaBDIEDIHYCBDfZsqUKYqr0uWq1lInbv78+bYRiz357MUaR4ANxGWXXaa+Kp2tUJ8B0dUXX3zx17/+dY3PJOu+IRAVAVy7e/fuvWrVKmf5hTphqTAggqRMmjTJPFSjzj8rX+MI7LbbbkQUUl/kLleYCgOiw4QWGzly5MYbb1zjU8q6bwhIEED22XfffZctW+Yys0iDtrQYkMeDiG3YpEkTyQBYGUOgZhHA2eL444+vQe4Dl0iRAVE74Q3nzJmDYFmzc8s6bgiEInDhhReSEiYN+cL9OtNlQF7/ly9f3rNnT9uOhU5EK1BTCBCxm/PiBx980AtT7T6zSIPCLBgQdKMSuuuuuwgsAOg1Ncmss4ZAWQTwtDj//PPffffdNFZ1BdWZEQMCEY7GPv744/Hjx5tWqOyMtJs1ggCBawiyAesh/VQFcYqUSM2OARU6AO633nprq1atOKfH6NNCKdbIwqvlbuLbRWodjONgPUuWLCmsBbv4Pi9SLjMDNvTaa6+RRGnRokVIRitXrsT+Ck+Of/7zn3mRlAsO1mj1IUBMCAKErrfeegg7xNMgpHzjxo05iiFwqMXtKxnu3BhQgQ7yun3zzTfwHX5coLH+4osvuEYzRxljRgWg7MJlBDxBHknnF7/4BXFUSRUDD+J8nX/xrjBJ32/s8mdAfpTZfUPAEKh6BDTDcVQ9WNZBQ8AQ0EXAGJAunlabIWAIREDAGFAEsKyoIWAI6CJgDEgXT6vNEDAEIiBgDCgCWFbUEDAEdBEwBqSLp9VmCBgCERAwBhQBLCtqCBgCuggYA9LF02ozBAyBCAgYA4oAlhU1BAwBXQSMAeniabUZAoZABASMAUUAy4oaAoaALgL/D7BBJkS3IIuPAAAAAElFTkSuQmCC" });
                await SunmiPrinter.lineWrap();
                output.innerHTML = "<b>printBitmap():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printBitmap() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#printBitmapCustom').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printBitmapCustom({ type: BitmapPrintTypeEnum.GRAYSCALE, bitmap: "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" });
                await SunmiPrinter.lineWrap();
                output.innerHTML = "<b>printBitmapCustom():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printBitmapCustom() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.9 Print a 1D/2D barcode
        self.shadowRoot.querySelector('#printBarCode').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printBarCode({ content: "1234567890", symbology: BarcodeSymbologyEnum.CODE_128, height: 100, width: 2, text_position: BarcodeTextPositionEnum.ABOVE_AND_BELOW });
                output.innerHTML = "<b>printBarCode(1234567890, CODE_128):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printBarCode(1234567890, CODE_128) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#printQRCode').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.printQRCode({ content: "https://www.google.com/search?q=QR+Code", error_correction: 3, size: 10 });
                output.innerHTML = "<b>printQRCode(URL):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>printQRCode(URL) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#print2DCode').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.print2DCode({ content: "1234567890", symbology: Barcode2DSymbologyEnum.PDF417, size: 3, error_correction: 3 });
                output.innerHTML = "<b>print2DCode(PDF417):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>print2DCode(PDF417) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#print2DCodeDM').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.print2DCode({ content: "1234567890", symbology: Barcode2DSymbologyEnum.DataMatrix, size:10, error_correction: 3 });
                output.innerHTML = "<b>print2DCode(DataMatrix):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>print2DCode(DataMatrix) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.10 Transaction printing
        self.shadowRoot.querySelector('#enterPrinterBuffer').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.enterPrinterBuffer({ clean: false });
                output.innerHTML = "<b>enterPrinterBuffer(false):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>enterPrinterBuffer(false) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#exitPrinterBuffer').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.exitPrinterBuffer({ commit: true });
                output.innerHTML = "<b>exitPrinterBuffer(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>exitPrinterBuffer(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#exitPrinterBufferWithCallback').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.exitPrinterBufferWithCallback({ commit: true });
                output.innerHTML = "<b>exitPrinterBufferWithCallback(true):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>exitPrinterBufferWithCallback(true) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#commitPrinterBuffer').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.commitPrinterBuffer();
                output.innerHTML = "<b>commitPrinterBuffer():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>commitPrinterBuffer() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#commitPrinterBufferWithCallback').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.commitPrinterBufferWithCallback();
                output.innerHTML = "<b>commitPrinterBufferWithCallback():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>commitPrinterBufferWithCallback() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.11 Paper moving related
        self.shadowRoot.querySelector('#lineWrap').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.lineWrap({ lines: 5 });
                output.innerHTML = "<b>lineWrap(5):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>lineWrap(5) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.12 Cutter (paper cutting) related
        self.shadowRoot.querySelector('#cutPaper').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.cutPaper();
                output.innerHTML = "<b>cutPaper():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>cutPaper() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getCutPaperTimes').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getCutPaperTimes();
                output.innerHTML = "<b>getCutPaperTimes():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getCutPaperTimes() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.13 Cash drawer related
        self.shadowRoot.querySelector('#openDrawer').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.openDrawer();
                output.innerHTML = "<b>openDrawer():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>openDrawer() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getOpenDrawerTimes').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getOpenDrawerTimes();
                output.innerHTML = "<b>getOpenDrawerTimes():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getOpenDrawerTimes() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getDrawerStatus').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getDrawerStatus();
                output.innerHTML = "<b>getDrawerStatus(5):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getDrawerStatus(5) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.14 Get global attributes
        self.shadowRoot.querySelector('#getForcedDouble').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getForcedDouble();
                output.innerHTML = "<b>getForcedDouble():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getForcedDouble() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#isForcedAntiWhite').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.isForcedAntiWhite();
                output.innerHTML = "<b>isForcedAntiWhite():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>isForcedAntiWhite() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#isForcedBold').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.isForcedBold();
                output.innerHTML = "<b>isForcedBold():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>isForcedBold() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#isForcedUnderline').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.isForcedUnderline();
                output.innerHTML = "<b>isForcedUnderline():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>isForcedUnderline() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getForcedRowHeight').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getForcedRowHeight();
                output.innerHTML = "<b>getForcedRowHeight():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getForcedRowHeight() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getFontName').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getFontName();
                output.innerHTML = "<b>getFontName():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getFontName() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#getPrinterDensity').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.getPrinterDensity();
                output.innerHTML = "<b>getPrinterDensity():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>getPrinterDensity() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.15 Customer display interface description
        self.shadowRoot.querySelector('#sendLCDCommand').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDCommand({ command: LcdCommandEnum.HIBERNATE });
                output.innerHTML = "<b>sendLCDCommand(HIBERNATE):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDCommand(HIBERNATE) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDInitializationCommand').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDInitializationCommand();
                output.innerHTML = "<b>sendLCDInitializationCommand():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDInitializationCommand() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDWakeUpCommand').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDWakeUpCommand();
                output.innerHTML = "<b>sendLCDWakeUpCommand():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDWakeUpCommand() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDHibernateCommand').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDHibernateCommand();
                output.innerHTML = "<b>sendLCDHibernateCommand():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDHibernateCommand() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDClearCommand').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDClearCommand();
                output.innerHTML = "<b>sendLCDClearCommand():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDClearCommand() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDString').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDString({ text: "LCD String" });
                output.innerHTML = "<b>sendLCDString(LCD String):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDString(LCD String) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDDoubleString').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDDoubleString({ top: "Top LCD String", bottom: "Bottom LCD String" });
                output.innerHTML = "<b>sendLCDDoubleString(Top LCD String, Bottom LCD String):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDDoubleString(Top LCD String, Bottom LCD String) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDMultiString').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDMultiString({ lines: [ { text: "Items count: 25", proportion: 2 }, { text: "9.99 USD", proportion: 5 }, { text: "Payment total", proportion: 3 } ] });
                output.innerHTML = "<b>sendLCDMultiString(Line 1, Line 2, Line 3):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDMultiString(Line 1, Line 2, Line 3) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDFillString').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDFillString({ text: "LCD Text", size: 25, fill: true });
                output.innerHTML = "<b>sendLCDFillString(LCD Text, 5, false):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDFillString(LCD Text, 5, false) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDBase64Bitmap').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDBase64Bitmap({ bitmap: "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" });
                output.innerHTML = "<b>sendLCDBase64Bitmap():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDBase64Bitmap() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDAsciiBitmap').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDAsciiBitmap({ bitmap: "100000001\n010000010\n001000100\n000101000\n000010000\n000010000\n000101000\n001000100\n010000010\n100000001" });
                output.innerHTML = "<b>sendLCDAsciiBitmap():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDAsciiBitmap() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDBarcodeQR').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDBarcode({ content: "Text in Quick Response (QR) code", format: LcdBarcodeFormatEnum.QR_CODE });
                output.innerHTML = "<b>sendLCDBarcode(QR):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDBarcode(QR) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDBarcodeC128').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDBarcode({ content: "TextC128", format: LcdBarcodeFormatEnum.CODE_128 });
                output.innerHTML = "<b>sendLCDBarcode(C128):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDBarcode(C128) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#sendLCDBarcodeURL').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.sendLCDBarcode({ content: "https://www.google.com/search?q=QR+Code", format: LcdBarcodeFormatEnum.QR_CODE });
                output.innerHTML = "<b>sendLCDBarcode(URL):</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>sendLCDBarcode(URL) - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });


        // 1.2.16 Label printing instructions
        self.shadowRoot.querySelector('#labelLocate').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.labelLocate();
                output.innerHTML = "<b>labelLocate():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>labelLocate() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });

        self.shadowRoot.querySelector('#labelOutput').addEventListener('click', async function (e) {
            const output = self.shadowRoot.querySelector('#output');
            try {
                const response = await SunmiPrinter.labelOutput();
                output.innerHTML = "<b>labelOutput():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
            } catch (e) {
                output.innerHTML = "<b>labelOutput() - ERROR:</b><br><pre><code>" + JSON.stringify(e.message, null, 3) + "</code></pre><hr>" + output.innerHTML;
            }
        });
    }
  }
);

window.customElements.define(
  'capacitor-welcome-titlebar',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 15px 15px 15px 15px;
        text-align: center;
        background-color: #73B5F6;
      }
      ::slotted(h1) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.9em;
        font-weight: 600;
        color: #fff;
      }
    </style>
    <slot></slot>
    `;
    }
  }
);
