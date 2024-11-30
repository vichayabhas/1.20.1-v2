declare module "packages/mcjty/rftoolsstorage/modules/scanner/blocks/$StorageScannerBlock" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"

export class $StorageScannerBlock extends $BaseBlock {
static readonly "HORIZ_PROPERTIES": ($Property<(any)>)[]
static readonly "ROTATING_PROPERTIES": ($Property<(any)>)[]
static readonly "NONE_PROPERTIES": ($Property<(any)>)[]
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageScannerBlock$Type = ($StorageScannerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageScannerBlock_ = $StorageScannerBlock$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/modularstorage/blocks/$ModularStorageBlock" {
import {$ModularTypeModule, $ModularTypeModule$Type} from "packages/mcjty/rftoolsstorage/modules/modularstorage/$ModularTypeModule"
import {$ModularAmountOverlay, $ModularAmountOverlay$Type} from "packages/mcjty/rftoolsstorage/modules/modularstorage/blocks/$ModularAmountOverlay"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ModularStorageBlock extends $BaseBlock {
static readonly "TYPEMODULE": $EnumProperty<($ModularTypeModule)>
static readonly "AMOUNT": $EnumProperty<($ModularAmountOverlay)>
static readonly "HORIZ_PROPERTIES": ($Property<(any)>)[]
static readonly "ROTATING_PROPERTIES": ($Property<(any)>)[]
static readonly "NONE_PROPERTIES": ($Property<(any)>)[]
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

constructor()

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularStorageBlock$Type = ($ModularStorageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularStorageBlock_ = $ModularStorageBlock$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/scanner/items/$StorageControlClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$StorageControlScreenModule$ModuleDataStacks, $StorageControlScreenModule$ModuleDataStacks$Type} from "packages/mcjty/rftoolsstorage/modules/scanner/items/$StorageControlScreenModule$ModuleDataStacks"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $StorageControlClientScreenModule implements $IClientScreenModule<($StorageControlScreenModule$ModuleDataStacks)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $StorageControlScreenModule$ModuleDataStacks$Type, arg6: $ModuleRenderInfo$Type): void
public "getTransformMode"(): $IClientScreenModule$TransformMode
public "needsServerData"(): boolean
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "height"(): integer
get "transformMode"(): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControlClientScreenModule$Type = ($StorageControlClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControlClientScreenModule_ = $StorageControlClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/scanner/items/$StorageControlScreenModule$ModuleDataStacks" {
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"

export class $StorageControlScreenModule$ModuleDataStacks implements $IModuleData {
static readonly "ID": string

constructor(arg0: $ByteBuf$Type)
constructor(...arg0: (integer)[])

public "getId"(): string
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "getAmount"(arg0: integer): integer
get "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControlScreenModule$ModuleDataStacks$Type = ($StorageControlScreenModule$ModuleDataStacks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControlScreenModule$ModuleDataStacks_ = $StorageControlScreenModule$ModuleDataStacks$Type;
}}
declare module "packages/mcjty/rftoolsstorage/storage/$StorageInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"

export class $StorageInfo extends $Record {
static readonly "EMPTY": $StorageInfo

constructor(uuid: $UUID$Type, version: integer, size: integer, createdBy: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): integer
public "hashCode"(): integer
public "isEmpty"(): boolean
public "size"(): integer
public "uuid"(): $UUID
public "createdBy"(): string
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageInfo$Type = ($StorageInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageInfo_ = $StorageInfo$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/modularstorage/$ModularTypeModule" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModularTypeModule extends $Enum<($ModularTypeModule)> implements $StringRepresentable {
static readonly "TYPE_NONE": $ModularTypeModule
static readonly "TYPE_GENERIC": $ModularTypeModule
static readonly "TYPE_ORE": $ModularTypeModule


public "toString"(): string
public static "values"(): ($ModularTypeModule)[]
public static "valueOf"(arg0: string): $ModularTypeModule
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
export type $ModularTypeModule$Type = (("type_generic") | ("type_ore") | ("type_none")) | ($ModularTypeModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularTypeModule_ = $ModularTypeModule$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/scanner/items/$StorageControlModuleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$StorageControlScreenModule, $StorageControlScreenModule$Type} from "packages/mcjty/rftoolsstorage/modules/scanner/items/$StorageControlScreenModule"
import {$StorageControlClientScreenModule, $StorageControlClientScreenModule$Type} from "packages/mcjty/rftoolsstorage/modules/scanner/items/$StorageControlClientScreenModule"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITabletSupport, $ITabletSupport$Type} from "packages/mcjty/rftoolsbase/api/various/$ITabletSupport"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageControlModuleItem extends $GenericModuleItem implements $INBTPreservingIngredient, $ITabletSupport {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getModuleName"(): string
public "openGui"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
public "getTagsToPreserve"(): $Collection<(string)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getClientScreenModule"(): $Class<($StorageControlClientScreenModule)>
public "getServerScreenModule"(): $Class<($StorageControlScreenModule)>
public "getInstalledTablet"(): $Item
get "moduleName"(): string
get "tagsToPreserve"(): $Collection<(string)>
get "clientScreenModule"(): $Class<($StorageControlClientScreenModule)>
get "serverScreenModule"(): $Class<($StorageControlScreenModule)>
get "installedTablet"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControlModuleItem$Type = ($StorageControlModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControlModuleItem_ = $StorageControlModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/craftingmanager/blocks/$CraftingManagerBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RotationType, $RotationType$Type} from "packages/mcjty/lib/blocks/$RotationType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseBlock, $BaseBlock$Type} from "packages/mcjty/lib/blocks/$BaseBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $CraftingManagerBlock extends $BaseBlock {
static readonly "HORIZ_PROPERTIES": ($Property<(any)>)[]
static readonly "ROTATING_PROPERTIES": ($Property<(any)>)[]
static readonly "NONE_PROPERTIES": ($Property<(any)>)[]
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

constructor()

public "getRotationType"(): $RotationType
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
get "rotationType"(): $RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingManagerBlock$Type = ($CraftingManagerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingManagerBlock_ = $CraftingManagerBlock$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/modularstorage/blocks/$ModularAmountOverlay" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ModularAmountOverlay extends $Enum<($ModularAmountOverlay)> implements $StringRepresentable {
static readonly "AMOUNT_NONE": $ModularAmountOverlay
static readonly "AMOUNT_EMPTY": $ModularAmountOverlay
static readonly "AMOUNT_G0": $ModularAmountOverlay
static readonly "AMOUNT_G1": $ModularAmountOverlay
static readonly "AMOUNT_G2": $ModularAmountOverlay
static readonly "AMOUNT_G3": $ModularAmountOverlay
static readonly "AMOUNT_G4": $ModularAmountOverlay
static readonly "AMOUNT_G5": $ModularAmountOverlay
static readonly "AMOUNT_G6": $ModularAmountOverlay
static readonly "AMOUNT_G7": $ModularAmountOverlay
static readonly "AMOUNT_R0": $ModularAmountOverlay
static readonly "AMOUNT_R1": $ModularAmountOverlay
static readonly "AMOUNT_R2": $ModularAmountOverlay
static readonly "AMOUNT_R3": $ModularAmountOverlay
static readonly "AMOUNT_R4": $ModularAmountOverlay
static readonly "AMOUNT_R5": $ModularAmountOverlay
static readonly "AMOUNT_R6": $ModularAmountOverlay
static readonly "AMOUNT_R7": $ModularAmountOverlay


public "toString"(): string
public static "values"(): ($ModularAmountOverlay)[]
public static "valueOf"(arg0: string): $ModularAmountOverlay
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
export type $ModularAmountOverlay$Type = (("amount_r7") | ("amount_r4") | ("amount_r3") | ("amount_r6") | ("amount_empty") | ("amount_r5") | ("amount_r0") | ("amount_r2") | ("amount_r1") | ("amount_none") | ("amount_g5") | ("amount_g4") | ("amount_g7") | ("amount_g6") | ("amount_g1") | ("amount_g0") | ("amount_g3") | ("amount_g2")) | ($ModularAmountOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAmountOverlay_ = $ModularAmountOverlay$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/scanner/items/$DumpScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DumpScreenModule implements $IScreenModule<($IModuleData)> {
static readonly "COLS": integer
static readonly "ROWS": integer

constructor()

public "isItemEqual"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DumpScreenModule$Type = ($DumpScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DumpScreenModule_ = $DumpScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/scanner/items/$DumpModuleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IModuleGuiBuilder, $IModuleGuiBuilder$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleGuiBuilder"
import {$DumpClientScreenModule, $DumpClientScreenModule$Type} from "packages/mcjty/rftoolsstorage/modules/scanner/items/$DumpClientScreenModule"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DumpScreenModule, $DumpScreenModule$Type} from "packages/mcjty/rftoolsstorage/modules/scanner/items/$DumpScreenModule"
import {$GenericModuleItem, $GenericModuleItem$Type} from "packages/mcjty/rftoolsbase/tools/$GenericModuleItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DumpModuleItem extends $GenericModuleItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor()

public "getModuleName"(): string
public "createGui"(arg0: $IModuleGuiBuilder$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getClientScreenModule"(): $Class<($DumpClientScreenModule)>
public "getServerScreenModule"(): $Class<($DumpScreenModule)>
get "moduleName"(): string
get "clientScreenModule"(): $Class<($DumpClientScreenModule)>
get "serverScreenModule"(): $Class<($DumpScreenModule)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DumpModuleItem$Type = ($DumpModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DumpModuleItem_ = $DumpModuleItem$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/scanner/items/$DumpClientScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IClientScreenModule, $IClientScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IModuleData, $IModuleData$Type} from "packages/mcjty/rftoolsbase/api/screens/data/$IModuleData"
import {$IClientScreenModule$TransformMode, $IClientScreenModule$TransformMode$Type} from "packages/mcjty/rftoolsbase/api/screens/$IClientScreenModule$TransformMode"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IModuleRenderHelper, $IModuleRenderHelper$Type} from "packages/mcjty/rftoolsbase/api/screens/$IModuleRenderHelper"
import {$ModuleRenderInfo, $ModuleRenderInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ModuleRenderInfo"

export class $DumpClientScreenModule implements $IClientScreenModule<($IModuleData)> {

constructor()

public "getHeight"(): integer
public "render"(arg0: $GuiGraphics$Type, arg1: $MultiBufferSource$Type, arg2: $IModuleRenderHelper$Type, arg3: $Font$Type, arg4: integer, arg5: $IModuleData$Type, arg6: $ModuleRenderInfo$Type): void
public "getTransformMode"(): $IClientScreenModule$TransformMode
public "needsServerData"(): boolean
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
get "height"(): integer
get "transformMode"(): $IClientScreenModule$TransformMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DumpClientScreenModule$Type = ($DumpClientScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DumpClientScreenModule_ = $DumpClientScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/scanner/items/$StorageControlScreenModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ITooltipInfo, $ITooltipInfo$Type} from "packages/mcjty/rftoolsbase/api/screens/$ITooltipInfo"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IScreenModuleUpdater, $IScreenModuleUpdater$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModuleUpdater"
import {$StorageControlScreenModule$ModuleDataStacks, $StorageControlScreenModule$ModuleDataStacks$Type} from "packages/mcjty/rftoolsstorage/modules/scanner/items/$StorageControlScreenModule$ModuleDataStacks"
import {$IStorageScanner, $IStorageScanner$Type} from "packages/mcjty/rftoolsbase/api/storage/$IStorageScanner"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IScreenModule, $IScreenModule$Type} from "packages/mcjty/rftoolsbase/api/screens/$IScreenModule"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StorageControlScreenModule implements $IScreenModule<($StorageControlScreenModule$ModuleDataStacks)>, $ITooltipInfo, $IScreenModuleUpdater {

constructor()

public "update"(arg0: $CompoundTag$Type, arg1: $Level$Type, arg2: $Player$Type): $CompoundTag
public "getInfo"(arg0: $Level$Type, arg1: integer, arg2: integer): $List<(string)>
public static "isItemEqual"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "getStorageScanner"(arg0: $Level$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): $IStorageScanner
public "getRfPerTick"(): integer
public "mouseClick"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: $Player$Type): void
public "setupFromNBT"(arg0: $CompoundTag$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: $BlockPos$Type): void
public "needsController"(): boolean
get "rfPerTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControlScreenModule$Type = ($StorageControlScreenModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageControlScreenModule_ = $StorageControlScreenModule$Type;
}}
declare module "packages/mcjty/rftoolsstorage/modules/modularstorage/items/$StorageModuleItem" {
import {$IStorageModuleItem, $IStorageModuleItem$Type} from "packages/mcjty/rftoolsbase/api/storage/$IStorageModuleItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$StorageInfo, $StorageInfo$Type} from "packages/mcjty/rftoolsstorage/storage/$StorageInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTPreservingIngredient, $INBTPreservingIngredient$Type} from "packages/mcjty/lib/crafting/$INBTPreservingIngredient"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StorageModuleItem extends $Item implements $INBTPreservingIngredient, $IStorageModuleItem {
static readonly "STORAGE_TIER1": integer
static readonly "STORAGE_TIER2": integer
static readonly "STORAGE_TIER3": integer
static readonly "STORAGE_TIER4": integer
static readonly "STORAGE_REMOTE": integer
static readonly "MAXSIZE": (integer)[]
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: integer)

public static "getSize"(arg0: $ItemStack$Type): integer
public static "getVersion"(arg0: $ItemStack$Type): integer
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getTagsToPreserve"(): $Collection<(string)>
public static "getCreatedBy"(arg0: $ItemStack$Type): string
public static "getOrCreateUUID"(arg0: $ItemStack$Type): $UUID
public static "getStorageInfo"(arg0: $ItemStack$Type): $StorageInfo
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "tagsToPreserve"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageModuleItem$Type = ($StorageModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageModuleItem_ = $StorageModuleItem$Type;
}}
