declare module "packages/net/minecraftforge/forgespi/language/$IConfigurable" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IConfigurable {

 "getConfigList"(...arg0: (string)[]): $List<(any)>
 "getConfigElement"<T>(...arg0: (string)[]): $Optional<(T)>
}

export namespace $IConfigurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$Type = ($IConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurable_ = $IConfigurable$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingAttackEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingAttackEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: float)

public "getSource"(): $DamageSource
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getAmount"(): float
get "source"(): $DamageSource
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "amount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingAttackEvent$Type = ($LivingAttackEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingAttackEvent_ = $LivingAttackEvent$Type;
}}
declare module "packages/net/minecraftforge/event/server/$ServerStoppingEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLifecycleEvent, $ServerLifecycleEvent$Type} from "packages/net/minecraftforge/event/server/$ServerLifecycleEvent"

export class $ServerStoppingEvent extends $ServerLifecycleEvent {

constructor(arg0: $MinecraftServer$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStoppingEvent$Type = ($ServerStoppingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStoppingEvent_ = $ServerStoppingEvent$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $PlayerInteractEvent extends $PlayerEvent {

constructor()

public "getFace"(): $Direction
public "getListenerList"(): $ListenerList
public "setCancellationResult"(arg0: $InteractionResult$Type): void
public "getSide"(): $LogicalSide
public "getLevel"(): $Level
public "getCancellationResult"(): $InteractionResult
public "getItemStack"(): $ItemStack
public "getHand"(): $InteractionHand
public "getPos"(): $BlockPos
get "face"(): $Direction
get "listenerList"(): $ListenerList
set "cancellationResult"(value: $InteractionResult$Type)
get "side"(): $LogicalSide
get "level"(): $Level
get "cancellationResult"(): $InteractionResult
get "itemStack"(): $ItemStack
get "hand"(): $InteractionHand
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$Type = ($PlayerInteractEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent_ = $PlayerInteractEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgePlayer" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgePlayer {

 "getEntityReach"(): double
 "isCloseEnough"(arg0: $Entity$Type, arg1: double): boolean
 "canReach"(arg0: $Vec3$Type, arg1: double): boolean
 "canReach"(arg0: $Entity$Type, arg1: double): boolean
 "canReach"(arg0: $BlockPos$Type, arg1: double): boolean
 "getBlockReach"(): double
}

export namespace $IForgePlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePlayer$Type = ($IForgePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePlayer_ = $IForgePlayer$Type;
}}
declare module "packages/net/minecraftforge/common/util/$INBTSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $INBTSerializable<T extends $Tag> {

 "deserializeNBT"(arg0: T): void
 "serializeNBT"(): T
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$Type<T> = ($INBTSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_<T> = $INBTSerializable$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$IForgeShearable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeShearable {

 "onSheared"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: integer): $List<($ItemStack)>
 "isShearable"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
}

export namespace $IForgeShearable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeShearable$Type = ($IForgeShearable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeShearable_ = $IForgeShearable$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TickEvent$Type extends $Enum<($TickEvent$Type)> {
static readonly "LEVEL": $TickEvent$Type
static readonly "PLAYER": $TickEvent$Type
static readonly "CLIENT": $TickEvent$Type
static readonly "SERVER": $TickEvent$Type
static readonly "RENDER": $TickEvent$Type


public static "values"(): ($TickEvent$Type)[]
public static "valueOf"(arg0: string): $TickEvent$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$Type$Type = (("server") | ("level") | ("client") | ("render") | ("player")) | ($TickEvent$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$Type_ = $TickEvent$Type$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FogShape, $FogShape$Type} from "packages/com/mojang/blaze3d/shaders/$FogShape"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FogRenderer$FogMode, $FogRenderer$FogMode$Type} from "packages/net/minecraft/client/renderer/$FogRenderer$FogMode"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IClientFluidTypeExtensions {

 "getStillTexture"(arg0: $FluidStack$Type): $ResourceLocation
 "getStillTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getStillTexture"(): $ResourceLocation
 "getFlowingTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getFlowingTexture"(arg0: $FluidStack$Type): $ResourceLocation
 "getTintColor"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getTintColor"(arg0: $FluidStack$Type): integer
 "getTintColor"(): integer
 "getRenderOverlayTexture"(arg0: $Minecraft$Type): $ResourceLocation
 "renderOverlay"(arg0: $Minecraft$Type, arg1: $PoseStack$Type): void
 "modifyFogColor"(arg0: $Camera$Type, arg1: float, arg2: $ClientLevel$Type, arg3: integer, arg4: float, arg5: $Vector3f$Type): $Vector3f
 "modifyFogRender"(arg0: $Camera$Type, arg1: $FogRenderer$FogMode$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $FogShape$Type): void
 "getOverlayTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getOverlayTexture"(arg0: $FluidStack$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
}

export namespace $IClientFluidTypeExtensions {
const DEFAULT: $IClientFluidTypeExtensions
function of(arg0: $FluidState$Type): $IClientFluidTypeExtensions
function of(arg0: $FluidType$Type): $IClientFluidTypeExtensions
function of(arg0: $Fluid$Type): $IClientFluidTypeExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientFluidTypeExtensions$Type = ($IClientFluidTypeExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientFluidTypeExtensions_ = $IClientFluidTypeExtensions$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegistryObject" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegistryObject<T> implements $Supplier<(T)> {


public "get"(): any
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "map"<U>(arg0: $Function$Type<(any), (any)>): $Optional<(U)>
public "stream"(): $Stream<(T)>
public "filter"(arg0: $Predicate$Type<(any)>): $RegistryObject<(T)>
public "getKey"(): $ResourceKey<(T)>
public "flatMap"<U>(arg0: $Function$Type<(any), ($Optional$Type<(U)>)>): $Optional<(U)>
public "isPresent"(): boolean
public "getId"(): $ResourceLocation
public "orElse"(arg0: T): T
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$Type<(any)>): T
public static "create"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: string): $RegistryObject<(U)>
public static "create"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $IForgeRegistry$Type<(T)>): $RegistryObject<(U)>
public static "create"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceKey$Type<(any)>, arg2: string): $RegistryObject<(U)>
public "orElseGet"(arg0: $Supplier$Type<(any)>): T
public "ifPresent"(arg0: $Consumer$Type<(any)>): void
public "lazyMap"<U>(arg0: $Function$Type<(any), (any)>): $Supplier<(U)>
public "getHolder"(): $Optional<($Holder<(T)>)>
public static "createOptional"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceKey$Type<(any)>, arg2: string): $RegistryObject<(U)>
public static "createOptional"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: string): $RegistryObject<(U)>
get "key"(): $ResourceKey<(T)>
get "present"(): boolean
get "id"(): $ResourceLocation
get "holder"(): $Optional<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryObject$Type<T> = ($RegistryObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryObject_<T> = $RegistryObject$Type<(T)>;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModInfo" {
import {$VersionRange, $VersionRange$Type} from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import {$IConfigurable, $IConfigurable$Type} from "packages/net/minecraftforge/forgespi/language/$IConfigurable"
import {$ArtifactVersion, $ArtifactVersion$Type} from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$IModFileInfo, $IModFileInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModInfo {

 "getVersion"(): $ArtifactVersion
 "getDisplayName"(): string
 "getDescription"(): string
 "getNamespace"(): string
 "getModURL"(): $Optional<($URL)>
 "getLogoFile"(): $Optional<(string)>
 "getLogoBlur"(): boolean
 "getForgeFeatures"(): $List<(any)>
 "getOwningFile"(): $IModFileInfo
 "getDependencies"(): $List<(any)>
 "getUpdateURL"(): $Optional<($URL)>
 "getModProperties"(): $Map<(string), (any)>
 "getModId"(): string
 "getConfig"(): $IConfigurable
}

export namespace $IModInfo {
const UNBOUNDED: $VersionRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$Type = ($IModInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModInfo_ = $IModInfo$Type;
}}
declare module "packages/net/minecraftforge/fml/event/config/$ModConfigEvent$Loading" {
import {$ModConfigEvent, $ModConfigEvent$Type} from "packages/net/minecraftforge/fml/event/config/$ModConfigEvent"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent, $IConfigEvent$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent$Loading extends $ModConfigEvent {

constructor(arg0: $ModConfig$Type)
constructor()

public "getListenerList"(): $ListenerList
public static "unloading"(arg0: $ModConfig$Type): $IConfigEvent
public static "loading"(arg0: $ModConfig$Type): $IConfigEvent
public static "reloading"(arg0: $ModConfig$Type): $IConfigEvent
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigEvent$Loading$Type = ($ModConfigEvent$Loading);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigEvent$Loading_ = $ModConfigEvent$Loading$Type;
}}
declare module "packages/net/minecraftforge/event/level/$BlockEvent$EntityPlaceEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEvent, $BlockEvent$Type} from "packages/net/minecraftforge/event/level/$BlockEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockEvent$EntityPlaceEvent extends $BlockEvent {

constructor(arg0: $BlockSnapshot$Type, arg1: $BlockState$Type, arg2: $Entity$Type)
constructor()

public "getEntity"(): $Entity
public "getListenerList"(): $ListenerList
public "getPlacedAgainst"(): $BlockState
public "getPlacedBlock"(): $BlockState
public "getBlockSnapshot"(): $BlockSnapshot
public "isCancelable"(): boolean
get "entity"(): $Entity
get "listenerList"(): $ListenerList
get "placedAgainst"(): $BlockState
get "placedBlock"(): $BlockState
get "blockSnapshot"(): $BlockSnapshot
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$EntityPlaceEvent$Type = ($BlockEvent$EntityPlaceEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent$EntityPlaceEvent_ = $BlockEvent$EntityPlaceEvent$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IForgeRegistry<V> extends $Iterable<(V)> {

 "getValue"(arg0: $ResourceLocation$Type): V
 "isEmpty"(): boolean
 "getKey"(arg0: V): $ResourceLocation
 "register"(arg0: $ResourceLocation$Type, arg1: V): void
 "register"(arg0: string, arg1: V): void
 "containsKey"(arg0: $ResourceLocation$Type): boolean
 "containsValue"(arg0: V): boolean
 "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
 "getKeys"(): $Set<($ResourceLocation)>
 "tags"(): $ITagManager<(V)>
 "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
 "getCodec"(): $Codec<(V)>
 "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
 "getRegistryName"(): $ResourceLocation
 "getValues"(): $Collection<(V)>
 "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
 "getDefaultKey"(): $ResourceLocation
 "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
 "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
 "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IForgeRegistry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$Type<V> = ($IForgeRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry_<V> = $IForgeRegistry$Type<(V)>;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullSupplier<T> {

 "get"(): T

(): T
}

export namespace $NonNullSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullSupplier$Type<T> = ($NonNullSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullSupplier_<T> = $NonNullSupplier$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/level/$ChunkEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$LevelEvent, $LevelEvent$Type} from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $ChunkEvent extends $LevelEvent {

constructor()
constructor(arg0: $ChunkAccess$Type, arg1: $LevelAccessor$Type)
constructor(arg0: $ChunkAccess$Type)

public "getListenerList"(): $ListenerList
public "getChunk"(): $ChunkAccess
get "listenerList"(): $ListenerList
get "chunk"(): $ChunkAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$Type = ($ChunkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkEvent_ = $ChunkEvent$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelDataManager" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ChunkEvent$Unload, $ChunkEvent$Unload$Type} from "packages/net/minecraftforge/event/level/$ChunkEvent$Unload"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelDataManager {

constructor(arg0: $Level$Type)

public "requestRefresh"(arg0: $BlockEntity$Type): void
public "getAt"(arg0: $BlockPos$Type): $ModelData
public "getAt"(arg0: $ChunkPos$Type): $Map<($BlockPos), ($ModelData)>
public static "onChunkUnload"(arg0: $ChunkEvent$Unload$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelDataManager$Type = ($ModelDataManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelDataManager_ = $ModelDataManager$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$EventPriority" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IEventListener, $IEventListener$Type} from "packages/net/minecraftforge/eventbus/api/$IEventListener"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EventPriority extends $Enum<($EventPriority)> implements $IEventListener {
static readonly "HIGHEST": $EventPriority
static readonly "HIGH": $EventPriority
static readonly "NORMAL": $EventPriority
static readonly "LOW": $EventPriority
static readonly "LOWEST": $EventPriority


public "invoke"(arg0: $Event$Type): void
public static "values"(): ($EventPriority)[]
public static "valueOf"(arg0: string): $EventPriority
public "listenerName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventPriority$Type = (("normal") | ("high") | ("highest") | ("low") | ("lowest")) | ($EventPriority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventPriority_ = $EventPriority$Type;
}}
declare module "packages/net/minecraftforge/common/$ToolAction" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $ToolAction {


public "name"(): string
public static "get"(arg0: string): $ToolAction
public "toString"(): string
public static "getActions"(): $Collection<($ToolAction)>
get "actions"(): $Collection<($ToolAction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolAction$Type = ($ToolAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolAction_ = $ToolAction$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlockGetter" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeBlockGetter {

 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
}

export namespace $IForgeBlockGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockGetter$Type = ($IForgeBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockGetter_ = $IForgeBlockGetter$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup, $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup"
import {$MultiPartBlockStateBuilder, $MultiPartBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$BlockStateProvider$ConfiguredModelList, $BlockStateProvider$ConfiguredModelList$Type} from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MultiPartBlockStateBuilder$PartBuilder {
 "models": $BlockStateProvider$ConfiguredModelList
 "useOr": boolean
readonly "conditions": $Multimap<($Property<(any)>), ($Comparable<(any)>)>
readonly "nestedConditionGroups": $List<($MultiPartBlockStateBuilder$PartBuilder$ConditionGroup)>


public "end"(): $MultiPartBlockStateBuilder
public "nestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "useOr"(): $MultiPartBlockStateBuilder$PartBuilder
public "canApplyTo"(arg0: $Block$Type): boolean
public "condition"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, ...arg1: (T)[]): $MultiPartBlockStateBuilder$PartBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPartBlockStateBuilder$PartBuilder$Type = ($MultiPartBlockStateBuilder$PartBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPartBlockStateBuilder$PartBuilder_ = $MultiPartBlockStateBuilder$PartBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeIntrinsicHolderTagAppender" {
import {$IForgeTagAppender, $IForgeTagAppender$Type} from "packages/net/minecraftforge/common/extensions/$IForgeTagAppender"
import {$TagsProvider$TagAppender, $TagsProvider$TagAppender$Type} from "packages/net/minecraft/data/tags/$TagsProvider$TagAppender"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$IntrinsicHolderTagsProvider$IntrinsicTagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type} from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IForgeIntrinsicHolderTagAppender<T> extends $IForgeTagAppender<(T)> {

 "remove"(arg0: $ResourceKey$Type<(T)>, ...arg1: ($ResourceKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "remove"(arg0: $ResourceKey$Type<(T)>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "remove"(arg0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "remove"(arg0: T, ...arg1: (T)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "replace"(arg0: boolean): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "getKey"(arg0: T): $ResourceKey<(T)>
 "addTags"(...arg0: ($TagKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "addOptionalTag"(arg0: $TagKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "addOptionalTags"(...arg0: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>

(arg0: $ResourceKey$Type<(T)>, ...arg1: ($ResourceKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
}

export namespace $IForgeIntrinsicHolderTagAppender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeIntrinsicHolderTagAppender$Type<T> = ($IForgeIntrinsicHolderTagAppender<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeIntrinsicHolderTagAppender_<T> = $IForgeIntrinsicHolderTagAppender$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeFluidState" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeFluidState {

 "move"(arg0: $LivingEntity$Type, arg1: $Vec3$Type, arg2: double): boolean
 "getBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type, arg3: boolean): $BlockPathTypes
 "canHydrate"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): boolean
 "getExplosionResistance"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): float
 "getAdjacentBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type, arg3: $BlockPathTypes$Type): $BlockPathTypes
 "shouldUpdateWhileBoating"(arg0: $Boat$Type, arg1: $Entity$Type): boolean
 "canConvertToSource"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "supportsBoating"(arg0: $Boat$Type): boolean
 "getFluidType"(): $FluidType
 "canExtinguish"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
}

export namespace $IForgeFluidState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFluidState$Type = ($IForgeFluidState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFluidState_ = $IForgeFluidState$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions" {
import {$Gui, $Gui$Type} from "packages/net/minecraft/client/gui/$Gui"
import {$EffectRenderingInventoryScreen, $EffectRenderingInventoryScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$EffectRenderingInventoryScreen"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export interface $IClientMobEffectExtensions {

 "renderInventoryText"(arg0: $MobEffectInstance$Type, arg1: $EffectRenderingInventoryScreen$Type<(any)>, arg2: $GuiGraphics$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "renderInventoryIcon"(arg0: $MobEffectInstance$Type, arg1: $EffectRenderingInventoryScreen$Type<(any)>, arg2: $GuiGraphics$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "isVisibleInInventory"(arg0: $MobEffectInstance$Type): boolean
 "renderGuiIcon"(arg0: $MobEffectInstance$Type, arg1: $Gui$Type, arg2: $GuiGraphics$Type, arg3: integer, arg4: integer, arg5: float, arg6: float): boolean
 "isVisibleInGui"(arg0: $MobEffectInstance$Type): boolean
}

export namespace $IClientMobEffectExtensions {
const DEFAULT: $IClientMobEffectExtensions
function of(arg0: $MobEffectInstance$Type): $IClientMobEffectExtensions
function of(arg0: $MobEffect$Type): $IClientMobEffectExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientMobEffectExtensions$Type = ($IClientMobEffectExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientMobEffectExtensions_ = $IClientMobEffectExtensions$Type;
}}
declare module "packages/net/minecraftforge/network/$ICustomPacket" {
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICustomPacket<T extends $Packet<(any)>> {

 "getName"(): $ResourceLocation
 "getIndex"(): integer
 "getDirection"(): $NetworkDirection
 "getThis"(): T
 "getInternalData"(): $FriendlyByteBuf
}

export namespace $ICustomPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomPacket$Type<T> = ($ICustomPacket<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomPacket_<T> = $ICustomPacket$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $IForgeRecipeSerializer<T extends $Recipe<(any)>> {

 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}

export namespace $IForgeRecipeSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRecipeSerializer$Type<T> = ($IForgeRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRecipeSerializer_<T> = $IForgeRecipeSerializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/level/$LevelEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$EventHandlerImplCommon$LevelEventAttachment, $EventHandlerImplCommon$LevelEventAttachment$Type} from "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment"

export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment {

constructor()
constructor(arg0: $LevelAccessor$Type)

public "getListenerList"(): $ListenerList
public "getLevel"(): $LevelAccessor
public "isCancelable"(): boolean
public "hasResult"(): boolean
public "architectury$attachLevel"(level: $LevelAccessor$Type): void
public "architectury$getAttachedLevel"(): $LevelAccessor
get "listenerList"(): $ListenerList
get "level"(): $LevelAccessor
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Type = ($LevelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelEvent_ = $LevelEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeRawTagBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TagEntry, $TagEntry$Type} from "packages/net/minecraft/tags/$TagEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagBuilder, $TagBuilder$Type} from "packages/net/minecraft/tags/$TagBuilder"

export interface $IForgeRawTagBuilder {

 "remove"(arg0: $TagEntry$Type, arg1: string): $TagBuilder
 "removeElement"(arg0: $ResourceLocation$Type, arg1: string): $TagBuilder
/**
 * 
 * @deprecated
 */
 "serializeTagAdditions"(arg0: $JsonObject$Type): void
 "getRawBuilder"(): $TagBuilder
 "removeTag"(arg0: $ResourceLocation$Type, arg1: string): $TagBuilder
}

export namespace $IForgeRawTagBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRawTagBuilder$Type = ($IForgeRawTagBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRawTagBuilder_ = $IForgeRawTagBuilder$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider" {
import {$ILifecycleEvent, $ILifecycleEvent$Type} from "packages/net/minecraftforge/forgespi/language/$ILifecycleEvent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ModFileScanData, $ModFileScanData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"

export interface $IModLanguageProvider {

 "name"(): string
 "consumeLifecycleEvent"<R extends $ILifecycleEvent<(R)>>(arg0: $Supplier$Type<(R)>): void
 "getFileVisitor"(): $Consumer<($ModFileScanData)>
}

export namespace $IModLanguageProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModLanguageProvider$Type = ($IModLanguageProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModLanguageProvider_ = $IModLanguageProvider$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeMobEffectInstance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IForgeMobEffectInstance {

 "writeCurativeItems"(arg0: $CompoundTag$Type): void
 "setCurativeItems"(arg0: $List$Type<($ItemStack$Type)>): void
 "addCurativeItem"(arg0: $ItemStack$Type): void
 "isCurativeItem"(arg0: $ItemStack$Type): boolean
 "getCurativeItems"(): $List<($ItemStack)>
}

export namespace $IForgeMobEffectInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMobEffectInstance$Type = ($IForgeMobEffectInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMobEffectInstance_ = $IForgeMobEffectInstance$Type;
}}
declare module "packages/net/minecraftforge/client/event/$TextureStitchEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"

export class $TextureStitchEvent extends $Event implements $IModBusEvent {

constructor()
constructor(arg0: $TextureAtlas$Type)

public "getListenerList"(): $ListenerList
public "getAtlas"(): $TextureAtlas
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "listenerList"(): $ListenerList
get "atlas"(): $TextureAtlas
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureStitchEvent$Type = ($TextureStitchEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureStitchEvent_ = $TextureStitchEvent$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$EntityInteract" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerInteractEvent, $PlayerInteractEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerInteractEvent$EntityInteract extends $PlayerInteractEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Entity$Type)

public "getTarget"(): $Entity
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "target"(): $Entity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$EntityInteract$Type = ($PlayerInteractEvent$EntityInteract);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$EntityInteract_ = $PlayerInteractEvent$EntityInteract$Type;
}}
declare module "packages/net/minecraftforge/client/event/$TextureStitchEvent$Post" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$TextureStitchEvent, $TextureStitchEvent$Type} from "packages/net/minecraftforge/client/event/$TextureStitchEvent"

export class $TextureStitchEvent$Post extends $TextureStitchEvent {

constructor(arg0: $TextureAtlas$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureStitchEvent$Post$Type = ($TextureStitchEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureStitchEvent$Post_ = $TextureStitchEvent$Post$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export interface $IGeneratedBlockState {

 "toJson"(): $JsonObject

(): $JsonObject
}

export namespace $IGeneratedBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGeneratedBlockState$Type = ($IGeneratedBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGeneratedBlockState_ = $IGeneratedBlockState$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeTransformation" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IForgeTransformation {

 "isIdentity"(): boolean
 "blockCenterToCorner"(): $Transformation
 "blockCornerToCenter"(): $Transformation
 "transformNormal"(arg0: $Vector3f$Type): void
 "transformPosition"(arg0: $Vector4f$Type): void
 "applyOrigin"(arg0: $Vector3f$Type): $Transformation
 "rotateTransform"(arg0: $Direction$Type): $Direction
}

export namespace $IForgeTransformation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeTransformation$Type = ($IForgeTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeTransformation_ = $IForgeTransformation$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IForgeBlock {

 "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
 "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $Direction$Type): boolean
 "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
 "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
 "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
 "getBedDirection"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $Direction
 "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "isBed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "isBurning"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "getRespawnPosition"(arg0: $BlockState$Type, arg1: $EntityType$Type<(any)>, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: float, arg5: $LivingEntity$Type): $Optional<($Vec3)>
 "setBedOccupied"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type, arg4: boolean): void
 "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
 "isConduitFrame"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): boolean
 "onTreeGrow"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $RandomSource$Type, arg4: $BlockPos$Type, arg5: $TreeConfiguration$Type): boolean
 "isPortalFrame"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
 "isFertile"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
 "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
 "isStickyBlock"(arg0: $BlockState$Type): boolean
 "getWeakChanges"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
 "getBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type): $BlockPathTypes
 "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
 "isSlimeBlock"(arg0: $BlockState$Type): boolean
 "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "canStickTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
 "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
 "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
 "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "isFireSource"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "isScaffolding"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
 "canBeHydrated"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type, arg4: $BlockPos$Type): boolean
 "onBlockStateChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): void
 "getMapColor"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $MapColor$Type): $MapColor
 "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
 "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
 "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
 "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
 "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
 "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
 "getAdjacentBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
 "getStateAtViewpoint"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Vec3$Type): $BlockState
 "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean

(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
}

export namespace $IForgeBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlock$Type = ($IForgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlock_ = $IForgeBlock$Type;
}}
declare module "packages/net/minecraftforge/client/event/$ModelEvent$RegisterAdditional" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$ModelEvent, $ModelEvent$Type} from "packages/net/minecraftforge/client/event/$ModelEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelEvent$RegisterAdditional extends $ModelEvent implements $IModBusEvent {

constructor()
constructor(arg0: $Set$Type<($ResourceLocation$Type)>)

public "register"(arg0: $ResourceLocation$Type): void
public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$RegisterAdditional$Type = ($ModelEvent$RegisterAdditional);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelEvent$RegisterAdditional_ = $ModelEvent$RegisterAdditional$Type;
}}
declare module "packages/net/minecraftforge/forgespi/locating/$IModFile$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IModFile$Type extends $Enum<($IModFile$Type)> {
static readonly "MOD": $IModFile$Type
static readonly "LIBRARY": $IModFile$Type
static readonly "LANGPROVIDER": $IModFile$Type
static readonly "GAMELIBRARY": $IModFile$Type


public static "values"(): ($IModFile$Type)[]
public static "valueOf"(arg0: string): $IModFile$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFile$Type$Type = (("gamelibrary") | ("mod") | ("library") | ("langprovider")) | ($IModFile$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFile$Type_ = $IModFile$Type$Type;
}}
declare module "packages/net/minecraftforge/fml/$IExtensionPoint$DisplayTest" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IExtensionPoint, $IExtensionPoint$Type} from "packages/net/minecraftforge/fml/$IExtensionPoint"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IExtensionPoint$DisplayTest extends $Record implements $IExtensionPoint<($IExtensionPoint$DisplayTest)> {
static readonly "IGNORESERVERONLY": string
static readonly "IGNORE_SERVER_VERSION": $Supplier<($IExtensionPoint$DisplayTest)>
static readonly "IGNORE_ALL_VERSION": $Supplier<($IExtensionPoint$DisplayTest)>

constructor(arg0: string, arg1: $BiPredicate$Type<(string), (boolean)>)
constructor(suppliedVersion: $Supplier$Type<(string)>, remoteVersionTest: $BiPredicate$Type<(string), (boolean)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "remoteVersionTest"(): $BiPredicate<(string), (boolean)>
public "suppliedVersion"(): $Supplier<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionPoint$DisplayTest$Type = ($IExtensionPoint$DisplayTest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionPoint$DisplayTest_ = $IExtensionPoint$DisplayTest$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$DoubleValue extends $ForgeConfigSpec$ConfigValue<(double)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$DoubleValue$Type = ($ForgeConfigSpec$DoubleValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$DoubleValue_ = $ForgeConfigSpec$DoubleValue$Type;
}}
declare module "packages/net/minecraftforge/fml/event/config/$ModConfigEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent, $IConfigEvent$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent extends $Event implements $IModBusEvent, $IConfigEvent {

constructor()

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
public "getConfig"(): $ModConfig
public "self"<T extends ($Event) & ($IConfigEvent)>(): T
public static "unloading"(arg0: $ModConfig$Type): $IConfigEvent
public static "loading"(arg0: $ModConfig$Type): $IConfigEvent
public static "reloading"(arg0: $ModConfig$Type): $IConfigEvent
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "config"(): $ModConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigEvent$Type = ($ModConfigEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigEvent_ = $ModConfigEvent$Type;
}}
declare module "packages/net/minecraftforge/fml/$DeferredWorkQueue" {
import {$ModLoadingStage, $ModLoadingStage$Type} from "packages/net/minecraftforge/fml/$ModLoadingStage"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DeferredWorkQueue {

constructor(arg0: $ModLoadingStage$Type)

public static "lookup"(arg0: $Optional$Type<($ModLoadingStage$Type)>): $Optional<($DeferredWorkQueue)>
public "runTasks"(): void
public "enqueueWork"<T>(arg0: $ModContainer$Type, arg1: $Supplier$Type<(T)>): $CompletableFuture<(T)>
public "enqueueWork"(arg0: $ModContainer$Type, arg1: $Runnable$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredWorkQueue$Type = ($DeferredWorkQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredWorkQueue_ = $DeferredWorkQueue$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/$IIngredientSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $IIngredientSerializer<T extends $Ingredient> {

 "write"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "parse"(arg0: $JsonObject$Type): T
 "parse"(arg0: $FriendlyByteBuf$Type): T
}

export namespace $IIngredientSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSerializer$Type<T> = ($IIngredientSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSerializer_<T> = $IIngredientSerializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec" {
import {$IConfigSpec, $IConfigSpec$Type} from "packages/net/minecraftforge/fml/config/$IConfigSpec"
import {$ConfigSpec$CorrectionListener, $ConfigSpec$CorrectionListener$Type} from "packages/com/electronwill/nightconfig/core/$ConfigSpec$CorrectionListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UnmodifiableConfigWrapper, $UnmodifiableConfigWrapper$Type} from "packages/com/electronwill/nightconfig/core/utils/$UnmodifiableConfigWrapper"
import {$CommentedConfig, $CommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$CommentedConfig"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

export class $ForgeConfigSpec extends $UnmodifiableConfigWrapper<($UnmodifiableConfig)> implements $IConfigSpec<($ForgeConfigSpec)> {


public "save"(): void
public "isLoaded"(): boolean
public "getLevelTranslationKey"(arg0: $List$Type<(string)>): string
public "correct"(arg0: $CommentedConfig$Type): integer
public "correct"(arg0: $CommentedConfig$Type, arg1: $ConfigSpec$CorrectionListener$Type): integer
public "correct"(arg0: $CommentedConfig$Type, arg1: $ConfigSpec$CorrectionListener$Type, arg2: $ConfigSpec$CorrectionListener$Type): integer
public "isCorrect"(arg0: $CommentedConfig$Type): boolean
public "getValues"(): $UnmodifiableConfig
public "getSpec"(): $UnmodifiableConfig
public "isCorrecting"(): boolean
public "acceptConfig"(arg0: $CommentedConfig$Type): void
public "afterReload"(): void
public "getLevelComment"(arg0: $List$Type<(string)>): string
public "setConfig"(arg0: $CommentedConfig$Type): void
public "self"(): $ForgeConfigSpec
get "loaded"(): boolean
get "values"(): $UnmodifiableConfig
get "spec"(): $UnmodifiableConfig
get "correcting"(): boolean
set "config"(value: $CommentedConfig$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$Type = ($ForgeConfigSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec_ = $ForgeConfigSpec$Type;
}}
declare module "packages/net/minecraftforge/network/$PacketDistributor$TargetPoint" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $PacketDistributor$TargetPoint {

constructor(arg0: $ServerPlayer$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $ResourceKey$Type<($Level$Type)>)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>)

public static "p"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>): $Supplier<($PacketDistributor$TargetPoint)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketDistributor$TargetPoint$Type = ($PacketDistributor$TargetPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketDistributor$TargetPoint_ = $PacketDistributor$TargetPoint$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeFriendlyByteBuf" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeFriendlyByteBuf {

 "writeRegistryIdUnsafe"(arg0: $IForgeRegistry$Type<(any)>, arg1: $ResourceLocation$Type): void
 "writeRegistryIdUnsafe"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): void
 "readRegistryIdUnsafe"<T>(arg0: $IForgeRegistry$Type<(T)>): T
 "writeFluidStack"(arg0: $FluidStack$Type): void
 "readFluidStack"(): $FluidStack
 "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): void
 "readRegistryId"<T>(): T
 "readRegistryIdSafe"<T>(arg0: $Class$Type<(any)>): T
}

export namespace $IForgeFriendlyByteBuf {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFriendlyByteBuf$Type = ($IForgeFriendlyByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFriendlyByteBuf_ = $IForgeFriendlyByteBuf$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkEvent$PacketDispatcher" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NetworkEvent$PacketDispatcher {


public "sendPacket"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEvent$PacketDispatcher$Type = ($NetworkEvent$PacketDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEvent$PacketDispatcher_ = $NetworkEvent$PacketDispatcher$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$ICapabilityProviderImpl" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CapabilityProvider, $CapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityProvider"
import {$CapabilityDispatcher, $CapabilityDispatcher$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityDispatcher"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilityProviderImpl<B extends $ICapabilityProviderImpl<(B)>> extends $ICapabilityProvider {

 "invalidateCaps"(): void
 "areCapsCompatible"(arg0: $CapabilityProvider$Type<(B)>): boolean
 "areCapsCompatible"(arg0: $CapabilityDispatcher$Type): boolean
 "reviveCaps"(): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $ICapabilityProviderImpl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProviderImpl$Type<B> = ($ICapabilityProviderImpl<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProviderImpl_<B> = $ICapabilityProviderImpl$Type<(B)>;
}}
declare module "packages/net/minecraftforge/common/data/$ExistingFileHelper" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"
import {$ExistingFileHelper$IResourceType, $ExistingFileHelper$IResourceType$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper$IResourceType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ExistingFileHelper {

constructor(arg0: $Collection$Type<($Path$Type)>, arg1: $Set$Type<(string)>, arg2: boolean, arg3: string, arg4: $File$Type)

public "getResource"(arg0: $ResourceLocation$Type, arg1: $PackType$Type, arg2: string, arg3: string): $Resource
public "getResource"(arg0: $ResourceLocation$Type, arg1: $PackType$Type): $Resource
public "exists"(arg0: $ResourceLocation$Type, arg1: $PackType$Type, arg2: string, arg3: string): boolean
public "exists"(arg0: $ResourceLocation$Type, arg1: $PackType$Type): boolean
public "exists"(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$IResourceType$Type): boolean
public "isEnabled"(): boolean
public "getResourceStack"(arg0: $ResourceLocation$Type, arg1: $PackType$Type): $List<($Resource)>
public "trackGenerated"(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$IResourceType$Type): void
public "trackGenerated"(arg0: $ResourceLocation$Type, arg1: $PackType$Type, arg2: string, arg3: string): void
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$Type = ($ExistingFileHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExistingFileHelper_ = $ExistingFileHelper$Type;
}}
declare module "packages/net/minecraftforge/common/util/$TransformationHelper$TransformOrigin" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TransformationHelper$TransformOrigin extends $Enum<($TransformationHelper$TransformOrigin)> implements $StringRepresentable {
static readonly "CENTER": $TransformationHelper$TransformOrigin
static readonly "CORNER": $TransformationHelper$TransformOrigin
static readonly "OPPOSING_CORNER": $TransformationHelper$TransformOrigin


public static "values"(): ($TransformationHelper$TransformOrigin)[]
public static "valueOf"(arg0: string): $TransformationHelper$TransformOrigin
public static "fromString"(arg0: string): $TransformationHelper$TransformOrigin
public "getSerializedName"(): string
public "getVector"(): $Vector3f
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
get "vector"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformationHelper$TransformOrigin$Type = (("corner") | ("center") | ("opposing_corner")) | ($TransformationHelper$TransformOrigin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformationHelper$TransformOrigin_ = $TransformationHelper$TransformOrigin$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBoat" {
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeBoat {

 "canBoatInFluid"(arg0: $FluidType$Type): boolean
 "canBoatInFluid"(arg0: $FluidState$Type): boolean
 "shouldUpdateFluidWhileRiding"(arg0: $FluidState$Type, arg1: $Entity$Type): boolean
}

export namespace $IForgeBoat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBoat$Type = ($IForgeBoat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBoat_ = $IForgeBoat$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$RotationBuilder" {
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"

export class $ModelBuilder$ElementBuilder$RotationBuilder {

constructor(arg0: $ModelBuilder$ElementBuilder$Type)

public "end"(): $ModelBuilder$ElementBuilder<>
public "origin"(arg0: float, arg1: float, arg2: float): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "rescale"(arg0: boolean): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "axis"(arg0: $Direction$Axis$Type): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "angle"(arg0: float): $ModelBuilder$ElementBuilder$RotationBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$ElementBuilder$RotationBuilder$Type = ($ModelBuilder$ElementBuilder$RotationBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$ElementBuilder$RotationBuilder_ = $ModelBuilder$ElementBuilder$RotationBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$IntValue extends $ForgeConfigSpec$ConfigValue<(integer)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$IntValue$Type = ($ForgeConfigSpec$IntValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$IntValue_ = $ForgeConfigSpec$IntValue$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeFont" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"

export interface $IForgeFont {

 "self"(): $Font
 "ellipsize"(arg0: $FormattedText$Type, arg1: integer): $FormattedText

(): $Font
}

export namespace $IForgeFont {
const ELLIPSIS: $FormattedText
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFont$Type = ($IForgeFont);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFont_ = $IForgeFont$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeKeyMapping" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$IKeyConflictContext, $IKeyConflictContext$Type} from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import {$KeyModifier, $KeyModifier$Type} from "packages/net/minecraftforge/client/settings/$KeyModifier"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IForgeKeyMapping {

 "getKey"(): $InputConstants$Key
 "hasKeyModifierConflict"(arg0: $KeyMapping$Type): boolean
 "getDefaultKeyModifier"(): $KeyModifier
 "setKeyModifierAndCode"(arg0: $KeyModifier$Type, arg1: $InputConstants$Key$Type): void
 "isConflictContextAndModifierActive"(): boolean
 "getKeyConflictContext"(): $IKeyConflictContext
 "setKeyConflictContext"(arg0: $IKeyConflictContext$Type): void
 "setToDefault"(): void
 "isActiveAndMatches"(arg0: $InputConstants$Key$Type): boolean
 "getKeyModifier"(): $KeyModifier
}

export namespace $IForgeKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeKeyMapping$Type = ($IForgeKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeKeyMapping_ = $IForgeKeyMapping$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IForgeItem {

 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "getDamage"(arg0: $ItemStack$Type): integer
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean

(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
}

export namespace $IForgeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeItem$Type = ($IForgeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeItem_ = $IForgeItem$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$IUnbakedGeometry" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ItemOverrides, $ItemOverrides$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IGeometryBakingContext, $IGeometryBakingContext$Type} from "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IUnbakedGeometry<T extends $IUnbakedGeometry<(T)>> {

 "resolveParents"(arg0: $Function$Type<($ResourceLocation$Type), ($UnbakedModel$Type)>, arg1: $IGeometryBakingContext$Type): void
 "bake"(arg0: $IGeometryBakingContext$Type, arg1: $ModelBaker$Type, arg2: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, arg3: $ModelState$Type, arg4: $ItemOverrides$Type, arg5: $ResourceLocation$Type): $BakedModel
 "getConfigurableComponentNames"(): $Set<(string)>

(arg0: $Function$Type<($ResourceLocation$Type), ($UnbakedModel$Type)>, arg1: $IGeometryBakingContext$Type): void
}

export namespace $IUnbakedGeometry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUnbakedGeometry$Type<T> = ($IUnbakedGeometry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUnbakedGeometry_<T> = $IUnbakedGeometry$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/server/$ServerAboutToStartEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLifecycleEvent, $ServerLifecycleEvent$Type} from "packages/net/minecraftforge/event/server/$ServerLifecycleEvent"

export class $ServerAboutToStartEvent extends $ServerLifecycleEvent {

constructor(arg0: $MinecraftServer$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerAboutToStartEvent$Type = ($ServerAboutToStartEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerAboutToStartEvent_ = $ServerAboutToStartEvent$Type;
}}
declare module "packages/net/minecraftforge/fluids/$FluidStack" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $FluidStack {
static readonly "EMPTY": $FluidStack
static readonly "CODEC": $Codec<($FluidStack)>

constructor(arg0: $FluidStack$Type, arg1: integer)
constructor(arg0: $Fluid$Type, arg1: integer, arg2: $CompoundTag$Type)
constructor(arg0: $Fluid$Type, arg1: integer)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "copy"(): $FluidStack
public "grow"(arg0: integer): void
public "getTag"(): $CompoundTag
public "getDisplayName"(): $Component
public "getTranslationKey"(): string
public static "loadFluidStackFromNBT"(arg0: $CompoundTag$Type): $FluidStack
public "hasTag"(): boolean
public "setTag"(arg0: $CompoundTag$Type): void
public "isFluidEqual"(arg0: $FluidStack$Type): boolean
public "isFluidEqual"(arg0: $ItemStack$Type): boolean
public "getRawFluid"(): $Fluid
public "shrink"(arg0: integer): void
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "getFluid"(): $Fluid
public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public static "readFromPacket"(arg0: $FriendlyByteBuf$Type): $FluidStack
public "getOrCreateTag"(): $CompoundTag
public "getChildTag"(arg0: string): $CompoundTag
public "containsFluid"(arg0: $FluidStack$Type): boolean
public "removeChildTag"(arg0: string): void
public "getAmount"(): integer
public "setAmount"(arg0: integer): void
public "isFluidStackIdentical"(arg0: $FluidStack$Type): boolean
public "getOrCreateChildTag"(arg0: string): $CompoundTag
public static "areFluidStackTagsEqual"(arg0: $FluidStack$Type, arg1: $FluidStack$Type): boolean
get "empty"(): boolean
get "tag"(): $CompoundTag
get "displayName"(): $Component
get "translationKey"(): string
set "tag"(value: $CompoundTag$Type)
get "rawFluid"(): $Fluid
get "fluid"(): $Fluid
get "orCreateTag"(): $CompoundTag
get "amount"(): integer
set "amount"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext$VisibilityData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockGeometryBakingContext$VisibilityData {

constructor()

public "copyFrom"(arg0: $BlockGeometryBakingContext$VisibilityData$Type): void
public "hasCustomVisibility"(arg0: string): boolean
public "isVisible"(arg0: string, arg1: boolean): boolean
public "setVisibilityState"(arg0: string, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$VisibilityData$Type = ($BlockGeometryBakingContext$VisibilityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeometryBakingContext$VisibilityData_ = $BlockGeometryBakingContext$VisibilityData$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeHolderSet" {
import {$IForgeHolderSet$SerializationType, $IForgeHolderSet$SerializationType$Type} from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IForgeHolderSet<T> {

 "addInvalidationListener"(arg0: $Runnable$Type): void
 "serializationType"(): $IForgeHolderSet$SerializationType
}

export namespace $IForgeHolderSet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeHolderSet$Type<T> = ($IForgeHolderSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeHolderSet_<T> = $IForgeHolderSet$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeTagAppender" {
import {$TagsProvider$TagAppender, $TagsProvider$TagAppender$Type} from "packages/net/minecraft/data/tags/$TagsProvider$TagAppender"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IForgeTagAppender<T> {

 "remove"(arg0: $TagKey$Type<(T)>, ...arg1: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceLocation$Type, ...arg1: ($ResourceLocation$Type)[]): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceKey$Type<(T)>, ...arg1: ($ResourceKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $TagKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceLocation$Type): $TagsProvider$TagAppender<(T)>
 "replace"(arg0: boolean): $TagsProvider$TagAppender<(T)>
 "replace"(): $TagsProvider$TagAppender<(T)>
 "addOptionalTag"(arg0: $TagKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "addOptionalTags"(...arg0: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "addTags"(...arg0: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
}

export namespace $IForgeTagAppender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeTagAppender$Type<T> = ($IForgeTagAppender<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeTagAppender_<T> = $IForgeTagAppender$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/util/$Lazy" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $Lazy<T> extends $Supplier<(T)> {

 "get"(): T

(arg0: $Supplier$Type<(T)>): $Lazy<(T)>
}

export namespace $Lazy {
function of<T>(arg0: $Supplier$Type<(T)>): $Lazy<(T)>
function concurrentOf<T>(arg0: $Supplier$Type<(T)>): $Lazy<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lazy$Type<T> = ($Lazy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lazy_<T> = $Lazy$Type<(T)>;
}}
declare module "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IdMappingEvent$IdRemapping extends $Record {

constructor(currId: integer, newId: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "newId"(): integer
public "currId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdMappingEvent$IdRemapping$Type = ($IdMappingEvent$IdRemapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdMappingEvent$IdRemapping_ = $IdMappingEvent$IdRemapping$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder" {
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$ModelBuilder$TransformsBuilder$TransformVecBuilder, $ModelBuilder$TransformsBuilder$TransformVecBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder$TransformVecBuilder"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$TransformsBuilder {

constructor(arg0: $ModelBuilder$Type<(any)>)

public "end"(): T
public "transform"(arg0: $ItemDisplayContext$Type): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$TransformsBuilder$Type = ($ModelBuilder$TransformsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$TransformsBuilder_ = $ModelBuilder$TransformsBuilder$Type;
}}
declare module "packages/net/minecraftforge/event/server/$ServerStartingEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLifecycleEvent, $ServerLifecycleEvent$Type} from "packages/net/minecraftforge/event/server/$ServerLifecycleEvent"

export class $ServerStartingEvent extends $ServerLifecycleEvent {

constructor(arg0: $MinecraftServer$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStartingEvent$Type = ($ServerStartingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStartingEvent_ = $ServerStartingEvent$Type;
}}
declare module "packages/net/minecraftforge/client/event/$InputEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"

export class $InputEvent extends $Event {


public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$Type = ($InputEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputEvent_ = $InputEvent$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/$IShapedRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IShapedRecipe<T extends $Container> extends $Recipe<(T)> {

 "getRecipeWidth"(): integer
 "getRecipeHeight"(): integer
 "assemble"(arg0: T, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: T, arg1: $Level$Type): boolean
 "getId"(): $ResourceLocation
 "isSpecial"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "isIncomplete"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "setGroup"(group: string): void
 "getGroup"(): string
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getType"(): $ResourceLocation
}

export namespace $IShapedRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShapedRecipe$Type<T> = ($IShapedRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShapedRecipe_<T> = $IShapedRecipe$Type<(T)>;
}}
declare module "packages/net/minecraftforge/registries/$RegisterEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RegisterEvent$RegisterHelper, $RegisterEvent$RegisterHelper$Type} from "packages/net/minecraftforge/registries/$RegisterEvent$RegisterHelper"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegisterEvent extends $Event implements $IModBusEvent {

constructor()

public "toString"(): string
public "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: $Consumer$Type<($RegisterEvent$RegisterHelper$Type<(T)>)>): void
public "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: $ResourceLocation$Type, arg2: $Supplier$Type<(T)>): void
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
public "getRegistryKey"(): $ResourceKey<(any)>
public "getVanillaRegistry"<T>(): $Registry<(T)>
public "getForgeRegistry"<T>(): $IForgeRegistry<(T)>
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "registryKey"(): $ResourceKey<(any)>
get "vanillaRegistry"(): $Registry<(T)>
get "forgeRegistry"(): $IForgeRegistry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterEvent$Type = ($RegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterEvent_ = $RegisterEvent$Type;
}}
declare module "packages/net/minecraftforge/common/data/$ExistingFileHelper$IResourceType" {
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"

export interface $ExistingFileHelper$IResourceType {

 "getPrefix"(): string
 "getSuffix"(): string
 "getPackType"(): $PackType
}

export namespace $ExistingFileHelper$IResourceType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$IResourceType$Type = ($ExistingFileHelper$IResourceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExistingFileHelper$IResourceType_ = $ExistingFileHelper$IResourceType$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModFileScanData$AnnotationData, $ModFileScanData$AnnotationData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData$AnnotationData"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"
import {$ModFileScanData$ClassData, $ModFileScanData$ClassData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData$ClassData"
import {$IModFileInfo, $IModFileInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModFileScanData {

constructor()

public "getClasses"(): $Set<($ModFileScanData$ClassData)>
public "getAnnotations"(): $Set<($ModFileScanData$AnnotationData)>
public "getIModInfoData"(): $List<($IModFileInfo)>
public "addLanguageLoader"(arg0: $Map$Type<(string), (any)>): void
public static "interestingAnnotations"(): $Predicate<($Type)>
public "addModFileInfo"(arg0: $IModFileInfo$Type): void
public "getTargets"(): $Map<(string), (any)>
get "classes"(): $Set<($ModFileScanData$ClassData)>
get "annotations"(): $Set<($ModFileScanData$AnnotationData)>
get "iModInfoData"(): $List<($IModFileInfo)>
get "targets"(): $Map<(string), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$Type = ($ModFileScanData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData_ = $ModFileScanData$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ItemModelProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ItemModelBuilder, $ItemModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ModelProvider, $ModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ModelProvider"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModelProvider extends $ModelProvider<($ItemModelBuilder)> {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type)

public "basicItem"(arg0: $ResourceLocation$Type): $ItemModelBuilder
public "basicItem"(arg0: $Item$Type): $ItemModelBuilder
public "getName"(): string
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelProvider$Type = ($ItemModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelProvider_ = $ItemModelProvider$Type;
}}
declare module "packages/net/minecraftforge/client/event/$ModelEvent$BakingCompleted" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$ModelEvent, $ModelEvent$Type} from "packages/net/minecraftforge/client/event/$ModelEvent"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBakery, $ModelBakery$Type} from "packages/net/minecraft/client/resources/model/$ModelBakery"
import {$ModelManager, $ModelManager$Type} from "packages/net/minecraft/client/resources/model/$ModelManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelEvent$BakingCompleted extends $ModelEvent implements $IModBusEvent {

constructor()
constructor(arg0: $ModelManager$Type, arg1: $Map$Type<($ResourceLocation$Type), ($BakedModel$Type)>, arg2: $ModelBakery$Type)

public "getListenerList"(): $ListenerList
public "getModels"(): $Map<($ResourceLocation), ($BakedModel)>
public "getModelBakery"(): $ModelBakery
public "getModelManager"(): $ModelManager
get "listenerList"(): $ListenerList
get "models"(): $Map<($ResourceLocation), ($BakedModel)>
get "modelBakery"(): $ModelBakery
get "modelManager"(): $ModelManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$BakingCompleted$Type = ($ModelEvent$BakingCompleted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelEvent$BakingCompleted_ = $ModelEvent$BakingCompleted$Type;
}}
declare module "packages/net/minecraftforge/energy/$IEnergyStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEnergyStorage {

 "canReceive"(): boolean
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "getEnergyStored"(): integer
 "getMaxEnergyStored"(): integer
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "canExtract"(): boolean
}

export namespace $IEnergyStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorage$Type = ($IEnergyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorage_ = $IEnergyStorage$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingKnockBackEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingKnockBackEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: float, arg2: double, arg3: double)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "setStrength"(arg0: float): void
public "getStrength"(): float
public "getOriginalStrength"(): float
public "getRatioZ"(): double
public "getRatioX"(): double
public "getOriginalRatioX"(): double
public "setRatioZ"(arg0: double): void
public "setRatioX"(arg0: double): void
public "getOriginalRatioZ"(): double
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
set "strength"(value: float)
get "strength"(): float
get "originalStrength"(): float
get "ratioZ"(): double
get "ratioX"(): double
get "originalRatioX"(): double
set "ratioZ"(value: double)
set "ratioX"(value: double)
get "originalRatioZ"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingKnockBackEvent$Type = ($LivingKnockBackEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingKnockBackEvent_ = $LivingKnockBackEvent$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$ClearCallback<V> {

 "onClear"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void
}

export namespace $IForgeRegistry$ClearCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$ClearCallback$Type<V> = ($IForgeRegistry$ClearCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$ClearCallback_<V> = $IForgeRegistry$ClearCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IGenericEvent" {
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export interface $IGenericEvent<T> {

 "getGenericType"(): $Type

(): $Type
}

export namespace $IGenericEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenericEvent$Type<T> = ($IGenericEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGenericEvent_<T> = $IGenericEvent$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/util/$LazyOptional" {
import {$NonNullFunction, $NonNullFunction$Type} from "packages/net/minecraftforge/common/util/$NonNullFunction"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$NonNullPredicate, $NonNullPredicate$Type} from "packages/net/minecraftforge/common/util/$NonNullPredicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"

export class $LazyOptional<T> {


public "cast"<X>(): $LazyOptional<(X)>
public "map"<U>(arg0: $NonNullFunction$Type<(any), (any)>): $Optional<(U)>
public static "of"<T>(arg0: $NonNullSupplier$Type<(T)>): $LazyOptional<(T)>
public "filter"(arg0: $NonNullPredicate$Type<(any)>): $Optional<(T)>
public static "empty"<T>(): $LazyOptional<(T)>
public "resolve"(): $Optional<(T)>
public "isPresent"(): boolean
public "orElse"(arg0: T): T
public "orElseThrow"<X extends $Throwable>(arg0: $NonNullSupplier$Type<(any)>): T
public "orElseGet"(arg0: $NonNullSupplier$Type<(any)>): T
public "ifPresent"(arg0: $NonNullConsumer$Type<(any)>): void
public "invalidate"(): void
public "removeListener"(arg0: $NonNullConsumer$Type<($LazyOptional$Type<(T)>)>): void
public "lazyMap"<U>(arg0: $NonNullFunction$Type<(any), (any)>): $LazyOptional<(U)>
public "addListener"(arg0: $NonNullConsumer$Type<($LazyOptional$Type<(T)>)>): void
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyOptional$Type<T> = ($LazyOptional<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyOptional_<T> = $LazyOptional$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/$IModStateTransition$EventGenerator" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModStateTransition$EventGenerator<T extends ($Event) & ($IModBusEvent)> extends $Function<($ModContainer), (T)> {

 "apply"(arg0: $ModContainer$Type): $ModContainer
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($ModContainer)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($ModContainer), (V)>

(arg0: $Function$Type<($ModContainer$Type), (FN)>): $IModStateTransition$EventGenerator<(FN)>
}

export namespace $IModStateTransition$EventGenerator {
function fromFunction<FN>(arg0: $Function$Type<($ModContainer$Type), (FN)>): $IModStateTransition$EventGenerator<(FN)>
function identity<T>(): $Function<($ModContainer), ($ModContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModStateTransition$EventGenerator$Type<T> = ($IModStateTransition$EventGenerator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModStateTransition$EventGenerator_<T> = $IModStateTransition$EventGenerator$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/config/$ModConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$IConfigSpec, $IConfigSpec$Type} from "packages/net/minecraftforge/fml/config/$IConfigSpec"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$ConfigFileTypeHandler, $ConfigFileTypeHandler$Type} from "packages/net/minecraftforge/fml/config/$ConfigFileTypeHandler"
import {$ModConfig$Type, $ModConfig$Type$Type} from "packages/net/minecraftforge/fml/config/$ModConfig$Type"
import {$CommentedConfig, $CommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$CommentedConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig {

constructor(arg0: $ModConfig$Type$Type, arg1: $IConfigSpec$Type<(any)>, arg2: $ModContainer$Type, arg3: string)
constructor(arg0: $ModConfig$Type$Type, arg1: $IConfigSpec$Type<(any)>, arg2: $ModContainer$Type)

public "save"(): void
public "getType"(): $ModConfig$Type
public "getFileName"(): string
public "getHandler"(): $ConfigFileTypeHandler
public "getModId"(): string
public "getConfigData"(): $CommentedConfig
public "getFullPath"(): $Path
public "acceptSyncedConfig"(arg0: (byte)[]): void
public "getSpec"<T extends $IConfigSpec<(T)>>(): $IConfigSpec<(T)>
get "type"(): $ModConfig$Type
get "fileName"(): string
get "handler"(): $ConfigFileTypeHandler
get "modId"(): string
get "configData"(): $CommentedConfig
get "fullPath"(): $Path
get "spec"(): $IConfigSpec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$Type = ($ModConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfig_ = $ModConfig$Type;
}}
declare module "packages/net/minecraftforge/fluids/$FluidType" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "toString"(): string
public "move"(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
public "getDescription"(arg0: $FluidStack$Type): $Component
public "getDescription"(): $Component
public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
public "getBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: boolean): $BlockPathTypes
public "canHydrate"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
public "canHydrate"(arg0: $FluidStack$Type): boolean
public "canHydrate"(arg0: $Entity$Type): boolean
public "getAdjacentBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
public "isAir"(): boolean
public "getBucket"(arg0: $FluidStack$Type): $ItemStack
public "getDescriptionId"(arg0: $FluidStack$Type): string
public "getDescriptionId"(): string
public "shouldUpdateWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type, arg2: $Entity$Type): boolean
public "onVaporize"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $FluidStack$Type): void
public "isVaporizedOnPlacement"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidStack$Type): boolean
public "getLightLevel"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getLightLevel"(arg0: $FluidStack$Type): integer
public "getLightLevel"(): integer
public "getStateForPlacement"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidStack$Type): $FluidState
public "canDrownIn"(arg0: $LivingEntity$Type): boolean
public "setItemMovement"(arg0: $ItemEntity$Type): void
public "canRideVehicleUnder"(arg0: $Entity$Type, arg1: $Entity$Type): boolean
public "getFallDistanceModifier"(arg0: $Entity$Type): float
public "getViscosity"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getViscosity"(arg0: $FluidStack$Type): integer
public "getViscosity"(): integer
public "isLighterThanAir"(): boolean
public "getRarity"(arg0: $FluidStack$Type): $Rarity
public "getRarity"(): $Rarity
public "getTemperature"(arg0: $FluidStack$Type): integer
public "getTemperature"(): integer
public "getTemperature"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidStack$Type): boolean
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): boolean
public "getDensity"(): integer
public "getDensity"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getDensity"(arg0: $FluidStack$Type): integer
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "canConvertToSource"(arg0: $FluidStack$Type): boolean
public "supportsBoating"(arg0: $Boat$Type): boolean
public "supportsBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
public "isVanilla"(): boolean
public "motionScale"(arg0: $Entity$Type): double
public "canPushEntity"(arg0: $Entity$Type): boolean
public "canSwim"(arg0: $Entity$Type): boolean
public "canExtinguish"(arg0: $Entity$Type): boolean
public "canExtinguish"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getBlockForFluidState"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): $BlockState
public "getRenderPropertiesInternal"(): any
public "getSound"(arg0: $FluidStack$Type, arg1: $SoundAction$Type): $SoundEvent
public "getSound"(arg0: $Entity$Type, arg1: $SoundAction$Type): $SoundEvent
public "getSound"(arg0: $SoundAction$Type): $SoundEvent
public "getSound"(arg0: $Player$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SoundAction$Type): $SoundEvent
get "description"(): $Component
get "air"(): boolean
get "descriptionId"(): string
get "lightLevel"(): integer
set "itemMovement"(value: $ItemEntity$Type)
get "viscosity"(): integer
get "lighterThanAir"(): boolean
get "rarity"(): $Rarity
get "temperature"(): integer
get "density"(): integer
get "vanilla"(): boolean
get "renderPropertiesInternal"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$Type = ($FluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType_ = $FluidType$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder$PartialBlockstate" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$VariantBlockStateBuilder, $VariantBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ConfiguredModel$Builder, $ConfiguredModel$Builder$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import {$SortedMap, $SortedMap$Type} from "packages/java/util/$SortedMap"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $VariantBlockStateBuilder$PartialBlockstate implements $Predicate<($BlockState)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $BlockState$Type): boolean
public "with"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, arg1: T): $VariantBlockStateBuilder$PartialBlockstate
public "modelForState"(): $ConfiguredModel$Builder<($VariantBlockStateBuilder)>
public "partialState"(): $VariantBlockStateBuilder$PartialBlockstate
public "setModels"(...arg0: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder
public "addModels"(...arg0: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder$PartialBlockstate
public "getOwner"(): $Block
public static "comparingByProperties"(): $Comparator<($VariantBlockStateBuilder$PartialBlockstate)>
public "getSetStates"(): $SortedMap<($Property<(any)>), ($Comparable<(any)>)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
set "models"(value: ($ConfiguredModel$Type)[])
get "owner"(): $Block
get "setStates"(): $SortedMap<($Property<(any)>), ($Comparable<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantBlockStateBuilder$PartialBlockstate$Type = ($VariantBlockStateBuilder$PartialBlockstate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantBlockStateBuilder$PartialBlockstate_ = $VariantBlockStateBuilder$PartialBlockstate$Type;
}}
declare module "packages/net/minecraftforge/entity/$PartEntity" {
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PartEntity<T extends $Entity> extends $Entity {
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: T)

public "getParent"(): T
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "parent"(): T
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartEntity$Type<T> = ($PartEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartEntity_<T> = $PartEntity$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$StructureSettingsBuilder$StructureSpawnOverrideBuilder" {
import {$StructureSpawnOverride, $StructureSpawnOverride$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StructureSpawnOverride$BoundingBoxType, $StructureSpawnOverride$BoundingBoxType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride$BoundingBoxType"

export class $StructureSettingsBuilder$StructureSpawnOverrideBuilder {


public static "copyOf"(arg0: $StructureSpawnOverride$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getBoundingBox"(): $StructureSpawnOverride$BoundingBoxType
public "removeSpawn"(arg0: $MobSpawnSettings$SpawnerData$Type): void
public "addSpawn"(arg0: $MobSpawnSettings$SpawnerData$Type): void
public "setBoundingBox"(arg0: $StructureSpawnOverride$BoundingBoxType$Type): void
public "getSpawns"(): $List<($MobSpawnSettings$SpawnerData)>
public "build"(): $StructureSpawnOverride
get "boundingBox"(): $StructureSpawnOverride$BoundingBoxType
set "boundingBox"(value: $StructureSpawnOverride$BoundingBoxType$Type)
get "spawns"(): $List<($MobSpawnSettings$SpawnerData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder$Type = ($StructureSettingsBuilder$StructureSpawnOverrideBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder_ = $StructureSettingsBuilder$StructureSpawnOverrideBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$ValueSpec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeConfigSpec$Range, $ForgeConfigSpec$Range$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Range"

export class $ForgeConfigSpec$ValueSpec {


public "test"(arg0: any): boolean
public "getDefault"(): any
public "getComment"(): string
public "getRange"<V extends $Comparable<(any)>>(): $ForgeConfigSpec$Range<(V)>
public "getClazz"(): $Class<(any)>
public "getTranslationKey"(): string
public "correct"(arg0: any): any
public "needsWorldRestart"(): boolean
get "default"(): any
get "comment"(): string
get "range"(): $ForgeConfigSpec$Range<(V)>
get "clazz"(): $Class<(any)>
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$ValueSpec$Type = ($ForgeConfigSpec$ValueSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$ValueSpec_ = $ForgeConfigSpec$ValueSpec$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingExperienceDropEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingExperienceDropEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $Player$Type, arg2: integer)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getOriginalExperience"(): integer
public "getDroppedExperience"(): integer
public "setDroppedExperience"(arg0: integer): void
public "getAttackingPlayer"(): $Player
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "originalExperience"(): integer
get "droppedExperience"(): integer
set "droppedExperience"(value: integer)
get "attackingPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingExperienceDropEvent$Type = ($LivingExperienceDropEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingExperienceDropEvent_ = $LivingExperienceDropEvent$Type;
}}
declare module "packages/net/minecraftforge/data/event/$GatherDataEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$GatherDataEvent$DataGeneratorConfig, $GatherDataEvent$DataGeneratorConfig$Type} from "packages/net/minecraftforge/data/event/$GatherDataEvent$DataGeneratorConfig"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DataGenerator, $DataGenerator$Type} from "packages/net/minecraft/data/$DataGenerator"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export class $GatherDataEvent extends $Event implements $IModBusEvent {

constructor()
constructor(arg0: $ModContainer$Type, arg1: $DataGenerator$Type, arg2: $GatherDataEvent$DataGeneratorConfig$Type, arg3: $ExistingFileHelper$Type)

public "validate"(): boolean
public "getGenerator"(): $DataGenerator
public "getListenerList"(): $ListenerList
public "getInputs"(): $Collection<($Path)>
public "getExistingFileHelper"(): $ExistingFileHelper
public "isCancelable"(): boolean
public "hasResult"(): boolean
public "getModContainer"(): $ModContainer
public "includeClient"(): boolean
public "includeServer"(): boolean
public "getLookupProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public "includeReports"(): boolean
public "includeDev"(): boolean
get "generator"(): $DataGenerator
get "listenerList"(): $ListenerList
get "inputs"(): $Collection<($Path)>
get "existingFileHelper"(): $ExistingFileHelper
get "cancelable"(): boolean
get "modContainer"(): $ModContainer
get "lookupProvider"(): $CompletableFuture<($HolderLookup$Provider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$Type = ($GatherDataEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatherDataEvent_ = $GatherDataEvent$Type;
}}
declare module "packages/net/minecraftforge/client/$ChunkRenderTypeSet" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $ChunkRenderTypeSet implements $Iterable<($RenderType)> {


public "isEmpty"(): boolean
public "iterator"(): $Iterator<(any)>
public static "of"(arg0: $Collection$Type<($RenderType$Type)>): $ChunkRenderTypeSet
public static "of"(...arg0: ($RenderType$Type)[]): $ChunkRenderTypeSet
public "contains"(arg0: $RenderType$Type): boolean
public "asList"(): $List<(any)>
public static "all"(): $ChunkRenderTypeSet
public static "union"(...arg0: ($ChunkRenderTypeSet$Type)[]): $ChunkRenderTypeSet
public static "union"(arg0: $Iterable$Type<(any)>): $ChunkRenderTypeSet
public static "union"(arg0: $Collection$Type<($ChunkRenderTypeSet$Type)>): $ChunkRenderTypeSet
public static "intersection"(arg0: $Iterable$Type<(any)>): $ChunkRenderTypeSet
public static "intersection"(...arg0: ($ChunkRenderTypeSet$Type)[]): $ChunkRenderTypeSet
public static "intersection"(arg0: $Collection$Type<($ChunkRenderTypeSet$Type)>): $ChunkRenderTypeSet
public static "none"(): $ChunkRenderTypeSet
public "spliterator"(): $Spliterator<($RenderType)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<any>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderTypeSet$Type = ($ChunkRenderTypeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderTypeSet_ = $ChunkRenderTypeSet$Type;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeFlowingFluid$Properties {

constructor(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<(any)>, arg2: $Supplier$Type<(any)>)

public "block"(arg0: $Supplier$Type<(any)>): $ForgeFlowingFluid$Properties
public "bucket"(arg0: $Supplier$Type<(any)>): $ForgeFlowingFluid$Properties
public "explosionResistance"(arg0: float): $ForgeFlowingFluid$Properties
public "tickRate"(arg0: integer): $ForgeFlowingFluid$Properties
public "slopeFindDistance"(arg0: integer): $ForgeFlowingFluid$Properties
public "levelDecreasePerBlock"(arg0: integer): $ForgeFlowingFluid$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Properties$Type = ($ForgeFlowingFluid$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid$Properties_ = $ForgeFlowingFluid$Properties$Type;
}}
declare module "packages/net/minecraftforge/registries/tags/$IReverseTag" {
import {$ITag, $ITag$Type} from "packages/net/minecraftforge/registries/tags/$ITag"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IReverseTag<V> {

 "containsTag"(arg0: $TagKey$Type<(V)>): boolean
 "containsTag"(arg0: $ITag$Type<(V)>): boolean
 "getTagKeys"(): $Stream<($TagKey<(V)>)>
}

export namespace $IReverseTag {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReverseTag$Type<V> = ($IReverseTag<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReverseTag_<V> = $IReverseTag$Type<(V)>;
}}
declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$MissingMappingsEvent$Mapping, $MissingMappingsEvent$Mapping$Type} from "packages/net/minecraftforge/registries/$MissingMappingsEvent$Mapping"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MissingMappingsEvent extends $Event {

constructor(arg0: $ResourceKey$Type<(any)>, arg1: $IForgeRegistry$Type<(any)>, arg2: $Collection$Type<($MissingMappingsEvent$Mapping$Type<(any)>)>)
constructor()

public "getKey"(): $ResourceKey<(any)>
public "getListenerList"(): $ListenerList
public "getRegistry"(): $IForgeRegistry<(any)>
public "isCancelable"(): boolean
public "hasResult"(): boolean
public "getAllMappings"<T>(arg0: $ResourceKey$Type<(any)>): $List<($MissingMappingsEvent$Mapping<(T)>)>
public "getMappings"<T>(arg0: $ResourceKey$Type<(any)>, arg1: string): $List<($MissingMappingsEvent$Mapping<(T)>)>
get "key"(): $ResourceKey<(any)>
get "listenerList"(): $ListenerList
get "registry"(): $IForgeRegistry<(any)>
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingMappingsEvent$Type = ($MissingMappingsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingMappingsEvent_ = $MissingMappingsEvent$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICondition$IContext {

 "getTag"<T>(arg0: $TagKey$Type<(T)>): $Collection<($Holder<(T)>)>
 "getAllTags"<T>(arg0: $ResourceKey$Type<(any)>): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>

(arg0: $TagKey$Type<(T)>): $Collection<($Holder<(T)>)>
}

export namespace $ICondition$IContext {
const EMPTY: $ICondition$IContext
const TAGS_INVALID: $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICondition$IContext$Type = ($ICondition$IContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICondition$IContext_ = $ICondition$IContext$Type;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullPredicate<T> {

 "test"(arg0: T): boolean

(arg0: T): boolean
}

export namespace $NonNullPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullPredicate$Type<T> = ($NonNullPredicate<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullPredicate_<T> = $NonNullPredicate$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullConsumer<T> {

 "accept"(arg0: T): void

(arg0: T): void
}

export namespace $NonNullConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullConsumer$Type<T> = ($NonNullConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullConsumer_<T> = $NonNullConsumer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ILifecycleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILifecycleEvent<R extends $ILifecycleEvent<(any)>> {

 "concrete"(): R
}

export namespace $ILifecycleEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILifecycleEvent$Type<R> = ($ILifecycleEvent<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILifecycleEvent_<R> = $ILifecycleEvent$Type<(R)>;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerEvent$PlayerLoggedInEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"

export class $PlayerEvent$PlayerLoggedInEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type)

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$PlayerLoggedInEvent$Type = ($PlayerEvent$PlayerLoggedInEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEvent$PlayerLoggedInEvent_ = $PlayerEvent$PlayerLoggedInEvent$Type;
}}
declare module "packages/net/minecraftforge/forgespi/locating/$IModFile" {
import {$SecureJar, $SecureJar$Type} from "packages/cpw/mods/jarhandling/$SecureJar"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$IModFile$Type, $IModFile$Type$Type} from "packages/net/minecraftforge/forgespi/locating/$IModFile$Type"
import {$ModFileScanData, $ModFileScanData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"
import {$IModFileInfo, $IModFileInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"
import {$IModLanguageProvider, $IModLanguageProvider$Type} from "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IModProvider, $IModProvider$Type} from "packages/net/minecraftforge/forgespi/locating/$IModProvider"
import {$SecureJar$Status, $SecureJar$Status$Type} from "packages/cpw/mods/jarhandling/$SecureJar$Status"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModFile {

 "findResource"(...arg0: (string)[]): $Path
 "getType"(): $IModFile$Type
 "getFileName"(): string
 "getProvider"(): $IModProvider
 "getFilePath"(): $Path
 "getLoaders"(): $List<($IModLanguageProvider)>
 "getSecureJar"(): $SecureJar
 "getModInfos"(): $List<($IModInfo)>
 "getScanResult"(): $ModFileScanData
 "getModFileInfo"(): $IModFileInfo
 "getSubstitutionMap"(): $Supplier<($Map<(string), (any)>)>
 "setSecurityStatus"(arg0: $SecureJar$Status$Type): void
}

export namespace $IModFile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFile$Type = ($IModFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFile_ = $IModFile$Type;
}}
declare module "packages/net/minecraftforge/client/settings/$IKeyConflictContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IKeyConflictContext {

 "isActive"(): boolean
 "conflicts"(arg0: $IKeyConflictContext$Type): boolean
}

export namespace $IKeyConflictContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyConflictContext$Type = ($IKeyConflictContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyConflictContext_ = $IKeyConflictContext$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkEvent$Context" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$NetworkEvent$PacketDispatcher, $NetworkEvent$PacketDispatcher$Type} from "packages/net/minecraftforge/network/$NetworkEvent$PacketDispatcher"
import {$AttributeKey, $AttributeKey$Type} from "packages/io/netty/util/$AttributeKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Attribute, $Attribute$Type} from "packages/io/netty/util/$Attribute"

export class $NetworkEvent$Context {


public "attr"<T>(arg0: $AttributeKey$Type<(T)>): $Attribute<(T)>
public "getDirection"(): $NetworkDirection
public "getPacketDispatcher"(): $NetworkEvent$PacketDispatcher
public "getSender"(): $ServerPlayer
public "enqueueWork"(arg0: $Runnable$Type): $CompletableFuture<(void)>
public "getPacketHandled"(): boolean
public "getNetworkManager"(): $Connection
public "setPacketHandled"(arg0: boolean): void
get "direction"(): $NetworkDirection
get "packetDispatcher"(): $NetworkEvent$PacketDispatcher
get "sender"(): $ServerPlayer
get "packetHandled"(): boolean
get "networkManager"(): $Connection
set "packetHandled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEvent$Context$Type = ($NetworkEvent$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEvent$Context_ = $NetworkEvent$Context$Type;
}}
declare module "packages/net/minecraftforge/event/entity/$EntityEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityEvent extends $Event {

constructor()
constructor(arg0: $Entity$Type)

public "getEntity"(): $Entity
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "entity"(): $Entity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$Type = ($EntityEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEvent_ = $EntityEvent$Type;
}}
declare module "packages/net/minecraftforge/fml/$InterModComms$IMCMessage" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $InterModComms$IMCMessage extends $Record {

constructor(senderModId: string, modId: string, method: string, messageSupplier: $Supplier$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "method"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getMethod"(): string
public "messageSupplier"(): $Supplier<(any)>
/**
 * 
 * @deprecated
 */
public "getMessageSupplier"<T>(): $Supplier<(T)>
public "modId"(): string
/**
 * 
 * @deprecated
 */
public "getModId"(): string
/**
 * 
 * @deprecated
 */
public "getSenderModId"(): string
public "senderModId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterModComms$IMCMessage$Type = ($InterModComms$IMCMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterModComms$IMCMessage_ = $InterModComms$IMCMessage$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelProperty" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $ModelProperty<T> implements $Predicate<(T)> {

constructor()
constructor(arg0: $Predicate$Type<(T)>)

public "test"(arg0: T): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public "negate"(): $Predicate<(T)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperty$Type<T> = ($ModelProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProperty_<T> = $ModelProperty$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/loading/progress/$Message$MessageType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message$MessageType extends $Enum<($Message$MessageType)> {
static readonly "MC": $Message$MessageType
static readonly "ML": $Message$MessageType
static readonly "LOC": $Message$MessageType
static readonly "MOD": $Message$MessageType


public static "values"(): ($Message$MessageType)[]
public static "valueOf"(arg0: string): $Message$MessageType
public "colour"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$MessageType$Type = (("loc") | ("mod") | ("mc") | ("ml")) | ($Message$MessageType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message$MessageType_ = $Message$MessageType$Type;
}}
declare module "packages/net/minecraftforge/network/$HandshakeMessages$LoginIndexedMessage" {
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"

export class $HandshakeMessages$LoginIndexedMessage implements $IntSupplier {


public "getAsInt"(): integer
get "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandshakeMessages$LoginIndexedMessage$Type = ($HandshakeMessages$LoginIndexedMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandshakeMessages$LoginIndexedMessage_ = $HandshakeMessages$LoginIndexedMessage$Type;
}}
declare module "packages/net/minecraftforge/server/command/$EnumArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$EnumArgument, $EnumArgument$Type} from "packages/net/minecraftforge/server/command/$EnumArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$EnumArgument$Info$Template, $EnumArgument$Info$Template$Type} from "packages/net/minecraftforge/server/command/$EnumArgument$Info$Template"

export class $EnumArgument$Info<T extends $Enum<(T)>> implements $ArgumentTypeInfo<($EnumArgument<(T)>), ($EnumArgument$Info$Template<>)> {

constructor()

public "unpack"(arg0: $EnumArgument$Type<(T)>): $EnumArgument$Info$Template<>
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $EnumArgument$Info$Template<>
public "serializeToJson"(arg0: $EnumArgument$Info$Template$Type<>, arg1: $JsonObject$Type): void
public "serializeToNetwork"(arg0: $EnumArgument$Info$Template$Type<>, arg1: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Info$Type<T> = ($EnumArgument$Info<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument$Info_<T> = $EnumArgument$Info$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeCommandSourceStack" {
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

export interface $IForgeCommandSourceStack {

 "getScoreboard"(): $Scoreboard
 "getAdvancement"(arg0: $ResourceLocation$Type): $Advancement
 "getRecipeManager"(): $RecipeManager
 "getUnsidedLevel"(): $Level
}

export namespace $IForgeCommandSourceStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeCommandSourceStack$Type = ($IForgeCommandSourceStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeCommandSourceStack_ = $IForgeCommandSourceStack$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$MultiPartBlockStateBuilder$PartBuilder, $MultiPartBlockStateBuilder$PartBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup {
readonly "conditions": $Multimap<($Property<(any)>), ($Comparable<(any)>)>
readonly "nestedConditionGroups": $List<($MultiPartBlockStateBuilder$PartBuilder$ConditionGroup)>
 "useOr": boolean

constructor(arg0: $MultiPartBlockStateBuilder$PartBuilder$Type)

public "end"(): $MultiPartBlockStateBuilder$PartBuilder
public "nestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "endNestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "useOr"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "condition"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, ...arg1: (T)[]): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup$Type = ($MultiPartBlockStateBuilder$PartBuilder$ConditionGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup_ = $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$EntityEvent, $EntityEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEvent extends $EntityEvent {

constructor()
constructor(arg0: $LivingEntity$Type)

public "getEntity"(): $LivingEntity
public "getListenerList"(): $ListenerList
get "entity"(): $LivingEntity
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEvent$Type = ($LivingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEvent_ = $LivingEvent$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockModelProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$BlockModelBuilder, $BlockModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ModelProvider, $ModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ModelProvider"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockModelProvider extends $ModelProvider<($BlockModelBuilder)> {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type)

public "getName"(): string
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelProvider$Type = ($BlockModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelProvider_ = $BlockModelProvider$Type;
}}
declare module "packages/net/minecraftforge/common/util/$BlockSnapshot" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockSnapshot {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: integer): $BlockSnapshot
public static "create"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockSnapshot
public "getTag"(): $CompoundTag
public "getReplacedBlock"(): $BlockState
public "getLevel"(): $LevelAccessor
public "getCurrentBlock"(): $BlockState
public "restore"(arg0: boolean): boolean
public "restore"(): boolean
public "restore"(arg0: boolean, arg1: boolean): boolean
public "getFlag"(): integer
public "getBlockEntity"(): $BlockEntity
public "getPos"(): $BlockPos
public "restoreToLocation"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: boolean, arg3: boolean): boolean
get "tag"(): $CompoundTag
get "replacedBlock"(): $BlockState
get "level"(): $LevelAccessor
get "currentBlock"(): $BlockState
get "flag"(): integer
get "blockEntity"(): $BlockEntity
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSnapshot$Type = ($BlockSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSnapshot_ = $BlockSnapshot$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeModifier$Phase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BiomeModifier$Phase extends $Enum<($BiomeModifier$Phase)> {
static readonly "BEFORE_EVERYTHING": $BiomeModifier$Phase
static readonly "ADD": $BiomeModifier$Phase
static readonly "REMOVE": $BiomeModifier$Phase
static readonly "MODIFY": $BiomeModifier$Phase
static readonly "AFTER_EVERYTHING": $BiomeModifier$Phase


public static "values"(): ($BiomeModifier$Phase)[]
public static "valueOf"(arg0: string): $BiomeModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$Phase$Type = (("add") | ("modify") | ("before_everything") | ("after_everything") | ("remove")) | ($BiomeModifier$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifier$Phase_ = $BiomeModifier$Phase$Type;
}}
declare module "packages/net/minecraftforge/eventbus/$ListenerList" {
import {$IEventListener, $IEventListener$Type} from "packages/net/minecraftforge/eventbus/api/$IEventListener"
import {$EventPriority, $EventPriority$Type} from "packages/net/minecraftforge/eventbus/api/$EventPriority"

export class $ListenerList {

constructor()
constructor(arg0: $ListenerList$Type)

public "register"(arg0: integer, arg1: $EventPriority$Type, arg2: $IEventListener$Type): void
public "unregister"(arg0: integer, arg1: $IEventListener$Type): void
public "getListeners"(arg0: integer): ($IEventListener)[]
public static "unregisterAll"(arg0: integer, arg1: $IEventListener$Type): void
public static "clearBusID"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListenerList$Type = ($ListenerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListenerList_ = $ListenerList$Type;
}}
declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IFluidHandler$FluidAction extends $Enum<($IFluidHandler$FluidAction)> {
static readonly "EXECUTE": $IFluidHandler$FluidAction
static readonly "SIMULATE": $IFluidHandler$FluidAction


public static "values"(): ($IFluidHandler$FluidAction)[]
public static "valueOf"(arg0: string): $IFluidHandler$FluidAction
public "execute"(): boolean
public "simulate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$FluidAction$Type = (("execute") | ("simulate")) | ($IFluidHandler$FluidAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandler$FluidAction_ = $IFluidHandler$FluidAction$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkDirection" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$NetworkEvent, $NetworkEvent$Type} from "packages/net/minecraftforge/network/$NetworkEvent"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICustomPacket, $ICustomPacket$Type} from "packages/net/minecraftforge/network/$ICustomPacket"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $NetworkDirection extends $Enum<($NetworkDirection)> {
static readonly "PLAY_TO_SERVER": $NetworkDirection
static readonly "PLAY_TO_CLIENT": $NetworkDirection
static readonly "LOGIN_TO_SERVER": $NetworkDirection
static readonly "LOGIN_TO_CLIENT": $NetworkDirection


public static "values"(): ($NetworkDirection)[]
public static "valueOf"(arg0: string): $NetworkDirection
public "reply"(): $NetworkDirection
public "buildPacket"<T extends $Packet<(any)>>(arg0: $Pair$Type<($FriendlyByteBuf$Type), (integer)>, arg1: $ResourceLocation$Type): $ICustomPacket<(T)>
public "getEvent"(arg0: $ICustomPacket$Type<(any)>, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): $NetworkEvent
public "getReceptionSide"(): $LogicalSide
public static "directionFor"<T extends $ICustomPacket<(any)>>(arg0: $Class$Type<(T)>): $NetworkDirection
public "getOriginationSide"(): $LogicalSide
get "receptionSide"(): $LogicalSide
get "originationSide"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDirection$Type = (("play_to_server") | ("login_to_client") | ("play_to_client") | ("login_to_server")) | ($NetworkDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkDirection_ = $NetworkDirection$Type;
}}
declare module "packages/net/minecraftforge/registries/tags/$ITagManager" {
import {$ITag, $ITag$Type} from "packages/net/minecraftforge/registries/tags/$ITag"
import {$IReverseTag, $IReverseTag$Type} from "packages/net/minecraftforge/registries/tags/$IReverseTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $ITagManager<V> extends $Iterable<($ITag<(V)>)> {

 "stream"(): $Stream<($ITag<(V)>)>
 "getTag"(arg0: $TagKey$Type<(V)>): $ITag<(V)>
 "createTagKey"(arg0: $ResourceLocation$Type): $TagKey<(V)>
 "getTagNames"(): $Stream<($TagKey<(V)>)>
 "getReverseTag"(arg0: V): $Optional<($IReverseTag<(V)>)>
 "isKnownTagName"(arg0: $TagKey$Type<(V)>): boolean
 "createOptionalTagKey"(arg0: $ResourceLocation$Type, arg1: $Set$Type<(any)>): $TagKey<(V)>
 "addOptionalTagDefaults"(arg0: $TagKey$Type<(V)>, arg1: $Set$Type<(any)>): void
 "iterator"(): $Iterator<($ITag<(V)>)>
 "spliterator"(): $Spliterator<($ITag<(V)>)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $ITagManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagManager$Type<V> = ($ITagManager<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITagManager_<V> = $ITagManager$Type<(V)>;
}}
declare module "packages/net/minecraftforge/event/entity/$EntityEvent$Size" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$EntityEvent, $EntityEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityEvent"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * 
 * @deprecated
 */
export class $EntityEvent$Size extends $EntityEvent {

constructor()
constructor(arg0: $Entity$Type, arg1: $Pose$Type, arg2: $EntityDimensions$Type, arg3: $EntityDimensions$Type, arg4: float, arg5: float)
constructor(arg0: $Entity$Type, arg1: $Pose$Type, arg2: $EntityDimensions$Type, arg3: float)
constructor(arg0: $Entity$Type, arg1: $Pose$Type, arg2: $EntityDimensions$Type)

public "getListenerList"(): $ListenerList
public "getNewSize"(): $EntityDimensions
public "getNewEyeHeight"(): float
public "getOldSize"(): $EntityDimensions
public "getOldEyeHeight"(): float
public "getPose"(): $Pose
public "getOriginalSize"(): $EntityDimensions
public "setNewSize"(arg0: $EntityDimensions$Type): void
public "setNewSize"(arg0: $EntityDimensions$Type, arg1: boolean): void
public "setNewEyeHeight"(arg0: float): void
get "listenerList"(): $ListenerList
get "newSize"(): $EntityDimensions
get "newEyeHeight"(): float
get "oldSize"(): $EntityDimensions
get "oldEyeHeight"(): float
get "pose"(): $Pose
get "originalSize"(): $EntityDimensions
set "newSize"(value: $EntityDimensions$Type)
set "newEyeHeight"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$Size$Type = ($EntityEvent$Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEvent$Size_ = $EntityEvent$Size$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ConfiguredModel" {
import {$ConfiguredModel$Builder, $ConfiguredModel$Builder$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ConfiguredModel {
static readonly "DEFAULT_WEIGHT": integer
readonly "model": $ModelFile
readonly "rotationX": integer
readonly "rotationY": integer
readonly "uvLock": boolean
readonly "weight": integer

constructor(arg0: $ModelFile$Type)
constructor(arg0: $ModelFile$Type, arg1: integer, arg2: integer, arg3: boolean)
constructor(arg0: $ModelFile$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: integer)

public static "builder"(): $ConfiguredModel$Builder<(any)>
public static "allYRotations"(arg0: $ModelFile$Type, arg1: integer, arg2: boolean): ($ConfiguredModel)[]
public static "allYRotations"(arg0: $ModelFile$Type, arg1: integer, arg2: boolean, arg3: integer): ($ConfiguredModel)[]
public static "allRotations"(arg0: $ModelFile$Type, arg1: boolean, arg2: integer): ($ConfiguredModel)[]
public static "allRotations"(arg0: $ModelFile$Type, arg1: boolean): ($ConfiguredModel)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredModel$Type = ($ConfiguredModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredModel_ = $ConfiguredModel$Type;
}}
declare module "packages/net/minecraftforge/fml/$ModLoadingStage" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$DeferredWorkQueue, $DeferredWorkQueue$Type} from "packages/net/minecraftforge/fml/$DeferredWorkQueue"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLoadingStage extends $Enum<($ModLoadingStage)> {
static readonly "ERROR": $ModLoadingStage
static readonly "VALIDATE": $ModLoadingStage
static readonly "CONSTRUCT": $ModLoadingStage
static readonly "COMMON_SETUP": $ModLoadingStage
static readonly "SIDED_SETUP": $ModLoadingStage
static readonly "ENQUEUE_IMC": $ModLoadingStage
static readonly "PROCESS_IMC": $ModLoadingStage
static readonly "COMPLETE": $ModLoadingStage
static readonly "DONE": $ModLoadingStage


public static "values"(): ($ModLoadingStage)[]
public static "valueOf"(arg0: string): $ModLoadingStage
public "getDeferredWorkQueue"(): $DeferredWorkQueue
public "currentState"(arg0: $Throwable$Type): $ModLoadingStage
get "deferredWorkQueue"(): $DeferredWorkQueue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModLoadingStage$Type = (("sided_setup") | ("enqueue_imc") | ("process_imc") | ("construct") | ("error") | ("common_setup") | ("complete") | ("done") | ("validate")) | ($ModLoadingStage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModLoadingStage_ = $ModLoadingStage$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelFile$ExistingModelFile" {
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ModelFile$ExistingModelFile extends $ModelFile {

constructor(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$ExistingModelFile$Type = ($ModelFile$ExistingModelFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$ExistingModelFile_ = $ModelFile$ExistingModelFile$Type;
}}
declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent$Mapping" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MissingMappingsEvent$Mapping<T> implements $Comparable<($MissingMappingsEvent$Mapping<(T)>)> {

constructor(arg0: $IForgeRegistry$Type<(T)>, arg1: $IForgeRegistry$Type<(T)>, arg2: $ResourceLocation$Type, arg3: integer)

public "compareTo"(arg0: $MissingMappingsEvent$Mapping$Type<(T)>): integer
public "getKey"(): $ResourceLocation
public "getId"(): integer
public "fail"(): void
public "ignore"(): void
public "warn"(): void
public "getRegistry"(): $IForgeRegistry<(T)>
public "remap"(arg0: T): void
get "key"(): $ResourceLocation
get "id"(): integer
get "registry"(): $IForgeRegistry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingMappingsEvent$Mapping$Type<T> = ($MissingMappingsEvent$Mapping<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingMappingsEvent$Mapping_<T> = $MissingMappingsEvent$Mapping$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/loading/progress/$ProgressMeter" {
import {$Message, $Message$Type} from "packages/net/minecraftforge/fml/loading/progress/$Message"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ProgressMeter {

constructor(arg0: string, arg1: integer, arg2: integer, arg3: $Message$Type)

public "name"(): string
public "increment"(): void
public "current"(): integer
public "complete"(): void
public "label"(arg0: string): void
public "label"(): $Message
public "steps"(): integer
public "progress"(): float
public "setAbsolute"(arg0: integer): void
set "absolute"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressMeter$Type = ($ProgressMeter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressMeter_ = $ProgressMeter$Type;
}}
declare module "packages/net/minecraftforge/client/event/$ModelEvent$ModifyBakingResult" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$ModelEvent, $ModelEvent$Type} from "packages/net/minecraftforge/client/event/$ModelEvent"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBakery, $ModelBakery$Type} from "packages/net/minecraft/client/resources/model/$ModelBakery"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelEvent$ModifyBakingResult extends $ModelEvent implements $IModBusEvent {

constructor()
constructor(arg0: $Map$Type<($ResourceLocation$Type), ($BakedModel$Type)>, arg1: $ModelBakery$Type)

public "getListenerList"(): $ListenerList
public "getModels"(): $Map<($ResourceLocation), ($BakedModel)>
public "getModelBakery"(): $ModelBakery
get "listenerList"(): $ListenerList
get "models"(): $Map<($ResourceLocation), ($BakedModel)>
get "modelBakery"(): $ModelBakery
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$ModifyBakingResult$Type = ($ModelEvent$ModifyBakingResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelEvent$ModifyBakingResult_ = $ModelEvent$ModifyBakingResult$Type;
}}
declare module "packages/net/minecraftforge/fml/$LogicalSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LogicalSide extends $Enum<($LogicalSide)> {
static readonly "CLIENT": $LogicalSide
static readonly "SERVER": $LogicalSide


public static "values"(): ($LogicalSide)[]
public static "valueOf"(arg0: string): $LogicalSide
public "isClient"(): boolean
public "isServer"(): boolean
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicalSide$Type = (("server") | ("client")) | ($LogicalSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicalSide_ = $LogicalSide$Type;
}}
declare module "packages/net/minecraftforge/data/event/$GatherDataEvent$DataGeneratorConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DataGenerator, $DataGenerator$Type} from "packages/net/minecraft/data/$DataGenerator"

export class $GatherDataEvent$DataGeneratorConfig {

constructor(arg0: $Set$Type<(string)>, arg1: $Path$Type, arg2: $Collection$Type<($Path$Type)>, arg3: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean)

public "getInputs"(): $Collection<($Path)>
public "makeGenerator"(arg0: $Function$Type<($Path$Type), ($Path$Type)>, arg1: boolean): $DataGenerator
public "isFlat"(): boolean
public "runAll"(): void
public "getMods"(): $Set<(string)>
get "inputs"(): $Collection<($Path)>
get "flat"(): boolean
get "mods"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$DataGeneratorConfig$Type = ($GatherDataEvent$DataGeneratorConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatherDataEvent$DataGeneratorConfig_ = $GatherDataEvent$DataGeneratorConfig$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegisterEvent$RegisterHelper" {
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegisterEvent$RegisterHelper<T> {

 "register"(arg0: string, arg1: T): void
 "register"(arg0: $ResourceKey$Type<(T)>, arg1: T): void
 "register"(arg0: $ResourceLocation$Type, arg1: T): void

(arg0: string, arg1: T): void
}

export namespace $RegisterEvent$RegisterHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterEvent$RegisterHelper$Type<T> = ($RegisterEvent$RegisterHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterEvent$RegisterHelper_<T> = $RegisterEvent$RegisterHelper$Type<(T)>;
}}
declare module "packages/net/minecraftforge/network/$HandshakeMessages$S2CRegistry" {
import {$HandshakeMessages$LoginIndexedMessage, $HandshakeMessages$LoginIndexedMessage$Type} from "packages/net/minecraftforge/network/$HandshakeMessages$LoginIndexedMessage"
import {$ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $HandshakeMessages$S2CRegistry extends $HandshakeMessages$LoginIndexedMessage {

constructor(arg0: $ResourceLocation$Type, arg1: $ForgeRegistry$Snapshot$Type)

public static "decode"(arg0: $FriendlyByteBuf$Type): $HandshakeMessages$S2CRegistry
public "getRegistryName"(): $ResourceLocation
public "getSnapshot"(): $ForgeRegistry$Snapshot
public "hasSnapshot"(): boolean
get "registryName"(): $ResourceLocation
get "snapshot"(): $ForgeRegistry$Snapshot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandshakeMessages$S2CRegistry$Type = ($HandshakeMessages$S2CRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandshakeMessages$S2CRegistry_ = $HandshakeMessages$S2CRegistry$Type;
}}
declare module "packages/net/minecraftforge/client/$RenderTypeGroup" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderTypeGroup extends $Record {
static "EMPTY": $RenderTypeGroup

constructor(block: $RenderType$Type, entity: $RenderType$Type, entityFabulous: $RenderType$Type)
constructor(arg0: $RenderType$Type, arg1: $RenderType$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "block"(): $RenderType
public "entity"(): $RenderType
public "entityFabulous"(): $RenderType
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeGroup$Type = ($RenderTypeGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeGroup_ = $RenderTypeGroup$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$FaceRotation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ModelBuilder$FaceRotation extends $Enum<($ModelBuilder$FaceRotation)> {
static readonly "ZERO": $ModelBuilder$FaceRotation
static readonly "CLOCKWISE_90": $ModelBuilder$FaceRotation
static readonly "UPSIDE_DOWN": $ModelBuilder$FaceRotation
static readonly "COUNTERCLOCKWISE_90": $ModelBuilder$FaceRotation


public static "values"(): ($ModelBuilder$FaceRotation)[]
public static "valueOf"(arg0: string): $ModelBuilder$FaceRotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$FaceRotation$Type = (("zero") | ("clockwise_90") | ("counterclockwise_90") | ("upside_down")) | ($ModelBuilder$FaceRotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$FaceRotation_ = $ModelBuilder$FaceRotation$Type;
}}
declare module "packages/net/minecraftforge/network/$IContainerFactory" {
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $IContainerFactory<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<(T)> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T
 "create"(arg0: integer, arg1: $Inventory$Type): T

(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T
}

export namespace $IContainerFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerFactory$Type<T> = ($IContainerFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerFactory_<T> = $IContainerFactory$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $CustomLoaderBuilder<T extends $ModelBuilder<(T)>> {


public "end"(): T
public "toJson"(arg0: $JsonObject$Type): $JsonObject
public "visibility"(arg0: string, arg1: boolean): $CustomLoaderBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomLoaderBuilder$Type<T> = ($CustomLoaderBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomLoaderBuilder_<T> = $CustomLoaderBuilder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/util/$FakePlayer" {
import {$ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$Type} from "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ServerPlayerGameMode, $ServerPlayerGameMode$Type} from "packages/net/minecraft/server/level/$ServerPlayerGameMode"
import {$FishingHook, $FishingHook$Type} from "packages/net/minecraft/world/entity/projectile/$FishingHook"
import {$InventoryMenu, $InventoryMenu$Type} from "packages/net/minecraft/world/inventory/$InventoryMenu"
import {$ServerboundClientInformationPacket, $ServerboundClientInformationPacket$Type} from "packages/net/minecraft/network/protocol/game/$ServerboundClientInformationPacket"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FakePlayer extends $ServerPlayer {
 "connection": $ServerGamePacketListenerImpl
readonly "server": $MinecraftServer
readonly "gameMode": $ServerPlayerGameMode
 "containerCounter": integer
 "latency": integer
 "wonGame": boolean
static readonly "PERSISTED_NBT_TAG": string
static readonly "MAX_NAME_LENGTH": integer
static readonly "MAX_HEALTH": integer
static readonly "SLEEP_DURATION": integer
static readonly "WAKE_UP_DURATION": integer
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "CROUCH_BB_HEIGHT": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "STANDING_DIMENSIONS": $EntityDimensions
readonly "inventoryMenu": $InventoryMenu
 "containerMenu": $AbstractContainerMenu
 "oBob": float
 "bob": float
 "takeXpDelay": integer
 "xCloakO": double
 "yCloakO": double
 "zCloakO": double
 "xCloak": double
 "yCloak": double
 "zCloak": double
 "experienceLevel": integer
 "totalExperience": integer
 "experienceProgress": float
 "fishing": $FishingHook
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "effectsDirty": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "xo": double
 "yo": double
 "zo": double
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(arg0: $ServerLevel$Type, arg1: $GameProfile$Type)

public "updateOptions"(arg0: $ServerboundClientInformationPacket$Type): void
public "awardStat"(arg0: $Stat$Type<(any)>, arg1: integer): void
public "die"(arg0: $DamageSource$Type): void
public "displayClientMessage"(arg0: $Component$Type, arg1: boolean): void
public "canHarmPlayer"(arg0: $Player$Type): boolean
public "isInvulnerableTo"(arg0: $DamageSource$Type): boolean
public "getServer"(): $MinecraftServer
public "tick"(): void
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakePlayer$Type = ($FakePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakePlayer_ = $FakePlayer$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IEventListener" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"

export interface $IEventListener {

 "invoke"(arg0: $Event$Type): void
 "listenerName"(): string

(arg0: $Event$Type): void
}

export namespace $IEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventListener$Type = ($IEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventListener_ = $IEventListener$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelData$Builder" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $ModelData$Builder {


public "with"<T>(arg0: $ModelProperty$Type<(T)>, arg1: T): $ModelData$Builder
public "build"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$Builder$Type = ($ModelData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelData$Builder_ = $ModelData$Builder$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder" {
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $ConfiguredModel$Builder<T> {


public "addModel"(): T
public "modelFile"(arg0: $ModelFile$Type): $ConfiguredModel$Builder<(T)>
public "rotationX"(arg0: integer): $ConfiguredModel$Builder<(T)>
public "rotationY"(arg0: integer): $ConfiguredModel$Builder<(T)>
public "weight"(arg0: integer): $ConfiguredModel$Builder<(T)>
public "nextModel"(): $ConfiguredModel$Builder<(T)>
public "uvLock"(arg0: boolean): $ConfiguredModel$Builder<(T)>
public "buildLast"(): $ConfiguredModel
public "build"(): ($ConfiguredModel)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredModel$Builder$Type<T> = ($ConfiguredModel$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredModel$Builder_<T> = $ConfiguredModel$Builder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingChangeTargetEvent$ILivingTargetType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingChangeTargetEvent$ILivingTargetType {

}

export namespace $LivingChangeTargetEvent$ILivingTargetType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingChangeTargetEvent$ILivingTargetType$Type = ($LivingChangeTargetEvent$ILivingTargetType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingChangeTargetEvent$ILivingTargetType_ = $LivingChangeTargetEvent$ILivingTargetType$Type;
}}
declare module "packages/net/minecraftforge/common/$IMinecartCollisionHandler" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IMinecartCollisionHandler {

 "getMinecartCollisionBox"(arg0: $AbstractMinecart$Type): $AABB
 "getBoundingBox"(arg0: $AbstractMinecart$Type): $AABB
 "onEntityCollision"(arg0: $AbstractMinecart$Type, arg1: $Entity$Type): void
 "getCollisionBox"(arg0: $AbstractMinecart$Type, arg1: $Entity$Type): $AABB
}

export namespace $IMinecartCollisionHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecartCollisionHandler$Type = ($IMinecartCollisionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecartCollisionHandler_ = $IMinecartCollisionHandler$Type;
}}
declare module "packages/net/minecraftforge/common/world/$MobSpawnSettingsBuilder" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$MobSpawnSettings, $MobSpawnSettings$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MobSpawnSettings$Builder, $MobSpawnSettings$Builder$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MobSpawnSettingsBuilder extends $MobSpawnSettings$Builder {
readonly "spawners": $Map<($MobCategory), ($List<($MobSpawnSettings$SpawnerData)>)>
readonly "mobSpawnCosts": $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
 "creatureGenerationProbability": float

constructor(arg0: $MobSpawnSettings$Type)

public "getSpawner"(arg0: $MobCategory$Type): $List<($MobSpawnSettings$SpawnerData)>
public "getSpawnerTypes"(): $Set<($MobCategory)>
public "getEntityTypes"(): $Set<($EntityType<(any)>)>
public "getCost"(arg0: $EntityType$Type<(any)>): $MobSpawnSettings$MobSpawnCost
public "getProbability"(): float
public "disablePlayerSpawn"(): $MobSpawnSettingsBuilder
get "spawnerTypes"(): $Set<($MobCategory)>
get "entityTypes"(): $Set<($EntityType<(any)>)>
get "probability"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnSettingsBuilder$Type = ($MobSpawnSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSpawnSettingsBuilder_ = $MobSpawnSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IEventBusInvokeDispatcher" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IEventListener, $IEventListener$Type} from "packages/net/minecraftforge/eventbus/api/$IEventListener"

export interface $IEventBusInvokeDispatcher {

 "invoke"(arg0: $IEventListener$Type, arg1: $Event$Type): void

(arg0: $IEventListener$Type, arg1: $Event$Type): void
}

export namespace $IEventBusInvokeDispatcher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventBusInvokeDispatcher$Type = ($IEventBusInvokeDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventBusInvokeDispatcher_ = $IEventBusInvokeDispatcher$Type;
}}
declare module "packages/net/minecraftforge/fml/$IExtensionPoint" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IExtensionPoint<T extends $Record> {

}

export namespace $IExtensionPoint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionPoint$Type<T> = ($IExtensionPoint<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionPoint_<T> = $IExtensionPoint$Type<(T)>;
}}
declare module "packages/net/minecraftforge/network/$ServerStatusPing$ChannelData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ServerStatusPing$ChannelData extends $Record {
static readonly "CODEC": $Codec<($ServerStatusPing$ChannelData)>

constructor(res: $ResourceLocation$Type, version: string, required: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): string
public "hashCode"(): integer
public "res"(): $ResourceLocation
public "required"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatusPing$ChannelData$Type = ($ServerStatusPing$ChannelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStatusPing$ChannelData_ = $ServerStatusPing$ChannelData$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeAbstractMinecart" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeAbstractMinecart {

 "setMaxSpeedAirLateral"(arg0: float): void
 "getCurrentRailPosition"(): $BlockPos
 "getMaxSpeedWithRail"(): double
 "getMaxSpeedAirVertical"(): float
 "getCurrentCartSpeedCapOnRail"(): float
 "setCurrentCartSpeedCapOnRail"(arg0: float): void
 "getMaxCartSpeedOnRail"(): float
 "shouldDoRailFunctions"(): boolean
 "getMaxSpeedAirLateral"(): float
 "setMaxSpeedAirVertical"(arg0: float): void
 "canUseRail"(): boolean
 "getSlopeAdjustment"(): double
 "getDragAir"(): double
 "canBeRidden"(): boolean
 "moveMinecartOnRail"(arg0: $BlockPos$Type): void
 "setCanUseRail"(arg0: boolean): void
 "setDragAir"(arg0: double): void
 "isPoweredCart"(): boolean
 "getComparatorLevel"(): integer
}

export namespace $IForgeAbstractMinecart {
const DEFAULT_MAX_SPEED_AIR_LATERAL: float
const DEFAULT_MAX_SPEED_AIR_VERTICAL: float
const DEFAULT_AIR_DRAG: double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeAbstractMinecart$Type = ($IForgeAbstractMinecart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeAbstractMinecart_ = $IForgeAbstractMinecart$Type;
}}
declare module "packages/net/minecraftforge/event/level/$LevelEvent$Unload" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LevelEvent, $LevelEvent$Type} from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $LevelEvent$Unload extends $LevelEvent {

constructor(arg0: $LevelAccessor$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Unload$Type = ($LevelEvent$Unload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelEvent$Unload_ = $LevelEvent$Unload$Type;
}}
declare module "packages/net/minecraftforge/registries/$DeferredRegister" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RegistryBuilder, $RegistryBuilder$Type} from "packages/net/minecraftforge/registries/$RegistryBuilder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $DeferredRegister<T> {


public "register"<I extends T>(arg0: string, arg1: $Supplier$Type<(any)>): $RegistryObject<(I)>
public "register"(arg0: $IEventBus$Type): void
public static "create"<B>(arg0: $IForgeRegistry$Type<(B)>, arg1: string): $DeferredRegister<(B)>
public static "create"<B>(arg0: $ResourceKey$Type<(any)>, arg1: string): $DeferredRegister<(B)>
public static "create"<B>(arg0: $ResourceLocation$Type, arg1: string): $DeferredRegister<(B)>
public "getEntries"(): $Collection<($RegistryObject<(T)>)>
public "makeRegistry"(arg0: $Supplier$Type<($RegistryBuilder$Type<(T)>)>): $Supplier<($IForgeRegistry<(T)>)>
public "getRegistryName"(): $ResourceLocation
public "getRegistryKey"(): $ResourceKey<(any)>
public "createTagKey"(arg0: $ResourceLocation$Type): $TagKey<(T)>
public "createTagKey"(arg0: string): $TagKey<(T)>
public static "createOptional"<B>(arg0: $ResourceLocation$Type, arg1: string): $DeferredRegister<(B)>
public static "createOptional"<B>(arg0: $ResourceKey$Type<(any)>, arg1: string): $DeferredRegister<(B)>
public "createOptionalTagKey"(arg0: $ResourceLocation$Type, arg1: $Set$Type<(any)>): $TagKey<(T)>
public "createOptionalTagKey"(arg0: string, arg1: $Set$Type<(any)>): $TagKey<(T)>
public "addOptionalTagDefaults"(arg0: $TagKey$Type<(T)>, arg1: $Set$Type<(any)>): void
get "entries"(): $Collection<($RegistryObject<(T)>)>
get "registryName"(): $ResourceLocation
get "registryKey"(): $ResourceKey<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$Type<T> = ($DeferredRegister<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredRegister_<T> = $DeferredRegister$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/level/$BlockEvent$BreakEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEvent, $BlockEvent$Type} from "packages/net/minecraftforge/event/level/$BlockEvent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent$BreakEvent extends $BlockEvent {

constructor()
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type)

public "getListenerList"(): $ListenerList
public "getPlayer"(): $Player
public "isCancelable"(): boolean
public "getExpToDrop"(): integer
public "setExpToDrop"(arg0: integer): void
get "listenerList"(): $ListenerList
get "player"(): $Player
get "cancelable"(): boolean
get "expToDrop"(): integer
set "expToDrop"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$BreakEvent$Type = ($BlockEvent$BreakEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent$BreakEvent_ = $BlockEvent$BreakEvent$Type;
}}
declare module "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IntSet, $IntSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntSet"
import {$Object2IntMap, $Object2IntMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeRegistry$Snapshot {
readonly "ids": $Object2IntMap<($ResourceLocation)>
readonly "aliases": $Map<($ResourceLocation), ($ResourceLocation)>
readonly "blocked": $IntSet
readonly "overrides": $Map<($ResourceLocation), (string)>

constructor()

public "write"(): $CompoundTag
public static "read"(arg0: $FriendlyByteBuf$Type): $ForgeRegistry$Snapshot
public static "read"(arg0: $CompoundTag$Type): $ForgeRegistry$Snapshot
public "getPacketData"(): $FriendlyByteBuf
get "packetData"(): $FriendlyByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistry$Snapshot$Type = ($ForgeRegistry$Snapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistry$Snapshot_ = $ForgeRegistry$Snapshot$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo" {
import {$IConfigurable, $IConfigurable$Type} from "packages/net/minecraftforge/forgespi/language/$IConfigurable"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IModFileInfo$LanguageSpec, $IModFileInfo$LanguageSpec$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo$LanguageSpec"
import {$IModFile, $IModFile$Type} from "packages/net/minecraftforge/forgespi/locating/$IModFile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModFileInfo {

 "moduleName"(): string
 "getFile"(): $IModFile
 "versionString"(): string
 "getMods"(): $List<($IModInfo)>
 "usesServices"(): $List<(string)>
 "getFileProperties"(): $Map<(string), (any)>
 "getLicense"(): string
 "showAsResourcePack"(): boolean
 "requiredLanguageLoaders"(): $List<($IModFileInfo$LanguageSpec)>
 "getConfig"(): $IConfigurable
}

export namespace $IModFileInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$Type = ($IModFileInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFileInfo_ = $IModFileInfo$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$MissingFactory" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeRegistry$MissingFactory<V> {

 "createMissing"(arg0: $ResourceLocation$Type, arg1: boolean): V

(arg0: $ResourceLocation$Type, arg1: boolean): V
}

export namespace $IForgeRegistry$MissingFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$MissingFactory$Type<V> = ($IForgeRegistry$MissingFactory<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$MissingFactory_<V> = $IForgeRegistry$MissingFactory$Type<(V)>;
}}
declare module "packages/net/minecraftforge/fml/config/$ConfigFileTypeHandler" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$CommentedFileConfig, $CommentedFileConfig$Type} from "packages/com/electronwill/nightconfig/core/file/$CommentedFileConfig"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConfigFileTypeHandler {

constructor()

public "reader"(arg0: $Path$Type): $Function<($ModConfig), ($CommentedFileConfig)>
public "unload"(arg0: $Path$Type, arg1: $ModConfig$Type): void
public static "backUpConfig"(arg0: $CommentedFileConfig$Type): void
public static "backUpConfig"(arg0: $CommentedFileConfig$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFileTypeHandler$Type = ($ConfigFileTypeHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFileTypeHandler_ = $ConfigFileTypeHandler$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeMenuType" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $IForgeMenuType<T> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T

(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}

export namespace $IForgeMenuType {
function create<T>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMenuType$Type<T> = ($IForgeMenuType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMenuType_<T> = $IForgeMenuType$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableStructureInfo" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo"
import {$StructureModifier, $StructureModifier$Type} from "packages/net/minecraftforge/common/world/$StructureModifier"

export class $ModifiableStructureInfo {

constructor(arg0: $ModifiableStructureInfo$StructureInfo$Type)

public "get"(): $ModifiableStructureInfo$StructureInfo
public "getModifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
public "getOriginalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
public "applyStructureModifiers"(arg0: $Holder$Type<($Structure$Type)>, arg1: $List$Type<($StructureModifier$Type)>): void
get "modifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "originalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$Type = ($ModifiableStructureInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo_ = $ModifiableStructureInfo$Type;
}}
declare module "packages/net/minecraftforge/fluids/$FluidType$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $FluidType$Properties {


public static "create"(): $FluidType$Properties
public "descriptionId"(arg0: string): $FluidType$Properties
public "canHydrate"(arg0: boolean): $FluidType$Properties
public "fallDistanceModifier"(arg0: float): $FluidType$Properties
public "density"(arg0: integer): $FluidType$Properties
public "temperature"(arg0: integer): $FluidType$Properties
public "lightLevel"(arg0: integer): $FluidType$Properties
public "viscosity"(arg0: integer): $FluidType$Properties
public "canDrown"(arg0: boolean): $FluidType$Properties
public "pathType"(arg0: $BlockPathTypes$Type): $FluidType$Properties
public "adjacentPathType"(arg0: $BlockPathTypes$Type): $FluidType$Properties
public "sound"(arg0: $SoundAction$Type, arg1: $SoundEvent$Type): $FluidType$Properties
public "canConvertToSource"(arg0: boolean): $FluidType$Properties
public "supportsBoating"(arg0: boolean): $FluidType$Properties
public "motionScale"(arg0: double): $FluidType$Properties
public "canPushEntity"(arg0: boolean): $FluidType$Properties
public "canSwim"(arg0: boolean): $FluidType$Properties
public "canExtinguish"(arg0: boolean): $FluidType$Properties
public "rarity"(arg0: $Rarity$Type): $FluidType$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$Properties$Type = ($FluidType$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType$Properties_ = $FluidType$Properties$Type;
}}
declare module "packages/net/minecraftforge/client/event/$InputEvent$Key" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$InputEvent, $InputEvent$Type} from "packages/net/minecraftforge/client/event/$InputEvent"

export class $InputEvent$Key extends $InputEvent {

constructor()
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getModifiers"(): integer
public "getKey"(): integer
public "getListenerList"(): $ListenerList
public "getAction"(): integer
public "getScanCode"(): integer
get "modifiers"(): integer
get "key"(): integer
get "listenerList"(): $ListenerList
get "action"(): integer
get "scanCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$Key$Type = ($InputEvent$Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputEvent$Key_ = $InputEvent$Key$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockStateProvider$ConfiguredModelList, $BlockStateProvider$ConfiguredModelList$Type} from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList"
import {$IGeneratedBlockState, $IGeneratedBlockState$Type} from "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$VariantBlockStateBuilder$PartialBlockstate, $VariantBlockStateBuilder$PartialBlockstate$Type} from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder$PartialBlockstate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $VariantBlockStateBuilder implements $IGeneratedBlockState {


public "toJson"(): $JsonObject
public "getModels"(): $Map<($VariantBlockStateBuilder$PartialBlockstate), ($BlockStateProvider$ConfiguredModelList)>
public "partialState"(): $VariantBlockStateBuilder$PartialBlockstate
public "setModels"(arg0: $VariantBlockStateBuilder$PartialBlockstate$Type, ...arg1: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder
public "forAllStatesExcept"(arg0: $Function$Type<($BlockState$Type), (($ConfiguredModel$Type)[])>, ...arg1: ($Property$Type<(any)>)[]): $VariantBlockStateBuilder
public "forAllStates"(arg0: $Function$Type<($BlockState$Type), (($ConfiguredModel$Type)[])>): $VariantBlockStateBuilder
public "addModels"(arg0: $VariantBlockStateBuilder$PartialBlockstate$Type, ...arg1: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder
public "getOwner"(): $Block
get "models"(): $Map<($VariantBlockStateBuilder$PartialBlockstate), ($BlockStateProvider$ConfiguredModelList)>
get "owner"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantBlockStateBuilder$Type = ($VariantBlockStateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantBlockStateBuilder_ = $VariantBlockStateBuilder$Type;
}}
declare module "packages/net/minecraftforge/client/textures/$ITextureAtlasSpriteLoader" {
import {$ForgeTextureMetadata, $ForgeTextureMetadata$Type} from "packages/net/minecraftforge/client/textures/$ForgeTextureMetadata"
import {$AnimationMetadataSection, $AnimationMetadataSection$Type} from "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FrameSize, $FrameSize$Type} from "packages/net/minecraft/client/resources/metadata/animation/$FrameSize"
import {$SpriteContents, $SpriteContents$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ITextureAtlasSpriteLoader {

 "loadContents"(arg0: $ResourceLocation$Type, arg1: $Resource$Type, arg2: $FrameSize$Type, arg3: $NativeImage$Type, arg4: $AnimationMetadataSection$Type, arg5: $ForgeTextureMetadata$Type): $SpriteContents
 "makeSprite"(arg0: $ResourceLocation$Type, arg1: $SpriteContents$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $TextureAtlasSprite
}

export namespace $ITextureAtlasSpriteLoader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextureAtlasSpriteLoader$Type = ($ITextureAtlasSpriteLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITextureAtlasSpriteLoader_ = $ITextureAtlasSpriteLoader$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeVertexConsumer" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IForgeVertexConsumer {

 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
 "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
}

export namespace $IForgeVertexConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeVertexConsumer$Type = ($IForgeVertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeVertexConsumer_ = $IForgeVertexConsumer$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$BooleanValue extends $ForgeConfigSpec$ConfigValue<(boolean)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$BooleanValue$Type = ($ForgeConfigSpec$BooleanValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$BooleanValue_ = $ForgeConfigSpec$BooleanValue$Type;
}}
declare module "packages/net/minecraftforge/api/distmarker/$Dist" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Dist extends $Enum<($Dist)> {
static readonly "CLIENT": $Dist
static readonly "DEDICATED_SERVER": $Dist


public static "values"(): ($Dist)[]
public static "valueOf"(arg0: string): $Dist
public "isDedicatedServer"(): boolean
public "isClient"(): boolean
get "dedicatedServer"(): boolean
get "client"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dist$Type = (("dedicated_server") | ("client")) | ($Dist);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dist_ = $Dist$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$GenericEvent" {
import {$IGenericEvent, $IGenericEvent$Type} from "packages/net/minecraftforge/eventbus/api/$IGenericEvent"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export class $GenericEvent<T> extends $Event implements $IGenericEvent<(T)> {

constructor()

public "getGenericType"(): $Type
get "genericType"(): $Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericEvent$Type<T> = ($GenericEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericEvent_<T> = $GenericEvent$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeLevel" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"

export interface $IForgeLevel extends $ICapabilityProvider {

 "increaseMaxEntityRadius"(arg0: double): double
 "getPartEntities"(): $Collection<($PartEntity<(any)>)>
 "getMaxEntityRadius"(): double
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeLevel$Type = ($IForgeLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeLevel_ = $IForgeLevel$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IForgeHolderSet$SerializationType extends $Enum<($IForgeHolderSet$SerializationType)> {
static readonly "UNKNOWN": $IForgeHolderSet$SerializationType
static readonly "STRING": $IForgeHolderSet$SerializationType
static readonly "LIST": $IForgeHolderSet$SerializationType
static readonly "OBJECT": $IForgeHolderSet$SerializationType


public static "values"(): ($IForgeHolderSet$SerializationType)[]
public static "valueOf"(arg0: string): $IForgeHolderSet$SerializationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeHolderSet$SerializationType$Type = (("string") | ("list") | ("unknown") | ("object")) | ($IForgeHolderSet$SerializationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeHolderSet$SerializationType_ = $IForgeHolderSet$SerializationType$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistryInternal" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IForgeRegistryInternal<V> extends $IForgeRegistry<(V)> {

 "getValue"(arg0: integer): V
 "register"(arg0: integer, arg1: $ResourceLocation$Type, arg2: V): void
 "setSlaveMap"(arg0: $ResourceLocation$Type, arg1: any): void
 "getValue"(arg0: $ResourceLocation$Type): V
 "isEmpty"(): boolean
 "getKey"(arg0: V): $ResourceLocation
 "register"(arg0: $ResourceLocation$Type, arg1: V): void
 "register"(arg0: string, arg1: V): void
 "containsKey"(arg0: $ResourceLocation$Type): boolean
 "containsValue"(arg0: V): boolean
 "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
 "getKeys"(): $Set<($ResourceLocation)>
 "tags"(): $ITagManager<(V)>
 "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
 "getCodec"(): $Codec<(V)>
 "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
 "getRegistryName"(): $ResourceLocation
 "getValues"(): $Collection<(V)>
 "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
 "getDefaultKey"(): $ResourceLocation
 "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
 "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
 "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IForgeRegistryInternal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistryInternal$Type<V> = ($IForgeRegistryInternal<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistryInternal_<V> = $IForgeRegistryInternal$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModelBuilder$TransformsBuilder, $ModelBuilder$TransformsBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder"
import {$BlockModel$GuiLight, $BlockModel$GuiLight$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel$GuiLight"
import {$ModelBuilder$RootTransformsBuilder, $ModelBuilder$RootTransformsBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$RootTransformsBuilder"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$CustomLoaderBuilder, $CustomLoaderBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder"

export class $ModelBuilder<T extends $ModelBuilder<(T)>> extends $ModelFile {


public "parent"(arg0: $ModelFile$Type): T
public "ao"(arg0: boolean): T
public "element"(): $ModelBuilder$ElementBuilder<>
public "element"(arg0: integer): $ModelBuilder$ElementBuilder<>
public "transforms"(): $ModelBuilder$TransformsBuilder<>
public "getElementCount"(): integer
public "toJson"(): $JsonObject
public "texture"(arg0: string, arg1: $ResourceLocation$Type): T
public "texture"(arg0: string, arg1: string): T
public "renderType"(arg0: string): T
public "renderType"(arg0: $ResourceLocation$Type): T
public "customLoader"<L extends $CustomLoaderBuilder<(T)>>(arg0: $BiFunction$Type<(T), ($ExistingFileHelper$Type), (L)>): L
public "guiLight"(arg0: $BlockModel$GuiLight$Type): T
public "rootTransforms"(): $ModelBuilder$RootTransformsBuilder<>
get "elementCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$Type<T> = ($ModelBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder_<T> = $ModelBuilder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandler" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export interface $IFluidHandler {

 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
}

export namespace $IFluidHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$Type = ($IFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandler_ = $IFluidHandler$Type;
}}
declare module "packages/net/minecraftforge/items/$IItemHandler" {
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $IItemHandler extends $InventoryKJS {

 "getBlock"(level: $Level$Type): $BlockContainerJS
 "getSlots"(): integer
 "isMutable"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
 "getWidth"(): integer
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "clear"(ingredient: $Ingredient$Type): void
 "clear"(): void
 "setChanged"(): void
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "getHeight"(): integer
}

export namespace $IItemHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandler$Type = ($IItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandler_ = $IItemHandler$Type;
}}
declare module "packages/net/minecraftforge/server/command/$EnumArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $EnumArgument<T extends $Enum<(T)>> implements $ArgumentType<(T)> {


public "getExamples"(): $Collection<(string)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public static "enumArgument"<R extends $Enum<(R)>>(arg0: $Class$Type<(R)>): $EnumArgument<(R)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Type<T> = ($EnumArgument<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument_<T> = $EnumArgument$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$ModelFile$ExistingModelFile, $ModelFile$ExistingModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile$ExistingModelFile"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelProvider<T extends $ModelBuilder<(T)>> implements $DataProvider {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: string, arg3: $BiFunction$Type<($ResourceLocation$Type), ($ExistingFileHelper$Type), (T)>, arg4: $ExistingFileHelper$Type)
constructor(arg0: $PackOutput$Type, arg1: string, arg2: string, arg3: $Function$Type<($ResourceLocation$Type), (T)>, arg4: $ExistingFileHelper$Type)

public "nested"(): T
public "cube"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type, arg6: $ResourceLocation$Type): T
public "mcLoc"(arg0: string): $ResourceLocation
public "cubeAll"(arg0: string, arg1: $ResourceLocation$Type): T
public "getBuilder"(arg0: string): T
public "pressurePlate"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGate"(arg0: string, arg1: $ResourceLocation$Type): T
public "torch"(arg0: string, arg1: $ResourceLocation$Type): T
public "stairs"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "slab"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "withExistingParent"(arg0: string, arg1: $ResourceLocation$Type): T
public "withExistingParent"(arg0: string, arg1: string): T
public "singleTexture"(arg0: string, arg1: $ResourceLocation$Type, arg2: string, arg3: $ResourceLocation$Type): T
public "singleTexture"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "crop"(arg0: string, arg1: $ResourceLocation$Type): T
public "buttonInventory"(arg0: string, arg1: $ResourceLocation$Type): T
public "orientableVertical"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "cubeBottomTop"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "cubeTop"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "fenceInventory"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallInventory"(arg0: string, arg1: $ResourceLocation$Type): T
public "torchWall"(arg0: string, arg1: $ResourceLocation$Type): T
public "cubeColumnHorizontal"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "carpet"(arg0: string, arg1: $ResourceLocation$Type): T
public "cross"(arg0: string, arg1: $ResourceLocation$Type): T
public "cubeColumn"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "button"(arg0: string, arg1: $ResourceLocation$Type): T
public "leaves"(arg0: string, arg1: $ResourceLocation$Type): T
public "modLoc"(arg0: string): $ResourceLocation
public "trapdoorOrientableTop"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorOrientableBottom"(arg0: string, arg1: $ResourceLocation$Type): T
public "doorBottomRightOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "trapdoorOrientableOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "run"(arg0: $CachedOutput$Type): $CompletableFuture<(any)>
public "orientableWithBottom"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): T
public "stairsOuter"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "orientable"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "stairsInner"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "slabTop"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "buttonPressed"(arg0: string, arg1: $ResourceLocation$Type): T
public "pressurePlateDown"(arg0: string, arg1: $ResourceLocation$Type): T
public "fencePost"(arg0: string, arg1: $ResourceLocation$Type): T
public "getExistingFile"(arg0: $ResourceLocation$Type): $ModelFile$ExistingModelFile
public "fenceSide"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallPost"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGateOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallSide"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallSideTall"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGateWall"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGateWallOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "paneSideAlt"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "paneSide"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "panePost"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "paneNoSideAlt"(arg0: string, arg1: $ResourceLocation$Type): T
public "paneNoSide"(arg0: string, arg1: $ResourceLocation$Type): T
public "doorBottomLeftOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopRight"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopRightOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorBottomLeft"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopLeft"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorBottomRight"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopLeftOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "trapdoorTop"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorBottom"(arg0: string, arg1: $ResourceLocation$Type): T
public "sign"(arg0: string, arg1: $ResourceLocation$Type): T
public "getName"(): string
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProvider$Type<T> = ($ModelProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProvider_<T> = $ModelProvider$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeConfigSpec$ConfigValue<T> implements $Supplier<(T)> {


public "get"(): T
public "next"(): $ForgeConfigSpec$Builder
public "getDefault"(): T
public "set"(arg0: T): void
public "save"(): void
public "getPath"(): $List<(string)>
public "clearCache"(): void
get "default"(): T
get "path"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$ConfigValue$Type<T> = ($ForgeConfigSpec$ConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$ConfigValue_<T> = $ForgeConfigSpec$ConfigValue$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/event/$InputEvent$InteractionKeyMappingTriggered" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InputEvent, $InputEvent$Type} from "packages/net/minecraftforge/client/event/$InputEvent"

export class $InputEvent$InteractionKeyMappingTriggered extends $InputEvent {

constructor()
constructor(arg0: integer, arg1: $KeyMapping$Type, arg2: $InteractionHand$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "shouldSwingHand"(): boolean
public "getHand"(): $InteractionHand
public "isUseItem"(): boolean
public "setSwingHand"(arg0: boolean): void
public "getKeyMapping"(): $KeyMapping
public "isAttack"(): boolean
public "isPickBlock"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "hand"(): $InteractionHand
get "useItem"(): boolean
set "swingHand"(value: boolean)
get "keyMapping"(): $KeyMapping
get "attack"(): boolean
get "pickBlock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$InteractionKeyMappingTriggered$Type = ($InputEvent$InteractionKeyMappingTriggered);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputEvent$InteractionKeyMappingTriggered_ = $InputEvent$InteractionKeyMappingTriggered$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$IConfigSpec" {
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$CommentedConfig, $CommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$CommentedConfig"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigSpec<T extends $IConfigSpec<(T)>> extends $UnmodifiableConfig {

 "self"(): T
 "correct"(arg0: $CommentedConfig$Type): integer
 "isCorrect"(arg0: $CommentedConfig$Type): boolean
 "isCorrecting"(): boolean
 "acceptConfig"(arg0: $CommentedConfig$Type): void
 "afterReload"(): void
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$Type<(string)>): T
 "getByte"(arg0: $List$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$Type<(string)>): integer
 "getLong"(arg0: string): long
 "getLong"(arg0: $List$Type<(string)>): long
 "isEmpty"(): boolean
 "size"(): integer
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$Type<(string)>): T
 "contains"(arg0: $List$Type<(string)>): boolean
 "contains"(arg0: string): boolean
 "entrySet"(): $Set<(any)>
 "isNull"(arg0: $List$Type<(string)>): boolean
 "isNull"(arg0: string): boolean
 "valueMap"(): $Map<(string), (any)>
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>): T
 "getRaw"<T>(arg0: $List$Type<(string)>): T
 "getRaw"<T>(arg0: string): T
 "configFormat"(): $ConfigFormat<(any)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getOptional"<T>(arg0: $List$Type<(string)>): $Optional<(T)>
 "getOptionalInt"(arg0: $List$Type<(string)>): $OptionalInt
 "getOptionalInt"(arg0: string): $OptionalInt
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: $IntSupplier$Type): integer
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: integer): integer
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$Type): long
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: $LongSupplier$Type): long
 "getLongOrElse"(arg0: string, arg1: long): long
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$Type<(string)>): $OptionalLong
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getByteOrElse"(arg0: $List$Type<(string)>, arg1: byte): byte
 "getShortOrElse"(arg0: string, arg1: short): short
 "getShortOrElse"(arg0: $List$Type<(string)>, arg1: short): short
 "getCharOrElse"(arg0: string, arg1: character): character
 "getCharOrElse"(arg0: $List$Type<(string)>, arg1: character): character
}

export namespace $IConfigSpec {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigSpec$Type<T> = ($IConfigSpec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigSpec_<T> = $IConfigSpec$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$IPlantable" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPlantable {

 "getPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
 "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
}

export namespace $IPlantable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlantable$Type = ($IPlantable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlantable_ = $IPlantable$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$AnnotationData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ElementType, $ElementType$Type} from "packages/java/lang/annotation/$ElementType"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModFileScanData$AnnotationData extends $Record {

constructor(annotationType: $Type$Type, targetType: $ElementType$Type, clazz: $Type$Type, memberName: string, annotationData: $Map$Type<(string), (any)>)

public "clazz"(): $Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "annotationData"(): $Map<(string), (any)>
public "annotationType"(): $Type
public "targetType"(): $ElementType
public "memberName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$AnnotationData$Type = ($ModFileScanData$AnnotationData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData$AnnotationData_ = $ModFileScanData$AnnotationData$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeDimensionSpecialEffects" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$LightTexture, $LightTexture$Type} from "packages/net/minecraft/client/renderer/$LightTexture"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IForgeDimensionSpecialEffects {

 "adjustLightmapColors"(arg0: $ClientLevel$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$Type): void
 "renderClouds"(arg0: $ClientLevel$Type, arg1: integer, arg2: float, arg3: $PoseStack$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$Type): boolean
 "tickRain"(arg0: $ClientLevel$Type, arg1: integer, arg2: $Camera$Type): boolean
 "renderSnowAndRain"(arg0: $ClientLevel$Type, arg1: integer, arg2: float, arg3: $LightTexture$Type, arg4: double, arg5: double, arg6: double): boolean
 "renderSky"(arg0: $ClientLevel$Type, arg1: integer, arg2: float, arg3: $PoseStack$Type, arg4: $Camera$Type, arg5: $Matrix4f$Type, arg6: boolean, arg7: $Runnable$Type): boolean
}

export namespace $IForgeDimensionSpecialEffects {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeDimensionSpecialEffects$Type = ($IForgeDimensionSpecialEffects);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeDimensionSpecialEffects_ = $IForgeDimensionSpecialEffects$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelData" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$ModelData$Builder, $ModelData$Builder$Type} from "packages/net/minecraftforge/client/model/data/$ModelData$Builder"

export class $ModelData {
static readonly "EMPTY": $ModelData


public "get"<T>(arg0: $ModelProperty$Type<(T)>): T
public static "builder"(): $ModelData$Builder
public "getProperties"(): $Set<(any)>
public "has"(arg0: $ModelProperty$Type<(any)>): boolean
public "derive"(): $ModelData$Builder
get "properties"(): $Set<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$Type = ($ModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelData_ = $ModelData$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event$Result, $Event$Result$Type} from "packages/net/minecraftforge/eventbus/api/$Event$Result"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$PlayerInteractEvent, $PlayerInteractEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PlayerInteractEvent$RightClickBlock extends $PlayerInteractEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $BlockHitResult$Type)

public "setUseBlock"(arg0: $Event$Result$Type): void
public "setUseItem"(arg0: $Event$Result$Type): void
public "getListenerList"(): $ListenerList
public "setCanceled"(arg0: boolean): void
public "isCancelable"(): boolean
public "getUseItem"(): $Event$Result
public "getUseBlock"(): $Event$Result
public "getHitVec"(): $BlockHitResult
set "useBlock"(value: $Event$Result$Type)
set "useItem"(value: $Event$Result$Type)
get "listenerList"(): $ListenerList
set "canceled"(value: boolean)
get "cancelable"(): boolean
get "useItem"(): $Event$Result
get "useBlock"(): $Event$Result
get "hitVec"(): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$RightClickBlock$Type = ($PlayerInteractEvent$RightClickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$RightClickBlock_ = $PlayerInteractEvent$RightClickBlock$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeDispensibleContainerItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeDispensibleContainerItem {

 "emptyContents"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockHitResult$Type, arg4: $ItemStack$Type): boolean
}

export namespace $IForgeDispensibleContainerItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeDispensibleContainerItem$Type = ($IForgeDispensibleContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeDispensibleContainerItem_ = $IForgeDispensibleContainerItem$Type;
}}
declare module "packages/net/minecraftforge/common/util/$TriPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriPredicate<T, U, V> {

 "test"(arg0: T, arg1: U, arg2: V): boolean
 "or"(arg0: $TriPredicate$Type<(any), (any), (any)>): $TriPredicate<(T), (U), (V)>
 "negate"(): $TriPredicate<(T), (U), (V)>
 "and"(arg0: $TriPredicate$Type<(any), (any), (any)>): $TriPredicate<(T), (U), (V)>

(arg0: T, arg1: U, arg2: V): boolean
}

export namespace $TriPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriPredicate$Type<T, U, V> = ($TriPredicate<(T), (U), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriPredicate_<T, U, V> = $TriPredicate$Type<(T), (U), (V)>;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeGuiGraphics" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeGuiGraphics {

 "blitInscribed"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
 "blitInscribed"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "blitWithBorder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
 "blitWithBorder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
 "getColorFromFormattingCharacter"(arg0: character, arg1: boolean): integer
 "blitNineSlicedSized"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer): void
 "blitNineSlicedSized"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer): void
 "blitNineSlicedSized"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
}

export namespace $IForgeGuiGraphics {
const DEFAULT_BACKGROUND_COLOR: integer
const DEFAULT_BORDER_COLOR_START: integer
const DEFAULT_BORDER_COLOR_END: integer
const UNDO_CHAR: string
const RESET_CHAR: string
const VALID: string
const INVALID: string
const TEXT_COLOR_CODES: (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeGuiGraphics$Type = ($IForgeGuiGraphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeGuiGraphics_ = $IForgeGuiGraphics$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$TickEvent$Phase, $TickEvent$Phase$Type} from "packages/net/minecraftforge/event/$TickEvent$Phase"
import {$TickEvent$Type, $TickEvent$Type$Type} from "packages/net/minecraftforge/event/$TickEvent$Type"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $TickEvent extends $Event {
readonly "type": $TickEvent$Type
readonly "side": $LogicalSide
readonly "phase": $TickEvent$Phase

constructor()
constructor(arg0: $TickEvent$Type$Type, arg1: $LogicalSide$Type, arg2: $TickEvent$Phase$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$Type = ($TickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent_ = $TickEvent$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$EnumValue<T extends $Enum<(T)>> extends $ForgeConfigSpec$ConfigValue<(T)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$EnumValue$Type<T> = ($ForgeConfigSpec$EnumValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$EnumValue_<T> = $ForgeConfigSpec$EnumValue$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/$ModContainer" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$ModLoadingStage, $ModLoadingStage$Type} from "packages/net/minecraftforge/fml/$ModLoadingStage"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$ProgressMeter, $ProgressMeter$Type} from "packages/net/minecraftforge/fml/loading/progress/$ProgressMeter"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$IExtensionPoint, $IExtensionPoint$Type} from "packages/net/minecraftforge/fml/$IExtensionPoint"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IConfigEvent, $IConfigEvent$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IExtensionPoint$DisplayTest, $IExtensionPoint$DisplayTest$Type} from "packages/net/minecraftforge/fml/$IExtensionPoint$DisplayTest"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IModStateTransition$EventGenerator, $IModStateTransition$EventGenerator$Type} from "packages/net/minecraftforge/fml/$IModStateTransition$EventGenerator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModContainer {

constructor(arg0: $IModInfo$Type)

public "matches"(arg0: any): boolean
public "getNamespace"(): string
public "registerDisplayTest"(arg0: $IExtensionPoint$DisplayTest$Type): void
public "registerDisplayTest"(arg0: $Supplier$Type<($IExtensionPoint$DisplayTest$Type)>): void
public "registerDisplayTest"(arg0: $Supplier$Type<(string)>, arg1: $BiPredicate$Type<(string), (boolean)>): void
public "registerDisplayTest"(arg0: string, arg1: $BiPredicate$Type<(string), (boolean)>): void
public "getCurrentState"(): $ModLoadingStage
public "dispatchConfigEvent"(arg0: $IConfigEvent$Type): void
public "addConfig"(arg0: $ModConfig$Type): void
public "getModId"(): string
public "getModInfo"(): $IModInfo
public static "buildTransitionHandler"<T extends ($Event) & ($IModBusEvent)>(arg0: $ModContainer$Type, arg1: $IModStateTransition$EventGenerator$Type<(T)>, arg2: $ProgressMeter$Type, arg3: $BiFunction$Type<($ModLoadingStage$Type), ($Throwable$Type), ($ModLoadingStage$Type)>, arg4: $Executor$Type): $CompletableFuture<(void)>
public "getMod"(): any
public "registerExtensionPoint"<T extends ($Record) & ($IExtensionPoint<(T)>)>(arg0: $Class$Type<(any)>, arg1: $Supplier$Type<(T)>): void
public "getCustomExtension"<T extends $Record>(arg0: $Class$Type<(any)>): $Optional<(T)>
get "namespace"(): string
get "currentState"(): $ModLoadingStage
get "modId"(): string
get "modInfo"(): $IModInfo
get "mod"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModContainer$Type = ($ModContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModContainer_ = $ModContainer$Type;
}}
declare module "packages/net/minecraftforge/common/world/$StructureSettingsBuilder" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$TerrainAdjustment, $TerrainAdjustment$Type} from "packages/net/minecraft/world/level/levelgen/structure/$TerrainAdjustment"
import {$StructureSettingsBuilder$StructureSpawnOverrideBuilder, $StructureSettingsBuilder$StructureSpawnOverrideBuilder$Type} from "packages/net/minecraftforge/common/world/$StructureSettingsBuilder$StructureSpawnOverrideBuilder"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Structure$StructureSettings, $Structure$StructureSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"

export class $StructureSettingsBuilder {


public static "copyOf"(arg0: $Structure$StructureSettings$Type): $StructureSettingsBuilder
public "removeSpawnOverrides"(arg0: $MobCategory$Type): void
public "getOrAddSpawnOverrides"(arg0: $MobCategory$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getTerrainAdaptation"(): $TerrainAdjustment
public "setTerrainAdaptation"(arg0: $TerrainAdjustment$Type): void
public "setBiomes"(arg0: $HolderSet$Type<($Biome$Type)>): void
public "getBiomes"(): $HolderSet<($Biome)>
public "getDecorationStep"(): $GenerationStep$Decoration
public "setDecorationStep"(arg0: $GenerationStep$Decoration$Type): void
public "getSpawnOverrides"(arg0: $MobCategory$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "build"(): $Structure$StructureSettings
get "terrainAdaptation"(): $TerrainAdjustment
set "terrainAdaptation"(value: $TerrainAdjustment$Type)
set "biomes"(value: $HolderSet$Type<($Biome$Type)>)
get "biomes"(): $HolderSet<($Biome)>
get "decorationStep"(): $GenerationStep$Decoration
set "decorationStep"(value: $GenerationStep$Decoration$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$Type = ($StructureSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureSettingsBuilder_ = $StructureSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeEnchantment" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"

export interface $IForgeEnchantment {

 "allowedInCreativeTab"(arg0: $Item$Type, arg1: $Set$Type<($EnchantmentCategory$Type)>): boolean
 "getDamageBonus"(arg0: integer, arg1: $MobType$Type, arg2: $ItemStack$Type): float
}

export namespace $IForgeEnchantment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeEnchantment$Type = ($IForgeEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeEnchantment_ = $IForgeEnchantment$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$Capability" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export class $Capability<T> {


public "getName"(): string
public "isRegistered"(): boolean
public "addListener"(arg0: $Consumer$Type<($Capability$Type<(T)>)>): $Capability<(T)>
public "orEmpty"<R>(arg0: $Capability$Type<(R)>, arg1: $LazyOptional$Type<(T)>): $LazyOptional<(R)>
get "name"(): string
get "registered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Capability$Type<T> = ($Capability<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Capability_<T> = $Capability$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $BlockStateProvider$ConfiguredModelList {

constructor(...arg0: ($ConfiguredModel$Type)[])
constructor(arg0: $ConfiguredModel$Type)

public "append"(...arg0: ($ConfiguredModel$Type)[]): $BlockStateProvider$ConfiguredModelList
public "toJSON"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateProvider$ConfiguredModelList$Type = ($BlockStateProvider$ConfiguredModelList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateProvider$ConfiguredModelList_ = $BlockStateProvider$ConfiguredModelList$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo$Builder" {
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo"
import {$StructureSettingsBuilder, $StructureSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$StructureSettingsBuilder"

export class $ModifiableStructureInfo$StructureInfo$Builder {


public static "copyOf"(arg0: $ModifiableStructureInfo$StructureInfo$Type): $ModifiableStructureInfo$StructureInfo$Builder
public "getStructureSettings"(): $StructureSettingsBuilder
public "build"(): $ModifiableStructureInfo$StructureInfo
get "structureSettings"(): $StructureSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$Builder$Type = ($ModifiableStructureInfo$StructureInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo$StructureInfo$Builder_ = $ModifiableStructureInfo$StructureInfo$Builder$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IClientBlockExtensions {

 "getFogColor"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: $Vector3d$Type, arg5: float): $Vector3d
 "addDestroyEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ParticleEngine$Type): boolean
 "addHitEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $HitResult$Type, arg3: $ParticleEngine$Type): boolean
 "areBreakingParticlesTinted"(arg0: $BlockState$Type, arg1: $ClientLevel$Type, arg2: $BlockPos$Type): boolean
}

export namespace $IClientBlockExtensions {
const DEFAULT: $IClientBlockExtensions
function of(arg0: $BlockState$Type): $IClientBlockExtensions
function of(arg0: $Block$Type): $IClientBlockExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientBlockExtensions$Type = ($IClientBlockExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientBlockExtensions_ = $IClientBlockExtensions$Type;
}}
declare module "packages/net/minecraftforge/common/data/$LanguageProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $LanguageProvider implements $DataProvider {

constructor(arg0: $PackOutput$Type, arg1: string, arg2: string)

public "add"(arg0: $ItemStack$Type, arg1: string): void
public "add"(arg0: string, arg1: string): void
public "add"(arg0: $Item$Type, arg1: string): void
public "add"(arg0: $Enchantment$Type, arg1: string): void
public "add"(arg0: $MobEffect$Type, arg1: string): void
public "add"(arg0: $EntityType$Type<(any)>, arg1: string): void
public "add"(arg0: $Block$Type, arg1: string): void
public "addItem"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "addEffect"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "addEntityType"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "addItemStack"(arg0: $Supplier$Type<($ItemStack$Type)>, arg1: string): void
public "addEnchantment"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "addBlock"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "run"(arg0: $CachedOutput$Type): $CompletableFuture<(any)>
public "getName"(): string
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanguageProvider$Type = ($LanguageProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LanguageProvider_ = $LanguageProvider$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$ClassData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"

export class $ModFileScanData$ClassData extends $Record {

constructor(clazz: $Type$Type, parent: $Type$Type, interfaces: $Set$Type<($Type$Type)>)

public "clazz"(): $Type
public "parent"(): $Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "interfaces"(): $Set<($Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$ClassData$Type = ($ModFileScanData$ClassData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData$ClassData_ = $ModFileScanData$ClassData$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$CapabilityProvider" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CapabilityDispatcher, $CapabilityDispatcher$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityDispatcher"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProviderImpl, $ICapabilityProviderImpl$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProviderImpl"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CapabilityProvider<B extends $ICapabilityProviderImpl<(B)>> implements $ICapabilityProviderImpl<(B)> {


public "invalidateCaps"(): void
public "areCapsCompatible"(arg0: $CapabilityDispatcher$Type): boolean
public "areCapsCompatible"(arg0: $CapabilityProvider$Type<(B)>): boolean
public "reviveCaps"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityProvider$Type<B> = ($CapabilityProvider<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityProvider_<B> = $CapabilityProvider$Type<(B)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeItemStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IForgeItemStack extends $ICapabilitySerializable<($CompoundTag)> {

 "equals"(arg0: $ItemStack$Type, arg1: boolean): boolean
 "getEnchantmentLevel"(arg0: $Enchantment$Type): integer
 "canPerformAction"(arg0: $ToolAction$Type): boolean
 "getAllEnchantments"(): $Map<($Enchantment), (integer)>
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$Type): boolean
 "canGrindstoneRepair"(): boolean
 "hasCraftingRemainingItem"(): boolean
 "makesPiglinsNeutral"(arg0: $LivingEntity$Type): boolean
 "getCraftingRemainingItem"(): $ItemStack
 "isNotReplaceableByPickAction"(arg0: $Player$Type, arg1: integer): boolean
 "getEnchantmentValue"(): integer
 "canApplyAtEnchantingTable"(arg0: $Enchantment$Type): boolean
 "areShareTagsEqual"(arg0: $ItemStack$Type): boolean
 "onEntitySwing"(arg0: $LivingEntity$Type): boolean
 "canElytraFly"(arg0: $LivingEntity$Type): boolean
 "elytraFlightTick"(arg0: $LivingEntity$Type, arg1: integer): boolean
 "getFoodProperties"(arg0: $LivingEntity$Type): $FoodProperties
 "onStopUsing"(arg0: $LivingEntity$Type, arg1: integer): void
 "getEquipmentSlot"(): $EquipmentSlot
 "getEntityLifespan"(arg0: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
 "getSweepHitBox"(arg0: $Player$Type, arg1: $Entity$Type): $AABB
 "isRepairable"(): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "onDroppedByPlayer"(arg0: $Player$Type): boolean
 "isPiglinCurrency"(): boolean
 "readShareTag"(arg0: $CompoundTag$Type): void
 "getHighlightTip"(arg0: $Component$Type): $Component
 "getXpRepairRatio"(): float
 "getShareTag"(): $CompoundTag
 "onBlockStartBreak"(arg0: $BlockPos$Type, arg1: $Player$Type): boolean
 "onItemUseFirst"(arg0: $UseOnContext$Type): $InteractionResult
 "isBookEnchantable"(arg0: $ItemStack$Type): boolean
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $Level$Type, arg1: $Player$Type): void
 "canEquip"(arg0: $EquipmentSlot$Type, arg1: $Entity$Type): boolean
 "onInventoryTick"(arg0: $Level$Type, arg1: $Player$Type, arg2: integer, arg3: integer): void
 "getBurnTime"(arg0: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $Level$Type, arg1: $Mob$Type): void
 "isEnderMask"(arg0: $Player$Type, arg1: $EnderMan$Type): boolean
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IForgeItemStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeItemStack$Type = ($IForgeItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeItemStack_ = $IForgeItemStack$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeAdvancementBuilder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

export interface $IForgeAdvancementBuilder {

 "save"(arg0: $Consumer$Type<($Advancement$Type)>, arg1: $ResourceLocation$Type, arg2: $ExistingFileHelper$Type): $Advancement
}

export namespace $IForgeAdvancementBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeAdvancementBuilder$Type = ($IForgeAdvancementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeAdvancementBuilder_ = $IForgeAdvancementBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ClimateSettingsBuilder" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$Type} from "packages/net/minecraft/world/level/biome/$Biome$ClimateSettings"
import {$Biome$TemperatureModifier, $Biome$TemperatureModifier$Type} from "packages/net/minecraft/world/level/biome/$Biome$TemperatureModifier"

export class $ClimateSettingsBuilder {


public static "copyOf"(arg0: $Biome$ClimateSettings$Type): $ClimateSettingsBuilder
public static "create"(arg0: boolean, arg1: float, arg2: $Biome$TemperatureModifier$Type, arg3: float): $ClimateSettingsBuilder
public "setHasPrecipitation"(arg0: boolean): void
public "getTemperatureModifier"(): $Biome$TemperatureModifier
public "setTemperatureModifier"(arg0: $Biome$TemperatureModifier$Type): void
public "getTemperature"(): float
public "hasPrecipitation"(): boolean
public "setTemperature"(arg0: float): void
public "build"(): $Biome$ClimateSettings
public "getDownfall"(): float
public "setDownfall"(arg0: float): void
get "temperatureModifier"(): $Biome$TemperatureModifier
set "temperatureModifier"(value: $Biome$TemperatureModifier$Type)
get "temperature"(): float
set "temperature"(value: float)
get "downfall"(): float
set "downfall"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimateSettingsBuilder$Type = ($ClimateSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimateSettingsBuilder_ = $ClimateSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget" {
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"

export class $PacketDistributor$PacketTarget {


public "getDirection"(): $NetworkDirection
public "send"(arg0: $Packet$Type<(any)>): void
get "direction"(): $NetworkDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketDistributor$PacketTarget$Type = ($PacketDistributor$PacketTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketDistributor$PacketTarget_ = $PacketDistributor$PacketTarget$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo" {
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BiomeModifier, $BiomeModifier$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"

export class $ModifiableBiomeInfo {

constructor(arg0: $ModifiableBiomeInfo$BiomeInfo$Type)

public "get"(): $ModifiableBiomeInfo$BiomeInfo
public "getOriginalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
public "getModifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
public "applyBiomeModifiers"(arg0: $Holder$Type<($Biome$Type)>, arg1: $List$Type<($BiomeModifier$Type)>): void
get "originalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "modifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$Type = ($ModifiableBiomeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo_ = $ModifiableBiomeInfo$Type;
}}
declare module "packages/net/minecraftforge/common/$IExtensibleEnum" {
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $IExtensibleEnum {

/**
 * 
 * @deprecated
 */
 "init"(): void
}

export namespace $IExtensibleEnum {
function createCodecForExtensibleEnum<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensibleEnum$Type = ($IExtensibleEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensibleEnum_ = $IExtensibleEnum$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlockState" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IForgeBlockState {

 "rotate"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Rotation$Type): $BlockState
 "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
 "canSustainPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $IPlantable$Type): boolean
 "getFriction"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): float
 "isLadder"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): boolean
 "getLightEmission"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): integer
 "getBedDirection"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $Direction
 "canHarvestBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "isBed"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): boolean
 "isBurning"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "getRespawnPosition"(arg0: $EntityType$Type<(any)>, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: float, arg4: $LivingEntity$Type): $Optional<($Vec3)>
 "setBedOccupied"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type, arg3: boolean): void
 "isValidSpawn"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $SpawnPlacements$Type$Type, arg3: $EntityType$Type<(any)>): boolean
 "isConduitFrame"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
 "onTreeGrow"(arg0: $LevelReader$Type, arg1: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: $TreeConfiguration$Type): boolean
 "isPortalFrame"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "getExpDrop"(arg0: $LevelReader$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): integer
 "isFertile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "addRunningEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): boolean
 "addLandingEffects"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: integer): boolean
 "onNeighborChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "isStickyBlock"(): boolean
 "getWeakChanges"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "getBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type): $BlockPathTypes
 "getSoundType"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): $SoundType
 "isSlimeBlock"(): boolean
 "getFlammability"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
 "canStickTo"(arg0: $BlockState$Type): boolean
 "canEntityDestroy"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): boolean
 "onCaughtFire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $LivingEntity$Type): void
 "onBlockExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
 "getFireSpreadSpeed"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
 "isFireSource"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "isFlammable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "isScaffolding"(arg0: $LivingEntity$Type): boolean
 "getAppearance"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): $BlockState
 "canBeHydrated"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type, arg3: $BlockPos$Type): boolean
 "onBlockStateChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
 "canDropFromExplosion"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): boolean
 "getExplosionResistance"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): float
 "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): boolean
 "onDestroyedByPlayer"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: boolean, arg4: $FluidState$Type): boolean
 "getEnchantPowerBonus"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): float
 "shouldCheckWeakPower"(arg0: $SignalGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "getBeaconColorMultiplier"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): (float)[]
 "getToolModifiedState"(arg0: $UseOnContext$Type, arg1: $ToolAction$Type, arg2: boolean): $BlockState
 "getAdjacentBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type, arg3: $BlockPathTypes$Type): $BlockPathTypes
 "getStateAtViewpoint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): $BlockState
 "canRedstoneConnectTo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "getCloneItemStack"(arg0: $HitResult$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): $ItemStack
 "supportsExternalFaceHiding"(): boolean
}

export namespace $IForgeBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockState$Type = ($IForgeBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockState_ = $IForgeBlockState$Type;
}}
declare module "packages/net/minecraftforge/fluids/capability/templates/$FluidTank" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"

export class $FluidTank implements $IFluidHandler, $IFluidTank {

constructor(arg0: integer)
constructor(arg0: integer, arg1: $Predicate$Type<($FluidStack$Type)>)

public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "getSpace"(): integer
public "setValidator"(arg0: $Predicate$Type<($FluidStack$Type)>): $FluidTank
public "getCapacity"(): integer
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "setCapacity"(arg0: integer): $FluidTank
public "getTanks"(): integer
public "getTankCapacity"(arg0: integer): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: $FluidStack$Type): boolean
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "readFromNBT"(arg0: $CompoundTag$Type): $FluidTank
public "getFluid"(): $FluidStack
public "setFluid"(arg0: $FluidStack$Type): void
public "getFluidAmount"(): integer
get "empty"(): boolean
get "space"(): integer
set "validator"(value: $Predicate$Type<($FluidStack$Type)>)
get "capacity"(): integer
set "capacity"(value: integer)
get "tanks"(): integer
get "fluid"(): $FluidStack
set "fluid"(value: $FluidStack$Type)
get "fluidAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTank$Type = ($FluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTank_ = $FluidTank$Type;
}}
declare module "packages/net/minecraftforge/client/event/$RegisterKeyMappingsEvent" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Options, $Options$Type} from "packages/net/minecraft/client/$Options"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $RegisterKeyMappingsEvent extends $Event implements $IModBusEvent {

constructor()
constructor(arg0: $Options$Type)

public "register"(arg0: $KeyMapping$Type): void
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterKeyMappingsEvent$Type = ($RegisterKeyMappingsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterKeyMappingsEvent_ = $RegisterKeyMappingsEvent$Type;
}}
declare module "packages/net/minecraftforge/event/server/$ServerLifecycleEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"

export class $ServerLifecycleEvent extends $Event {

constructor()
constructor(arg0: $MinecraftServer$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
public "getServer"(): $MinecraftServer
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLifecycleEvent$Type = ($ServerLifecycleEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLifecycleEvent_ = $ServerLifecycleEvent$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilitySerializable<T extends $Tag> extends $ICapabilityProvider, $INBTSerializable<(T)> {

 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "deserializeNBT"(arg0: T): void
 "serializeNBT"(): T
}

export namespace $ICapabilitySerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilitySerializable$Type<T> = ($ICapabilitySerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilitySerializable_<T> = $ICapabilitySerializable$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$StructureModifier$Phase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StructureModifier$Phase extends $Enum<($StructureModifier$Phase)> {
static readonly "BEFORE_EVERYTHING": $StructureModifier$Phase
static readonly "ADD": $StructureModifier$Phase
static readonly "REMOVE": $StructureModifier$Phase
static readonly "MODIFY": $StructureModifier$Phase
static readonly "AFTER_EVERYTHING": $StructureModifier$Phase


public static "values"(): ($StructureModifier$Phase)[]
public static "valueOf"(arg0: string): $StructureModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$Phase$Type = (("add") | ("modify") | ("before_everything") | ("after_everything") | ("remove")) | ($StructureModifier$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModifier$Phase_ = $StructureModifier$Phase$Type;
}}
declare module "packages/net/minecraftforge/common/$PlantType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PlantType {
static readonly "PLAINS": $PlantType
static readonly "DESERT": $PlantType
static readonly "BEACH": $PlantType
static readonly "CAVE": $PlantType
static readonly "WATER": $PlantType
static readonly "NETHER": $PlantType
static readonly "CROP": $PlantType


public "getName"(): string
public static "get"(arg0: string): $PlantType
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantType$Type = ($PlantType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantType_ = $PlantType$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$LongValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$LongValue extends $ForgeConfigSpec$ConfigValue<(long)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$LongValue$Type = ($ForgeConfigSpec$LongValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$LongValue_ = $ForgeConfigSpec$LongValue$Type;
}}
declare module "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $IEntityAdditionalSpawnData {

 "writeSpawnData"(arg0: $FriendlyByteBuf$Type): void
 "readSpawnData"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IEntityAdditionalSpawnData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityAdditionalSpawnData$Type = ($IEntityAdditionalSpawnData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityAdditionalSpawnData_ = $IEntityAdditionalSpawnData$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeMinecraft" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export interface $IForgeMinecraft {

 "getLocale"(): $Locale
 "popGuiLayer"(): void
 "pushGuiLayer"(arg0: $Screen$Type): void
}

export namespace $IForgeMinecraft {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMinecraft$Type = ($IForgeMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMinecraft_ = $IForgeMinecraft$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$BlockGeometryBakingContext$VisibilityData, $BlockGeometryBakingContext$VisibilityData$Type} from "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext$VisibilityData"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IGeometryBakingContext, $IGeometryBakingContext$Type} from "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext"
import {$ItemTransforms, $ItemTransforms$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import {$IUnbakedGeometry, $IUnbakedGeometry$Type} from "packages/net/minecraftforge/client/model/geometry/$IUnbakedGeometry"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderTypeGroup, $RenderTypeGroup$Type} from "packages/net/minecraftforge/client/$RenderTypeGroup"
import {$ItemOverrides, $ItemOverrides$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BlockGeometryBakingContext implements $IGeometryBakingContext {
readonly "owner": $BlockModel
readonly "visibilityData": $BlockGeometryBakingContext$VisibilityData

constructor(arg0: $BlockModel$Type)

public "copyFrom"(arg0: $BlockGeometryBakingContext$Type): void
public "getTransforms"(): $ItemTransforms
public "useBlockLight"(): boolean
public "useAmbientOcclusion"(): boolean
public "isComponentVisible"(arg0: string, arg1: boolean): boolean
public "getMaterial"(arg0: string): $Material
public "getRenderTypeHint"(): $ResourceLocation
public "hasMaterial"(arg0: string): boolean
public "getRootTransform"(): $Transformation
public "hasCustomGeometry"(): boolean
public "getCustomGeometry"(): $IUnbakedGeometry<(any)>
public "getModelName"(): string
public "bake"(arg0: $ModelBaker$Type, arg1: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, arg2: $ModelState$Type, arg3: $ItemOverrides$Type, arg4: $ResourceLocation$Type): $BakedModel
public "isGui3d"(): boolean
public "setRootTransform"(arg0: $Transformation$Type): void
public "setRenderTypeHint"(arg0: $ResourceLocation$Type): void
public "setCustomGeometry"(arg0: $IUnbakedGeometry$Type<(any)>): void
public "setGui3d"(arg0: boolean): void
public "getRenderType"(arg0: $ResourceLocation$Type): $RenderTypeGroup
get "transforms"(): $ItemTransforms
get "renderTypeHint"(): $ResourceLocation
get "rootTransform"(): $Transformation
get "customGeometry"(): $IUnbakedGeometry<(any)>
get "modelName"(): string
get "gui3d"(): boolean
set "rootTransform"(value: $Transformation$Type)
set "renderTypeHint"(value: $ResourceLocation$Type)
set "customGeometry"(value: $IUnbakedGeometry$Type<(any)>)
set "gui3d"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$Type = ($BlockGeometryBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeometryBakingContext_ = $BlockGeometryBakingContext$Type;
}}
declare module "packages/net/minecraftforge/network/$ServerStatusPing" {
import {$ServerStatusPing$ChannelData, $ServerStatusPing$ChannelData$Type} from "packages/net/minecraftforge/network/$ServerStatusPing$ChannelData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ServerStatusPing extends $Record {
static readonly "CODEC": $Codec<($ServerStatusPing)>

constructor()
constructor(channels: $Map$Type<($ResourceLocation$Type), ($ServerStatusPing$ChannelData$Type)>, mods: $Map$Type<(string), (string)>, fmlNetworkVer: integer, truncated: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mods"(): $Map<(string), (string)>
public "channels"(): $Map<($ResourceLocation), ($ServerStatusPing$ChannelData)>
public "truncated"(): boolean
public "getFMLNetworkVersion"(): integer
public "toBuf"(): $ByteBuf
public "fmlNetworkVer"(): integer
public "getRemoteChannels"(): $Map<($ResourceLocation), ($ServerStatusPing$ChannelData)>
public "getRemoteModData"(): $Map<(string), (string)>
public "isTruncated"(): boolean
get "fMLNetworkVersion"(): integer
get "remoteChannels"(): $Map<($ResourceLocation), ($ServerStatusPing$ChannelData)>
get "remoteModData"(): $Map<(string), (string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatusPing$Type = ($ServerStatusPing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStatusPing_ = $ServerStatusPing$Type;
}}
declare module "packages/net/minecraftforge/common/world/$StructureModifier" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$ModifiableStructureInfo$StructureInfo$Builder, $ModifiableStructureInfo$StructureInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo$Builder"
import {$StructureModifier$Phase, $StructureModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$StructureModifier$Phase"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $StructureModifier {

 "modify"(arg0: $Holder$Type<($Structure$Type)>, arg1: $StructureModifier$Phase$Type, arg2: $ModifiableStructureInfo$StructureInfo$Builder$Type): void
 "codec"(): $Codec<(any)>
}

export namespace $StructureModifier {
const DIRECT_CODEC: $Codec<($StructureModifier)>
const REFERENCE_CODEC: $Codec<($Holder<($StructureModifier)>)>
const LIST_CODEC: $Codec<($HolderSet<($StructureModifier)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$Type = ($StructureModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModifier_ = $StructureModifier$Type;
}}
declare module "packages/net/minecraftforge/event/server/$ServerStartedEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLifecycleEvent, $ServerLifecycleEvent$Type} from "packages/net/minecraftforge/event/server/$ServerLifecycleEvent"

export class $ServerStartedEvent extends $ServerLifecycleEvent {

constructor(arg0: $MinecraftServer$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStartedEvent$Type = ($ServerStartedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStartedEvent_ = $ServerStartedEvent$Type;
}}
declare module "packages/net/minecraftforge/fml/event/$IModBusEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModBusEvent {

}

export namespace $IModBusEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModBusEvent$Type = ($IModBusEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModBusEvent_ = $IModBusEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBaseRailBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeBaseRailBlock {

 "getRailDirection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): $RailShape
 "isFlexibleRail"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "getRailMaxSpeed"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): float
 "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
 "isValidRailShape"(arg0: $RailShape$Type): boolean
 "canMakeSlopes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
}

export namespace $IForgeBaseRailBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBaseRailBlock$Type = ($IForgeBaseRailBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBaseRailBlock_ = $IForgeBaseRailBlock$Type;
}}
declare module "packages/net/minecraftforge/client/textures/$ForgeTextureMetadata" {
import {$ITextureAtlasSpriteLoader, $ITextureAtlasSpriteLoader$Type} from "packages/net/minecraftforge/client/textures/$ITextureAtlasSpriteLoader"
import {$MetadataSectionSerializer, $MetadataSectionSerializer$Type} from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"

export class $ForgeTextureMetadata {
static readonly "EMPTY": $ForgeTextureMetadata
static readonly "SERIALIZER": $MetadataSectionSerializer<($ForgeTextureMetadata)>

constructor(arg0: $ITextureAtlasSpriteLoader$Type)

public "getLoader"(): $ITextureAtlasSpriteLoader
public static "forResource"(arg0: $Resource$Type): $ForgeTextureMetadata
get "loader"(): $ITextureAtlasSpriteLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeTextureMetadata$Type = ($ForgeTextureMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeTextureMetadata_ = $ForgeTextureMetadata$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeBlockAndTintGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IForgeBlockAndTintGetter {

 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
}

export namespace $IForgeBlockAndTintGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockAndTintGetter$Type = ($IForgeBlockAndTintGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockAndTintGetter_ = $IForgeBlockAndTintGetter$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeLivingEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IForgeEntity, $IForgeEntity$Type} from "packages/net/minecraftforge/common/extensions/$IForgeEntity"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"

export interface $IForgeLivingEntity extends $IForgeEntity {

 "self"(): $LivingEntity
 "canDrownInFluidType"(arg0: $FluidType$Type): boolean
 "sinkInFluid"(arg0: $FluidType$Type): void
 "moveInFluid"(arg0: $FluidState$Type, arg1: $Vec3$Type, arg2: double): boolean
 "jumpInFluid"(arg0: $FluidType$Type): void
 "canSwimInFluidType"(arg0: $FluidType$Type): boolean
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getMaxHeightFluidType"(): $FluidType
 "getFluidMotionScale"(arg0: $FluidType$Type): double
 "getFluidFallDistanceModifier"(arg0: $FluidType$Type): float
 "getPickedResult"(arg0: $HitResult$Type): $ItemStack
 "captureDrops"(arg0: $Collection$Type<($ItemEntity$Type)>): $Collection<($ItemEntity)>
 "captureDrops"(): $Collection<($ItemEntity)>
 "isAddedToWorld"(): boolean
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $FluidType$Type): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>, arg1: boolean): boolean
 "isInFluidType"(arg0: $FluidState$Type): boolean
 "getStepHeight"(): float
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "getSoundFromFluidType"(arg0: $FluidType$Type, arg1: $SoundAction$Type): $SoundEvent
 "shouldUpdateFluidWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$Type): boolean
 "canBeRiddenUnderFluidType"(arg0: $FluidType$Type, arg1: $Entity$Type): boolean
 "canStartSwimming"(): boolean
 "isEyeInFluidType"(arg0: $FluidType$Type): boolean
 "isPushedByFluid"(arg0: $FluidType$Type): boolean
 "getFluidTypeHeight"(arg0: $FluidType$Type): double
 "canTrample"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: float): boolean
 "onRemovedFromWorld"(): void
 "revive"(): void
 "getEyeInFluidType"(): $FluidType
 "canFluidExtinguish"(arg0: $FluidType$Type): boolean
 "canRiderInteract"(): boolean
 "shouldRiderSit"(): boolean
 "getParts"(): ($PartEntity<(any)>)[]
 "isMultipartEntity"(): boolean
 "getClassification"(arg0: boolean): $MobCategory
/**
 * 
 * @deprecated
 */
 "getEyeHeightForge"(arg0: $Pose$Type, arg1: $EntityDimensions$Type): float
 "canUpdate"(arg0: boolean): void
 "canUpdate"(): boolean
 "onAddedToWorld"(): void
 "getPersistentData"(): $CompoundTag
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeLivingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeLivingEntity$Type = ($IForgeLivingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeLivingEntity_ = $IForgeLivingEntity$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ModelBuilder$ElementBuilder$FaceBuilder, $ModelBuilder$ElementBuilder$FaceBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$FaceBuilder"
import {$ModelBuilder$ElementBuilder$RotationBuilder, $ModelBuilder$ElementBuilder$RotationBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$RotationBuilder"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$ElementBuilder {

constructor(arg0: $ModelBuilder$Type<(any)>)

public "end"(): T
public "to"(arg0: float, arg1: float, arg2: float): $ModelBuilder$ElementBuilder<>
public "from"(arg0: float, arg1: float, arg2: float): $ModelBuilder$ElementBuilder<>
public "ao"(arg0: boolean): $ModelBuilder$ElementBuilder<>
public "color"(arg0: integer): $ModelBuilder$ElementBuilder<>
public "cube"(arg0: string): $ModelBuilder$ElementBuilder<>
public "face"(arg0: $Direction$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "shade"(arg0: boolean): $ModelBuilder$ElementBuilder<>
public "faces"(arg0: $BiConsumer$Type<($Direction$Type), ($ModelBuilder$ElementBuilder$FaceBuilder$Type<>)>): $ModelBuilder$ElementBuilder<>
public "texture"(arg0: string): $ModelBuilder$ElementBuilder<>
public "calculateNormals"(arg0: boolean): $ModelBuilder$ElementBuilder<>
public "emissivity"(arg0: integer, arg1: integer): $ModelBuilder$ElementBuilder<>
public "rotation"(): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "textureAll"(arg0: string): $ModelBuilder$ElementBuilder<>
public "allFaces"(arg0: $BiConsumer$Type<($Direction$Type), ($ModelBuilder$ElementBuilder$FaceBuilder$Type<>)>): $ModelBuilder$ElementBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$ElementBuilder$Type = ($ModelBuilder$ElementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$ElementBuilder_ = $ModelBuilder$ElementBuilder$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LootingLevelEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LootingLevelEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: integer)

public "getListenerList"(): $ListenerList
public "getDamageSource"(): $DamageSource
public "getLootingLevel"(): integer
public "setLootingLevel"(arg0: integer): void
get "listenerList"(): $ListenerList
get "damageSource"(): $DamageSource
get "lootingLevel"(): integer
set "lootingLevel"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootingLevelEvent$Type = ($LootingLevelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootingLevelEvent_ = $LootingLevelEvent$Type;
}}
declare module "packages/net/minecraftforge/network/$PlayMessages$SpawnEntity" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayMessages$SpawnEntity {


public static "decode"(arg0: $FriendlyByteBuf$Type): $PlayMessages$SpawnEntity
public static "encode"(arg0: $PlayMessages$SpawnEntity$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $PlayMessages$SpawnEntity$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "getEntity"(): $Entity
public "getAdditionalData"(): $FriendlyByteBuf
public "getPosX"(): double
public "getPosZ"(): double
public "getEntityId"(): integer
public "getPosY"(): double
public "getTypeId"(): integer
public "getHeadYaw"(): byte
public "getVelX"(): integer
public "getVelY"(): integer
public "getVelZ"(): integer
public "getUuid"(): $UUID
public "getYaw"(): byte
public "getPitch"(): byte
get "entity"(): $Entity
get "additionalData"(): $FriendlyByteBuf
get "posX"(): double
get "posZ"(): double
get "entityId"(): integer
get "posY"(): double
get "typeId"(): integer
get "headYaw"(): byte
get "velX"(): integer
get "velY"(): integer
get "velZ"(): integer
get "uuid"(): $UUID
get "yaw"(): byte
get "pitch"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayMessages$SpawnEntity$Type = ($PlayMessages$SpawnEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayMessages$SpawnEntity_ = $PlayMessages$SpawnEntity$Type;
}}
declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFluidHandlerItem extends $IFluidHandler {

 "getContainer"(): $ItemStack
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "getTanks"(): integer
 "getTankCapacity"(arg0: integer): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
}

export namespace $IFluidHandlerItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandlerItem$Type = ($IFluidHandlerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandlerItem_ = $IFluidHandlerItem$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MultiPartBlockStateBuilder$PartBuilder, $MultiPartBlockStateBuilder$PartBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder"
import {$IGeneratedBlockState, $IGeneratedBlockState$Type} from "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState"
import {$ConfiguredModel$Builder, $ConfiguredModel$Builder$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MultiPartBlockStateBuilder implements $IGeneratedBlockState {

constructor(arg0: $Block$Type)

public "part"(): $ConfiguredModel$Builder<($MultiPartBlockStateBuilder$PartBuilder)>
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPartBlockStateBuilder$Type = ($MultiPartBlockStateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPartBlockStateBuilder_ = $MultiPartBlockStateBuilder$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingChangeTargetEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$LivingChangeTargetEvent$ILivingTargetType, $LivingChangeTargetEvent$ILivingTargetType$Type} from "packages/net/minecraftforge/event/entity/living/$LivingChangeTargetEvent$ILivingTargetType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingChangeTargetEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $LivingChangeTargetEvent$ILivingTargetType$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getTargetType"(): $LivingChangeTargetEvent$ILivingTargetType
public "getOriginalTarget"(): $LivingEntity
public "setNewTarget"(arg0: $LivingEntity$Type): void
public "getNewTarget"(): $LivingEntity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "targetType"(): $LivingChangeTargetEvent$ILivingTargetType
get "originalTarget"(): $LivingEntity
set "newTarget"(value: $LivingEntity$Type)
get "newTarget"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingChangeTargetEvent$Type = ($LivingChangeTargetEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingChangeTargetEvent_ = $LivingChangeTargetEvent$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo" {
import {$MobSpawnSettings, $MobSpawnSettings$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$Type} from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings"
import {$Biome$ClimateSettings, $Biome$ClimateSettings$Type} from "packages/net/minecraft/world/level/biome/$Biome$ClimateSettings"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects"

export class $ModifiableBiomeInfo$BiomeInfo extends $Record {

constructor(climateSettings: $Biome$ClimateSettings$Type, effects: $BiomeSpecialEffects$Type, generationSettings: $BiomeGenerationSettings$Type, mobSpawnSettings: $MobSpawnSettings$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "effects"(): $BiomeSpecialEffects
public "mobSpawnSettings"(): $MobSpawnSettings
public "generationSettings"(): $BiomeGenerationSettings
public "climateSettings"(): $Biome$ClimateSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$Type = ($ModifiableBiomeInfo$BiomeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo$BiomeInfo_ = $ModifiableBiomeInfo$BiomeInfo$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegistryBuilder" {
import {$IForgeRegistry$MissingFactory, $IForgeRegistry$MissingFactory$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$MissingFactory"
import {$IForgeRegistry$BakeCallback, $IForgeRegistry$BakeCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback"
import {$IForgeRegistry$CreateCallback, $IForgeRegistry$CreateCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback"
import {$IForgeRegistry$AddCallback, $IForgeRegistry$AddCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IForgeRegistry$ClearCallback, $IForgeRegistry$ClearCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback"
import {$IForgeRegistry$ValidateCallback, $IForgeRegistry$ValidateCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$ValidateCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegistryBuilder<T> {

constructor()

public "add"(arg0: $IForgeRegistry$CreateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$ClearCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$AddCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$ValidateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$BakeCallback$Type<(T)>): $RegistryBuilder<(T)>
public "getDefault"(): $ResourceLocation
public static "of"<T>(arg0: string): $RegistryBuilder<(T)>
public static "of"<T>(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public static "of"<T>(): $RegistryBuilder<(T)>
public "set"(arg0: $IForgeRegistry$MissingFactory$Type<(T)>): $RegistryBuilder<(T)>
public "setName"(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "addCallback"(arg0: any): $RegistryBuilder<(T)>
public "disableSync"(): $RegistryBuilder<(T)>
public "onValidate"(arg0: $IForgeRegistry$ValidateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "disableSaving"(): $RegistryBuilder<(T)>
public "setIDRange"(arg0: integer, arg1: integer): $RegistryBuilder<(T)>
public "onAdd"(arg0: $IForgeRegistry$AddCallback$Type<(T)>): $RegistryBuilder<(T)>
public "setMaxID"(arg0: integer): $RegistryBuilder<(T)>
public "setDefaultKey"(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "disableOverrides"(): $RegistryBuilder<(T)>
public "missing"(arg0: $IForgeRegistry$MissingFactory$Type<(T)>): $RegistryBuilder<(T)>
public "getSync"(): boolean
public "getLegacyNames"(): $Set<($ResourceLocation)>
public "onClear"(arg0: $IForgeRegistry$ClearCallback$Type<(T)>): $RegistryBuilder<(T)>
public "onBake"(arg0: $IForgeRegistry$BakeCallback$Type<(T)>): $RegistryBuilder<(T)>
public "hasTags"(): $RegistryBuilder<(T)>
public "allowModification"(): $RegistryBuilder<(T)>
public "getSaveToDisc"(): boolean
public "legacyName"(arg0: string): $RegistryBuilder<(T)>
public "legacyName"(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "onCreate"(arg0: $IForgeRegistry$CreateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "getAllowOverrides"(): boolean
public "getBake"(): $IForgeRegistry$BakeCallback<(T)>
public "getMinId"(): integer
public "getCreate"(): $IForgeRegistry$CreateCallback<(T)>
public "getMissingFactory"(): $IForgeRegistry$MissingFactory<(T)>
public "getMaxId"(): integer
public "getAdd"(): $IForgeRegistry$AddCallback<(T)>
public "getClear"(): $IForgeRegistry$ClearCallback<(T)>
public "getValidate"(): $IForgeRegistry$ValidateCallback<(T)>
public "getAllowModifications"(): boolean
get "default"(): $ResourceLocation
set "name"(value: $ResourceLocation$Type)
set "maxID"(value: integer)
set "defaultKey"(value: $ResourceLocation$Type)
get "sync"(): boolean
get "legacyNames"(): $Set<($ResourceLocation)>
get "saveToDisc"(): boolean
get "allowOverrides"(): boolean
get "bake"(): $IForgeRegistry$BakeCallback<(T)>
get "minId"(): integer
get "create"(): $IForgeRegistry$CreateCallback<(T)>
get "missingFactory"(): $IForgeRegistry$MissingFactory<(T)>
get "maxId"(): integer
get "clear"(): $IForgeRegistry$ClearCallback<(T)>
get "validate"(): $IForgeRegistry$ValidateCallback<(T)>
get "allowModifications"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryBuilder$Type<T> = ($RegistryBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryBuilder_<T> = $RegistryBuilder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$FaceBuilder" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ModelBuilder$FaceRotation, $ModelBuilder$FaceRotation$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$FaceRotation"
import {$ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"

export class $ModelBuilder$ElementBuilder$FaceBuilder {


public "end"(): $ModelBuilder$ElementBuilder<>
public "ao"(arg0: boolean): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "color"(arg0: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "tintindex"(arg0: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "texture"(arg0: string): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "calculateNormals"(arg0: boolean): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "cullface"(arg0: $Direction$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "emissivity"(arg0: integer, arg1: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "rotation"(arg0: $ModelBuilder$FaceRotation$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "uvs"(arg0: float, arg1: float, arg2: float, arg3: float): $ModelBuilder$ElementBuilder$FaceBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$ElementBuilder$FaceBuilder$Type = ($ModelBuilder$ElementBuilder$FaceBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$ElementBuilder$FaceBuilder_ = $ModelBuilder$ElementBuilder$FaceBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilityProvider {

 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>

(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
}

export namespace $ICapabilityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$Type = ($ICapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProvider_ = $ICapabilityProvider$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$CapabilityDispatcher" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapabilityDispatcher implements $INBTSerializable<($CompoundTag)>, $ICapabilityProvider {

constructor(arg0: $Map$Type<($ResourceLocation$Type), ($ICapabilityProvider$Type)>, arg1: $List$Type<($Runnable$Type)>)
constructor(arg0: $Map$Type<($ResourceLocation$Type), ($ICapabilityProvider$Type)>, arg1: $List$Type<($Runnable$Type)>, arg2: $ICapabilityProvider$Type)

public "invalidate"(): void
public "areCompatible"(arg0: $CapabilityDispatcher$Type): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityDispatcher$Type = ($CapabilityDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityDispatcher_ = $CapabilityDispatcher$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$Phase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TickEvent$Phase extends $Enum<($TickEvent$Phase)> {
static readonly "START": $TickEvent$Phase
static readonly "END": $TickEvent$Phase


public static "values"(): ($TickEvent$Phase)[]
public static "valueOf"(arg0: string): $TickEvent$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$Phase$Type = (("start") | ("end")) | ($TickEvent$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$Phase_ = $TickEvent$Phase$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerDestroyItemEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PlayerDestroyItemEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type)

public "getListenerList"(): $ListenerList
public "getHand"(): $InteractionHand
public "getOriginal"(): $ItemStack
get "listenerList"(): $ListenerList
get "hand"(): $InteractionHand
get "original"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDestroyItemEvent$Type = ($PlayerDestroyItemEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDestroyItemEvent_ = $PlayerDestroyItemEvent$Type;
}}
declare module "packages/net/minecraftforge/client/$IArmPoseTransformer" {
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IArmPoseTransformer {

 "applyTransform"(arg0: $HumanoidModel$Type<(any)>, arg1: $LivingEntity$Type, arg2: $HumanoidArm$Type): void

(arg0: $HumanoidModel$Type<(any)>, arg1: $LivingEntity$Type, arg2: $HumanoidArm$Type): void
}

export namespace $IArmPoseTransformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArmPoseTransformer$Type = ($IArmPoseTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IArmPoseTransformer_ = $IArmPoseTransformer$Type;
}}
declare module "packages/net/minecraftforge/common/util/$BrainBuilder" {
import {$Schedule, $Schedule$Type} from "packages/net/minecraft/world/entity/schedule/$Schedule"
import {$SensorType, $SensorType$Type} from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BehaviorControl, $BehaviorControl$Type} from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"
import {$Brain$Provider, $Brain$Provider$Type} from "packages/net/minecraft/world/entity/ai/$Brain$Provider"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MemoryModuleType, $MemoryModuleType$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import {$MemoryStatus, $MemoryStatus$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryStatus"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BrainBuilder<E extends $LivingEntity> {

constructor(arg0: $Brain$Type<(E)>)

public "provider"(): $Brain$Provider<(E)>
public "addMemoriesToEraseWhenActivityStopped"(arg0: $Activity$Type, arg1: $Collection$Type<($MemoryModuleType$Type<(any)>)>): void
public "getActivityMemoriesToEraseWhenStopped"(): $Map<($Activity), ($Set<($MemoryModuleType<(any)>)>)>
public "getSchedule"(): $Schedule
public "getCoreActivities"(): $Set<($Activity)>
public "getSensorTypes"(): $Collection<($SensorType<(any)>)>
public "getMemoryTypes"(): $Collection<($MemoryModuleType<(any)>)>
public "getActiveActivites"(): $Set<($Activity)>
public "setDefaultActivity"(arg0: $Activity$Type): void
public "getDefaultActivity"(): $Activity
public "setActiveActivites"(arg0: $Set$Type<($Activity$Type)>): void
public "addAvailableBehaviorsByPriorityFrom"(arg0: $Map$Type<(integer), ($Map$Type<($Activity$Type), ($Set$Type<($BehaviorControl$Type<(any)>)>)>)>): void
public "addActivityMemoriesToEraseWhenStoppedFrom"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($MemoryModuleType$Type<(any)>)>)>): void
public "addActivityMemoriesToEraseWhenStoppedTo"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($MemoryModuleType$Type<(any)>)>)>): void
public "addRequirementsToActivity"(arg0: $Activity$Type, arg1: $Collection$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>): void
public "getAvailableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($BehaviorControl<(any)>)>)>)>
public "addBehaviorToActivityByPriority"(arg0: integer, arg1: $Activity$Type, arg2: $BehaviorControl$Type<(any)>): void
public "getActivityRequirements"(): $Map<($Activity), ($Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>)>
public "setSchedule"(arg0: $Schedule$Type): void
public "addAvailableBehaviorsByPriorityTo"(arg0: $Map$Type<(integer), ($Map$Type<($Activity$Type), ($Set$Type<($BehaviorControl$Type<(any)>)>)>)>): void
public "addActivityRequirementsFrom"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>)>): void
public "addActivityRequirementsTo"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>)>): void
public "makeBrain"(arg0: $Dynamic$Type<(any)>): $Brain<(E)>
get "activityMemoriesToEraseWhenStopped"(): $Map<($Activity), ($Set<($MemoryModuleType<(any)>)>)>
get "schedule"(): $Schedule
get "coreActivities"(): $Set<($Activity)>
get "sensorTypes"(): $Collection<($SensorType<(any)>)>
get "memoryTypes"(): $Collection<($MemoryModuleType<(any)>)>
get "activeActivites"(): $Set<($Activity)>
set "defaultActivity"(value: $Activity$Type)
get "defaultActivity"(): $Activity
set "activeActivites"(value: $Set$Type<($Activity$Type)>)
get "availableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($BehaviorControl<(any)>)>)>)>
get "activityRequirements"(): $Map<($Activity), ($Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>)>
set "schedule"(value: $Schedule$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainBuilder$Type<E> = ($BrainBuilder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainBuilder_<E> = $BrainBuilder$Type<(E)>;
}}
declare module "packages/net/minecraftforge/event/level/$ChunkEvent$Unload" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$ChunkEvent, $ChunkEvent$Type} from "packages/net/minecraftforge/event/level/$ChunkEvent"

export class $ChunkEvent$Unload extends $ChunkEvent {

constructor(arg0: $ChunkAccess$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$Unload$Type = ($ChunkEvent$Unload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkEvent$Unload_ = $ChunkEvent$Unload$Type;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ForgeFlowingFluid$Flowing extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Flowing$Type = ($ForgeFlowingFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid$Flowing_ = $ForgeFlowingFluid$Flowing$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkEvent" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $NetworkEvent extends $Event {

constructor()
constructor(arg0: $Supplier$Type<($NetworkEvent$Context$Type)>)

public "getPayload"(): $FriendlyByteBuf
public "getSource"(): $Supplier<($NetworkEvent$Context)>
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "getLoginIndex"(): integer
public "hasResult"(): boolean
get "payload"(): $FriendlyByteBuf
get "source"(): $Supplier<($NetworkEvent$Context)>
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
get "loginIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEvent$Type = ($NetworkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEvent_ = $NetworkEvent$Type;
}}
declare module "packages/net/minecraftforge/fml/event/config/$ModConfigEvent$Reloading" {
import {$ModConfigEvent, $ModConfigEvent$Type} from "packages/net/minecraftforge/fml/event/config/$ModConfigEvent"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent, $IConfigEvent$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfigEvent$Reloading extends $ModConfigEvent {

constructor(arg0: $ModConfig$Type)
constructor()

public "getListenerList"(): $ListenerList
public static "unloading"(arg0: $ModConfig$Type): $IConfigEvent
public static "loading"(arg0: $ModConfig$Type): $IConfigEvent
public static "reloading"(arg0: $ModConfig$Type): $IConfigEvent
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigEvent$Reloading$Type = ($ModConfigEvent$Reloading);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigEvent$Reloading_ = $ModConfigEvent$Reloading$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$IConfigEvent" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent$ConfigConfig, $IConfigEvent$ConfigConfig$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent$ConfigConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigEvent {

 "self"<T extends ($Event) & ($IConfigEvent)>(): T
 "getConfig"(): $ModConfig

(): T
}

export namespace $IConfigEvent {
const CONFIGCONFIG: $IConfigEvent$ConfigConfig
function unloading(arg0: $ModConfig$Type): $IConfigEvent
function loading(arg0: $ModConfig$Type): $IConfigEvent
function reloading(arg0: $ModConfig$Type): $IConfigEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigEvent$Type = ($IConfigEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigEvent_ = $IConfigEvent$Type;
}}
declare module "packages/net/minecraftforge/client/$ExtendedServerListData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ExtendedServerListData extends $Record {

constructor(arg0: string, arg1: boolean, arg2: integer, arg3: string)
constructor(type: string, isCompatible: boolean, numberOfMods: integer, extraReason: string, truncated: boolean)

public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "truncated"(): boolean
public "isCompatible"(): boolean
public "numberOfMods"(): integer
public "extraReason"(): string
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedServerListData$Type = ($ExtendedServerListData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedServerListData_ = $ExtendedServerListData$Type;
}}
declare module "packages/net/minecraftforge/items/$ItemStackHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ItemStackHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<($CompoundTag)> {

constructor(arg0: $NonNullList$Type<($ItemStack$Type)>)
constructor(arg0: integer)
constructor()

public "setSize"(arg0: integer): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(i: integer): $ItemStack
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "kjs$self"(): $IItemHandler
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "asContainer"(): $Container
public "getWidth"(): integer
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "clear"(ingredient: $Ingredient$Type): void
public "clear"(): void
public "setChanged"(): void
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "getHeight"(): integer
set "size"(value: integer)
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHandler$Type = ($ItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackHandler_ = $ItemStackHandler$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ItemTransforms, $ItemTransforms$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$RenderTypeGroup, $RenderTypeGroup$Type} from "packages/net/minecraftforge/client/$RenderTypeGroup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IGeometryBakingContext {

 "getTransforms"(): $ItemTransforms
 "useBlockLight"(): boolean
 "useAmbientOcclusion"(): boolean
 "getRenderType"(arg0: $ResourceLocation$Type): $RenderTypeGroup
 "isComponentVisible"(arg0: string, arg1: boolean): boolean
 "getMaterial"(arg0: string): $Material
 "getRenderTypeHint"(): $ResourceLocation
 "hasMaterial"(arg0: string): boolean
 "getRootTransform"(): $Transformation
 "getModelName"(): string
 "isGui3d"(): boolean
}

export namespace $IGeometryBakingContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGeometryBakingContext$Type = ($IGeometryBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGeometryBakingContext_ = $IGeometryBakingContext$Type;
}}
declare module "packages/net/minecraftforge/registries/$ForgeRegistry" {
import {$ForgeRegistryForgeAccessor, $ForgeRegistryForgeAccessor$Type} from "packages/fuzs/puzzleslib/mixin/accessor/$ForgeRegistryForgeAccessor"
import {$MissingMappingsEvent, $MissingMappingsEvent$Type} from "packages/net/minecraftforge/registries/$MissingMappingsEvent"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$IdMappingEvent$IdRemapping, $IdMappingEvent$IdRemapping$Type} from "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Marker, $Marker$Type} from "packages/org/apache/logging/log4j/$Marker"
import {$IForgeRegistryModifiable, $IForgeRegistryModifiable$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryModifiable"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Object2IntMap, $Object2IntMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeRegistry<V> implements $IForgeRegistryInternal<(V)>, $IForgeRegistryModifiable<(V)>, $ForgeRegistryForgeAccessor<(any)> {
static readonly "REGISTRIES": $Marker


public "remove"(arg0: $ResourceLocation$Type): V
public "clear"(): void
public "getValue"(arg0: $ResourceLocation$Type): V
public "getValue"(arg0: integer): V
public "isEmpty"(): boolean
public "iterator"(): $Iterator<(V)>
public "getKey"(arg0: integer): $ResourceKey<(V)>
public "getKey"(arg0: V): $ResourceLocation
public "register"(arg0: integer, arg1: $ResourceLocation$Type, arg2: V): void
public "register"(arg0: $ResourceLocation$Type, arg1: V): void
public "register"(arg0: string, arg1: V): void
public "containsKey"(arg0: $ResourceLocation$Type): boolean
public "containsValue"(arg0: V): boolean
public "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
public "freeze"(): void
public "getKeys"(): $Set<($ResourceLocation)>
public "getID"(arg0: V): integer
public "getID"(arg0: $ResourceLocation$Type): integer
public "tags"(): $ITagManager<(V)>
public "addAlias"(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type): void
public "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
public "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
public "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
public "getCodec"(): $Codec<(V)>
public "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
public "getRaw"(arg0: $ResourceLocation$Type): V
public "getRegistryName"(): $ResourceLocation
public "getValues"(): $Collection<(V)>
public "bake"(): void
public "loadIds"(arg0: $Object2IntMap$Type<($ResourceLocation$Type)>, arg1: $Map$Type<($ResourceLocation$Type), (string)>, arg2: $Object2IntMap$Type<($ResourceLocation$Type)>, arg3: $Map$Type<($ResourceLocation$Type), ($IdMappingEvent$IdRemapping$Type)>, arg4: $ForgeRegistry$Type<(V)>, arg5: $ResourceLocation$Type): void
public "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
public "getMissingEvent"(arg0: $ResourceLocation$Type, arg1: $Object2IntMap$Type<($ResourceLocation$Type)>): $MissingMappingsEvent
public "makeSnapshot"(): $ForgeRegistry$Snapshot
public "setSlaveMap"(arg0: $ResourceLocation$Type, arg1: any): void
public "getDefaultKey"(): $ResourceLocation
public "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
public "getDelegateOrThrow"(value: any): $Holder$Reference<(any)>
public "getDelegateOrThrow"(location: $ResourceLocation$Type): $Holder$Reference<(any)>
public "getDelegateOrThrow"(rkey: $ResourceKey$Type<(any)>): $Holder$Reference<(any)>
public "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
public "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
public "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
public "unfreeze"(): void
public "isLocked"(): boolean
public "spliterator"(): $Spliterator<(V)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<V>;
get "empty"(): boolean
get "entries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
get "keys"(): $Set<($ResourceLocation)>
get "codec"(): $Codec<(V)>
get "registryName"(): $ResourceLocation
get "values"(): $Collection<(V)>
get "registryKey"(): $ResourceKey<($Registry<(V)>)>
get "defaultKey"(): $ResourceLocation
get "locked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistry$Type<V> = ($ForgeRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistry_<V> = $ForgeRegistry$Type<(V)>;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $IForgeRegistry$AddCallback<V> {

 "onAdd"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceKey$Type<(V)>, arg4: V, arg5: V): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceKey$Type<(V)>, arg4: V, arg5: V): void
}

export namespace $IForgeRegistry$AddCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$AddCallback$Type<V> = ($IForgeRegistry$AddCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$AddCallback_<V> = $IForgeRegistry$AddCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgePoseStack" {
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"

export interface $IForgePoseStack {

 "pushTransformation"(arg0: $Transformation$Type): void
}

export namespace $IForgePoseStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePoseStack$Type = ($IForgePoseStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePoseStack_ = $IForgePoseStack$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockStateProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$ItemModelProvider, $ItemModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"
import {$CrossCollisionBlock, $CrossCollisionBlock$Type} from "packages/net/minecraft/world/level/block/$CrossCollisionBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$VariantBlockStateBuilder, $VariantBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$IronBarsBlock, $IronBarsBlock$Type} from "packages/net/minecraft/world/level/block/$IronBarsBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"
import {$MultiPartBlockStateBuilder, $MultiPartBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$StandingSignBlock, $StandingSignBlock$Type} from "packages/net/minecraft/world/level/block/$StandingSignBlock"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$WallSignBlock, $WallSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallSignBlock"
import {$BlockModelProvider, $BlockModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelProvider"

export class $BlockStateProvider implements $DataProvider {
static readonly "WALL_PROPS": $ImmutableMap<($Direction), ($Property<($WallSide)>)>

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type)

public "itemModels"(): $ItemModelProvider
public "simpleBlockItem"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "mcLoc"(arg0: string): $ResourceLocation
public "blockTexture"(arg0: $Block$Type): $ResourceLocation
public "simpleBlock"(arg0: $Block$Type, arg1: $Function$Type<($ModelFile$Type), (($ConfiguredModel$Type)[])>): void
public "simpleBlock"(arg0: $Block$Type): void
public "simpleBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "simpleBlock"(arg0: $Block$Type, ...arg1: ($ConfiguredModel$Type)[]): void
public "getVariantBuilder"(arg0: $Block$Type): $VariantBlockStateBuilder
public "cubeAll"(arg0: $Block$Type): $ModelFile
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>, arg2: integer): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $ModelFile$Type, arg2: integer): void
public "simpleBlockWithItem"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: string): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string): void
public "logBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: string): void
public "logBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type): void
public "getMultipartBuilder"(arg0: $Block$Type): $MultiPartBlockStateBuilder
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "models"(): $BlockModelProvider
public "modLoc"(arg0: string): $ResourceLocation
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean, arg4: string): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: string): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean, arg4: $ResourceLocation$Type): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: $ResourceLocation$Type): void
public "logBlock"(arg0: $RotatedPillarBlock$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type): void
public "run"(arg0: $CachedOutput$Type): $CompletableFuture<(any)>
public "getName"(): string
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: string): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string): void
public "directionalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>, arg2: integer): void
public "directionalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "directionalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type, arg2: integer): void
public "directionalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>, arg2: integer): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type, arg2: integer): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type): void
public "pressurePlateBlock"(arg0: $PressurePlateBlock$Type, arg1: $ResourceLocation$Type): void
public "pressurePlateBlock"(arg0: $PressurePlateBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "buttonBlock"(arg0: $ButtonBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "buttonBlock"(arg0: $ButtonBlock$Type, arg1: $ResourceLocation$Type): void
public "fenceBlock"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type): void
public "fenceBlock"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "fourWayMultipart"(arg0: $MultiPartBlockStateBuilder$Type, arg1: $ModelFile$Type): void
public "fourWayBlock"(arg0: $CrossCollisionBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "signBlock"(arg0: $StandingSignBlock$Type, arg1: $WallSignBlock$Type, arg2: $ResourceLocation$Type): void
public "signBlock"(arg0: $StandingSignBlock$Type, arg1: $WallSignBlock$Type, arg2: $ModelFile$Type): void
public "slabBlock"(arg0: $SlabBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "slabBlock"(arg0: $SlabBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "slabBlock"(arg0: $SlabBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type): void
public "wallBlock"(arg0: $WallBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type): void
public "wallBlock"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "wallBlock"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type): void
public "fenceGateBlock"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "fenceGateBlock"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type): void
public "fenceGateBlock"(arg0: $FenceGateBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type): void
public "doorBlock"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "doorBlock"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "doorBlock"(arg0: $DoorBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type, arg5: $ModelFile$Type, arg6: $ModelFile$Type, arg7: $ModelFile$Type, arg8: $ModelFile$Type): void
public "paneBlock"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "paneBlock"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "paneBlock"(arg0: $IronBarsBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type, arg5: $ModelFile$Type): void
public "trapdoorBlock"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean): void
public "trapdoorBlock"(arg0: $TrapDoorBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: boolean): void
public "trapdoorBlock"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean): void
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateProvider$Type = ($BlockStateProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateProvider_ = $BlockStateProvider$Type;
}}
declare module "packages/net/minecraftforge/fml/loading/progress/$Message" {
import {$Message$MessageType, $Message$MessageType$Type} from "packages/net/minecraftforge/fml/loading/progress/$Message$MessageType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message {

constructor(arg0: string, arg1: $Message$MessageType$Type)

public "getTypeColour"(): (float)[]
public "getText"(): string
get "typeColour"(): (float)[]
get "text"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeMobEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IForgeMobEffect {

 "getCurativeItems"(): $List<($ItemStack)>
 "getSortOrder"(arg0: $MobEffectInstance$Type): integer
}

export namespace $IForgeMobEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMobEffect$Type = ($IForgeMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMobEffect_ = $IForgeMobEffect$Type;
}}
declare module "packages/net/minecraftforge/server/command/$EnumArgument$Info$Template" {
import {$EnumArgument, $EnumArgument$Type} from "packages/net/minecraftforge/server/command/$EnumArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $EnumArgument$Info$Template implements $ArgumentTypeInfo$Template<($EnumArgument<(T)>)> {


public "instantiate"(arg0: $CommandBuildContext$Type): $EnumArgument<(T)>
public "type"(): $ArgumentTypeInfo<($EnumArgument<(T)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Info$Template$Type = ($EnumArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument$Info$Template_ = $EnumArgument$Info$Template$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $PlayerEvent extends $LivingEvent {

constructor()
constructor(arg0: $Player$Type)

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$Type = ($PlayerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEvent_ = $PlayerEvent$Type;
}}
declare module "packages/net/minecraftforge/items/$IItemHandlerModifiable" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerModifiable extends $IItemHandler {

 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "getSlots"(): integer
 "isMutable"(): boolean
 "getSlots"(): integer
 "getStackInSlot"(i: integer): $ItemStack
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "kjs$self"(): $IItemHandler
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
 "getWidth"(): integer
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "clear"(ingredient: $Ingredient$Type): void
 "clear"(): void
 "setChanged"(): void
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "getHeight"(): integer
}

export namespace $IItemHandlerModifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerModifiable$Type = ($IItemHandlerModifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerModifiable_ = $IItemHandlerModifiable$Type;
}}
declare module "packages/net/minecraftforge/client/event/$ModelEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"

export class $ModelEvent extends $Event {


public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
public "hasResult"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$Type = ($ModelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelEvent_ = $ModelEvent$Type;
}}
declare module "packages/net/minecraftforge/common/util/$ITeleporter" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$PortalInfo, $PortalInfo$Type} from "packages/net/minecraft/world/level/portal/$PortalInfo"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITeleporter {

 "playTeleportSound"(arg0: $ServerPlayer$Type, arg1: $ServerLevel$Type, arg2: $ServerLevel$Type): boolean
 "getPortalInfo"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $Function$Type<($ServerLevel$Type), ($PortalInfo$Type)>): $PortalInfo
 "placeEntity"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $ServerLevel$Type, arg3: float, arg4: $Function$Type<(boolean), ($Entity$Type)>): $Entity
 "isVanilla"(): boolean
}

export namespace $ITeleporter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITeleporter$Type = ($ITeleporter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITeleporter_ = $ITeleporter$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelFile" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelFile {


public "getLocation"(): $ResourceLocation
public "getUncheckedLocation"(): $ResourceLocation
public "assertExistence"(): void
get "location"(): $ResourceLocation
get "uncheckedLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Type = ($ModelFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile_ = $ModelFile$Type;
}}
declare module "packages/net/minecraftforge/client/model/$ForgeFaceData" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ForgeFaceData extends $Record {
static readonly "DEFAULT": $ForgeFaceData
static readonly "COLOR": $Codec<(integer)>
static readonly "CODEC": $Codec<($ForgeFaceData)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: boolean)
constructor(color: integer, blockLight: integer, skyLight: integer, ambientOcclusion: boolean, calculateNormals: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "read"(arg0: $JsonElement$Type, arg1: $ForgeFaceData$Type): $ForgeFaceData
public "color"(): integer
public "skyLight"(): integer
public "blockLight"(): integer
public "calculateNormals"(): boolean
public "ambientOcclusion"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFaceData$Type = ($ForgeFaceData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFaceData_ = $ForgeFaceData$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeGenerationSettingsBuilder" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$Type} from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BiomeGenerationSettings$PlainBuilder, $BiomeGenerationSettings$PlainBuilder$Type} from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings$PlainBuilder"
import {$ConfiguredWorldCarver, $ConfiguredWorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"
import {$GenerationStep$Carving, $GenerationStep$Carving$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"

export class $BiomeGenerationSettingsBuilder extends $BiomeGenerationSettings$PlainBuilder {
readonly "features": $List<($List<($Holder<($PlacedFeature)>)>)>

constructor(arg0: $BiomeGenerationSettings$Type)

public "getFeatures"(arg0: $GenerationStep$Decoration$Type): $List<($Holder<($PlacedFeature)>)>
public "getCarvers"(arg0: $GenerationStep$Carving$Type): $List<($Holder<($ConfiguredWorldCarver<(any)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeGenerationSettingsBuilder$Type = ($BiomeGenerationSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeGenerationSettingsBuilder_ = $BiomeGenerationSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$ItemTooltipEvent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemTooltipEvent extends $PlayerEvent {

constructor()
constructor(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type)

public "getFlags"(): $TooltipFlag
public "getListenerList"(): $ListenerList
public "getItemStack"(): $ItemStack
public "getToolTip"(): $List<($Component)>
get "flags"(): $TooltipFlag
get "listenerList"(): $ListenerList
get "itemStack"(): $ItemStack
get "toolTip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTooltipEvent$Type = ($ItemTooltipEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTooltipEvent_ = $ItemTooltipEvent$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IEventBus" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GenericEvent, $GenericEvent$Type} from "packages/net/minecraftforge/eventbus/api/$GenericEvent"
import {$IEventBusInvokeDispatcher, $IEventBusInvokeDispatcher$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBusInvokeDispatcher"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EventPriority, $EventPriority$Type} from "packages/net/minecraftforge/eventbus/api/$EventPriority"

export interface $IEventBus {

 "shutdown"(): void
 "start"(): void
 "register"(arg0: any): void
 "unregister"(arg0: any): void
 "addListener"<T extends $Event>(arg0: $EventPriority$Type, arg1: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$Type, arg1: boolean, arg2: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$Type, arg1: boolean, arg2: $Class$Type<(T)>, arg3: $Consumer$Type<(T)>): void
 "post"(arg0: $Event$Type): boolean
 "post"(arg0: $Event$Type, arg1: $IEventBusInvokeDispatcher$Type): boolean
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $EventPriority$Type, arg2: boolean, arg3: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $EventPriority$Type, arg2: boolean, arg3: $Class$Type<(T)>, arg4: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $EventPriority$Type, arg2: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $Consumer$Type<(T)>): void
}

export namespace $IEventBus {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventBus$Type = ($IEventBus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventBus_ = $IEventBus$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEvent$LivingTickEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type)

public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEvent$LivingTickEvent$Type = ($LivingEvent$LivingTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEvent$LivingTickEvent_ = $LivingEvent$LivingTickEvent$Type;
}}
declare module "packages/net/minecraftforge/fluids/$IFluidTank" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export interface $IFluidTank {

 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "getCapacity"(): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "isFluidValid"(arg0: $FluidStack$Type): boolean
 "getFluid"(): $FluidStack
 "getFluidAmount"(): integer
}

export namespace $IFluidTank {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidTank$Type = ($IFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidTank_ = $IFluidTank$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$Event$Result" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Event$Result extends $Enum<($Event$Result)> {
static readonly "DENY": $Event$Result
static readonly "DEFAULT": $Event$Result
static readonly "ALLOW": $Event$Result


public static "values"(): ($Event$Result)[]
public static "valueOf"(arg0: string): $Event$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Result$Type = (("allow") | ("deny") | ("default")) | ($Event$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event$Result_ = $Event$Result$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$AttackEntityEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AttackEntityEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $Entity$Type)

public "getTarget"(): $Entity
public "getListenerList"(): $ListenerList
public "isCancelable"(): boolean
get "target"(): $Entity
get "listenerList"(): $ListenerList
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackEntityEvent$Type = ($AttackEntityEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackEntityEvent_ = $AttackEntityEvent$Type;
}}
declare module "packages/net/minecraftforge/client/settings/$KeyModifier" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IKeyConflictContext, $IKeyConflictContext$Type} from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $KeyModifier extends $Enum<($KeyModifier)> {
static readonly "CONTROL": $KeyModifier
static readonly "SHIFT": $KeyModifier
static readonly "ALT": $KeyModifier
static readonly "NONE": $KeyModifier
/**
 * 
 * @deprecated
 */
static readonly "MODIFIER_VALUES": ($KeyModifier)[]


public static "values"(): ($KeyModifier)[]
public static "valueOf"(arg0: string): $KeyModifier
public "matches"(arg0: $InputConstants$Key$Type): boolean
public "isActive"(arg0: $IKeyConflictContext$Type): boolean
/**
 * 
 * @deprecated
 */
public static "getActiveModifier"(): $KeyModifier
public static "valueFromString"(arg0: string): $KeyModifier
public static "getValues"(arg0: boolean): $List<($KeyModifier)>
public static "getModifier"(arg0: $InputConstants$Key$Type): $KeyModifier
public static "isKeyCodeModifier"(arg0: $InputConstants$Key$Type): boolean
public "getCombinedName"(arg0: $InputConstants$Key$Type, arg1: $Supplier$Type<($Component$Type)>): $Component
get "activeModifier"(): $KeyModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifier$Type = (("shift") | ("alt") | ("control") | ("none")) | ($KeyModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyModifier_ = $KeyModifier$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistryModifiable" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IForgeRegistryModifiable<V> extends $IForgeRegistry<(V)> {

 "remove"(arg0: $ResourceLocation$Type): V
 "clear"(): void
 "isLocked"(): boolean
 "getValue"(arg0: $ResourceLocation$Type): V
 "isEmpty"(): boolean
 "getKey"(arg0: V): $ResourceLocation
 "register"(arg0: $ResourceLocation$Type, arg1: V): void
 "register"(arg0: string, arg1: V): void
 "containsKey"(arg0: $ResourceLocation$Type): boolean
 "containsValue"(arg0: V): boolean
 "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
 "getKeys"(): $Set<($ResourceLocation)>
 "tags"(): $ITagManager<(V)>
 "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
 "getCodec"(): $Codec<(V)>
 "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
 "getRegistryName"(): $ResourceLocation
 "getValues"(): $Collection<(V)>
 "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
 "getDefaultKey"(): $ResourceLocation
 "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
 "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
 "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IForgeRegistryModifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistryModifiable$Type<V> = ($IForgeRegistryModifiable<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistryModifiable_<V> = $IForgeRegistryModifiable$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$RootTransformsBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$TransformationHelper$TransformOrigin, $TransformationHelper$TransformOrigin$Type} from "packages/net/minecraftforge/common/util/$TransformationHelper$TransformOrigin"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$RootTransformsBuilder {


public "scale"(arg0: $Vector3f$Type): $ModelBuilder$RootTransformsBuilder<>
public "scale"(arg0: float): $ModelBuilder$RootTransformsBuilder<>
public "scale"(arg0: float, arg1: float, arg2: float): $ModelBuilder$RootTransformsBuilder<>
public "end"(): $ModelBuilder<(T)>
public "transform"(arg0: $Transformation$Type): $ModelBuilder$RootTransformsBuilder<>
public "origin"(arg0: $Vector3f$Type): $ModelBuilder$RootTransformsBuilder<>
public "origin"(arg0: $TransformationHelper$TransformOrigin$Type): $ModelBuilder$RootTransformsBuilder<>
public "translation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$RootTransformsBuilder<>
public "translation"(arg0: $Vector3f$Type): $ModelBuilder$RootTransformsBuilder<>
public "toJson"(): $JsonObject
public "rotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "rotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
public "rightRotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "rightRotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
public "postRotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
public "postRotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "leftRotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "leftRotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$RootTransformsBuilder$Type = ($ModelBuilder$RootTransformsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$RootTransformsBuilder_ = $ModelBuilder$RootTransformsBuilder$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo$LanguageSpec" {
import {$VersionRange, $VersionRange$Type} from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IModFileInfo$LanguageSpec extends $Record {

constructor(languageName: string, acceptedVersions: $VersionRange$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "languageName"(): string
public "acceptedVersions"(): $VersionRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$LanguageSpec$Type = ($IModFileInfo$LanguageSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFileInfo$LanguageSpec_ = $IModFileInfo$LanguageSpec$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBucketPickup" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IForgeBucketPickup {

 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
}

export namespace $IForgeBucketPickup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBucketPickup$Type = ($IForgeBucketPickup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBucketPickup_ = $IForgeBucketPickup$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgePotion" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IForgePotion {

 "isFoil"(arg0: $ItemStack$Type): boolean
}

export namespace $IForgePotion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePotion$Type = ($IForgePotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePotion_ = $IForgePotion$Type;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ForgeFlowingFluid$Source extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Source$Type = ($ForgeFlowingFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid$Source_ = $ForgeFlowingFluid$Source$Type;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullFunction<T, R> {

 "apply"(arg0: T): R

(arg0: T): R
}

export namespace $NonNullFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullFunction$Type<T, R> = ($NonNullFunction<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullFunction_<T, R> = $NonNullFunction$Type<(T), (R)>;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ValidateCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeRegistry$ValidateCallback<V> {

 "onValidate"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceLocation$Type, arg4: V): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceLocation$Type, arg4: V): void
}

export namespace $IForgeRegistry$ValidateCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$ValidateCallback$Type<V> = ($IForgeRegistry$ValidateCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$ValidateCallback_<V> = $IForgeRegistry$ValidateCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IForgeBlockEntity extends $ICapabilitySerializable<($CompoundTag)> {

 "getRenderBoundingBox"(): $AABB
 "requestModelDataUpdate"(): void
 "onChunkUnloaded"(): void
 "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
 "getModelData"(): $ModelData
 "handleUpdateTag"(arg0: $CompoundTag$Type): void
 "onLoad"(): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "getPersistentData"(): $CompoundTag
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeBlockEntity {
const INFINITE_EXTENT_AABB: $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockEntity$Type = ($IForgeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockEntity_ = $IForgeBlockEntity$Type;
}}
declare module "packages/net/minecraftforge/forgespi/locating/$IModProvider" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IModFile, $IModFile$Type} from "packages/net/minecraftforge/forgespi/locating/$IModFile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModProvider {

 "name"(): string
 "isValid"(arg0: $IModFile$Type): boolean
 "scanFile"(arg0: $IModFile$Type, arg1: $Consumer$Type<($Path$Type)>): void
 "initArguments"(arg0: $Map$Type<(string), (any)>): void
}

export namespace $IModProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModProvider$Type = ($IModProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModProvider_ = $IModProvider$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ForgeConfigSpec$EnumValue, $ForgeConfigSpec$EnumValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$ValueSpec, $ForgeConfigSpec$ValueSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ValueSpec"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$ForgeConfigSpec$LongValue, $ForgeConfigSpec$LongValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$LongValue"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ForgeConfigSpec, $ForgeConfigSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeConfigSpec$Builder {

constructor()

public "comment"(arg0: string): $ForgeConfigSpec$Builder
public "comment"(...arg0: (string)[]): $ForgeConfigSpec$Builder
public "push"(arg0: $List$Type<(string)>): $ForgeConfigSpec$Builder
public "push"(arg0: string): $ForgeConfigSpec$Builder
public "pop"(arg0: integer): $ForgeConfigSpec$Builder
public "pop"(): $ForgeConfigSpec$Builder
public "configure"<T>(arg0: $Function$Type<($ForgeConfigSpec$Builder$Type), (T)>): $Pair<(T), ($ForgeConfigSpec)>
public "translation"(arg0: string): $ForgeConfigSpec$Builder
public "defineListAllowEmpty"<T>(arg0: string, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineListAllowEmpty"<T>(arg0: $List$Type<(string)>, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineListAllowEmpty"<T>(arg0: string, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineListAllowEmpty"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineInList"<T>(arg0: string, arg1: T, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: string, arg1: $Supplier$Type<(T)>, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: $List$Type<(string)>, arg1: T, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"(arg0: $List$Type<(string)>, arg1: boolean): $ForgeConfigSpec$BooleanValue
public "define"(arg0: string, arg1: boolean): $ForgeConfigSpec$BooleanValue
public "define"(arg0: string, arg1: $Supplier$Type<(boolean)>): $ForgeConfigSpec$BooleanValue
public "define"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(boolean)>): $ForgeConfigSpec$BooleanValue
public "define"<T>(arg0: string, arg1: $Supplier$Type<(T)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>, arg2: $Predicate$Type<(any)>, arg3: $Class$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: $ForgeConfigSpec$ValueSpec$Type, arg2: $Supplier$Type<(T)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: string, arg1: T): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: T): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: string, arg1: T, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: T, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInRange"(arg0: string, arg1: integer, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(double)>, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: integer, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: string, arg1: $Supplier$Type<(double)>, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: double, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(arg0: string, arg1: $Supplier$Type<(long)>, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: long, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: string, arg1: long, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(integer)>, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: string, arg1: $Supplier$Type<(integer)>, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"<V extends $Comparable<(any)>>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(V)>, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"<V extends $Comparable<(any)>>(arg0: string, arg1: $Supplier$Type<(V)>, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"<V extends $Comparable<(any)>>(arg0: $List$Type<(string)>, arg1: V, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"<V extends $Comparable<(any)>>(arg0: string, arg1: V, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(long)>, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: string, arg1: double, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: $Supplier$Type<(V)>, arg2: $Predicate$Type<(any)>, arg3: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: $Supplier$Type<(V)>, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>, arg4: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(V)>, arg2: $Predicate$Type<(any)>, arg3: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(V)>, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>, arg4: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, ...arg2: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type, ...arg3: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, ...arg2: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type, ...arg3: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineList"<T>(arg0: string, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineList"<T>(arg0: $List$Type<(string)>, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineList"<T>(arg0: string, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineList"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "worldRestart"(): $ForgeConfigSpec$Builder
public "build"(): $ForgeConfigSpec
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$Builder$Type = ($ForgeConfigSpec$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$Builder_ = $ForgeConfigSpec$Builder$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeBakedModel" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ChunkRenderTypeSet, $ChunkRenderTypeSet$Type} from "packages/net/minecraftforge/client/$ChunkRenderTypeSet"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IForgeBakedModel {

 "getModelData"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ModelData$Type): $ModelData
 "getRenderPasses"(arg0: $ItemStack$Type, arg1: boolean): $List<($BakedModel)>
 "getRenderTypes"(arg0: $BlockState$Type, arg1: $RandomSource$Type, arg2: $ModelData$Type): $ChunkRenderTypeSet
 "getRenderTypes"(arg0: $ItemStack$Type, arg1: boolean): $List<($RenderType)>
 "useAmbientOcclusion"(arg0: $BlockState$Type): boolean
 "useAmbientOcclusion"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
 "applyTransform"(arg0: $ItemDisplayContext$Type, arg1: $PoseStack$Type, arg2: boolean): $BakedModel
 "getQuads"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $RandomSource$Type, arg3: $ModelData$Type, arg4: $RenderType$Type): $List<($BakedQuad)>
 "getParticleIcon"(arg0: $ModelData$Type): $TextureAtlasSprite
}

export namespace $IForgeBakedModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBakedModel$Type = ($IForgeBakedModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBakedModel_ = $IForgeBakedModel$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $BlockModelBuilder extends $ModelBuilder<($BlockModelBuilder)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$Type)

public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelBuilder$Type = ($BlockModelBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelBuilder_ = $BlockModelBuilder$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeModelBaker" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IForgeModelBaker {

 "getModelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
 "bake"(arg0: $ResourceLocation$Type, arg1: $ModelState$Type, arg2: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>): $BakedModel
}

export namespace $IForgeModelBaker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeModelBaker$Type = ($IForgeModelBaker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeModelBaker_ = $IForgeModelBaker$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder" {
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo"
import {$ClimateSettingsBuilder, $ClimateSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$ClimateSettingsBuilder"
import {$MobSpawnSettingsBuilder, $MobSpawnSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$MobSpawnSettingsBuilder"
import {$BiomeGenerationSettingsBuilder, $BiomeGenerationSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$BiomeGenerationSettingsBuilder"
import {$BiomeSpecialEffectsBuilder, $BiomeSpecialEffectsBuilder$Type} from "packages/net/minecraftforge/common/world/$BiomeSpecialEffectsBuilder"

export class $ModifiableBiomeInfo$BiomeInfo$Builder {


public static "copyOf"(arg0: $ModifiableBiomeInfo$BiomeInfo$Type): $ModifiableBiomeInfo$BiomeInfo$Builder
public "getMobSpawnSettings"(): $MobSpawnSettingsBuilder
public "getSpecialEffects"(): $BiomeSpecialEffectsBuilder
public "getClimateSettings"(): $ClimateSettingsBuilder
public "getGenerationSettings"(): $BiomeGenerationSettingsBuilder
public "build"(): $ModifiableBiomeInfo$BiomeInfo
get "mobSpawnSettings"(): $MobSpawnSettingsBuilder
get "specialEffects"(): $BiomeSpecialEffectsBuilder
get "climateSettings"(): $ClimateSettingsBuilder
get "generationSettings"(): $BiomeGenerationSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$Builder$Type = ($ModifiableBiomeInfo$BiomeInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo$BiomeInfo$Builder_ = $ModifiableBiomeInfo$BiomeInfo$Builder$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$BakeCallback<V> {

 "onBake"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void
}

export namespace $IForgeRegistry$BakeCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$BakeCallback$Type<V> = ($IForgeRegistry$BakeCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$BakeCallback_<V> = $IForgeRegistry$BakeCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$EntityInteractSpecific" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerInteractEvent, $PlayerInteractEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerInteractEvent$EntityInteractSpecific extends $PlayerInteractEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Entity$Type, arg3: $Vec3$Type)

public "getTarget"(): $Entity
public "getListenerList"(): $ListenerList
public "getLocalPos"(): $Vec3
public "isCancelable"(): boolean
get "target"(): $Entity
get "listenerList"(): $ListenerList
get "localPos"(): $Vec3
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$EntityInteractSpecific$Type = ($PlayerInteractEvent$EntityInteractSpecific);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$EntityInteractSpecific_ = $PlayerInteractEvent$EntityInteractSpecific$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder$OverrideBuilder" {
import {$ItemModelBuilder, $ItemModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ItemModelBuilder$OverrideBuilder {

constructor(arg0: $ItemModelBuilder$Type)

public "end"(): $ItemModelBuilder
public "predicate"(arg0: $ResourceLocation$Type, arg1: float): $ItemModelBuilder$OverrideBuilder
public "model"(arg0: $ModelFile$Type): $ItemModelBuilder$OverrideBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelBuilder$OverrideBuilder$Type = ($ItemModelBuilder$OverrideBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelBuilder$OverrideBuilder_ = $ItemModelBuilder$OverrideBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$Range" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ForgeConfigSpec$Range<V extends $Comparable<(any)>> implements $Predicate<(any)> {


public "toString"(): string
public "test"(arg0: any): boolean
public "getClazz"(): $Class<(any)>
public "getMax"(): V
public "getMin"(): V
public "correct"(arg0: any, arg1: any): any
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public "negate"(): $Predicate<(any)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public static "isEqual"<T>(arg0: any): $Predicate<(any)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
get "clazz"(): $Class<(any)>
get "max"(): V
get "min"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$Range$Type<V> = ($ForgeConfigSpec$Range<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$Range_<V> = $ForgeConfigSpec$Range$Type<(V)>;
}}
declare module "packages/net/minecraftforge/items/wrapper/$RecipeWrapper" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $RecipeWrapper implements $Container {

constructor(arg0: $IItemHandlerModifiable$Type)

public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "stillValid"(arg0: $Player$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public "startOpen"(arg0: $Player$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getMaxStackSize"(): integer
public "setChanged"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "isEmpty"(): boolean
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "clearContent"(): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "isMutable"(): boolean
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "countItem"(arg0: $Item$Type): integer
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "getSlotLimit"(slot: integer): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "asContainer"(): $Container
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getWidth"(): integer
public "clear"(): void
public "setChanged"(): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "getHeight"(): integer
public "kjs$self"(): $Container
public static "tryClear"(arg0: any): void
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "clear"(ingredient: $Ingredient$Type): void
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
get "containerSize"(): integer
get "maxStackSize"(): integer
get "empty"(): boolean
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapper$Type = ($RecipeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeWrapper_ = $RecipeWrapper$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeModifier" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $BiomeModifier {

 "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
 "codec"(): $Codec<(any)>
}

export namespace $BiomeModifier {
const DIRECT_CODEC: $Codec<($BiomeModifier)>
const REFERENCE_CODEC: $Codec<($Holder<($BiomeModifier)>)>
const LIST_CODEC: $Codec<($HolderSet<($BiomeModifier)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$Type = ($BiomeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifier_ = $BiomeModifier$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$Event" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event$Result, $Event$Result$Type} from "packages/net/minecraftforge/eventbus/api/$Event$Result"
import {$EventPriority, $EventPriority$Type} from "packages/net/minecraftforge/eventbus/api/$EventPriority"

export class $Event {

constructor()

public "setResult"(arg0: $Event$Result$Type): void
public "getResult"(): $Event$Result
public "getListenerList"(): $ListenerList
public "getPhase"(): $EventPriority
public "setPhase"(arg0: $EventPriority$Type): void
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
public "isCancelable"(): boolean
public "hasResult"(): boolean
set "result"(value: $Event$Result$Type)
get "result"(): $Event$Result
get "listenerList"(): $ListenerList
get "phase"(): $EventPriority
set "phase"(value: $EventPriority$Type)
get "canceled"(): boolean
set "canceled"(value: boolean)
get "cancelable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Type = ($Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_ = $Event$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$ServerTickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$TickEvent$Phase, $TickEvent$Phase$Type} from "packages/net/minecraftforge/event/$TickEvent$Phase"
import {$TickEvent, $TickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$TickEvent$Type, $TickEvent$Type$Type} from "packages/net/minecraftforge/event/$TickEvent$Type"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $TickEvent$ServerTickEvent extends $TickEvent {
readonly "type": $TickEvent$Type
readonly "side": $LogicalSide
readonly "phase": $TickEvent$Phase

constructor()
constructor(arg0: $TickEvent$Phase$Type, arg1: $BooleanSupplier$Type, arg2: $MinecraftServer$Type)

public "getListenerList"(): $ListenerList
public "haveTime"(): boolean
public "getServer"(): $MinecraftServer
get "listenerList"(): $ListenerList
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$ServerTickEvent$Type = ($TickEvent$ServerTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$ServerTickEvent_ = $TickEvent$ServerTickEvent$Type;
}}
declare module "packages/net/minecraftforge/common/$SoundAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SoundAction {


public "name"(): string
public static "get"(arg0: string): $SoundAction
public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundAction$Type = ($SoundAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundAction_ = $SoundAction$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$ModConfig$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig$Type extends $Enum<($ModConfig$Type)> {
static readonly "COMMON": $ModConfig$Type
static readonly "CLIENT": $ModConfig$Type
static readonly "SERVER": $ModConfig$Type


public static "values"(): ($ModConfig$Type)[]
public static "valueOf"(arg0: string): $ModConfig$Type
public "extension"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$Type$Type = (("server") | ("common") | ("client")) | ($ModConfig$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfig$Type_ = $ModConfig$Type$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeSpecialEffectsBuilder" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$BiomeSpecialEffects$Builder, $BiomeSpecialEffects$Builder$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$Builder"
import {$AmbientParticleSettings, $AmbientParticleSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import {$AmbientMoodSettings, $AmbientMoodSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects"
import {$BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier"

export class $BiomeSpecialEffectsBuilder extends $BiomeSpecialEffects$Builder {
 "fogColor": $OptionalInt
 "waterColor": $OptionalInt
 "waterFogColor": $OptionalInt
 "skyColor": $OptionalInt
 "foliageColorOverride": $Optional<(integer)>
 "grassColorOverride": $Optional<(integer)>
 "grassColorModifier": $BiomeSpecialEffects$GrassColorModifier
 "ambientParticle": $Optional<($AmbientParticleSettings)>
 "ambientLoopSoundEvent": $Optional<($Holder<($SoundEvent)>)>
 "ambientMoodSettings": $Optional<($AmbientMoodSettings)>
 "ambientAdditionsSettings": $Optional<($AmbientAdditionsSettings)>
 "backgroundMusic": $Optional<($Music)>


public static "copyOf"(arg0: $BiomeSpecialEffects$Type): $BiomeSpecialEffectsBuilder
public static "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $BiomeSpecialEffectsBuilder
public "getFogColor"(): integer
public "getFoliageColorOverride"(): $Optional<(integer)>
public "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
public "getAmbientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
public "getAmbientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
public "getAmbientMoodSound"(): $Optional<($AmbientMoodSettings)>
public "getGrassColorOverride"(): $Optional<(integer)>
public "getSkyColor"(): integer
public "waterColor"(): integer
public "getBackgroundMusic"(): $Optional<($Music)>
public "getWaterFogColor"(): integer
public "getAmbientParticle"(): $Optional<($AmbientParticleSettings)>
get "fogColor"(): integer
get "foliageColorOverride"(): $Optional<(integer)>
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
get "ambientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
get "ambientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
get "ambientMoodSound"(): $Optional<($AmbientMoodSettings)>
get "grassColorOverride"(): $Optional<(integer)>
get "skyColor"(): integer
get "backgroundMusic"(): $Optional<($Music)>
get "waterFogColor"(): integer
get "ambientParticle"(): $Optional<($AmbientParticleSettings)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSpecialEffectsBuilder$Type = ($BiomeSpecialEffectsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSpecialEffectsBuilder_ = $BiomeSpecialEffectsBuilder$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder$TransformVecBuilder" {
import {$ModelBuilder$TransformsBuilder, $ModelBuilder$TransformsBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder"

export class $ModelBuilder$TransformsBuilder$TransformVecBuilder {


public "scale"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "scale"(arg0: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "end"(): $ModelBuilder$TransformsBuilder<>
public "translation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "rotation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "rightRotation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "leftRotation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$TransformsBuilder$TransformVecBuilder$Type = ($ModelBuilder$TransformsBuilder$TransformVecBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$TransformsBuilder$TransformVecBuilder_ = $ModelBuilder$TransformsBuilder$TransformVecBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/$ConditionalRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ConditionalRecipe$Serializer<T extends $Recipe<(any)>> implements $RecipeSerializer<(T)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalRecipe$Serializer$Type<T> = ($ConditionalRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionalRecipe$Serializer_<T> = $ConditionalRecipe$Serializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgePackResources" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$PackResources, $PackResources$Type} from "packages/net/minecraft/server/packs/$PackResources"

export interface $IForgePackResources {

 "isHidden"(): boolean
 "getChildren"(): $Collection<($PackResources)>
}

export namespace $IForgePackResources {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePackResources$Type = ($IForgePackResources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePackResources_ = $IForgePackResources$Type;
}}
declare module "packages/net/minecraftforge/registries/tags/$ITag" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $ITag<V> extends $Iterable<(V)> {

 "isEmpty"(): boolean
 "size"(): integer
 "stream"(): $Stream<(V)>
 "contains"(arg0: V): boolean
 "getKey"(): $TagKey<(V)>
 "isBound"(): boolean
 "getRandomElement"(arg0: $RandomSource$Type): $Optional<(V)>
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $ITag {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITag$Type<V> = ($ITag<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITag_<V> = $ITag$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions$FontContext" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IClientItemExtensions$FontContext extends $Enum<($IClientItemExtensions$FontContext)> {
static readonly "ITEM_COUNT": $IClientItemExtensions$FontContext
static readonly "TOOLTIP": $IClientItemExtensions$FontContext
static readonly "SELECTED_ITEM_NAME": $IClientItemExtensions$FontContext


public static "values"(): ($IClientItemExtensions$FontContext)[]
public static "valueOf"(arg0: string): $IClientItemExtensions$FontContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$FontContext$Type = (("item_count") | ("selected_item_name") | ("tooltip")) | ($IClientItemExtensions$FontContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientItemExtensions$FontContext_ = $IClientItemExtensions$FontContext$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegistryManager" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import {$ForgeRegistry, $ForgeRegistry$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HandshakeMessages$S2CRegistry, $HandshakeMessages$S2CRegistry$Type} from "packages/net/minecraftforge/network/$HandshakeMessages$S2CRegistry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RegistryManager {
static readonly "ACTIVE": $RegistryManager
static readonly "VANILLA": $RegistryManager
static readonly "FROZEN": $RegistryManager

constructor(arg0: string)

public "getName"<V>(arg0: $IForgeRegistry$Type<(V)>): $ResourceLocation
public "getName"(): string
public "clean"(): void
public "takeSnapshot"(arg0: boolean): $Map<($ResourceLocation), ($ForgeRegistry$Snapshot)>
public "getRegistry"<V>(arg0: $ResourceLocation$Type, arg1: $RegistryManager$Type): $ForgeRegistry<(V)>
public "getRegistry"<V>(arg0: $ResourceKey$Type<(any)>): $ForgeRegistry<(V)>
public "getRegistry"<V>(arg0: $ResourceLocation$Type): $ForgeRegistry<(V)>
public static "postNewRegistryEvent"(): void
public static "generateRegistryPackets"(arg0: boolean): $List<($Pair<(string), ($HandshakeMessages$S2CRegistry)>)>
public static "getRegistryNamesForSyncToClient"(): $List<($ResourceLocation)>
public "updateLegacyName"<V>(arg0: $ResourceLocation$Type): $ResourceLocation
public static "getVanillaRegistryKeys"(): $Set<($ResourceLocation)>
get "name"(): string
get "registryNamesForSyncToClient"(): $List<($ResourceLocation)>
get "vanillaRegistryKeys"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryManager$Type = ($RegistryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryManager_ = $RegistryManager$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ItemModelBuilder$OverrideBuilder, $ItemModelBuilder$OverrideBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder$OverrideBuilder"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ItemModelBuilder extends $ModelBuilder<($ItemModelBuilder)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$Type)

public "override"(arg0: integer): $ItemModelBuilder$OverrideBuilder
public "override"(): $ItemModelBuilder$OverrideBuilder
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelBuilder$Type = ($ItemModelBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelBuilder_ = $ItemModelBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Structure$StructureSettings, $Structure$StructureSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"

export class $ModifiableStructureInfo$StructureInfo extends $Record {

constructor(structureSettings: $Structure$StructureSettings$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "structureSettings"(): $Structure$StructureSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$Type = ($ModifiableStructureInfo$StructureInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo$StructureInfo_ = $ModifiableStructureInfo$StructureInfo$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$CreateCallback<V> {

 "onCreate"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void
}

export namespace $IForgeRegistry$CreateCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$CreateCallback$Type<V> = ($IForgeRegistry$CreateCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$CreateCallback_<V> = $IForgeRegistry$CreateCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $ForgeFlowingFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>


public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
public "isSame"(arg0: $Fluid$Type): boolean
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "getBucket"(): $Item
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "getFluidType"(): $FluidType
get "flowing"(): $Fluid
get "source"(): $Fluid
get "bucket"(): $Item
get "pickupSound"(): $Optional<($SoundEvent)>
get "fluidType"(): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Type = ($ForgeFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid_ = $ForgeFlowingFluid$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$IConfigEvent$ConfigConfig" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent, $IConfigEvent$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IConfigEvent$ConfigConfig extends $Record {

constructor(loading: $Function$Type<($ModConfig$Type), ($IConfigEvent$Type)>, reloading: $Function$Type<($ModConfig$Type), ($IConfigEvent$Type)>, unloading: $Function$Type<($ModConfig$Type), ($IConfigEvent$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "unloading"(): $Function<($ModConfig), ($IConfigEvent)>
public "loading"(): $Function<($ModConfig), ($IConfigEvent)>
public "reloading"(): $Function<($ModConfig), ($IConfigEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigEvent$ConfigConfig$Type = ($IConfigEvent$ConfigConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigEvent$ConfigConfig_ = $IConfigEvent$ConfigConfig$Type;
}}
declare module "packages/net/minecraftforge/event/level/$BlockEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent extends $Event {

constructor(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor()

public "getState"(): $BlockState
public "getListenerList"(): $ListenerList
public "getLevel"(): $LevelAccessor
public "isCancelable"(): boolean
public "hasResult"(): boolean
public "getPos"(): $BlockPos
get "state"(): $BlockState
get "listenerList"(): $ListenerList
get "level"(): $LevelAccessor
get "cancelable"(): boolean
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$Type = ($BlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent_ = $BlockEvent$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingDropsEvent extends $LivingEvent {

constructor(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: $Collection$Type<($ItemEntity$Type)>, arg3: integer, arg4: boolean)
constructor()

public "getSource"(): $DamageSource
public "getListenerList"(): $ListenerList
public "getDrops"(): $Collection<($ItemEntity)>
public "isCancelable"(): boolean
public "getLootingLevel"(): integer
public "isRecentlyHit"(): boolean
get "source"(): $DamageSource
get "listenerList"(): $ListenerList
get "drops"(): $Collection<($ItemEntity)>
get "cancelable"(): boolean
get "lootingLevel"(): integer
get "recentlyHit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDropsEvent$Type = ($LivingDropsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDropsEvent_ = $LivingDropsEvent$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions" {
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$Type} from "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$Type} from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientItemExtensions$FontContext, $IClientItemExtensions$FontContext$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions$FontContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Model, $Model$Type} from "packages/net/minecraft/client/model/$Model"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"

export interface $IClientItemExtensions {

 "getHumanoidArmorModel"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>): $HumanoidModel<(any)>
 "renderHelmetOverlay"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer, arg3: integer, arg4: float): void
 "getGenericArmorModel"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>): $Model
 "applyForgeHandTransform"(arg0: $PoseStack$Type, arg1: $LocalPlayer$Type, arg2: $HumanoidArm$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
 "getFont"(arg0: $ItemStack$Type, arg1: $IClientItemExtensions$FontContext$Type): $Font
 "getArmPose"(arg0: $LivingEntity$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type): $HumanoidModel$ArmPose
 "getCustomRenderer"(): $BlockEntityWithoutLevelRenderer
}

export namespace $IClientItemExtensions {
const DEFAULT: $IClientItemExtensions
function of(arg0: $ItemStack$Type): $IClientItemExtensions
function of(arg0: $Item$Type): $IClientItemExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$Type = ($IClientItemExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientItemExtensions_ = $IClientItemExtensions$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeEntity extends $ICapabilitySerializable<($CompoundTag)> {

 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getMaxHeightFluidType"(): $FluidType
 "getFluidMotionScale"(arg0: $FluidType$Type): double
 "getFluidFallDistanceModifier"(arg0: $FluidType$Type): float
 "getPickedResult"(arg0: $HitResult$Type): $ItemStack
 "captureDrops"(arg0: $Collection$Type<($ItemEntity$Type)>): $Collection<($ItemEntity)>
 "captureDrops"(): $Collection<($ItemEntity)>
 "isAddedToWorld"(): boolean
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $FluidType$Type): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>, arg1: boolean): boolean
 "isInFluidType"(arg0: $FluidState$Type): boolean
 "getStepHeight"(): float
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "getSoundFromFluidType"(arg0: $FluidType$Type, arg1: $SoundAction$Type): $SoundEvent
 "shouldUpdateFluidWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$Type): boolean
 "canBeRiddenUnderFluidType"(arg0: $FluidType$Type, arg1: $Entity$Type): boolean
 "canStartSwimming"(): boolean
 "isEyeInFluidType"(arg0: $FluidType$Type): boolean
 "isPushedByFluid"(arg0: $FluidType$Type): boolean
 "getFluidTypeHeight"(arg0: $FluidType$Type): double
 "canTrample"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: float): boolean
 "onRemovedFromWorld"(): void
 "revive"(): void
 "getEyeInFluidType"(): $FluidType
 "canSwimInFluidType"(arg0: $FluidType$Type): boolean
 "canFluidExtinguish"(arg0: $FluidType$Type): boolean
 "canRiderInteract"(): boolean
 "shouldRiderSit"(): boolean
 "getParts"(): ($PartEntity<(any)>)[]
 "isMultipartEntity"(): boolean
 "getClassification"(arg0: boolean): $MobCategory
/**
 * 
 * @deprecated
 */
 "getEyeHeightForge"(arg0: $Pose$Type, arg1: $EntityDimensions$Type): float
 "canUpdate"(arg0: boolean): void
 "canUpdate"(): boolean
 "onAddedToWorld"(): void
 "getPersistentData"(): $CompoundTag
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeEntity$Type = ($IForgeEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeEntity_ = $IForgeEntity$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeFluid" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeFluid {

 "move"(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
 "getBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: boolean): $BlockPathTypes
 "canHydrate"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
 "getExplosionResistance"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
 "getAdjacentBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
 "shouldUpdateWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type, arg2: $Entity$Type): boolean
 "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
 "supportsBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
 "getFluidType"(): $FluidType
 "canExtinguish"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean

(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
}

export namespace $IForgeFluid {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFluid$Type = ($IForgeFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFluid_ = $IForgeFluid$Type;
}}
