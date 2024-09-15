export class PostalCode {
  constructor(public value: string) {
    // 7桁の数字でない場合はエラーを投げる
    if (!/^\d{7}$/.test(value)) {
      throw new Error(`Value(=${value}) must be a 7-digit number.`);
    }
  }
}
