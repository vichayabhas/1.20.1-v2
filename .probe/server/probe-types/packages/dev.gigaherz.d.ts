declare module "packages/dev/gigaherz/toolbelt/customslots/$IExtensionSlotItem" {
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$IExtensionSlot, $IExtensionSlot$Type} from "packages/dev/gigaherz/toolbelt/customslots/$IExtensionSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IExtensionSlotItem {

 "getAcceptableSlots"(arg0: $ItemStack$Type): $ImmutableSet<($ResourceLocation)>
 "onWornTick"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): void
 "onUnequipped"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): void
 "canUnequip"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): boolean
 "onEquipped"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): void
 "canEquip"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): boolean
}

export namespace $IExtensionSlotItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionSlotItem$Type = ($IExtensionSlotItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionSlotItem_ = $IExtensionSlotItem$Type;
}}
declare module "packages/dev/gigaherz/toolbelt/customslots/$IExtensionSlot" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IExtensionSlotItem, $IExtensionSlotItem$Type} from "packages/dev/gigaherz/toolbelt/customslots/$IExtensionSlotItem"
import {$IExtensionContainer, $IExtensionContainer$Type} from "packages/dev/gigaherz/toolbelt/customslots/$IExtensionContainer"

export interface $IExtensionSlot {

 "getType"(): $ResourceLocation
 "onContentsChanged"(): void
 "getContents"(): $ItemStack
 "getContainer"(): $IExtensionContainer
 "setContents"(arg0: $ItemStack$Type): void
 "canUnequip"(arg0: $ItemStack$Type): boolean
 "canEquip"(arg0: $ItemStack$Type): boolean
}

export namespace $IExtensionSlot {
function isAcceptableSlot(arg0: $IExtensionSlot$Type, arg1: $ItemStack$Type, arg2: $IExtensionSlotItem$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionSlot$Type = ($IExtensionSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionSlot_ = $IExtensionSlot$Type;
}}
declare module "packages/dev/gigaherz/toolbelt/belt/$ToolBeltItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IExtensionSlotItem, $IExtensionSlotItem$Type} from "packages/dev/gigaherz/toolbelt/customslots/$IExtensionSlotItem"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IExtensionSlot, $IExtensionSlot$Type} from "packages/dev/gigaherz/toolbelt/customslots/$IExtensionSlot"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ToolBeltItem extends $Item implements $IExtensionSlotItem, $DyeableLeatherItem {
static "ITEM_HANDLER": $Capability<($IItemHandler)>
static "EXTENSION_SLOT_ITEM": $Capability<($IExtensionSlotItem)>
static readonly "BELT_SLOT_LIST": $ImmutableSet<($ResourceLocation)>
static "xpCost": (integer)[]
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "of"(arg0: integer): $ItemStack
public "getLevel"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public static "upgrade"(arg0: $ItemStack$Type): $ItemStack
public static "getUpgradeXP"(arg0: $ItemStack$Type): integer
public "getAcceptableSlots"(arg0: $ItemStack$Type): $ImmutableSet<($ResourceLocation)>
public "onWornTick"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): void
public static "getSlotsCount"(arg0: $ItemStack$Type): integer
public static "setSlotsCount"(arg0: $ItemStack$Type, arg1: integer): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onUnequipped"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): void
public "canUnequip"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): boolean
public "onEquipped"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): void
public "canEquip"(arg0: $ItemStack$Type, arg1: $IExtensionSlot$Type): boolean
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "getColor"(arg0: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolBeltItem$Type = ($ToolBeltItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolBeltItem_ = $ToolBeltItem$Type;
}}
declare module "packages/dev/gigaherz/toolbelt/customslots/$IExtensionContainer" {
import {$IExtensionSlot, $IExtensionSlot$Type} from "packages/dev/gigaherz/toolbelt/customslots/$IExtensionSlot"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IExtensionContainer {

 "onContentsChanged"(arg0: $IExtensionSlot$Type): void
 "getSlots"(): $ImmutableList<($IExtensionSlot)>
 "getOwner"(): $LivingEntity
}

export namespace $IExtensionContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionContainer$Type = ($IExtensionContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionContainer_ = $IExtensionContainer$Type;
}}
