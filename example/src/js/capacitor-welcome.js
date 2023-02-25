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
          <button class="button" id="getPrinterSerialNo">getPrinterSerialNo()</button>
          <button class="button" id="getDeviceModel">getDeviceModel()</button>
          <button class="button" id="getPrinterPaper">getPrinterPaper()</button>
          <button class="button" id="getPrinterVersion">getPrinterVersion()</button>
          <button class="button" id="sendRAWData">sendRAWData()</button>
          <hr>
          <button class="button" id="isLabelMode">isLabelMode()</button>
          <button class="button" id="sendRAWDataLabel">sendRAWDataLabel()</button>
          <hr>
          <button class="button" id="openCashBox">openCashBox()</button>
          <hr>
          <button class="button" id="initLcd">initLcd()</button>
          <button class="button" id="enableLcd">enableLcd()</button>
          <button class="button" id="clearLcd">clearLcd()</button>
          <button class="button" id="disableLcd">disableLcd()</button>
          
          <button class="button" id="sendTextToLcd">sendTextToLcd(...)</button>
          <button class="button" id="sendTextsToLcd">sendTextsToLcd(...)</button>
        </p>
        <h2>Demo Events</h2>
        <p id="output"></p>
      </main>
    </div>
    `;
    }

    connectedCallback() {
      const self = this;

      self.shadowRoot.querySelector('#getPrinterSerialNo').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.getPrinterSerialNo();
          output.innerHTML = "<b>getPrinterSerialNo():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#getDeviceModel').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.getDeviceModel();
          output.innerHTML = "<b>getDeviceModel():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#getPrinterPaper').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.getPrinterPaper();
          output.innerHTML = "<b>getPrinterPaper():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#getPrinterVersion').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.getPrinterVersion();
          output.innerHTML = "<b>getPrinterVersion():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#isLabelMode').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.isLabelMode();
          output.innerHTML = "<b>isLabelMode():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#openCashBox').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.openCashBox();
          output.innerHTML = "<b>openCashBox():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#sendTextToLcd').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.sendTextToLcd({
                text: "Hello World",
                size: 30,
                fill: false,
          });
          output.innerHTML = "<b>sendTextToLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#sendTextsToLcd').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.sendTextsToLcd();
          output.innerHTML = "<b>sendTextsToLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#initLcd').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.initLcd();
          output.innerHTML = "<b>initLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#enableLcd').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.enableLcd();
          output.innerHTML = "<b>enableLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#clearLcd').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.clearLcd();
          output.innerHTML = "<b>clearLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#disableLcd').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          const response = await SunmiPrinter.disableLcd();
          output.innerHTML = "<b>disableLcd():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#sendRAWData').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          await SunmiPrinter.initPrinter();
          let response = await SunmiPrinter.sendRAWData({data: base64_decode("G0AbYQEdIRJ7e3BsYW4ubmFtZX19Ch0hERshABtFAUludGVybmV0IEFjY2VzcyBDYXJkCh0hABtFAAobYQBQbGFuIElEOiB7e3BsYW4uaWR9fQpOYW1lOiB7e3BsYW4ubmFtZX19CkRlc2NyaXB0aW9uOiB7e3BsYW4uZGVzY3JpcHRpb259fQpEZXZpY2VzOiB7e3BsYW4udXNlX2xpbWl0fX0KVGltZToge3twbGFuLnZhbGlkX21pbnV0ZXN9fQpEYXRhOiB7e3BsYW4uZGF0YV9xdW90YX19ClVwbG9hZDoge3twbGFuLnVwbG9hZF9zcGVlZH19CkRvd25sb2FkOiB7e3BsYW4uZG93bmxvYWRfc3BlZWR9fQobYQEKVG8gdXNlIGludGVybmV0LCBwbGVhc2UgY29ubmVjdAp0byBXaUZpIG5ldHdvcmsgbmFtZWQ6CgobRQEdQgEdIRF7e3dpZml9fQodIQAdQgAbRQAKd2hlbiB5b3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvCmNhcHRpdmUgcG9ydGFsIG9yIGxvZ2luIHNjcmVlbiwKZW50ZXIgeW91ciB2b3VjaGVyIGNvZGU6CgodIRIbRQEdQgF7e2NvZGV9fQodQgAbRQAbIQAKUGxlYXNlIGFjdGl2YXRlIHZvdWNoZXIgYmVmb3JlOgobRQF7e2V4cGlyZXN9fQobRQAKe3tpZH19CgoKHVZCAw==")});
          output.innerHTML = "<b>sendRAWData():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

      self.shadowRoot.querySelector('#sendRAWDataLabel').addEventListener('click', async function (e) {
          const output = self.shadowRoot.querySelector('#output');
          await SunmiPrinter.initPrinter();
          await SunmiPrinter.labelLocate();
          let response = await SunmiPrinter.sendRAWData({data: base64_decode("G0AbYQEdIRFXaUZpIEFjY2VzcyBDb2RlChtFAR0hEHt7cGxhbi5uYW1lfX0KG0UAHSETe3tjb2RlfX0KHSEAG0UBe3tleHBpcmVzfX0KG0UA")});
          await SunmiPrinter.labelOutput();
          output.innerHTML = "<b>sendRAWDataLabel():</b><br><pre><code>" + JSON.stringify(response, null, 3) + "</code></pre><hr>" + output.innerHTML;
      });

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
