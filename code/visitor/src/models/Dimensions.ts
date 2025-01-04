export interface Dimensions {
  length: number;
  width: number;
  height: number;
  calculateVolume(): number;
}

export class Dimensions implements Dimensions {
  constructor(
    public length: number,
    public width: number,
    public height: number
  ) {}

  calculateVolume(): number {
    return this.length * this.width * this.height;
  }
}
