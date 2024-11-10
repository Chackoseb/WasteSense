import { Address } from "./address"
import { Location } from "./location"

export interface Bin {
    id: string
    binId: string
    location: Location
    address: Address
    fillLevel: number
    type: string
    alerts: Boolean
}