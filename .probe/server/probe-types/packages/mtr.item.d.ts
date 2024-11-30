declare module "packages/mtr/item/$ItemTunnelWallCreator" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$ItemNodeModifierSelectableBlockBase, $ItemNodeModifierSelectableBlockBase$Type} from "packages/mtr/item/$ItemNodeModifierSelectableBlockBase"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTunnelWallCreator extends $ItemNodeModifierSelectableBlockBase {
readonly "forNonContinuousMovementNode": boolean
readonly "forContinuousMovementNode": boolean
readonly "forAirplaneNode": boolean
static readonly "TAG_POS": string
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(height: integer, width: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTunnelWallCreator$Type = ($ItemTunnelWallCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTunnelWallCreator_ = $ItemTunnelWallCreator$Type;
}}
declare module "packages/mtr/item/$ItemBlockEnchanted" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockEnchanted extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "isFoil"(itemStack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockEnchanted$Type = ($ItemBlockEnchanted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockEnchanted_ = $ItemBlockEnchanted$Type;
}}
declare module "packages/mtr/item/$ItemBridgeCreator" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$ItemNodeModifierSelectableBlockBase, $ItemNodeModifierSelectableBlockBase$Type} from "packages/mtr/item/$ItemNodeModifierSelectableBlockBase"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBridgeCreator extends $ItemNodeModifierSelectableBlockBase {
readonly "forNonContinuousMovementNode": boolean
readonly "forContinuousMovementNode": boolean
readonly "forAirplaneNode": boolean
static readonly "TAG_POS": string
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(width: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBridgeCreator$Type = ($ItemBridgeCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBridgeCreator_ = $ItemBridgeCreator$Type;
}}
declare module "packages/mtr/item/$ItemLiftRefresher" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemWithCreativeTabBase, $ItemWithCreativeTabBase$Type} from "packages/mtr/item/$ItemWithCreativeTabBase"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLiftRefresher extends $ItemWithCreativeTabBase {
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public static "refreshLift"(world: $Level$Type, clickedPos: $BlockPos$Type, offsetX: integer, offsetZ: integer, width: integer, depth: integer, isDoubleSided: boolean, forceFacing: $Direction$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLiftRefresher$Type = ($ItemLiftRefresher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLiftRefresher_ = $ItemLiftRefresher$Type;
}}
declare module "packages/mtr/item/$ItemPSDAPGBase$EnumPSDAPGItem" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ItemPSDAPGBase$EnumPSDAPGItem extends $Enum<($ItemPSDAPGBase$EnumPSDAPGItem)> implements $StringRepresentable {
static readonly "PSD_APG_DOOR": $ItemPSDAPGBase$EnumPSDAPGItem
static readonly "PSD_APG_GLASS": $ItemPSDAPGBase$EnumPSDAPGItem
static readonly "PSD_APG_GLASS_END": $ItemPSDAPGBase$EnumPSDAPGItem


public static "values"(): ($ItemPSDAPGBase$EnumPSDAPGItem)[]
public static "valueOf"(name: string): $ItemPSDAPGBase$EnumPSDAPGItem
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPSDAPGBase$EnumPSDAPGItem$Type = (("psd_apg_door") | ("psd_apg_glass") | ("psd_apg_glass_end")) | ($ItemPSDAPGBase$EnumPSDAPGItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPSDAPGBase$EnumPSDAPGItem_ = $ItemPSDAPGBase$EnumPSDAPGItem$Type;
}}
declare module "packages/mtr/item/$ItemWithCreativeTabBase$ItemPlaceOnWater" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$PlaceOnWaterBlockItem, $PlaceOnWaterBlockItem$Type} from "packages/mtr/mappings/$PlaceOnWaterBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemWithCreativeTabBase$ItemPlaceOnWater extends $PlaceOnWaterBlockItem {
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(creativeModeTab: $CreativeModeTabs$Wrapper$Type, block: $Block$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWithCreativeTabBase$ItemPlaceOnWater$Type = ($ItemWithCreativeTabBase$ItemPlaceOnWater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWithCreativeTabBase$ItemPlaceOnWater_ = $ItemWithCreativeTabBase$ItemPlaceOnWater$Type;
}}
declare module "packages/mtr/item/$ItemWithCreativeTabBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemWithCreativeTabBase extends $Item {
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(creativeModeTab: $CreativeModeTabs$Wrapper$Type)
constructor(creativeModeTab: $CreativeModeTabs$Wrapper$Type, propertiesConsumer: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWithCreativeTabBase$Type = ($ItemWithCreativeTabBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWithCreativeTabBase_ = $ItemWithCreativeTabBase$Type;
}}
declare module "packages/mtr/item/$ItemRailModifier" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemNodeModifierBase, $ItemNodeModifierBase$Type} from "packages/mtr/item/$ItemNodeModifierBase"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RailType, $RailType$Type} from "packages/mtr/data/$RailType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemRailModifier extends $ItemNodeModifierBase {
readonly "forNonContinuousMovementNode": boolean
readonly "forContinuousMovementNode": boolean
readonly "forAirplaneNode": boolean
static readonly "TAG_POS": string
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()
constructor(forNonContinuousMovementNode: boolean, forContinuousMovementNode: boolean, forAirplaneNode: boolean, isOneWay: boolean, railType: $RailType$Type)

public "appendHoverText"(itemStack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRailModifier$Type = ($ItemRailModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRailModifier_ = $ItemRailModifier$Type;
}}
declare module "packages/mtr/item/$ItemPSDAPGBase" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$ItemPSDAPGBase$EnumPSDAPGItem, $ItemPSDAPGBase$EnumPSDAPGItem$Type} from "packages/mtr/item/$ItemPSDAPGBase$EnumPSDAPGItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ItemPSDAPGBase$EnumPSDAPGType, $ItemPSDAPGBase$EnumPSDAPGType$Type} from "packages/mtr/item/$ItemPSDAPGBase$EnumPSDAPGType"
import {$ItemWithCreativeTabBase, $ItemWithCreativeTabBase$Type} from "packages/mtr/item/$ItemWithCreativeTabBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemPSDAPGBase extends $ItemWithCreativeTabBase implements $IBlock {
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(item: $ItemPSDAPGBase$EnumPSDAPGItem$Type, type: $ItemPSDAPGBase$EnumPSDAPGType$Type)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(itemStack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public static "blocksNotReplaceable"(context: $UseOnContext$Type, width: integer, height: integer, blacklistBlock: $Block$Type): boolean
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public "propagate"(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, callback: $Consumer$Type<($BlockPos$Type)>, maxBlocksAway: integer): void
public "propagate"<T extends $Comparable<(T)>>(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, property: $Property$Type<(T)>, maxBlocksAway: integer): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPSDAPGBase$Type = ($ItemPSDAPGBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPSDAPGBase_ = $ItemPSDAPGBase$Type;
}}
declare module "packages/mtr/item/$ItemNodeModifierSelectableBlockBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemNodeModifierBase, $ItemNodeModifierBase$Type} from "packages/mtr/item/$ItemNodeModifierBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemNodeModifierSelectableBlockBase extends $ItemNodeModifierBase {
readonly "forNonContinuousMovementNode": boolean
readonly "forContinuousMovementNode": boolean
readonly "forAirplaneNode": boolean
static readonly "TAG_POS": string
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(canSaveBlock: boolean, height: integer, width: integer)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemNodeModifierSelectableBlockBase$Type = ($ItemNodeModifierSelectableBlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemNodeModifierSelectableBlockBase_ = $ItemNodeModifierSelectableBlockBase$Type;
}}
declare module "packages/mtr/item/$ItemPSDAPGBase$EnumPSDAPGType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ItemPSDAPGBase$EnumPSDAPGType extends $Enum<($ItemPSDAPGBase$EnumPSDAPGType)> {
static readonly "PSD_1": $ItemPSDAPGBase$EnumPSDAPGType
static readonly "PSD_2": $ItemPSDAPGBase$EnumPSDAPGType
static readonly "APG": $ItemPSDAPGBase$EnumPSDAPGType
static readonly "LIFT_DOOR_1": $ItemPSDAPGBase$EnumPSDAPGType
static readonly "LIFT_DOOR_ODD_1": $ItemPSDAPGBase$EnumPSDAPGType


public static "values"(): ($ItemPSDAPGBase$EnumPSDAPGType)[]
public static "valueOf"(name: string): $ItemPSDAPGBase$EnumPSDAPGType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPSDAPGBase$EnumPSDAPGType$Type = (("psd_1") | ("lift_door_odd_1") | ("psd_2") | ("lift_door_1") | ("apg")) | ($ItemPSDAPGBase$EnumPSDAPGType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPSDAPGBase$EnumPSDAPGType_ = $ItemPSDAPGBase$EnumPSDAPGType$Type;
}}
declare module "packages/mtr/item/$ItemResourcePackCreator" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemWithCreativeTabBase, $ItemWithCreativeTabBase$Type} from "packages/mtr/item/$ItemWithCreativeTabBase"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemResourcePackCreator extends $ItemWithCreativeTabBase {
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "use"(world: $Level$Type, user: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemResourcePackCreator$Type = ($ItemResourcePackCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemResourcePackCreator_ = $ItemResourcePackCreator$Type;
}}
declare module "packages/mtr/item/$ItemNodeModifierBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemBlockClickingBase, $ItemBlockClickingBase$Type} from "packages/mtr/item/$ItemBlockClickingBase"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemNodeModifierBase extends $ItemBlockClickingBase {
readonly "forNonContinuousMovementNode": boolean
readonly "forContinuousMovementNode": boolean
readonly "forAirplaneNode": boolean
static readonly "TAG_POS": string
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(forNonContinuousMovementNode: boolean, forContinuousMovementNode: boolean, forAirplaneNode: boolean, isConnector: boolean)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemNodeModifierBase$Type = ($ItemNodeModifierBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemNodeModifierBase_ = $ItemNodeModifierBase$Type;
}}
declare module "packages/mtr/item/$ItemSignalModifier" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ItemNodeModifierBase, $ItemNodeModifierBase$Type} from "packages/mtr/item/$ItemNodeModifierBase"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemSignalModifier extends $ItemNodeModifierBase {
readonly "forNonContinuousMovementNode": boolean
readonly "forContinuousMovementNode": boolean
readonly "forAirplaneNode": boolean
static readonly "TAG_POS": string
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(isConnector: boolean, color: $DyeColor$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSignalModifier$Type = ($ItemSignalModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSignalModifier_ = $ItemSignalModifier$Type;
}}
declare module "packages/mtr/item/$ItemDashboard" {
import {$TransportMode, $TransportMode$Type} from "packages/mtr/data/$TransportMode"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$ItemWithCreativeTabBase, $ItemWithCreativeTabBase$Type} from "packages/mtr/item/$ItemWithCreativeTabBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDashboard extends $ItemWithCreativeTabBase {
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(transportMode: $TransportMode$Type)

public "use"(world: $Level$Type, player: $Player$Type, interactionHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDashboard$Type = ($ItemDashboard);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDashboard_ = $ItemDashboard$Type;
}}
declare module "packages/mtr/item/$ItemTunnelCreator" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$ItemNodeModifierSelectableBlockBase, $ItemNodeModifierSelectableBlockBase$Type} from "packages/mtr/item/$ItemNodeModifierSelectableBlockBase"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTunnelCreator extends $ItemNodeModifierSelectableBlockBase {
readonly "forNonContinuousMovementNode": boolean
readonly "forContinuousMovementNode": boolean
readonly "forAirplaneNode": boolean
static readonly "TAG_POS": string
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(height: integer, width: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTunnelCreator$Type = ($ItemTunnelCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTunnelCreator_ = $ItemTunnelCreator$Type;
}}
declare module "packages/mtr/item/$ItemLiftButtonsLinkModifier" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemBlockClickingBase, $ItemBlockClickingBase$Type} from "packages/mtr/item/$ItemBlockClickingBase"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemLiftButtonsLinkModifier extends $ItemBlockClickingBase {
static readonly "TAG_POS": string
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(isConnector: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLiftButtonsLinkModifier$Type = ($ItemLiftButtonsLinkModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLiftButtonsLinkModifier_ = $ItemLiftButtonsLinkModifier$Type;
}}
declare module "packages/mtr/item/$ItemBlockClickingBase" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemWithCreativeTabBase, $ItemWithCreativeTabBase$Type} from "packages/mtr/item/$ItemWithCreativeTabBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockClickingBase extends $ItemWithCreativeTabBase {
static readonly "TAG_POS": string
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(creativeModeTab: $CreativeModeTabs$Wrapper$Type, propertiesConsumer: $Function$Type<($Item$Properties$Type), ($Item$Properties$Type)>)

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockClickingBase$Type = ($ItemBlockClickingBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockClickingBase_ = $ItemBlockClickingBase$Type;
}}
declare module "packages/mtr/item/$ItemEscalator" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CreativeModeTabs$Wrapper, $CreativeModeTabs$Wrapper$Type} from "packages/mtr/$CreativeModeTabs$Wrapper"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemWithCreativeTabBase, $ItemWithCreativeTabBase$Type} from "packages/mtr/item/$ItemWithCreativeTabBase"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemEscalator extends $ItemWithCreativeTabBase implements $IBlock {
readonly "creativeModeTab": $CreativeModeTabs$Wrapper
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "useOn"(context: $UseOnContext$Type): $InteractionResult
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public "propagate"(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, callback: $Consumer$Type<($BlockPos$Type)>, maxBlocksAway: integer): void
public "propagate"<T extends $Comparable<(T)>>(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, property: $Property$Type<(T)>, maxBlocksAway: integer): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEscalator$Type = ($ItemEscalator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEscalator_ = $ItemEscalator$Type;
}}
