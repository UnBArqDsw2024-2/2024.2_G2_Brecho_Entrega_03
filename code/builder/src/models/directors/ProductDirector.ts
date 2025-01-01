import { ClothingBuilder } from "../builders/ClothingBuilder";
import { FurnitureBuilder } from "../builders/FurnitureBuilder";
import { ShoeBuilder } from "../builders/ShoeBuilder";

export class ProductDirector {
  private clothingBuilder: ClothingBuilder;
  private furnitureBuilder: FurnitureBuilder;
  private shoeBuilder: ShoeBuilder;

  constructor() {
    this.clothingBuilder = new ClothingBuilder();
    this.furnitureBuilder = new FurnitureBuilder();
    this.shoeBuilder = new ShoeBuilder();
  }

  createDress() {
    return this.clothingBuilder
      .setBasicInfo("CL001", "Formal Red Dress", "Clothing")
      .setDescription("Incredible fancy red dress for any formal event!")
      .setPrice(2999.99)
      .setCondition("Excellent")
      .setColor("Red")
      .setSize("M")
      .setModel("Evening Gown")
      .setDimensions(90, 70, 95)
      .setMaterial(["Silk", "Polyester"])
      .setGenre("Women")
      .setRecommendedFor("Formal Events")
      .setWeather("Warm")
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
