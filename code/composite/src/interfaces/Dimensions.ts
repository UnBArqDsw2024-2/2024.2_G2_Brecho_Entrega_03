/**
 * @property length length of the object in cm
 * @property width width of the object in cm
 * @property height height of the object in cm
 */
export interface Dimensions {
  length: number;
  width: number;
  height: number;
  /**
   * @method calculateVolume calculates the volume of a 3D object using its dimensions
   * @returns The volume in cubic centimeters, calculated as the product of length, width, and height.
   */
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
