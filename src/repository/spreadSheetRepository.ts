import { SpreadSheetRepositoryPort } from "../port/repositoryPort/spreadSheetRepositoryPort";

export class SpreadSheetRepository implements SpreadSheetRepositoryPort {
  private getSheet = (
    sheetName: string
  ): GoogleAppsScript.Spreadsheet.Sheet => {
    const spreadsheetId =
      PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID")!;
    // スプレッドシートを開く
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    // シート名を指定してシートを取得
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
      Logger.log(`シートが見つかりました: ${sheet.getName()}`);
      return sheet;
    } else {
      throw new Error("指定されたシートが見つかりません");
    }
  };

  private SHEET_NAME = "住所取得シート";

  // 郵便番号の入ってるセルの値を取得
  getPostalCodeCellValue = (): string => {
    try {
      const sheet = this.getSheet(this.SHEET_NAME);
      // 今回はB3セルに郵便番号が入っているのでそれを取得
      const data = sheet.getRange("B3").getValue();
      return data;
    } catch (e: any) {
      throw new Error(
        `getSheetValues error: シートのデータ取得に失敗しました: ${e.stack}`
      );
    }
  };

  // 住所をセルにセット
  setAddressCellValue = (address: string): void => {
    try {
      const sheet = this.getSheet(this.SHEET_NAME);
      // 今回はC3セルに住所をセット
      sheet.getRange("C3").setValue(address);
    } catch (e: any) {
      throw new Error(
        `setAddressCellValue error: シートのデータセットに失敗しました: ${e.stack}`
      );
    }
  };
}
