import { SplashScreen } from '@capacitor/splash-screen';
import { Camera } from '@capacitor/camera';
import {SunmiPrinter} from "@kduma-autoid/capacitor-sunmi-printer";
import base64_decode from "locutus/php/url/base64_decode";

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
        <h1>Capacitor</h1>
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
          
          <hr>
          <strong>1.2.5 Change print mode</strong>
          <br>
          
          <hr>
          <strong>1.2.6 Text printing</strong>
          <br>
          
          <hr>
          <strong>1.2.7 Print a table</strong>
          <br>
          
          <hr>
          <strong>1.2.8 Print an image</strong>
          <br>
          
          <hr>
          <strong>1.2.9 Print a 1D/2D barcode</strong>
          <br>
          
          <hr>
          <strong>1.2.10 Transaction printing</strong>
          <br>
          
          <hr>
          <strong>1.2.11 Paper moving related</strong>
          <br>
          
          <hr>
          <strong>1.2.12 Cutter (paper cutting) related</strong>
          <br>
          <button class="button" id="cutPaper">cutPaper()</button>
          <button class="button" id="getCutPaperTimes">getCutPaperTimes()</button>
          
          <hr>
          <strong>1.2.13 Cash drawer related</strong>
          <br>
          
          <hr>
          <strong>1.2.14 Get global attributes</strong>
          <br>
          
          <hr>
          <strong>1.2.15 Customer display interface description</strong>
          <br>
          
          <hr>
          <strong>1.2.16 Label printing instructions</strong>
          <br>
          
          
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
        // 1.2.5 Change print mode
        // 1.2.6 Text printing
        // 1.2.7 Print a table
        // 1.2.8 Print an image
        // 1.2.9 Print a 1D/2D barcode
        // 1.2.10 Transaction printing
        // 1.2.11 Paper moving related

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
        // 1.2.14 Get global attributes
        // 1.2.15 Customer display interface description
        // 1.2.16 Label printing instructions

        // self.shadowRoot.querySelector('#sendTextToLcd').addEventListener('click', async function (e) {
        //     const output = self.shadowRoot.querySelector('#output');
        //     const response = await SunmiPrinter.sendTextToLcd({
        //           text: "Hello World",
        //           size: 30,
        //           fill: false,
        //     });
        //     output.innerHTML = "<b>sendTextToLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
        // });
        //
        // self.shadowRoot.querySelector('#sendTextsToLcd').addEventListener('click', async function (e) {
        //     const output = self.shadowRoot.querySelector('#output');
        //     const response = await SunmiPrinter.sendTextsToLcd();
        //     output.innerHTML = "<b>sendTextsToLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
        // });
        //
        // self.shadowRoot.querySelector('#initLcd').addEventListener('click', async function (e) {
        //     const output = self.shadowRoot.querySelector('#output');
        //     const response = await SunmiPrinter.initLcd();
        //     output.innerHTML = "<b>initLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
        // });
        //
        // self.shadowRoot.querySelector('#enableLcd').addEventListener('click', async function (e) {
        //     const output = self.shadowRoot.querySelector('#output');
        //     const response = await SunmiPrinter.enableLcd();
        //     output.innerHTML = "<b>enableLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
        // });
        //
        // self.shadowRoot.querySelector('#clearLcd').addEventListener('click', async function (e) {
        //     const output = self.shadowRoot.querySelector('#output');
        //     const response = await SunmiPrinter.clearLcd();
        //     output.innerHTML = "<b>clearLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
        // });
        //
        // self.shadowRoot.querySelector('#disableLcd').addEventListener('click', async function (e) {
        //     const output = self.shadowRoot.querySelector('#output');
        //     const response = await SunmiPrinter.disableLcd();
        //     output.innerHTML = "<b>disableLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
        // });
        //
        // self.shadowRoot.querySelector('#request').addEventListener('click', async function (e) {
        //     const output = self.shadowRoot.querySelector('#output');
        //
        //     try {
        //         const request = await USBScale.requestPermission();
        //         output.innerHTML = "<b>requestPermission():</b><br><pre><code>" + JSON.stringify(request, null, 3) + "</code></pre><hr>" + output.innerHTML;
        //     } catch (err) {
        //         output.innerHTML = "<b>requestPermission() - EXCEPTION!:</b><br><pre><code>" + err.message + "</code></pre><hr>" + output.innerHTML;
        //     }
        // });
        //
        // self.shadowRoot.querySelector('#open').addEventListener('click', async function (e) {
        //     const output = self.shadowRoot.querySelector('#output');
        //     self.shadowRoot.querySelector('#weight').innerHTML = "- g";
        //
        //     try {
        //         const request = await USBScale.open();
        //         output.innerHTML = "<b>open():</b><br><pre><code>" + JSON.stringify(request, null, 3) + "</code></pre><hr>" + output.innerHTML;
        //     } catch (err) {
        //         output.innerHTML = "<b>open() - EXCEPTION!:</b><br><pre><code>" + err.message + "</code></pre><hr>" + output.innerHTML;
        //     }
        // });
        //
        // self.shadowRoot.querySelector('#stop').addEventListener('click', async function (e) {
        //     const output = self.shadowRoot.querySelector('#output');
        //     self.shadowRoot.querySelector('#weight').innerHTML = "- g";
        //
        //     try {
        //         const request = await USBScale.stop();
        //         output.innerHTML = "<b>stop():</b><br><pre><code>" + JSON.stringify(request, null, 3) + "</code></pre><hr>" + output.innerHTML;
        //     } catch (err) {
        //         output.innerHTML = "<b>stop() - EXCEPTION!:</b><br><pre><code>" + err.message + "</code></pre><hr>" + output.innerHTML;
        //     }
        // });
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
