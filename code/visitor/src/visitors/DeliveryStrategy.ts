export type DeliveryStrategy = {
  type: "STANDARD" | "HEAVY" | "BULKY" | "FRAGILE";
  carrier: string;
  estimatedDays: number;
  handlingInstructions: string[];
  cost: number;
  insurance?: boolean;
  specialEquipment?: string[];
  assemblyRequired?: boolean;
};
