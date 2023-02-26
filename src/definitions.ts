export interface SunmiPrinterPlugin {
  /**
   * bind print service
   */
  bindService(): Promise<void>;

  /**
   * unbind print service
   */
  unBindService(): Promise<void>;

  /**
   * Get the print service current status
   */
  getServiceStatus(): Promise<{ status: ServiceStatusEnum }>;

  /**
   * Printer initialization
   *
   * Note: reset the printer's logical program, such as typography, bold, etc., without emptying the cached data, then the unfinished print tasks will continue after resetting.
   *
   * @see 1.2.1 Printer initialization and setting
   */
  printerInit(): Promise<void>;

  /**
   * Printer self-checking
   *
   * @see 1.2.1 Printer initialization and setting
   */
  printerSelfChecking(): Promise<void>;

  /**
   * Get the printer’s serial no.
   *
   * @see 1.2.1 Printer initialization and setting
   */
  getPrinterSerialNo(): Promise<{ serial_number: string }>;

  /**
   * Get the interface of printer model
   *
   * @see 1.2.2 Get device and printer information
   */
  getPrinterModel(): Promise<{ model: string }>;

  /**
   * Get the printer’s firmware version no.
   *
   * @see 1.2.2 Get device and printer information
   */
  getPrinterVersion(): Promise<{ version: string }>;

  /**
   * Device name
   *
   * @see 1.2.2 Get device and printer information
   */
  getDeviceName(): Promise<{ name: string }>;

  /**
   * Get the printer’s latest status
   *
   * 1 → Printer is under normal operation
   * 2 → Printer is under preparation
   * 3 → Communication is abnormal
   * 4 → Out of paper
   * 5 → Overheated
   * 6 → Cover is open
   * 7 → Cutter error
   * 8 → Cutter recovered
   * 9 → Black mark not detected
   * 505 → Printer not detected
   * 507 → Printer firmware update failed
   *
   * Note 1: these return values are applicable to all SUNMI devices, but some status can’t be obtained due to hardware configuration. For example, cover open detection is not applicable to handheld devices.
   *
   * Note 2: V1 devices currently can’t support this interface; you can also get it asynchronously by registering broadcast apart from getting status proactively
   *
   * @see 1.2.2 Get device and printer information
   */
  updatePrinterState(): Promise<{ status: PrinterStatusEnum, code: number }>;

  /**
   * Get the printing service version no.
   *
   * @see 1.2.2 Get device and printer information
   */
  getServiceVersion(): Promise<{ version: string }>;

  /**
   * Get the print length of the printhead
   *
   * Note: currently you can get the printed length since powering on the device.
   *
   * Due to the hardware differences between desktop devices and handheld devices, the returns of printing results may vary. In other words, you can get the printed length through ICallback callback interface for handheld devices, and get the printed length directly through the return values for desktop devices.
   *
   * @see 1.2.2 Get device and printer information
   */
  getPrintedLength(): Promise<{ length: number }>;

  /**
   * Get the printer’s current paper specification
   *
   * Note 1: by default, 58mm paper specification is adopted for handheld printers, and 80mm paper specification for desktop printers but you can add a fixator and set the printer to use a 58mm paper roll by configuration, and the interface will return the current paper specification set for the printer.
   *
   * Note 2: currently, desktop device T1 model with versions above v2.4.0 supports this interface; T2 and S2 models with versions above v1.0.5 support this interface; for other device models with versions above v4.1.2, they all support this interface for getting paper specification.
   *
   * @see 1.2.2 Get device and printer information
   */
  getPrinterPaper(): Promise<{ paper: number }>;

  /**
   * Commands of printing ESC/POS format
   *
   * @see 1.2.3 ESC/POS commands
   */
  sendRAWData(options: { data: string }): Promise<void>;

  /**
   * Commands of printing ESC/POS format encoded in Base64
   *
   * @see 1.2.3 ESC/POS commands
   */
  sendRAWBase64Data(options: { data: string }): Promise<void>;

  /**
   * Set printer style
   *
   * Parameter: set the const class by referring to WoyouConsts.java printer style.
   *
   * key → set different attributes according to the definition in the const class interface, usually being ENABLE_XXX and SET_XXX.
   *
   * value → set status or size corresponding to the attributes
   * Select ENABLE or DISABLE for ENABLE XXX attribute.
   * Set the detailed size for SET_XXX attribute.
   *
   * Note: this interface is available for the printing service with versions above v4.2.22.
   *
   * @see 1.2.4 Instruction for printer style setting interface
   */
  setPrinterStyle(options: { key: PrinterStyleKeysEnum, value: number|PrinterStyleValuesEnum }): Promise<void>;

  /**
   * Sets double-width print style
   *
   * @see setPrinterStyle
   */
  setDoubleWidthPrintStyle(options: { enable: boolean }): Promise<void>;

  /**
   * Sets double-height print style
   *
   * @see setPrinterStyle
   */
  setDoubleHeightPrintStyle(options: { enable: boolean }): Promise<void>;

  /**
   * Sets bold print style
   *
   * @see setPrinterStyle
   */
  setBoldPrintStyle(options: { enable: boolean }): Promise<void>;

  /**
   * Sets underline print style
   *
   * @see setPrinterStyle
   */
  setUnderlinePrintStyle(options: { enable: boolean }): Promise<void>;

  /**
   * Sets anti-white print style
   *
   * @see setPrinterStyle
   */
  setAntiWhitePrintStyle(options: { enable: boolean }): Promise<void>;

  /**
   * Sets strikethrough print style
   *
   * @see setPrinterStyle
   */
  setStrikethroughPrintStyle(options: { enable: boolean }): Promise<void>;

  /**
   * Sets italic print style
   *
   * @see setPrinterStyle
   */
  setItalicPrintStyle(options: { enable: boolean }): Promise<void>;

  /**
   * Sets inverted print style
   *
   * @see setPrinterStyle
   */
  setInvertPrintStyle(options: { enable: boolean }): Promise<void>;

  /**
   * Sets text right spacing print style
   *
   * @see setPrinterStyle
   */
  setTextRightSpacingPrintStyle(options: { value: number }): Promise<void>;

  /**
   * Sets relative position print style
   *
   * @see setPrinterStyle
   */
  setRelativePositionPrintStyle(options: { value: number }): Promise<void>;

  /**
   * Sets absolute position print style
   *
   * @see setPrinterStyle
   */
  setAbsolutePositionPrintStyle(options: { value: number }): Promise<void>;

  /**
   * Sets line spacing print style
   *
   * @see setPrinterStyle
   */
  setLineSpacingPrintStyle(options: { value: number }): Promise<void>;

  /**
   * Sets left spacing print style
   *
   * @see setPrinterStyle
   */
  setLeftSpacingPrintStyle(options: { value: number }): Promise<void>;

  /**
   * Sets strikethrough style print style
   *
   * @see setPrinterStyle
   */
  setStrikethroughStylePrintStyle(options: { value: number }): Promise<void>;

  /**
   * Get printer mode
   *
   * Return value:
   *
   * 0 → General mode
   * 1 → Black mark mode
   * 2 → Label mode
   *
   * Note: black mark mode currently is available for SUNMI T1, T2 desktop terminals; Label mode currently is available for SUNMI V2, V2 Pro handheld terminals.
   *
   * @see 1.2.5 Change print mode
   */
  getPrinterMode(): Promise<{ mode: PrinterModeEnum, code: number }>;

  /**
   * Checks whether the printer is in label mode
   *
   * @see getPrinterMode
   */
  isLabelMode(): Promise<{ label_mode: boolean }>;

  /**
   * Get paper moving distance set under black mark mode
   *
   * Return value: paper moving distance (number of pixels)
   *
   * Note: only available for T1, T2 devices.
   *
   * @see 1.2.5 Change print mode
   */
  getPrinterBBMDistance(): Promise<{ distance: number }>;

  /**
   * Set alignment mode.
   *
   * Note: global method may influence the subsequent print implementation, and you can cancel the related settings when initializing the printer.
   *
   * @see 1.2.6 Text printing
   */
  setAlignment(options: { alignment: AlignmentModeEnum }): Promise<void>;

  /**
   * Set custom print font.
   *
   * typeface → specify the custom font name you’re about to use. Currently only vector font supported, and the font needs to be preset in the app assets directory.
   *
   * Note 1: this interface can expand the default font type in the printer for you to use a custom font. However, you have to adjust the line spacing and line width due to the inconsistent inner width of each font.
   *
   * Note 2: this interface is available for the printing service with versions above v4.14.0.
   *
   * @see 1.2.6 Text printing
   *
   * @TODO Probably not working
   */
  setFontName(options: { typeface: string }): Promise<void>;

  /**
   * Set font size.
   *
   * Note: global method may influence the subsequent printing, and you can cancel this setting using printer initialization. The font size adopts the printing method exceeding the standard international commands, and the adjustment of font size may affect the character width, which leads to the change to the number of each line’s characters. So typography of monospaced fonts can be confusing some time.
   *
   * @see 1.2.6 Text printing
   */
  setFontSize(options: { size: number }): Promise<void>;

  /**
   * Set bold
   *
   * @see 1.2.6 Text printing
   */
  setBold(options: { enable: boolean }): Promise<void>;

  /**
   * Print text.
   *
   * text → text to be printed; automatic linefeed will be implemented when the text width exceeds one line, and the forced newline character "\n" shall be added at the end of one line when the text width is less than one line or exceeds one line but not meeting one line before being printed, or it will be cached.
   *
   * Note: if you need to change the style of print text, such as alignment mode, font size, bold, etc., please set it before calling printText method.
   *
   * @see 1.2.6 Text printing
   */
  printText(options: { text: string }): Promise<void>;

  /**
   * Print text with designated font and size.
   *
   * text → text to be printed; automatic linefeed will be implemented when the text width exceeds one line, and the forced newline character "\n" shall be added at the end of one line when the text width is less than one line or exceeds one line but not meeting one line before being printed, or it will be cached.
   * Typeface → the custom font name. Currently only vector fonts are supported, and the font needs to be preset in the app assets directory.
   * fontSize → font size; only available for this method.
   *
   * Note: the font setting of this interface is available for the printing service with versions above v4.14.0.
   *
   * @see 1.2.6 Text printing
   */
  printTextWithFont(options: { text: string, typeface: string, size: number }): Promise<void>;

  /**
   * Print vector font.
   *
   * text → text to be printed; automatic linefeed will be implemented when the text width exceeds one line, and the forced newline character "\n" shall be added at the end of one line when the text width is less than one line or exceeds one line but not meeting one line before being printed, or it will be cached.
   *
   * Note: the text is printed according to the vector text width, which means that each character is not monospaced.
   *
   * @see 1.2.6 Text printing
   */
  printOriginalText(options: { text: string }): Promise<void>;

  /**
   * Print a column of a table (Arabic characters are not supported)
   *
   * colsTextArr → Array of column text strings.
   * colsWidthArr → Array of each column width, calculated in English characters, and each Chinese character is equal to two English characters, with each width > 0.
   * colsAlign → Alignment mode of each column: 0: left; 1: center; 2: right.
   *
   * Note: the array length of the above three parameters should be consistent. If the width of colsText[i] is larger than that of colsWidth[i], the text will be changed to another line, and Arabic characters are not supported.
   *
   * @see 1.2.7 Print a table
   */
  printColumnsText(options: { lines: { text: string, width: number, align: AlignmentModeEnum }[] }): Promise<void>;

  /**
   * Print a column of a table, and you can specify the column width and alignment mode.
   *
   * olsTextArr → Array of column text strings.
   * colsWidthArr → The width weight of each column is the proportion of each column.
   * colsAlign → Alignment mode of each column: 0: left; 1: center; 2: right.
   *
   * Note: the array length of the above three parameters should be consistent. If the width of colsText[i] is larger than that of colsWidth[i], the text will be changed to another line.
   *
   * @see 1.2.7 Print a table
   */
  printColumnsString(options: { lines: { text: string, proportion: number, align: AlignmentModeEnum }[] }): Promise<void>;

  /**
   * Print an image
   *
   * Note: the maximum pixel size of the image should be less than 2.5 million pixels of width x height, and the width should be set according to the size of paper specification (384 pixels for 58mm paper, and 576 pixels for 80mm paper). If it exceeds the width of the paper, it will not be displayed.
   *
   * @TODO
   *
   * @see 1.2.8 Print an image
   */
  printBitmap(options: { bitmap: string }): Promise<void>;

  /**
   * Print an image (2)
   *
   * bitmap → image: bitmap object; the biggest width is 384 pixels, and the image can’t be printed when exceeding 1M.
   * type → currently two printing methods are available:
   * 0 → the same as printBitmap();
   * 1 → black and white image with a threshold of 200
   * 2 → grayscale image
   *
   * Note: the image resolution is less than 2 million pixels, and the width should be set according to the size of paper specification (384 pixels for 58mm paper, and 576 pixels for 80mm paper). If it exceeds the width of the paper, it will not be displayed.
   *
   * Versions supported: v3.2.0 above for P1; v1.2.0 above for P14g; v3.2.0 above for V1s; v1.0.0 above for V2; v2.4.0 above for T1; v1.0.5 above for T2, S2; v2.4.1 above for T1mini; v1.0.0 above for T2mini.
   *
   * @TODO
   *
   * @see 1.2.8 Print an image
   */
  printBitmapCustom(options: { bitmap: string, type: number }): Promise<void>;

  /**
   * Print a 1D barcode.
   *
   * data → 1D barcode content
   * symbology → barcode type (0 – 8):
   * 0 → UPC-A
   * 1 → UPC-E
   * 2 → JAN13 (EAN13)
   * 3 → JAN8 (EAN8)
   * 4 → CODE39
   * 5 → ITF
   * 6 → CODABAR
   * 7 → CODE 93
   * 8 → CODE128
   * height → barcode height from 1 – 255, with default value of 162
   * width → barcode width from 2 – 6, with default value of 2
   * textPosition → text position (0 -3)
   * 0 → not to print text
   * 1 → text is above barcode
   * 2 → text is below barcode
   * 3 → print text above and below the barcode
   *
   * Note: different barcode types have the following differences:
   *
   * code39
   * A maximum of 13 digits can be printed
   * code93
   * A maximum of 17 digits can be printed
   * ean8
   * 8 digits required, with the last one as a check digit, and the valid length of 8 digits
   * ean13
   * The valid length consists of 13 digits, the last of which is a check digit
   * ITF
   * Require to enter number, with valid length less than 14 digits, and must be an even number
   * Codebar
   * Require to enter numbers from 0 – 9, with 6 special characters, and a maximum of 18 digits can be printed
   * UPC-E
   * 8 digits required, with the last one as a check digit
   * UPC-A
   * 12 digits required, with the last one as a check digit
   * code128
   * Three types for Code128:
   * - Type A: including uppercase letters, numbers, and punctuation marks;
   * - Type B: uppercase letters, lowercase letters, and numbers;
   * - Type C: pure digits, plural characters, and the last digit is ignored if it is a singular digit;
   * The interface adopts type B code by default. To use type A and C codes, you need to add“{A” and “{C” before the content, for example, “{A2344A”，”{C123123”，”{A1A{B13B{C12”.
   *
   * @see 1.2.9 Print a 1D/2D barcode
   */
  printBarCode(options: { content: string, symbology: BarcodeSymbologyEnum, height: number, width: number, text_position: BarcodeTextPositionEnum }): Promise<void>;

  /**
   * Print a QR code.
   *
   * data → QR barcode content
   * modulesize → the size of QR barcode; unit: pixel; value from 4 to 16;
   * errorlevel → barcode error correction level (0-3):
   * 0 → error correction level L (7%)
   * 1 → error correction level M (15%)
   * 2 → error correction level Q (25%)
   * 3 → error correction level H (30%)
   *
   * Note: the printing content will be directly output after calling this method under normal printing status, and each barcode has 4 pixels (if the pixels are less than 4, the barcode scanning may fail). A maximum version19 (93*93) mode is supported.
   *
   * @see 1.2.9 Print a 1D/2D barcode
   */
  printQRCode(options: { content: string, size: number, error_correction?: number }): Promise<void>;

  /**
   * Print a 2D barcode.
   *
   * data → 2D barcode content
   * symbology → 2D barcode type
   * 1 Qr (same as printQRCode interface)
   * 2 PDF417
   * 3 DataMatrix
   * modulesize → the size of effective 2D barcode; the supported optimum barcode size varies according to different barcode types.
   * Qr barcode: 4 – 16 (the same as printQRCode interface)
   * PDF417: 1 – 4
   * DataMatrix: 4 – 16
   * errorlevel → 2D barcode error correction level; the supported level varies according to different barcode types.
   * Qr barcode: 0 – 3 (same as printQRCode interface)
   * PDF417: 0 – 8
   * DataMatrix: ECC200 auto error correction is adopted by default, and it cannot be modified.
   *
   * Note: the printing content will be directly output after calling this method under normal printing status; this interface is available for versions above v4.1.2.
   *
   * @see 1.2.9 Print a 1D/2D barcode
   */
  print2DCode(options: { content: string, symbology: Barcode2DSymbologyEnum, size: number, error_correction: number }): Promise<void>;

  // TODO: Transaction Printing

  /**
   * The printer moves the paper for n lines
   *
   * Note: forced linefeed is adopted, and the printer will move the paper for n lines after completing the previous printing.
   *
   * @see 1.2.11 Paper moving related
   */
  lineWrap(options: { lines: number }): Promise<void>;

  /**
   * Paper cutting
   *
   * Note: there’s some distance between printhead and cutter, which will be automatically complemented by calling the interface.
   *
   * Note: Only available for desktop terminals with cutter function.
   *
   * @see 1.2.12 Cutter (paper cutting) related
   */
  cutPaper(): Promise<void>;

  /**
   * Get the cutter’s cumulative cutting times
   *
   * Note: Only available for desktop terminals with cutter function.
   *
   * @see 1.2.12 Cutter (paper cutting) related
   */
  getCutPaperTimes(): Promise<{ times: number }>;

  /**
   * Open the cash drawer
   *
   * Note: Only available for desktop terminals with cash drawer function.
   *
   * @see 1.2.13 Cash drawer related
   */
  openDrawer(): Promise<void>;

  /**
   * Get the cumulative open times of the cash drawer
   *
   * Note: Only available for desktop terminals with cash drawer function.
   *
   * @see 1.2.13 Cash drawer related
   */
  getOpenDrawerTimes(): Promise<{ times: number }>;

  /**
   * Get the current status of the cash drawer
   *
   * Note 1: you can get the cash drawer status of some models with cash drawer function by calling this interface.
   *
   * Note 2: this interface is only available for device models of S2, T2, and T2mini with versions above v4.0.0.
   *
   * @see 1.2.13 Cash drawer related
   */
  getDrawerStatus(): Promise<{ opened: boolean }>;

  /**
   * Get global font height and width status
   *
   * Note: currently, these interfaces, except ‘get print density’ interface, are only available for handheld terminals of models V1, V1s, and P1 with versions above v3.2.0, and model P14g with versions above v1.2.0.
   *
   * @see 1.2.14 Get global attributes
   */
  getForcedDouble(): Promise<{ status: number }>;

  /**
   * Get global font anti-white style enabled
   *
   * Note: currently, these interfaces, except ‘get print density’ interface, are only available for handheld terminals of models V1, V1s, and P1 with versions above v3.2.0, and model P14g with versions above v1.2.0.
   *
   * @see 1.2.14 Get global attributes
   */
  isForcedAntiWhite(): Promise<{ status: boolean }>;

  /**
   * Get global font bold style enabled
   *
   * Note: currently, these interfaces, except ‘get print density’ interface, are only available for handheld terminals of models V1, V1s, and P1 with versions above v3.2.0, and model P14g with versions above v1.2.0.
   *
   * @see 1.2.14 Get global attributes
   */
  isForcedBold(): Promise<{ status: boolean }>;

  /**
   * Get global font underline style enabled
   *
   * Note: currently, these interfaces, except ‘get print density’ interface, are only available for handheld terminals of models V1, V1s, and P1 with versions above v3.2.0, and model P14g with versions above v1.2.0.
   *
   * @see 1.2.14 Get global attributes
   */
  isForcedUnderline(): Promise<{ status: boolean }>;

  /**
   * Get global line height set value
   *
   * Note: currently, these interfaces, except ‘get print density’ interface, are only available for handheld terminals of models V1, V1s, and P1 with versions above v3.2.0, and model P14g with versions above v1.2.0.
   *
   * @see 1.2.14 Get global attributes
   */
  getForcedRowHeight(): Promise<{ height: number }>;

  /**
   * Get current font used
   *
   * Note: currently, these interfaces, except ‘get print density’ interface, are only available for handheld terminals of models V1, V1s, and P1 with versions above v3.2.0, and model P14g with versions above v1.2.0.
   *
   * @see 1.2.14 Get global attributes
   */
  getFontName(): Promise<{ font: number }>;

  /**
   * Get print density
   *
   * @see 1.2.14 Get global attributes
   */
  getPrinterDensity(): Promise<{ density: number }>;

  /**
   * Send control commands
   *
   * parameter: flag → 1. Initialization; 2. Wake up LCD; 3. LCD hibernation; 4. Clear screen
   *
   * Note: only available for desktop terminals of mini series with customer display function.
   *
   * @see 1.2.15 Customer display interface description
   */
  sendLCDCommand(options: { command: LcdCommandEnum }): Promise<void>;

  /**
   * Send initialization command
   *
   * @see sendLCDCommand
   */
  sendLCDInitializationCommand(): Promise<void>;

  /**
   * Send wake up command
   *
   * @see sendLCDCommand
   */
  sendLCDWakeUpCommand(): Promise<void>;

  /**
   * Send hibernation command
   *
   * @see sendLCDCommand
   */
  sendLCDHibernateCommand(): Promise<void>;

  /**
   * Send clear command
   *
   * @see sendLCDCommand
   */
  sendLCDClearCommand(): Promise<void>;

  /**
   * Send single line text
   *
   * string → the text to be displayed
   *
   * Note: only available for desktop terminals of mini series with customer display function, and it won’t be displayed if the text is too long.
   *
   * @see 1.2.15 Customer display interface description
   */
  sendLCDString(options: { text: string }): Promise<void>;

  /**
   * Send double lines text
   *
   * topText → display the top text
   * bottomText → display the bottom text
   *
   * Note: only available for desktop terminals of mini series with customer display function, and it won’t be displayed if the text is too long.
   *
   * @see 1.2.15 Customer display interface description
   */
  sendLCDDoubleString(options: { top: string, bottom: string }): Promise<void>;

  /**
   * Send multiple lines text, and each line’s content will be automatically sized based on its weight
   *
   * text → arrays displaying the text of each line. You need to confirm the line number according to array element. If a line is empty, no text will be displayed
   * align → The weight ratio of the area occupied by each line of text, and the size of array elements must be the same size as the text array
   *
   * Note: only available for desktop terminals of mini series with customer display function, with versions above v4.0.0. It won’t be displayed if the text is too long.
   *
   * @see 1.2.15 Customer display interface description
   */
  sendLCDMultiString(options: { lines: { text: string, proportion: number }[] }): Promise<void>;

  /**
   * Send single line text (font size and filling method can be customized for the text)
   *
   * string → text to be displayed
   * size → the font size of the text to be displayed, center by default
   * fill → whether to magnify the font to fill the display area
   *
   * Note: only available for desktop terminals of mini series with customer display function, with versions above v4.0.0. It won’t be displayed if the text is too long.
   *
   * @see 1.2.15 Customer display interface description
   */
  sendLCDFillString(options: { text: string, size: number, fill: boolean }): Promise<void>;

  /**
   * Send bitmap image
   *
   * bitmap → the image to be displayed
   *
   * Note: only available for desktop terminals of mini series with customer display function, and the customer display can only display the image with the maximum pixel of 128*40.
   *
   * @see 1.2.15 Customer display interface description
   */
  sendLCDBase64Bitmap(options: { bitmap: string }): Promise<void>;

  /**
   * Send ascii bitmap image
   *
   * @see sendLCDBase64Bitmap
   */
  sendLCDAsciiBitmap(options: { bitmap: string }): Promise<void>;

  /**
   * Prints barcode on the customer display
   */
  sendLCDBarcode(options: { content: string, format?: LcdBarcodeFormatEnum }): Promise<void>;

  /**
   * Locate the next label
   *
   * You can only implement the location output operation specific to the label by calling the label interfaces, while the label content needs to be customized by yourself according to your own needs, like the operation of thermal printing.
   *
   * Please note that the height of printing content shall be within the label paper, or the printing content may exceed the label paper, which can result in printing to the next label or inaccurate location of the next label.
   *
   * If you use a label paper with 30mm height, you can print the content with 240 pixels (30mm x 8 pixels), and the printer defaults to 32 pixels of line spacing, which allows you to print about 8 lines of text or a 384x240 image.
   *
   * After printing the content, you can choose to implement labelLocate and print the content circularly according to your own needs.
   *
   * If you don’t need to print any more, you can implement labelOutput(), which can output the label to the paper cutting position, facilitating you to add other APIs according to needs to design your own label content.
   *
   * Note: You need to locate the label position every time before sending the printing content
   *
   * @see 1.2.16 Label printing instructions
   */
  labelLocate(): Promise<void>;

  /**
   * Output the label to the paper cutting position
   *
   * @see 1.2.16 Label printing instructions
   */
  labelOutput(): Promise<void>;

  // isLabelMode(): Promise<{ label_mode: boolean }>;
  // labelOutput(): Promise<void>;
  // labelLocate(): Promise<void>;
  // sendTextsToLcd(): Promise<void>;
  // sendTextToLcd(options: { text: string, size?: number, fill?: boolean }): Promise<void>;
  // clearLcd(): Promise<void>;
  // disableLcd(): Promise<void>;
  // enableLcd(): Promise<void>;
  // initLcd(): Promise<void>;
  // openCashBox(): Promise<void>;
  // getPrinterVersion(): Promise<{ version: string }>;
  // getPrinterPaper(): Promise<{ paper: string }>;
  // getDeviceModel(): Promise<{ model: string }>;
  // getPrinterSerialNo(): Promise<{ serial: string }>;
  // sendRAWData(options: { data: string }): Promise<void>;
  // setMode(options: { bluetooth: boolean }): Promise<void>;
  // initPrinter(): Promise<void>;
}


export enum PrinterStatusEnum {
  NORMAL_OPERATION = "NormalOperation",
  UNDER_PREPARATION = "UnderPreparation",
  ABNORMAL_COMMUNICATION = "AbnormalCommunication",
  OUT_OF_PAPER = "OutOfPaper",
  OVERHEATED = "Overheated",
  COVER_IS_OPEN = "CoverIsOpen",
  CUTTER_ERROR = "CutterError",
  CUTTER_RECOVERED = "CutterRecovered",
  BLACK_MARK_NOT_DETECTED = "BlackMarkNotDetected",
  PRINTER_NOT_DETECTED = "PrinterNotDetected",
  FIRMWARE_UPDATE_FAILED = "FirmwareUpdateFailed",
  UNKNOWN = "Unknown",
}

export enum ServiceStatusEnum {
  NO_PRINTER = "NoPrinter",
  CHECK_PRINTER = "CheckPrinter",
  FOUND_PRINTER = "FoundPrinter",
  LOST_PRINTER = "LostPrinter",
}

export enum AlignmentModeEnum {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

export enum PrinterModeEnum {
  GENERAL = "General",
  BLACK_MARK = "BlackMark",
  LABEL = "Label",
  UNKNOWN = "Unknown",
}

export enum PrinterStyleKeysEnum {
  ENABLE_DOUBLE_WIDTH = "EnableDoubleWidth",
  ENABLE_DOUBLE_HEIGHT = "EnableDoubleHeight",
  ENABLE_BOLD = "EnableBold",
  ENABLE_UNDERLINE = "EnableUnderline",
  ENABLE_ANTI_WHITE = "EnableAntiWhite",
  ENABLE_STRIKETHROUGH = "EnableStrikethrough",
  ENABLE_ITALIC = "EnableItalic",
  ENABLE_INVERT = "EnableInvert",
  SET_TEXT_RIGHT_SPACING = "SetTextRightSpacing",
  SET_RELATIVE_POSITION = "SetRelativePosition",
  SET_ABSOLUTE_POSITION = "SetAbsolutePosition",
  SET_LINE_SPACING = "SetLineSpacing",
  SET_LEFT_SPACING = "SetLeftSpacing",
  SET_STRIKETHROUGH_STYLE = "SetStrikethroughStyle",
}

export enum PrinterStyleValuesEnum {
  ENABLE = "Enable",
  DISABLE = "Disable",
}

export enum LcdCommandEnum {
  INITIALIZATION = "Initialization",
  WAKE_UP = "WakeUp",
  HIBERNATE = "Hibernate",
  CLEAR = "Clear",
}

export enum LcdBarcodeFormatEnum {
  UPC_A = "UPC_A",
  UPC_E = "UPC_E",
  EAN_13 = "EAN_13",
  EAN_8 = "EAN_8",
  CODE_39 = "CODE_39",
  ITF = "ITF",
  CODABAR = "CODABAR",
  CODE_93 = "CODE_93",
  CODE_128 = "CODE_128",
  QR_CODE = "QR_CODE",
}

export enum BarcodeSymbologyEnum {
  UPC_A = "UPC_A",
  UPC_E = "UPC_E",
  EAN_13 = "EAN_13",
  EAN_8 = "EAN_8",
  CODE_39 = "CODE_39",
  ITF = "ITF",
  CODABAR = "CODABAR",
  CODE_93 = "CODE_93",
  CODE_128 = "CODE_128",
}

export enum BarcodeTextPositionEnum {
  NO_TEXT = "NoText",
  ABOVE = "Above",
  BELOW = "Below",
  ABOVE_AND_BELOW = "AboveAndBelow",
}

export enum Barcode2DSymbologyEnum {
  QR_CODE = "QR_CODE",
  PDF417 = "PDF417",
  DataMatrix = "DATA_MATRIX",
}