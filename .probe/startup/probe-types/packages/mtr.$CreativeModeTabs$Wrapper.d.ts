declare module "packages/mtr/$CreativeModeTabs$Wrapper" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CreativeModeTabs$Wrapper {
readonly "resourceLocation": $ResourceLocation

constructor(resourceLocation: $ResourceLocation$Type, itemSupplier: $Supplier$Type<($ItemStack$Type)>)
constructor()

public "get"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTabs$Wrapper$Type = ($CreativeModeTabs$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeModeTabs$Wrapper_ = $CreativeModeTabs$Wrapper$Type;
}}
