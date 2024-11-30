declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeRedstone" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$EnumUpgradeRedstone, $EnumUpgradeRedstone$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeRedstone"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeRedstone extends $ItemUpgrade {
readonly "type": $EnumUpgradeRedstone
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumUpgradeRedstone$Type, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeRedstone$Type = ($ItemUpgradeRedstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeRedstone_ = $ItemUpgradeRedstone$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockController" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$EnumKeyType, $EnumKeyType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumKeyType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockController extends $HorizontalDirectionalBlock implements $INetworked, $EntityBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "toggle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $EnumKeyType$Type): void
public "toggle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $Item$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityController
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockController$Type = ($BlockController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockController_ = $BlockController$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntitySlave" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ControllerData, $ControllerData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$ControllerData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $BlockEntitySlave extends $BaseBlockEntity implements $IDrawerGroup {
readonly "controllerData": $ControllerData
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "getController"(): $BlockEntityController
public "invalidateCaps"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getControllerPos"(): $BlockPos
public "bindController"(arg0: $BlockPos$Type): void
public "getDrawerCount"(): integer
public "getDrawer"(arg0: integer): $IDrawer
public "setChanged"(): void
public "getAccessibleDrawerSlots"(): (integer)[]
public "isGroupValid"(): boolean
get "controller"(): $BlockEntityController
get "controllerPos"(): $BlockPos
get "drawerCount"(): integer
get "accessibleDrawerSlots"(): (integer)[]
get "groupValid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntitySlave$Type = ($BlockEntitySlave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntitySlave_ = $BlockEntitySlave$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IDrawerGeometry, $IDrawerGeometry$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGeometry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumCompDrawer extends $Enum<($EnumCompDrawer)> implements $IDrawerGeometry, $StringRepresentable {
static readonly "OPEN1": $EnumCompDrawer
static readonly "OPEN2": $EnumCompDrawer
static readonly "OPEN3": $EnumCompDrawer


public "toString"(): string
public static "values"(): ($EnumCompDrawer)[]
public static "valueOf"(arg0: string): $EnumCompDrawer
public "getSerializedName"(): string
public "getMetadata"(): integer
public "getOpenSlots"(): integer
public "getDrawerCount"(): integer
public "isHalfDepth"(): boolean
public static "byOpenSlots"(arg0: integer): $EnumCompDrawer
public static "byMetadata"(arg0: integer): $EnumCompDrawer
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "metadata"(): integer
get "openSlots"(): integer
get "drawerCount"(): integer
get "halfDepth"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumCompDrawer$Type = (("open1") | ("open2") | ("open3")) | ($EnumCompDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumCompDrawer_ = $EnumCompDrawer$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityDrawers" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$UpgradeData, $UpgradeData$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$UpgradeData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $BlockEntityDrawers extends $BaseBlockEntity implements $IDrawerGroup {
static readonly "ATTRIBUTES": $ModelProperty<($IDrawerAttributes)>
static "DRAWER_GROUP_CAPABILITY": $Capability<($IDrawerGroup)>
 "blockState": $BlockState


public "interactPutItemsIntoSlot"(arg0: integer, arg1: $Player$Type): integer
public "getGroup"(): $IDrawerGroup
public "getModelData"(): $ModelData
public "invalidateCaps"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "upgrades"(): $UpgradeData
public "getRedstoneLevel"(): integer
/**
 * 
 * @deprecated
 */
public "getDrawerCount"(): integer
public "readPortable"(arg0: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
public "getDrawer"(arg0: integer): $IDrawer
public "takeItemsFromSlot"(arg0: integer, arg1: integer): $ItemStack
public "isRedstone"(): boolean
public "setChanged"(): void
public "dataPacketRequiresRenderUpdate"(): boolean
public "getDrawerAttributes"(): $IDrawerAttributes
public "getEffectiveDrawerCapacity"(): integer
/**
 * 
 * @deprecated
 */
public "getAccessibleDrawerSlots"(): (integer)[]
public "interactPutCurrentItemIntoSlot"(arg0: integer, arg1: $Player$Type): integer
public "writePortable"(arg0: $CompoundTag$Type): $CompoundTag
public "isGroupValid"(): boolean
public "putItemsIntoSlot"(arg0: integer, arg1: $ItemStack$Type, arg2: integer): integer
public "getDrawerCapacity"(): integer
public "clientUpdateCount"(arg0: integer, arg1: integer): void
public "interactPutCurrentInventoryIntoSlot"(arg0: integer, arg1: $Player$Type): integer
get "group"(): $IDrawerGroup
get "modelData"(): $ModelData
get "redstoneLevel"(): integer
get "drawerCount"(): integer
get "redstone"(): boolean
get "drawerAttributes"(): $IDrawerAttributes
get "effectiveDrawerCapacity"(): integer
get "accessibleDrawerSlots"(): (integer)[]
get "groupValid"(): boolean
get "drawerCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDrawers$Type = ($BlockEntityDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityDrawers_ = $BlockEntityDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumKeyType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumKeyType extends $Enum<($EnumKeyType)> implements $StringRepresentable {
static readonly "DRAWER": $EnumKeyType
static readonly "CONCEALMENT": $EnumKeyType
static readonly "PERSONAL": $EnumKeyType
static readonly "QUANTIFY": $EnumKeyType


public "toString"(): string
public static "values"(): ($EnumKeyType)[]
public static "valueOf"(arg0: string): $EnumKeyType
public "getSerializedName"(): string
public "getMetadata"(): integer
public static "byMetadata"(arg0: integer): $EnumKeyType
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "metadata"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumKeyType$Type = (("quantify") | ("concealment") | ("drawer") | ("personal")) | ($EnumKeyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumKeyType_ = $EnumKeyType$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGeometry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDrawerGeometry {

 "getDrawerCount"(): integer
 "isHalfDepth"(): boolean
}

export namespace $IDrawerGeometry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGeometry$Type = ($IDrawerGeometry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerGeometry_ = $IDrawerGeometry$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INetworked {

}

export namespace $INetworked {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworked$Type = ($INetworked);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworked_ = $INetworked$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute" {
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LockAttribute extends $Enum<($LockAttribute)> {
static readonly "LOCK_POPULATED": $LockAttribute
static readonly "LOCK_EMPTY": $LockAttribute


public static "values"(): ($LockAttribute)[]
public static "valueOf"(arg0: string): $LockAttribute
public static "getBitfield"(arg0: $EnumSet$Type<($LockAttribute$Type)>): integer
public static "getEnumSet"(arg0: integer): $EnumSet<($LockAttribute)>
public "getFlagValue"(): integer
get "flagValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockAttribute$Type = (("lock_populated") | ("lock_empty")) | ($LockAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockAttribute_ = $LockAttribute$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawerKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDrawerKey extends $ItemKey {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawerKey$Type = ($ItemDrawerKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawerKey_ = $ItemDrawerKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IDrawerGroup extends $ICapabilityProvider {

 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getDrawerCount"(): integer
 "getDrawer"(arg0: integer): $IDrawer
 "getAccessibleDrawerSlots"(): (integer)[]
 "isGroupValid"(): boolean
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IDrawerGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGroup$Type = ($IDrawerGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerGroup_ = $IDrawerGroup$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$ControllerData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityController, $BlockEntityController$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ControllerData extends $BlockEntityDataShim {

constructor()

public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "getController"(arg0: $BlockEntity$Type): $BlockEntityController
public "getCoord"(): $BlockPos
public "bindCoord"(arg0: $BlockPos$Type): boolean
get "coord"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerData$Type = ($ControllerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerData_ = $ControllerData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockCompDrawers" {
import {$BlockEntityDrawers, $BlockEntityDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityDrawers"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockDrawers, $BlockDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockDrawers"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EnumCompDrawer, $EnumCompDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumCompDrawer"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockCompDrawers extends $BlockDrawers implements $INetworked {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityDrawers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCompDrawers$Type = ($BlockCompDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCompDrawers_ = $BlockCompDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMetaSized" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockMeta, $BlockMeta$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMeta"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMetaSized extends $BlockMeta {
static readonly "SLOTS": $IntegerProperty
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaSized$Type = ($BlockMetaSized);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaSized_ = $BlockMetaSized$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$IItemRepository$ItemRecord, $IItemRepository$ItemRecord$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository$ItemRecord"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemRepository {

 "getAllItems"(): $NonNullList<($IItemRepository$ItemRecord)>
 "getStoredItemCount"(arg0: $ItemStack$Type): integer
 "getStoredItemCount"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): integer
 "insertItem"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "insertItem"(arg0: $ItemStack$Type, arg1: boolean, arg2: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "extractItem"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean, arg3: $Predicate$Type<($ItemStack$Type)>): $ItemStack
 "extractItem"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): $ItemStack
 "getRemainingItemCapacity"(arg0: $ItemStack$Type): integer
 "getRemainingItemCapacity"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): integer
 "getItemCapacity"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): integer
 "getItemCapacity"(arg0: $ItemStack$Type): integer
}

export namespace $IItemRepository {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$Type = ($IItemRepository);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRepository_ = $IItemRepository$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityController" {
import {$ISecurityProvider, $ISecurityProvider$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BaseBlockEntity, $BaseBlockEntity$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity"
import {$IDrawer, $IDrawer$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IDrawerGroup, $IDrawerGroup$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerGroup"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LockAttribute, $LockAttribute$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute"
import {$IItemRepository, $IItemRepository$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository"

export class $BlockEntityController extends $BaseBlockEntity implements $IDrawerGroup {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
 "blockState": $BlockState

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "interactPutItemsIntoInventory"(arg0: $Player$Type): integer
public "clearRemoved"(): void
public "invalidateCaps"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "toggleProtection"(arg0: $GameProfile$Type, arg1: $ISecurityProvider$Type): void
public "isValidSlave"(arg0: $BlockPos$Type): boolean
public "getItemRepository"(): $IItemRepository
public "getDrawerCount"(): integer
public "getDrawer"(arg0: integer): $IDrawer
public "toggleShroud"(arg0: $GameProfile$Type): void
public "printDebugInfo"(): void
public "updateCache"(): void
public "toggleQuantified"(arg0: $GameProfile$Type): void
public "toggleLock"(arg0: $EnumSet$Type<($LockAttribute$Type)>, arg1: $LockAttribute$Type, arg2: $GameProfile$Type): void
public "dataPacketRequiresRenderUpdate"(): boolean
public "getAccessibleDrawerSlots"(): (integer)[]
public "readFixed"(arg0: $CompoundTag$Type): void
public "isGroupValid"(): boolean
get "itemRepository"(): $IItemRepository
get "drawerCount"(): integer
get "accessibleDrawerSlots"(): (integer)[]
get "groupValid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityController$Type = ($BlockEntityController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityController_ = $BlockEntityController$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemDrawers" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDrawers extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawers$Type = ($ItemDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawers_ = $ItemDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$BlockType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BlockType extends $Enum<($BlockType)> {
static readonly "Drawers": $BlockType
static readonly "Trim": $BlockType


public static "values"(): ($BlockType)[]
public static "valueOf"(arg0: string): $BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$Type = (("drawers") | ("trim")) | ($BlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockType_ = $BlockType$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemKey extends $Item {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getDescription"(): $Component
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKey$Type = ($ItemKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemKey_ = $ItemKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemShroudKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemShroudKey extends $ItemKey {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShroudKey$Type = ($ItemShroudKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShroudKey_ = $ItemShroudKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/capabilities/$IItemRepository$ItemRecord" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $IItemRepository$ItemRecord {
readonly "itemPrototype": $ItemStack
readonly "count": integer

constructor(arg0: $ItemStack$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$ItemRecord$Type = ($IItemRepository$ItemRecord);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRepository$ItemRecord_ = $IItemRepository$ItemRecord$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/meta/$BlockMeta" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockMeta extends $HorizontalDirectionalBlock {
static readonly "HALF": $BooleanProperty
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMeta$Type = ($BlockMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMeta_ = $BlockMeta$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockStandardDrawers" {
import {$BlockEntityDrawers, $BlockEntityDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntityDrawers"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockDrawers, $BlockDrawers$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockDrawers"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStandardDrawers extends $BlockDrawers {
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$Type)

public "setMatKey"(arg0: $ResourceLocation$Type): $BlockStandardDrawers
public "setMatKey"(arg0: string): $BlockStandardDrawers
public "getNameMatKey"(): string
public "getMatKey"(): string
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityDrawers
set "matKey"(value: $ResourceLocation$Type)
set "matKey"(value: string)
get "nameMatKey"(): string
get "matKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStandardDrawers$Type = ($BlockStandardDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStandardDrawers_ = $BlockStandardDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKeyring" {
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemKeyring extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $RegistryObject$Type<($ItemKey$Type)>, arg1: $Item$Properties$Type)

public static "add"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): integer
public "getKey"(): $ItemStack
public static "getKeyring"(arg0: $ItemStack$Type): $ItemStack
public "getDescription"(): $Component
public "onDestroyed"(arg0: $ItemEntity$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "getName"(arg0: $ItemStack$Type): $Component
get "key"(): $ItemStack
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKeyring$Type = ($ItemKeyring);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemKeyring_ = $ItemKeyring$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes" {
import {$LockAttribute, $LockAttribute$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute"

export interface $IDrawerAttributes {

 "isSealed"(): boolean
 "isVoid"(): boolean
 "isConcealed"(): boolean
 "isShowingQuantity"(): boolean
 "isItemLocked"(arg0: $LockAttribute$Type): boolean
 "hasFillLevel"(): boolean
 "isUnlimitedVending"(): boolean
 "isDictConvertible"(): boolean
 "canItemLock"(arg0: $LockAttribute$Type): boolean
 "isUnlimitedStorage"(): boolean
}

export namespace $IDrawerAttributes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributes$Type = ($IDrawerAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributes_ = $IDrawerAttributes$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockDrawers" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockType, $BlockType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$BlockType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockDrawers extends $HorizontalDirectionalBlock implements $INetworked, $EntityBlock {
readonly "slotGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
readonly "labelGeometry": ($AABB)[]
readonly "indGeometry": ($AABB)[]
readonly "indBaseGeometry": ($AABB)[]
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "useShapeForLightOcclusion"(arg0: $BlockState$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getDrawerCount"(): integer
public "isHalfDepth"(): boolean
public "getStorageUnits"(): integer
public "retrimType"(): $BlockType
public "getNameTypeKey"(): string
public "retrimBlock"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "interactTakeItems"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type): boolean
public "insertOrApplyItem"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
get "drawerCount"(): integer
get "halfDepth"(): boolean
get "storageUnits"(): integer
get "nameTypeKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDrawers$Type = ($BlockDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDrawers_ = $BlockDrawers$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $BlockEntityDataShim implements $INBTSerializable<($CompoundTag)> {

constructor()

public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "invalidateCaps"(): void
public "serializeNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDataShim$Type = ($BlockEntityDataShim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityDataShim_ = $BlockEntityDataShim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IProtectable" {
import {$ISecurityProvider, $ISecurityProvider$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export interface $IProtectable {

 "setOwner"(arg0: $UUID$Type): boolean
 "setSecurityProvider"(arg0: $ISecurityProvider$Type): boolean
 "getOwner"(): $UUID
 "getSecurityProvider"(): $ISecurityProvider
}

export namespace $IProtectable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProtectable$Type = ($IProtectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProtectable_ = $IProtectable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BaseBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseBlockEntity extends $BlockEntity {
 "blockState": $BlockState

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "read"(arg0: $CompoundTag$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "invalidateCaps"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "readPortable"(arg0: $CompoundTag$Type): void
public "dataPacketRequiresRenderUpdate"(): boolean
public "markBlockForRenderUpdate"(): void
public "markBlockForUpdateClient"(): void
public "injectPortableData"(arg0: $BlockEntityDataShim$Type): void
public "markBlockForUpdate"(): void
public "injectData"(arg0: $BlockEntityDataShim$Type): void
public "writePortable"(arg0: $CompoundTag$Type): $CompoundTag
public "hasDataPacket"(): boolean
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntity$Type = ($BaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntity_ = $BaseBlockEntity$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeStorage" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumUpgradeStorage extends $Enum<($EnumUpgradeStorage)> implements $StringRepresentable {
static readonly "OBSIDIAN": $EnumUpgradeStorage
static readonly "IRON": $EnumUpgradeStorage
static readonly "GOLD": $EnumUpgradeStorage
static readonly "DIAMOND": $EnumUpgradeStorage
static readonly "EMERALD": $EnumUpgradeStorage


public "toString"(): string
public static "values"(): ($EnumUpgradeStorage)[]
public static "valueOf"(arg0: string): $EnumUpgradeStorage
public "getLevel"(): integer
public "getSerializedName"(): string
public "getMetadata"(): integer
public "getUnlocalizedName"(): string
public static "byMetadata"(arg0: integer): $EnumUpgradeStorage
public static "byLevel"(arg0: integer): $EnumUpgradeStorage
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "level"(): integer
get "serializedName"(): string
get "metadata"(): integer
get "unlocalizedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeStorage$Type = (("gold") | ("obsidian") | ("diamond") | ("iron") | ("emerald")) | ($EnumUpgradeStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeStorage_ = $EnumUpgradeStorage$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockTrim" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockTrim extends $Block implements $INetworked {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "setMatKey"(arg0: string): $BlockTrim
public "setMatKey"(arg0: $ResourceLocation$Type): $BlockTrim
public "getNameTypeKey"(): string
public "getNameMatKey"(): string
public "getMatKey"(): string
set "matKey"(value: string)
set "matKey"(value: $ResourceLocation$Type)
get "nameTypeKey"(): string
get "nameMatKey"(): string
get "matKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrim$Type = ($BlockTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrim_ = $BlockTrim$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemQuantifyKey" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemKey, $ItemKey$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemKey"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemQuantifyKey extends $ItemKey {
static "DRAWER_ATTRIBUTES_CAPABILITY": $Capability<($IDrawerAttributes)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemQuantifyKey$Type = ($ItemQuantifyKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemQuantifyKey_ = $ItemQuantifyKey$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeRedstone" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnumUpgradeRedstone extends $Enum<($EnumUpgradeRedstone)> implements $StringRepresentable {
static readonly "COMBINED": $EnumUpgradeRedstone
static readonly "MAX": $EnumUpgradeRedstone
static readonly "MIN": $EnumUpgradeRedstone


public "toString"(): string
public static "values"(): ($EnumUpgradeRedstone)[]
public static "valueOf"(arg0: string): $EnumUpgradeRedstone
public "getSerializedName"(): string
public "getMetadata"(): integer
public "getUnlocalizedName"(): string
public static "byMetadata"(arg0: integer): $EnumUpgradeRedstone
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "metadata"(): integer
get "unlocalizedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeRedstone$Type = (("min") | ("max") | ("combined")) | ($EnumUpgradeRedstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeRedstone_ = $EnumUpgradeRedstone$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgrade extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "getUpgradeGroup"(): integer
public "setAllowMultiple"(arg0: boolean): void
public "getAllowMultiple"(): boolean
public "getDescription"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "upgradeGroup"(): integer
set "allowMultiple"(value: boolean)
get "allowMultiple"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgrade$Type = ($ItemUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgrade_ = $ItemUpgrade$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/$BlockSlave" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$EnumKeyType, $EnumKeyType$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/$EnumKeyType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$INetworked, $INetworked$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$INetworked"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockEntitySlave, $BlockEntitySlave$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/$BlockEntitySlave"

export class $BlockSlave extends $Block implements $INetworked, $EntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type)

public "toggle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $EnumKeyType$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntitySlave
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSlave$Type = ($BlockSlave);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSlave_ = $BlockSlave$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgradeStorage" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$EnumUpgradeStorage, $EnumUpgradeStorage$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeStorage"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemUpgrade, $ItemUpgrade$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemUpgrade"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemUpgradeStorage extends $ItemUpgrade {
readonly "level": $EnumUpgradeStorage
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $EnumUpgradeStorage$Type, arg1: $Item$Properties$Type)

public "getDescription"(): $Component
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeStorage$Type = ($ItemUpgradeStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeStorage_ = $ItemUpgradeStorage$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/security/$ISecurityProvider" {
import {$IProtectable, $IProtectable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$IProtectable"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"

export interface $ISecurityProvider {

 "hasOwnership"(arg0: $GameProfile$Type, arg1: $IProtectable$Type): boolean
 "hasAccess"(arg0: $GameProfile$Type, arg1: $IProtectable$Type): boolean
 "getProviderID"(): string
}

export namespace $ISecurityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISecurityProvider$Type = ($ISecurityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISecurityProvider_ = $ISecurityProvider$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawer" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDrawer {

 "isEmpty"(): boolean
 "getStoredItemStackSize"(): integer
 "isEnabled"(): boolean
 "getStoredItemPrototype"(): $ItemStack
 "getRemainingCapacity"(): integer
 "getStoredItemCount"(): integer
 "setStoredItemCount"(arg0: integer): void
 "getMaxCapacity"(): integer
 "getMaxCapacity"(arg0: $ItemStack$Type): integer
 "setStoredItem"(arg0: $ItemStack$Type): $IDrawer
 "setStoredItem"(arg0: $ItemStack$Type, arg1: integer): $IDrawer
 "canItemBeStored"(arg0: $ItemStack$Type): boolean
 "canItemBeStored"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): boolean
 "getAcceptingRemainingCapacity"(): integer
 "adjustStoredItemCount"(arg0: integer): integer
 "getAcceptingMaxCapacity"(arg0: $ItemStack$Type): integer
 "canItemBeExtracted"(arg0: $ItemStack$Type): boolean
 "canItemBeExtracted"(arg0: $ItemStack$Type, arg1: $Predicate$Type<($ItemStack$Type)>): boolean
}

export namespace $IDrawer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawer$Type = ($IDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawer_ = $IDrawer$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$UpgradeData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntityDataShim, $BlockEntityDataShim$Type} from "packages/com/jaquadro/minecraft/storagedrawers/block/tile/tiledata/$BlockEntityDataShim"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnumUpgradeRedstone, $EnumUpgradeRedstone$Type} from "packages/com/jaquadro/minecraft/storagedrawers/item/$EnumUpgradeRedstone"
import {$IDrawerAttributesModifiable, $IDrawerAttributesModifiable$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesModifiable"

export class $UpgradeData extends $BlockEntityDataShim {

constructor(arg0: integer)

public "write"(arg0: $CompoundTag$Type): $CompoundTag
public "read"(arg0: $CompoundTag$Type): void
public "canAddUpgrade"(arg0: $ItemStack$Type): boolean
public "addUpgrade"(arg0: $ItemStack$Type): boolean
public "getUpgrade"(arg0: integer): $ItemStack
public "getSlotCount"(): integer
public "setDrawerAttributes"(arg0: $IDrawerAttributesModifiable$Type): void
public "hasUnlimitedUpgrade"(): boolean
public "hasIlluminationUpgrade"(): boolean
public "hasConversionUpgrade"(): boolean
public "getStorageMultiplier"(): integer
public "hasOneStackUpgrade"(): boolean
public "getRedstoneType"(): $EnumUpgradeRedstone
public "canRemoveUpgrade"(arg0: integer): boolean
public "canSwapUpgrade"(arg0: integer, arg1: $ItemStack$Type): boolean
public "setUpgrade"(arg0: integer, arg1: $ItemStack$Type): boolean
public "hasEmptySlot"(): boolean
public "hasVendingUpgrade"(): boolean
get "slotCount"(): integer
set "drawerAttributes"(value: $IDrawerAttributesModifiable$Type)
get "storageMultiplier"(): integer
get "redstoneType"(): $EnumUpgradeRedstone
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$Type = ($UpgradeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeData_ = $UpgradeData$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributesModifiable" {
import {$IDrawerAttributes, $IDrawerAttributes$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/$IDrawerAttributes"
import {$LockAttribute, $LockAttribute$Type} from "packages/com/jaquadro/minecraft/storagedrawers/api/storage/attribute/$LockAttribute"

export interface $IDrawerAttributesModifiable extends $IDrawerAttributes {

 "setIsShowingQuantity"(arg0: boolean): boolean
 "setItemLocked"(arg0: $LockAttribute$Type, arg1: boolean): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "setIsDictConvertible"(arg0: boolean): boolean
 "setIsUnlimitedStorage"(arg0: boolean): boolean
 "setIsUnlimitedVending"(arg0: boolean): boolean
 "setIsVoid"(arg0: boolean): boolean
 "setHasFillLevel"(arg0: boolean): boolean
 "setIsSealed"(arg0: boolean): boolean
 "isSealed"(): boolean
 "isVoid"(): boolean
 "isConcealed"(): boolean
 "isShowingQuantity"(): boolean
 "isItemLocked"(arg0: $LockAttribute$Type): boolean
 "hasFillLevel"(): boolean
 "isUnlimitedVending"(): boolean
 "isDictConvertible"(): boolean
 "canItemLock"(arg0: $LockAttribute$Type): boolean
 "isUnlimitedStorage"(): boolean
}

export namespace $IDrawerAttributesModifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributesModifiable$Type = ($IDrawerAttributesModifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributesModifiable_ = $IDrawerAttributesModifiable$Type;
}}
declare module "packages/com/jaquadro/minecraft/storagedrawers/item/$ItemTrim" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemTrim extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTrim$Type = ($ItemTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTrim_ = $ItemTrim$Type;
}}
