# @kduma-hotspot-tools/capacitor-sunmi-printer

Adapter for printing on internal printers of Sunmi POS devices

## Install

```bash
npm install @kduma-hotspot-tools/capacitor-sunmi-printer
npx cap sync
```

## API

<docgen-index>

* [`isLabelMode()`](#islabelmode)
* [`labelOutput()`](#labeloutput)
* [`labelLocate()`](#labellocate)
* [`sendTextsToLcd()`](#sendtextstolcd)
* [`sendTextToLcd()`](#sendtexttolcd)
* [`controlLcd(...)`](#controllcd)
* [`openCashBox()`](#opencashbox)
* [`getPrinterVersion()`](#getprinterversion)
* [`getPrinterPaper()`](#getprinterpaper)
* [`getDeviceModel()`](#getdevicemodel)
* [`getPrinterSerialNo()`](#getprinterserialno)
* [`sendRAWData(...)`](#sendrawdata)
* [`setMode(...)`](#setmode)
* [`initPrinter()`](#initprinter)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isLabelMode()

```typescript
isLabelMode() => Promise<{ label_mode: boolean; }>
```

**Returns:** <code>Promise&lt;{ label_mode: boolean; }&gt;</code>

--------------------


### labelOutput()

```typescript
labelOutput() => Promise<void>
```

--------------------


### labelLocate()

```typescript
labelLocate() => Promise<void>
```

--------------------


### sendTextsToLcd()

```typescript
sendTextsToLcd() => Promise<void>
```

--------------------


### sendTextToLcd()

```typescript
sendTextToLcd() => Promise<void>
```

--------------------


### controlLcd(...)

```typescript
controlLcd(options: { flag: number; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ flag: number; }</code> |

--------------------


### openCashBox()

```typescript
openCashBox() => Promise<void>
```

--------------------


### getPrinterVersion()

```typescript
getPrinterVersion() => Promise<{ version: string; }>
```

**Returns:** <code>Promise&lt;{ version: string; }&gt;</code>

--------------------


### getPrinterPaper()

```typescript
getPrinterPaper() => Promise<{ paper: string; }>
```

**Returns:** <code>Promise&lt;{ paper: string; }&gt;</code>

--------------------


### getDeviceModel()

```typescript
getDeviceModel() => Promise<{ model: string; }>
```

**Returns:** <code>Promise&lt;{ model: string; }&gt;</code>

--------------------


### getPrinterSerialNo()

```typescript
getPrinterSerialNo() => Promise<{ serial: string; }>
```

**Returns:** <code>Promise&lt;{ serial: string; }&gt;</code>

--------------------


### sendRAWData(...)

```typescript
sendRAWData(options: { data: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

--------------------


### setMode(...)

```typescript
setMode(options: { bluetooth: boolean; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ bluetooth: boolean; }</code> |

--------------------


### initPrinter()

```typescript
initPrinter() => Promise<void>
```

--------------------

</docgen-api>
