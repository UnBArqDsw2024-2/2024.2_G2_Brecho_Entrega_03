import { ElectronicBuilder } from "../builders/ElectronicBuilder";
import { FurnitureBuilder } from "../builders/FurnitureBuilder";
import { ShoeBuilder } from "../builders/ShoeBuilder";

export class ProductDirector {
  private electronicBuilder: ElectronicBuilder;
  private furnitureBuilder: FurnitureBuilder;
  private shoeBuilder: ShoeBuilder;

  constructor() {
    this.electronicBuilder = new ElectronicBuilder();
    this.furnitureBuilder = new FurnitureBuilder();
    this.shoeBuilder = new ShoeBuilder();
  }

  createSmartphone() {
    return this.electronicBuilder
      .setBasicInfo("456", "iPhone 12", "Electronics")
      .setDescription("Apple iPhone 12")
      .setPrice(499.99)
      .setCondition("Like New")
      .setModelNumber("A2172")
      .setBatteryLife("85% capacity")
      .setTechnicalSpecs({
        screen: "6.1 inch OLED",
        storage: "128GB",
        processor: "A14 Bionic",
      })
      .build();
  }

  createSofa() {
    return this.furnitureBuilder
      .setBasicInfo("789", "Leather Sofa", "Furniture")
      .setDescription("Leather sofa with high-quality leather upholstery")
      .setPrice(899.99)
      .setCondition("Excellent")
      .setStyle("Modern")
      .setMaterial("Leather")
      .setDimensions(200, 85, 90)
      .setWeight(45)
      .setAssembly(false)
      .setUpholsteryType("Full-grain leather")
      .build();
  }

  createJordan1() {
    return this.shoeBuilder
      .setBasicInfo("SH001", "Air Jordan 1 High", "Sneakers")
      .setDescription("Air Jordan 1 High")
      .setPrice(450.0)
      .setCondition("Used - Excellent")
      .setStyle("Basketball")
      .setSize(10.5)
      .setColorway("Chicago")
      .setReleaseYear(2015)
      .setMaterials(["Leather", "Rubber", "Nylon"])
      .setConditionDetails(
        "90% life remaining",
        "Original box in good condition",
        "Light wear",
        "Minor star pattern"
      )
      .setAuthenticity(true)
      .setEditionDetails(true, "Off-White")
      .setOriginalLaces(true)
      .build();
  }

  createYeezy() {
    return this.shoeBuilder
      .setBasicInfo("SH002", "Yeezy Boost 350 V2", "Sneakers")
      .setDescription("Yeezy Boost 350 V2")
      .setPrice(300.0)
      .setCondition("Used - Good")
      .setStyle("Lifestyle")
      .setSize(11)
      .setColorway("Beluga")
      .setReleaseYear(2021)
      .setMaterials(["Primeknit", "Boost", "Rubber"])
      .setConditionDetails(
        "85% life remaining",
        "No original box",
        "Minimal wear",
        "Light tread wear"
      )
      .setAuthenticity(true)
      .setEditionDetails(true)
      .setOriginalLaces(true)
      .build();
  }
}
