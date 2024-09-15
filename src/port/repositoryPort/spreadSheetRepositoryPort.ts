export interface SpreadSheetRepositoryPort {
  getPostalCodeCellValue: () => string;
  setAddressCellValue: (address: string) => void;
}
