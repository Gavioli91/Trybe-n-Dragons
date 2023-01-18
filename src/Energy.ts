export type EnergyType = 'mana' | 'stamina';

interface Energy {
  type_: EnergyType,
  amount: number,
}

export default Energy;