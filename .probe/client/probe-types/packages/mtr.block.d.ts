declare module "packages/mtr/block/$BlockSignalLight4Aspect1" {
import {$BlockSignalLightBase, $BlockSignalLightBase$Type} from "packages/mtr/block/$BlockSignalLightBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalLight4Aspect1 extends $BlockSignalLightBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalLight4Aspect1$Type = ($BlockSignalLight4Aspect1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalLight4Aspect1_ = $BlockSignalLight4Aspect1$Type;
}}
declare module "packages/mtr/block/$BlockSignalLight4Aspect2" {
import {$BlockSignalLightBase, $BlockSignalLightBase$Type} from "packages/mtr/block/$BlockSignalLightBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalLight4Aspect2 extends $BlockSignalLightBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalLight4Aspect2$Type = ($BlockSignalLight4Aspect2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalLight4Aspect2_ = $BlockSignalLight4Aspect2$Type;
}}
declare module "packages/mtr/block/$BlockRouteSignStandingMetal" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockRouteSignBase, $BlockRouteSignBase$Type} from "packages/mtr/block/$BlockRouteSignBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockRouteSignStandingMetal extends $BlockRouteSignBase implements $IBlock {
static readonly "ARROW_DIRECTION": $IntegerProperty
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

constructor()

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRouteSignStandingMetal$Type = ($BlockRouteSignStandingMetal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRouteSignStandingMetal_ = $BlockRouteSignStandingMetal$Type;
}}
declare module "packages/mtr/block/$BlockRouteSignWallMetal" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockRouteSignBase, $BlockRouteSignBase$Type} from "packages/mtr/block/$BlockRouteSignBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockRouteSignWallMetal extends $BlockRouteSignBase implements $IBlock {
static readonly "ARROW_DIRECTION": $IntegerProperty
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

constructor()

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRouteSignWallMetal$Type = ($BlockRouteSignWallMetal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRouteSignWallMetal_ = $BlockRouteSignWallMetal$Type;
}}
declare module "packages/mtr/block/$BlockPSDGlassEnd" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide, $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide$Type} from "packages/mtr/block/$BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockPSDAPGGlassEndBase, $BlockPSDAPGGlassEndBase$Type} from "packages/mtr/block/$BlockPSDAPGGlassEndBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPSDGlassEnd extends $BlockPSDAPGGlassEndBase {
static readonly "TOUCHING_LEFT": $EnumProperty<($BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide)>
static readonly "TOUCHING_RIGHT": $EnumProperty<($BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide)>
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

constructor(style: integer)

public "asItem"(): $Item
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPSDGlassEnd$Type = ($BlockPSDGlassEnd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDGlassEnd_ = $BlockPSDGlassEnd$Type;
}}
declare module "packages/mtr/block/$BlockTicketMachine" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirectionalDoubleBlockBase, $BlockDirectionalDoubleBlockBase$Type} from "packages/mtr/block/$BlockDirectionalDoubleBlockBase"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockTicketMachine extends $BlockDirectionalDoubleBlockBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTicketMachine$Type = ($BlockTicketMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTicketMachine_ = $BlockTicketMachine$Type;
}}
declare module "packages/mtr/block/$BlockPIDSPole" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPoleCheckBase, $BlockPoleCheckBase$Type} from "packages/mtr/block/$BlockPoleCheckBase"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPIDSPole extends $BlockPoleCheckBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPIDSPole$Type = ($BlockPIDSPole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPIDSPole_ = $BlockPIDSPole$Type;
}}
declare module "packages/mtr/block/$BlockPlatform$EnumDoorType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BlockPlatform$EnumDoorType extends $Enum<($BlockPlatform$EnumDoorType)> implements $StringRepresentable {
static readonly "NONE": $BlockPlatform$EnumDoorType
static readonly "PSD": $BlockPlatform$EnumDoorType
static readonly "APG": $BlockPlatform$EnumDoorType


public static "values"(): ($BlockPlatform$EnumDoorType)[]
public static "valueOf"(name: string): $BlockPlatform$EnumDoorType
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
export type $BlockPlatform$EnumDoorType$Type = (("psd") | ("apg") | ("none")) | ($BlockPlatform$EnumDoorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlatform$EnumDoorType_ = $BlockPlatform$EnumDoorType$Type;
}}
declare module "packages/mtr/block/$BlockLiftPanelOdd2" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockLiftPanelBase, $BlockLiftPanelBase$Type} from "packages/mtr/block/$BlockLiftPanelBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockLiftPanelOdd2 extends $BlockLiftPanelBase {
/**
 * 
 * @deprecated
 */
static readonly "LEFT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "TEMP": $BooleanProperty
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

constructor()

public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type, isTop: boolean): void
public static "updateShape"(state: $BlockState$Type, direction: $Direction$Type, isThis: boolean, getDefaultState: $Supplier$Type<($BlockState$Type)>): $BlockState
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftPanelOdd2$Type = ($BlockLiftPanelOdd2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftPanelOdd2_ = $BlockLiftPanelOdd2$Type;
}}
declare module "packages/mtr/block/$BlockClock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockMapper, $BlockMapper$Type} from "packages/mtr/mappings/$BlockMapper"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"

export class $BlockClock extends $BlockMapper implements $EntityBlockMapper {
static readonly "FACING": $BooleanProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public "getType"(): $BlockEntityType<(any)>
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockClock$Type = ($BlockClock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockClock_ = $BlockClock$Type;
}}
declare module "packages/mtr/block/$BlockLiftPanelOdd1" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockLiftPanelBase, $BlockLiftPanelBase$Type} from "packages/mtr/block/$BlockLiftPanelBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockLiftPanelOdd1 extends $BlockLiftPanelBase {
/**
 * 
 * @deprecated
 */
static readonly "LEFT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "TEMP": $BooleanProperty
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

constructor()

public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type, isTop: boolean): void
public static "updateShape"(state: $BlockState$Type, direction: $Direction$Type, isThis: boolean, getDefaultState: $Supplier$Type<($BlockState$Type)>): $BlockState
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftPanelOdd1$Type = ($BlockLiftPanelOdd1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftPanelOdd1_ = $BlockLiftPanelOdd1$Type;
}}
declare module "packages/mtr/block/$BlockEscalatorBase$EnumEscalatorOrientation" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BlockEscalatorBase$EnumEscalatorOrientation extends $Enum<($BlockEscalatorBase$EnumEscalatorOrientation)> implements $StringRepresentable {
static readonly "LANDING_BOTTOM": $BlockEscalatorBase$EnumEscalatorOrientation
static readonly "LANDING_TOP": $BlockEscalatorBase$EnumEscalatorOrientation
static readonly "FLAT": $BlockEscalatorBase$EnumEscalatorOrientation
static readonly "SLOPE": $BlockEscalatorBase$EnumEscalatorOrientation
static readonly "TRANSITION_BOTTOM": $BlockEscalatorBase$EnumEscalatorOrientation
static readonly "TRANSITION_TOP": $BlockEscalatorBase$EnumEscalatorOrientation


public static "values"(): ($BlockEscalatorBase$EnumEscalatorOrientation)[]
public static "valueOf"(name: string): $BlockEscalatorBase$EnumEscalatorOrientation
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
export type $BlockEscalatorBase$EnumEscalatorOrientation$Type = (("transition_bottom") | ("landing_top") | ("flat") | ("landing_bottom") | ("slope") | ("transition_top")) | ($BlockEscalatorBase$EnumEscalatorOrientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEscalatorBase$EnumEscalatorOrientation_ = $BlockEscalatorBase$EnumEscalatorOrientation$Type;
}}
declare module "packages/mtr/block/$BlockGlassFence" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirectionalDoubleBlockBase, $BlockDirectionalDoubleBlockBase$Type} from "packages/mtr/block/$BlockDirectionalDoubleBlockBase"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $BlockGlassFence extends $BlockDirectionalDoubleBlockBase {
static readonly "NUMBER": $IntegerProperty
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

constructor()

public "appendHoverText"(stack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getCollisionShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGlassFence$Type = ($BlockGlassFence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGlassFence_ = $BlockGlassFence$Type;
}}
declare module "packages/mtr/block/$BlockAPGDoor" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPSDAPGDoorBase, $BlockPSDAPGDoorBase$Type} from "packages/mtr/block/$BlockPSDAPGDoorBase"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockAPGDoor extends $BlockPSDAPGDoorBase {
static readonly "MAX_OPEN_VALUE": integer
static readonly "END": $BooleanProperty
static readonly "UNLOCKED": $BooleanProperty
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

constructor()

public "asItem"(): $Item
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAPGDoor$Type = ($BlockAPGDoor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAPGDoor_ = $BlockAPGDoor$Type;
}}
declare module "packages/mtr/block/$BlockSignalLight3Aspect2" {
import {$BlockSignalLightBase, $BlockSignalLightBase$Type} from "packages/mtr/block/$BlockSignalLightBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalLight3Aspect2 extends $BlockSignalLightBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalLight3Aspect2$Type = ($BlockSignalLight3Aspect2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalLight3Aspect2_ = $BlockSignalLight3Aspect2$Type;
}}
declare module "packages/mtr/block/$BlockSignalLight3Aspect1" {
import {$BlockSignalLightBase, $BlockSignalLightBase$Type} from "packages/mtr/block/$BlockSignalLightBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalLight3Aspect1 extends $BlockSignalLightBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalLight3Aspect1$Type = ($BlockSignalLight3Aspect1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalLight3Aspect1_ = $BlockSignalLight3Aspect1$Type;
}}
declare module "packages/mtr/block/$BlockNode$BlockContinuousMovementNode" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TransportMode, $TransportMode$Type} from "packages/mtr/data/$TransportMode"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockNode, $BlockNode$Type} from "packages/mtr/block/$BlockNode"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockNode$BlockContinuousMovementNode extends $BlockNode {
readonly "upper": boolean
readonly "isStation": boolean
readonly "transportMode": $TransportMode
static readonly "FACING": $BooleanProperty
static readonly "IS_22_5": $BooleanProperty
static readonly "IS_45": $BooleanProperty
static readonly "IS_CONNECTED": $BooleanProperty
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

constructor(upper: boolean, isStation: boolean)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockNode$BlockContinuousMovementNode$Type = ($BlockNode$BlockContinuousMovementNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockNode$BlockContinuousMovementNode_ = $BlockNode$BlockContinuousMovementNode$Type;
}}
declare module "packages/mtr/block/$BlockEscalatorSide" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockEscalatorBase, $BlockEscalatorBase$Type} from "packages/mtr/block/$BlockEscalatorBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEscalatorBase$EnumEscalatorOrientation, $BlockEscalatorBase$EnumEscalatorOrientation$Type} from "packages/mtr/block/$BlockEscalatorBase$EnumEscalatorOrientation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockEscalatorSide extends $BlockEscalatorBase {
static readonly "ORIENTATION": $EnumProperty<($BlockEscalatorBase$EnumEscalatorOrientation)>
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

constructor()

public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "getCollisionShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEscalatorSide$Type = ($BlockEscalatorSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEscalatorSide_ = $BlockEscalatorSide$Type;
}}
declare module "packages/mtr/block/$BlockPSDAPGGlassBase" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockPSDAPGBase, $BlockPSDAPGBase$Type} from "packages/mtr/block/$BlockPSDAPGBase"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPSDAPGGlassBase extends $BlockPSDAPGBase {
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

constructor()

public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPSDAPGGlassBase$Type = ($BlockPSDAPGGlassBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDAPGGlassBase_ = $BlockPSDAPGGlassBase$Type;
}}
declare module "packages/mtr/block/$IBlock$EnumThird" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $IBlock$EnumThird extends $Enum<($IBlock$EnumThird)> implements $StringRepresentable {
static readonly "LOWER": $IBlock$EnumThird
static readonly "MIDDLE": $IBlock$EnumThird
static readonly "UPPER": $IBlock$EnumThird


public static "values"(): ($IBlock$EnumThird)[]
public static "valueOf"(name: string): $IBlock$EnumThird
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
export type $IBlock$EnumThird$Type = (("middle") | ("lower") | ("upper")) | ($IBlock$EnumThird);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlock$EnumThird_ = $IBlock$EnumThird$Type;
}}
declare module "packages/mtr/block/$BlockPIDSBaseVertical" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirectionalDoubleBlockBase, $BlockDirectionalDoubleBlockBase$Type} from "packages/mtr/block/$BlockDirectionalDoubleBlockBase"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IPIDS, $IPIDS$Type} from "packages/mtr/data/$IPIDS"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockPIDSBaseVertical extends $BlockDirectionalDoubleBlockBase implements $EntityBlockMapper, $IPIDS {
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

constructor()

public "appendHoverText"(stack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPIDSBaseVertical$Type = ($BlockPIDSBaseVertical);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPIDSBaseVertical_ = $BlockPIDSBaseVertical$Type;
}}
declare module "packages/mtr/block/$BlockTrainSensorBase" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockMapper, $BlockMapper$Type} from "packages/mtr/mappings/$BlockMapper"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"

export class $BlockTrainSensorBase extends $BlockMapper implements $EntityBlockMapper {
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

public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public static "matchesFilter"(world: $Level$Type, pos: $BlockPos$Type, routeId: long, speed: float): boolean
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrainSensorBase$Type = ($BlockTrainSensorBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrainSensorBase_ = $BlockTrainSensorBase$Type;
}}
declare module "packages/mtr/block/$BlockLiftPanelBase" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ITripleBlock, $ITripleBlock$Type} from "packages/mtr/block/$ITripleBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockLiftPanelBase extends $BlockDirectionalMapper implements $EntityBlockMapper, $ITripleBlock {
/**
 * 
 * @deprecated
 */
static readonly "LEFT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "TEMP": $BooleanProperty
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

constructor(isOdd: boolean, isFlat: boolean)

public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type, isTop: boolean): void
public static "updateShape"(state: $BlockState$Type, direction: $Direction$Type, isThis: boolean, getDefaultState: $Supplier$Type<($BlockState$Type)>): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
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
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftPanelBase$Type = ($BlockLiftPanelBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftPanelBase_ = $BlockLiftPanelBase$Type;
}}
declare module "packages/mtr/block/$BlockTicketProcessorEnquiry" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockTicketProcessor, $BlockTicketProcessor$Type} from "packages/mtr/block/$BlockTicketProcessor"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockTicketProcessor$EnumTicketProcessorLights, $BlockTicketProcessor$EnumTicketProcessorLights$Type} from "packages/mtr/block/$BlockTicketProcessor$EnumTicketProcessorLights"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockTicketProcessorEnquiry extends $BlockTicketProcessor {
 "hasLight": boolean
 "canEnter": boolean
 "canExit": boolean
static readonly "LIGHTS": $EnumProperty<($BlockTicketProcessor$EnumTicketProcessorLights)>
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

constructor()

public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTicketProcessorEnquiry$Type = ($BlockTicketProcessorEnquiry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTicketProcessorEnquiry_ = $BlockTicketProcessorEnquiry$Type;
}}
declare module "packages/mtr/block/$BlockDirectionalDoubleBlockBase" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $BlockDirectionalDoubleBlockBase extends $BlockDirectionalMapper implements $IBlock {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, livingEntity: $LivingEntity$Type, itemStack: $ItemStack$Type): void
public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
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
export type $BlockDirectionalDoubleBlockBase$Type = ($BlockDirectionalDoubleBlockBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDirectionalDoubleBlockBase_ = $BlockDirectionalDoubleBlockBase$Type;
}}
declare module "packages/mtr/block/$BlockStationColorGlassSlab" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockStationColorSlab, $BlockStationColorSlab$Type} from "packages/mtr/block/$BlockStationColorSlab"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"

export class $BlockStationColorGlassSlab extends $BlockStationColorSlab {
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "propagatesSkylightDown"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "skipRendering"(state: $BlockState$Type, neighborState: $BlockState$Type, direction: $Direction$Type): boolean
public "getShadeBrightness"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationColorGlassSlab$Type = ($BlockStationColorGlassSlab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationColorGlassSlab_ = $BlockStationColorGlassSlab$Type;
}}
declare module "packages/mtr/block/$BlockStationNameWallWhite" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockStationNameWallBase, $BlockStationNameWallBase$Type} from "packages/mtr/block/$BlockStationNameWallBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStationNameWallWhite extends $BlockStationNameWallBase {
static readonly "COLOR": $IntegerProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationNameWallWhite$Type = ($BlockStationNameWallWhite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameWallWhite_ = $BlockStationNameWallWhite$Type;
}}
declare module "packages/mtr/block/$BlockStationColorGlass" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockStationColor, $BlockStationColor$Type} from "packages/mtr/block/$BlockStationColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockStationColorGlass extends $BlockStationColor {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "propagatesSkylightDown"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "skipRendering"(state: $BlockState$Type, neighborState: $BlockState$Type, direction: $Direction$Type): boolean
public "getShadeBrightness"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationColorGlass$Type = ($BlockStationColorGlass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationColorGlass_ = $BlockStationColorGlass$Type;
}}
declare module "packages/mtr/block/$BlockRailwaySignPole" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPoleCheckBase, $BlockPoleCheckBase$Type} from "packages/mtr/block/$BlockPoleCheckBase"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockRailwaySignPole extends $BlockPoleCheckBase {
static readonly "TYPE": $IntegerProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRailwaySignPole$Type = ($BlockRailwaySignPole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRailwaySignPole_ = $BlockRailwaySignPole$Type;
}}
declare module "packages/mtr/block/$BlockPSDTop$EnumPersistent" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BlockPSDTop$EnumPersistent extends $Enum<($BlockPSDTop$EnumPersistent)> implements $StringRepresentable {
static readonly "NONE": $BlockPSDTop$EnumPersistent
static readonly "ARROW": $BlockPSDTop$EnumPersistent
static readonly "ROUTE": $BlockPSDTop$EnumPersistent
static readonly "BLANK": $BlockPSDTop$EnumPersistent


public static "values"(): ($BlockPSDTop$EnumPersistent)[]
public static "valueOf"(name: string): $BlockPSDTop$EnumPersistent
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
export type $BlockPSDTop$EnumPersistent$Type = (("route") | ("blank") | ("arrow") | ("none")) | ($BlockPSDTop$EnumPersistent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDTop$EnumPersistent_ = $BlockPSDTop$EnumPersistent$Type;
}}
declare module "packages/mtr/block/$BlockStationColor" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockMapper, $BlockMapper$Type} from "packages/mtr/mappings/$BlockMapper"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $BlockStationColor extends $BlockMapper {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getDescriptionId"(): string
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationColor$Type = ($BlockStationColor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationColor_ = $BlockStationColor$Type;
}}
declare module "packages/mtr/block/$BlockStationColorPole" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockMapper, $BlockMapper$Type} from "packages/mtr/mappings/$BlockMapper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockStationColorPole extends $BlockMapper {
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

constructor(settings: $BlockBehaviour$Properties$Type, showTooltip: boolean)

public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public static "getStationPoleShape"(): $VoxelShape
get "stationPoleShape"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationColorPole$Type = ($BlockStationColorPole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationColorPole_ = $BlockStationColorPole$Type;
}}
declare module "packages/mtr/block/$BlockStationNameWallBlack" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockStationNameWallBase, $BlockStationNameWallBase$Type} from "packages/mtr/block/$BlockStationNameWallBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStationNameWallBlack extends $BlockStationNameWallBase {
static readonly "COLOR": $IntegerProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationNameWallBlack$Type = ($BlockStationNameWallBlack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameWallBlack_ = $BlockStationNameWallBlack$Type;
}}
declare module "packages/mtr/block/$BlockPlatform" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$BlockPlatform$EnumDoorType, $BlockPlatform$EnumDoorType$Type} from "packages/mtr/block/$BlockPlatform$EnumDoorType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPlatform extends $BlockDirectionalMapper {
static readonly "DOOR_TYPE": $EnumProperty<($BlockPlatform$EnumDoorType)>
static readonly "SIDE": $IntegerProperty
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

constructor(settings: $BlockBehaviour$Properties$Type, isIndented: boolean)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlatform$Type = ($BlockPlatform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPlatform_ = $BlockPlatform$Type;
}}
declare module "packages/mtr/block/$BlockArrivalProjectorBase" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockArrivalProjectorBase extends $BlockDirectionalMapper implements $EntityBlockMapper {
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

constructor()

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockArrivalProjectorBase$Type = ($BlockArrivalProjectorBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockArrivalProjectorBase_ = $BlockArrivalProjectorBase$Type;
}}
declare module "packages/mtr/block/$BlockArrivalProjector1Small" {
import {$BlockArrivalProjectorBase, $BlockArrivalProjectorBase$Type} from "packages/mtr/block/$BlockArrivalProjectorBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockArrivalProjector1Small extends $BlockArrivalProjectorBase {
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

constructor()

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockArrivalProjector1Small$Type = ($BlockArrivalProjector1Small);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockArrivalProjector1Small_ = $BlockArrivalProjector1Small$Type;
}}
declare module "packages/mtr/block/$BlockStationNameBase" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStationNameBase extends $BlockDirectionalMapper implements $EntityBlockMapper {
static readonly "COLOR": $IntegerProperty
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


public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationNameBase$Type = ($BlockStationNameBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameBase_ = $BlockStationNameBase$Type;
}}
declare module "packages/mtr/block/$BlockCeilingAuto" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockCeiling, $BlockCeiling$Type} from "packages/mtr/block/$BlockCeiling"

export class $BlockCeilingAuto extends $BlockCeiling {
static readonly "LIGHT": $BooleanProperty
static readonly "FACING": $BooleanProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "isRandomlyTicking"(blockState: $BlockState$Type): boolean
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "randomTick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCeilingAuto$Type = ($BlockCeilingAuto);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCeilingAuto_ = $BlockCeilingAuto$Type;
}}
declare module "packages/mtr/block/$BlockStationNameTallBase" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockStationNameBase, $BlockStationNameBase$Type} from "packages/mtr/block/$BlockStationNameBase"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $BlockStationNameTallBase extends $BlockStationNameBase implements $IBlock {
static readonly "METAL": $BooleanProperty
static readonly "COLOR": $IntegerProperty
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

constructor()

public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, itemStack: $ItemStack$Type): void
public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
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
export type $BlockStationNameTallBase$Type = ($BlockStationNameTallBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameTallBase_ = $BlockStationNameTallBase$Type;
}}
declare module "packages/mtr/block/$BlockEscalatorStep" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEscalatorBase$EnumEscalatorOrientation, $BlockEscalatorBase$EnumEscalatorOrientation$Type} from "packages/mtr/block/$BlockEscalatorBase$EnumEscalatorOrientation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEscalatorBase, $BlockEscalatorBase$Type} from "packages/mtr/block/$BlockEscalatorBase"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $BlockEscalatorStep extends $BlockEscalatorBase {
static readonly "DIRECTION": $BooleanProperty
static readonly "STATUS": $BooleanProperty
static readonly "ORIENTATION": $EnumProperty<($BlockEscalatorBase$EnumEscalatorOrientation)>
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

constructor()

public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "softenLanding"(): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEscalatorStep$Type = ($BlockEscalatorStep);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEscalatorStep_ = $BlockEscalatorStep$Type;
}}
declare module "packages/mtr/block/$BlockEscalatorBase" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEscalatorBase$EnumEscalatorOrientation, $BlockEscalatorBase$EnumEscalatorOrientation$Type} from "packages/mtr/block/$BlockEscalatorBase$EnumEscalatorOrientation"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$HorizontalBlockWithSoftLanding, $HorizontalBlockWithSoftLanding$Type} from "packages/mtr/mappings/$HorizontalBlockWithSoftLanding"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $BlockEscalatorBase extends $HorizontalBlockWithSoftLanding implements $IBlock {
static readonly "ORIENTATION": $EnumProperty<($BlockEscalatorBase$EnumEscalatorOrientation)>
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


public "getCloneItemStack"(blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type): $ItemStack
public "asItem"(): $Item
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getCollisionShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
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
export type $BlockEscalatorBase$Type = ($BlockEscalatorBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEscalatorBase_ = $BlockEscalatorBase$Type;
}}
declare module "packages/mtr/block/$BlockNode$BlockBoatNode" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$TransportMode, $TransportMode$Type} from "packages/mtr/data/$TransportMode"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockNode, $BlockNode$Type} from "packages/mtr/block/$BlockNode"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"

export class $BlockNode$BlockBoatNode extends $BlockNode implements $EntityBlockMapper {
readonly "transportMode": $TransportMode
static readonly "FACING": $BooleanProperty
static readonly "IS_22_5": $BooleanProperty
static readonly "IS_45": $BooleanProperty
static readonly "IS_CONNECTED": $BooleanProperty
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

public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public "getType"(): $BlockEntityType<(any)>
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockNode$BlockBoatNode$Type = ($BlockNode$BlockBoatNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockNode$BlockBoatNode_ = $BlockNode$BlockBoatNode$Type;
}}
declare module "packages/mtr/block/$BlockRubbishBin" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockRubbishBin extends $BlockDirectionalMapper {
static readonly "MAX_LEVEL": integer
static readonly "FILLED": $IntegerProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "isRandomlyTicking"(blockState: $BlockState$Type): boolean
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "randomTick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRubbishBin$Type = ($BlockRubbishBin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRubbishBin_ = $BlockRubbishBin$Type;
}}
declare module "packages/mtr/block/$BlockRouteSignBase" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirectionalDoubleBlockBase, $BlockDirectionalDoubleBlockBase$Type} from "packages/mtr/block/$BlockDirectionalDoubleBlockBase"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockRouteSignBase extends $BlockDirectionalDoubleBlockBase implements $EntityBlockMapper, $IBlock {
static readonly "ARROW_DIRECTION": $IntegerProperty
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

constructor()

public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRouteSignBase$Type = ($BlockRouteSignBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRouteSignBase_ = $BlockRouteSignBase$Type;
}}
declare module "packages/mtr/block/$BlockSignalSemaphoreBase" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalSemaphoreBase extends $BlockDirectionalMapper implements $EntityBlockMapper {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalSemaphoreBase$Type = ($BlockSignalSemaphoreBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalSemaphoreBase_ = $BlockSignalSemaphoreBase$Type;
}}
declare module "packages/mtr/block/$BlockTrainAnnouncer" {
import {$BlockTrainSensorBase, $BlockTrainSensorBase$Type} from "packages/mtr/block/$BlockTrainSensorBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockTrainAnnouncer extends $BlockTrainSensorBase {
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

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrainAnnouncer$Type = ($BlockTrainAnnouncer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrainAnnouncer_ = $BlockTrainAnnouncer$Type;
}}
declare module "packages/mtr/block/$BlockTicketProcessor" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirectionalDoubleBlockBase, $BlockDirectionalDoubleBlockBase$Type} from "packages/mtr/block/$BlockDirectionalDoubleBlockBase"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockTicketProcessor$EnumTicketProcessorLights, $BlockTicketProcessor$EnumTicketProcessorLights$Type} from "packages/mtr/block/$BlockTicketProcessor$EnumTicketProcessorLights"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $BlockTicketProcessor extends $BlockDirectionalDoubleBlockBase {
 "hasLight": boolean
 "canEnter": boolean
 "canExit": boolean
static readonly "LIGHTS": $EnumProperty<($BlockTicketProcessor$EnumTicketProcessorLights)>
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

constructor(hasLight: boolean, canEnter: boolean, canExit: boolean)

public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type): void
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTicketProcessor$Type = ($BlockTicketProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTicketProcessor_ = $BlockTicketProcessor$Type;
}}
declare module "packages/mtr/block/$BlockSignalSemaphore2" {
import {$BlockSignalSemaphoreBase, $BlockSignalSemaphoreBase$Type} from "packages/mtr/block/$BlockSignalSemaphoreBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalSemaphore2 extends $BlockSignalSemaphoreBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalSemaphore2$Type = ($BlockSignalSemaphore2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalSemaphore2_ = $BlockSignalSemaphore2$Type;
}}
declare module "packages/mtr/block/$BlockSignalSemaphore1" {
import {$BlockSignalSemaphoreBase, $BlockSignalSemaphoreBase$Type} from "packages/mtr/block/$BlockSignalSemaphoreBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalSemaphore1 extends $BlockSignalSemaphoreBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalSemaphore1$Type = ($BlockSignalSemaphore1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalSemaphore1_ = $BlockSignalSemaphore1$Type;
}}
declare module "packages/mtr/block/$BlockStationNameTallWall" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockStationNameTallBase, $BlockStationNameTallBase$Type} from "packages/mtr/block/$BlockStationNameTallBase"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStationNameTallWall extends $BlockStationNameTallBase {
static readonly "METAL": $BooleanProperty
static readonly "COLOR": $IntegerProperty
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

constructor()

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationNameTallWall$Type = ($BlockStationNameTallWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameTallWall_ = $BlockStationNameTallWall$Type;
}}
declare module "packages/mtr/block/$BlockTrainScheduleSensor" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockTrainPoweredSensorBase, $BlockTrainPoweredSensorBase$Type} from "packages/mtr/block/$BlockTrainPoweredSensorBase"

export class $BlockTrainScheduleSensor extends $BlockTrainPoweredSensorBase {
static readonly "POWERED": $IntegerProperty
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

public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrainScheduleSensor$Type = ($BlockTrainScheduleSensor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrainScheduleSensor_ = $BlockTrainScheduleSensor$Type;
}}
declare module "packages/mtr/block/$BlockPoleCheckBase" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"

export class $BlockPoleCheckBase extends $BlockDirectionalMapper {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPoleCheckBase$Type = ($BlockPoleCheckBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPoleCheckBase_ = $BlockPoleCheckBase$Type;
}}
declare module "packages/mtr/block/$BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide extends $Enum<($BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide)> implements $StringRepresentable {
static readonly "AIR": $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide
static readonly "DOOR": $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide
static readonly "NONE": $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide


public static "values"(): ($BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide)[]
public static "valueOf"(name: string): $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide
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
export type $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide$Type = (("door") | ("air") | ("none")) | ($BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide_ = $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide$Type;
}}
declare module "packages/mtr/block/$BlockStationNameTallBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockStationNameTallBase, $BlockStationNameTallBase$Type} from "packages/mtr/block/$BlockStationNameTallBase"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStationNameTallBlock extends $BlockStationNameTallBase {
static readonly "METAL": $BooleanProperty
static readonly "COLOR": $IntegerProperty
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

constructor()

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationNameTallBlock$Type = ($BlockStationNameTallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameTallBlock_ = $BlockStationNameTallBlock$Type;
}}
declare module "packages/mtr/block/$BlockPIDSSingleArrival1" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockPIDSBaseVertical, $BlockPIDSBaseVertical$Type} from "packages/mtr/block/$BlockPIDSBaseVertical"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPIDSSingleArrival1 extends $BlockPIDSBaseVertical {
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

constructor()

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPIDSSingleArrival1$Type = ($BlockPIDSSingleArrival1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPIDSSingleArrival1_ = $BlockPIDSSingleArrival1$Type;
}}
declare module "packages/mtr/block/$BlockRouteSignWallLight" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockRouteSignBase, $BlockRouteSignBase$Type} from "packages/mtr/block/$BlockRouteSignBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockRouteSignWallLight extends $BlockRouteSignBase implements $IBlock {
static readonly "ARROW_DIRECTION": $IntegerProperty
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

constructor()

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRouteSignWallLight$Type = ($BlockRouteSignWallLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRouteSignWallLight_ = $BlockRouteSignWallLight$Type;
}}
declare module "packages/mtr/block/$ITripleBlock" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $ITripleBlock extends $IBlock {

 "propagate"(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, callback: $Consumer$Type<($BlockPos$Type)>, maxBlocksAway: integer): void
 "propagate"<T extends $Comparable<(T)>>(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, property: $Property$Type<(T)>, maxBlocksAway: integer): void
}

export namespace $ITripleBlock {
const ODD: $BooleanProperty
function playerWillDestroy(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type, isTop: boolean): void
function updateShape(state: $BlockState$Type, direction: $Direction$Type, isThis: boolean, getDefaultState: $Supplier$Type<($BlockState$Type)>): $BlockState
function isReplaceable(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
function getSideDirection(state: $BlockState$Type): $Direction
function checkHoldingBrush(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
function checkHoldingBrush(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
function checkHoldingItem(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
function onBreakCreative(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
function getVoxelShapeByDirection(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
function getStatePropertySafe<T>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
function getStatePropertySafe<T>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITripleBlock$Type = ($ITripleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITripleBlock_ = $ITripleBlock$Type;
}}
declare module "packages/mtr/block/$BlockPIDS2" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPIDSBaseHorizontal, $BlockPIDSBaseHorizontal$Type} from "packages/mtr/block/$BlockPIDSBaseHorizontal"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPIDS2 extends $BlockPIDSBaseHorizontal {
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

constructor()

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPIDS2$Type = ($BlockPIDS2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPIDS2_ = $BlockPIDS2$Type;
}}
declare module "packages/mtr/block/$BlockPIDS3" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPIDSBaseHorizontal, $BlockPIDSBaseHorizontal$Type} from "packages/mtr/block/$BlockPIDSBaseHorizontal"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPIDS3 extends $BlockPIDSBaseHorizontal {
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

constructor()

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPIDS3$Type = ($BlockPIDS3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPIDS3_ = $BlockPIDS3$Type;
}}
declare module "packages/mtr/block/$BlockPIDS1" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPIDSBaseHorizontal, $BlockPIDSBaseHorizontal$Type} from "packages/mtr/block/$BlockPIDSBaseHorizontal"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPIDS1 extends $BlockPIDSBaseHorizontal {
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

constructor()

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPIDS1$Type = ($BlockPIDS1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPIDS1_ = $BlockPIDS1$Type;
}}
declare module "packages/mtr/block/$BlockPSDDoor" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPSDAPGDoorBase, $BlockPSDAPGDoorBase$Type} from "packages/mtr/block/$BlockPSDAPGDoorBase"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPSDDoor extends $BlockPSDAPGDoorBase {
static readonly "MAX_OPEN_VALUE": integer
static readonly "END": $BooleanProperty
static readonly "UNLOCKED": $BooleanProperty
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

constructor(style: integer)

public "asItem"(): $Item
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPSDDoor$Type = ($BlockPSDDoor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDDoor_ = $BlockPSDDoor$Type;
}}
declare module "packages/mtr/block/$BlockPIDS4" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockPIDSBaseVertical, $BlockPIDSBaseVertical$Type} from "packages/mtr/block/$BlockPIDSBaseVertical"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPIDS4 extends $BlockPIDSBaseVertical {
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

constructor()

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPIDS4$Type = ($BlockPIDS4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPIDS4_ = $BlockPIDS4$Type;
}}
declare module "packages/mtr/block/$BlockSignalLightBase" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalLightBase extends $BlockDirectionalMapper implements $EntityBlockMapper {
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

constructor(settings: $BlockBehaviour$Properties$Type, shapeX: integer, shapeHeight: integer)
/**
 * 
 * @deprecated
 */
constructor(settings: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalLightBase$Type = ($BlockSignalLightBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalLightBase_ = $BlockSignalLightBase$Type;
}}
declare module "packages/mtr/block/$BlockTrainCargoLoader" {
import {$BlockTrainSensorBase, $BlockTrainSensorBase$Type} from "packages/mtr/block/$BlockTrainSensorBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockTrainCargoLoader extends $BlockTrainSensorBase {
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

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrainCargoLoader$Type = ($BlockTrainCargoLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrainCargoLoader_ = $BlockTrainCargoLoader$Type;
}}
declare module "packages/mtr/block/$BlockLiftTrackFloor" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockLiftTrack, $BlockLiftTrack$Type} from "packages/mtr/block/$BlockLiftTrack"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockLiftTrackFloor extends $BlockLiftTrack implements $EntityBlockMapper {
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

constructor()

public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public "getType"(): $BlockEntityType<(any)>
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftTrackFloor$Type = ($BlockLiftTrackFloor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftTrackFloor_ = $BlockLiftTrackFloor$Type;
}}
declare module "packages/mtr/block/$BlockStationNameEntrance" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockStationNameBase, $BlockStationNameBase$Type} from "packages/mtr/block/$BlockStationNameBase"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"

export class $BlockStationNameEntrance extends $BlockStationNameBase implements $IBlock {
static readonly "STYLE": $IntegerProperty
static readonly "COLOR": $IntegerProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getCollisionShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
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
export type $BlockStationNameEntrance$Type = ($BlockStationNameEntrance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameEntrance_ = $BlockStationNameEntrance$Type;
}}
declare module "packages/mtr/block/$BlockStationNameWallGray" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockStationNameWallBase, $BlockStationNameWallBase$Type} from "packages/mtr/block/$BlockStationNameWallBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStationNameWallGray extends $BlockStationNameWallBase {
static readonly "COLOR": $IntegerProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationNameWallGray$Type = ($BlockStationNameWallGray);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameWallGray_ = $BlockStationNameWallGray$Type;
}}
declare module "packages/mtr/block/$BlockTrainPoweredSensorBase" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockTrainSensorBase, $BlockTrainSensorBase$Type} from "packages/mtr/block/$BlockTrainSensorBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockTrainPoweredSensorBase extends $BlockTrainSensorBase {
static readonly "POWERED": $IntegerProperty
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

public "power"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type): void
public "isSignalSource"(blockState: $BlockState$Type): boolean
public "getSignal"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, direction: $Direction$Type): integer
public "tick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrainPoweredSensorBase$Type = ($BlockTrainPoweredSensorBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrainPoweredSensorBase_ = $BlockTrainPoweredSensorBase$Type;
}}
declare module "packages/mtr/block/$BlockTrainRedstoneSensor" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockTrainPoweredSensorBase, $BlockTrainPoweredSensorBase$Type} from "packages/mtr/block/$BlockTrainPoweredSensorBase"

export class $BlockTrainRedstoneSensor extends $BlockTrainPoweredSensorBase {
static readonly "POWERED": $IntegerProperty
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

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrainRedstoneSensor$Type = ($BlockTrainRedstoneSensor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrainRedstoneSensor_ = $BlockTrainRedstoneSensor$Type;
}}
declare module "packages/mtr/block/$BlockPSDTop" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPSDTop$EnumPersistent, $BlockPSDTop$EnumPersistent$Type} from "packages/mtr/block/$BlockPSDTop$EnumPersistent"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockPSDTop extends $BlockDirectionalMapper implements $EntityBlockMapper, $IBlock {
static readonly "PERSISTENT_OFFSET_SMALL": float
static readonly "AIR_LEFT": $BooleanProperty
static readonly "AIR_RIGHT": $BooleanProperty
static readonly "ARROW_DIRECTION": $IntegerProperty
static readonly "PERSISTENT": $EnumProperty<($BlockPSDTop$EnumPersistent)>
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

constructor()

public "getCloneItemStack"(blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type): $ItemStack
public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "asItem"(): $Item
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "getActualState"(world: $BlockGetter$Type, pos: $BlockPos$Type): $BlockState
public "getType"(): $BlockEntityType<(any)>
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPSDTop$Type = ($BlockPSDTop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDTop_ = $BlockPSDTop$Type;
}}
declare module "packages/mtr/block/$BlockArrivalProjector1Medium" {
import {$BlockArrivalProjectorBase, $BlockArrivalProjectorBase$Type} from "packages/mtr/block/$BlockArrivalProjectorBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockArrivalProjector1Medium extends $BlockArrivalProjectorBase {
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

constructor()

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockArrivalProjector1Medium$Type = ($BlockArrivalProjector1Medium);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockArrivalProjector1Medium_ = $BlockArrivalProjector1Medium$Type;
}}
declare module "packages/mtr/block/$BlockAPGGlassEnd" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide, $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide$Type} from "packages/mtr/block/$BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockPSDAPGGlassEndBase, $BlockPSDAPGGlassEndBase$Type} from "packages/mtr/block/$BlockPSDAPGGlassEndBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockAPGGlassEnd extends $BlockPSDAPGGlassEndBase {
static readonly "TOUCHING_LEFT": $EnumProperty<($BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide)>
static readonly "TOUCHING_RIGHT": $EnumProperty<($BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide)>
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

constructor()

public "asItem"(): $Item
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAPGGlassEnd$Type = ($BlockAPGGlassEnd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAPGGlassEnd_ = $BlockAPGGlassEnd$Type;
}}
declare module "packages/mtr/block/$BlockLiftTrack" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"

export class $BlockLiftTrack extends $BlockDirectionalMapper {
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

constructor()

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftTrack$Type = ($BlockLiftTrack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftTrack_ = $BlockLiftTrack$Type;
}}
declare module "packages/mtr/block/$BlockStationNameWallBase" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockStationNameBase, $BlockStationNameBase$Type} from "packages/mtr/block/$BlockStationNameBase"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStationNameWallBase extends $BlockStationNameBase {
static readonly "COLOR": $IntegerProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, world: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getCollisionShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationNameWallBase$Type = ($BlockStationNameWallBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameWallBase_ = $BlockStationNameWallBase$Type;
}}
declare module "packages/mtr/block/$BlockAPGGlass" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPSDAPGGlassBase, $BlockPSDAPGGlassBase$Type} from "packages/mtr/block/$BlockPSDAPGGlassBase"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockAPGGlass extends $BlockPSDAPGGlassBase implements $EntityBlockMapper {
static readonly "ARROW_DIRECTION": $IntegerProperty
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

constructor()

public "asItem"(): $Item
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public "getType"(): $BlockEntityType<(any)>
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAPGGlass$Type = ($BlockAPGGlass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAPGGlass_ = $BlockAPGGlass$Type;
}}
declare module "packages/mtr/block/$BlockCeiling" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockMapper, $BlockMapper$Type} from "packages/mtr/mappings/$BlockMapper"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockCeiling extends $BlockMapper {
static readonly "FACING": $BooleanProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCeiling$Type = ($BlockCeiling);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCeiling_ = $BlockCeiling$Type;
}}
declare module "packages/mtr/block/$BlockPSDAPGGlassEndBase" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide, $BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide$Type} from "packages/mtr/block/$BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPSDAPGGlassBase, $BlockPSDAPGGlassBase$Type} from "packages/mtr/block/$BlockPSDAPGGlassBase"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPSDAPGGlassEndBase extends $BlockPSDAPGGlassBase {
static readonly "TOUCHING_LEFT": $EnumProperty<($BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide)>
static readonly "TOUCHING_RIGHT": $EnumProperty<($BlockPSDAPGGlassEndBase$EnumPSDAPGGlassEndSide)>
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

constructor()

public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "getEndOutlineShape"(baseShape: $VoxelShape$Type, state: $BlockState$Type, height: integer, thickness: integer, leftAir: boolean, rightAir: boolean): $VoxelShape
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPSDAPGGlassEndBase$Type = ($BlockPSDAPGGlassEndBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDAPGGlassEndBase_ = $BlockPSDAPGGlassEndBase$Type;
}}
declare module "packages/mtr/block/$BlockLiftPanelEven2" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockLiftPanelBase, $BlockLiftPanelBase$Type} from "packages/mtr/block/$BlockLiftPanelBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockLiftPanelEven2 extends $BlockLiftPanelBase {
/**
 * 
 * @deprecated
 */
static readonly "LEFT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "TEMP": $BooleanProperty
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

constructor()

public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type, isTop: boolean): void
public static "updateShape"(state: $BlockState$Type, direction: $Direction$Type, isThis: boolean, getDefaultState: $Supplier$Type<($BlockState$Type)>): $BlockState
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftPanelEven2$Type = ($BlockLiftPanelEven2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftPanelEven2_ = $BlockLiftPanelEven2$Type;
}}
declare module "packages/mtr/block/$BlockLiftPanelEven1" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockLiftPanelBase, $BlockLiftPanelBase$Type} from "packages/mtr/block/$BlockLiftPanelBase"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockLiftPanelEven1 extends $BlockLiftPanelBase {
/**
 * 
 * @deprecated
 */
static readonly "LEFT": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "TEMP": $BooleanProperty
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

constructor()

public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type, isTop: boolean): void
public static "updateShape"(state: $BlockState$Type, direction: $Direction$Type, isThis: boolean, getDefaultState: $Supplier$Type<($BlockState$Type)>): $BlockState
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftPanelEven1$Type = ($BlockLiftPanelEven1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftPanelEven1_ = $BlockLiftPanelEven1$Type;
}}
declare module "packages/mtr/block/$BlockTicketBarrier" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$TicketSystem$EnumTicketBarrierOpen, $TicketSystem$EnumTicketBarrierOpen$Type} from "packages/mtr/data/$TicketSystem$EnumTicketBarrierOpen"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockTicketBarrier extends $BlockDirectionalMapper {
static readonly "OPEN": $EnumProperty<($TicketSystem$EnumTicketBarrierOpen)>
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

constructor(isEntrance: boolean)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getCollisionShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "entityInside"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
public "tick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTicketBarrier$Type = ($BlockTicketBarrier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTicketBarrier_ = $BlockTicketBarrier$Type;
}}
declare module "packages/mtr/block/$BlockPIDSBaseHorizontal" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IPIDS, $IPIDS$Type} from "packages/mtr/data/$IPIDS"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockPIDSBaseHorizontal extends $BlockDirectionalMapper implements $EntityBlockMapper, $IPIDS {
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

constructor()

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, itemStack: $ItemStack$Type): void
public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "appendHoverText"(stack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
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
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPIDSBaseHorizontal$Type = ($BlockPIDSBaseHorizontal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPIDSBaseHorizontal_ = $BlockPIDSBaseHorizontal$Type;
}}
declare module "packages/mtr/block/$BlockLiftButtons" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockLiftButtons extends $BlockDirectionalMapper implements $EntityBlockMapper {
static readonly "UNLOCKED": $BooleanProperty
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

constructor()

public "getType"(): $BlockEntityType<(any)>
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftButtons$Type = ($BlockLiftButtons);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftButtons_ = $BlockLiftButtons$Type;
}}
declare module "packages/mtr/block/$BlockArrivalProjector1Large" {
import {$BlockArrivalProjectorBase, $BlockArrivalProjectorBase$Type} from "packages/mtr/block/$BlockArrivalProjectorBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockArrivalProjector1Large extends $BlockArrivalProjectorBase {
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

constructor()

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockArrivalProjector1Large$Type = ($BlockArrivalProjector1Large);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockArrivalProjector1Large_ = $BlockArrivalProjector1Large$Type;
}}
declare module "packages/mtr/block/$BlockPSDAPGDoorBase" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockPSDAPGBase, $BlockPSDAPGBase$Type} from "packages/mtr/block/$BlockPSDAPGBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockPSDAPGDoorBase extends $BlockPSDAPGBase implements $EntityBlockMapper {
static readonly "MAX_OPEN_VALUE": integer
static readonly "END": $BooleanProperty
static readonly "UNLOCKED": $BooleanProperty
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

constructor()

public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "tick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type): void
public "getType"(): $BlockEntityType<(any)>
public "createBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPSDAPGDoorBase$Type = ($BlockPSDAPGDoorBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDAPGDoorBase_ = $BlockPSDAPGDoorBase$Type;
}}
declare module "packages/mtr/block/$BlockPSDAPGBase" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirectionalDoubleBlockBase, $BlockDirectionalDoubleBlockBase$Type} from "packages/mtr/block/$BlockDirectionalDoubleBlockBase"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPSDAPGBase extends $BlockDirectionalDoubleBlockBase {
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

constructor()

public "getCloneItemStack"(blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, blockState: $BlockState$Type): $ItemStack
public "getVisualShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPSDAPGBase$Type = ($BlockPSDAPGBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDAPGBase_ = $BlockPSDAPGBase$Type;
}}
declare module "packages/mtr/block/$BlockPSDGlass" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPSDAPGGlassBase, $BlockPSDAPGGlassBase$Type} from "packages/mtr/block/$BlockPSDAPGGlassBase"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockPSDGlass extends $BlockPSDAPGGlassBase {
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

constructor(style: integer)

public "asItem"(): $Item
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPSDGlass$Type = ($BlockPSDGlass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPSDGlass_ = $BlockPSDGlass$Type;
}}
declare module "packages/mtr/block/$BlockTrainCargoUnloader" {
import {$BlockTrainSensorBase, $BlockTrainSensorBase$Type} from "packages/mtr/block/$BlockTrainSensorBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockTrainCargoUnloader extends $BlockTrainSensorBase {
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

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrainCargoUnloader$Type = ($BlockTrainCargoUnloader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrainCargoUnloader_ = $BlockTrainCargoUnloader$Type;
}}
declare module "packages/mtr/block/$BlockNode" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$TransportMode, $TransportMode$Type} from "packages/mtr/data/$TransportMode"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BlockNode extends $BlockDirectionalMapper {
readonly "transportMode": $TransportMode
static readonly "FACING": $BooleanProperty
static readonly "IS_22_5": $BooleanProperty
static readonly "IS_45": $BooleanProperty
static readonly "IS_CONNECTED": $BooleanProperty
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

constructor(transportMode: $TransportMode$Type)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getCollisionShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public static "getAngle"(state: $BlockState$Type): float
public static "resetRailNode"(world: $Level$Type, pos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockNode$Type = ($BlockNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockNode_ = $BlockNode$Type;
}}
declare module "packages/mtr/block/$IBlock$EnumSide" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $IBlock$EnumSide extends $Enum<($IBlock$EnumSide)> implements $StringRepresentable {
static readonly "LEFT": $IBlock$EnumSide
static readonly "RIGHT": $IBlock$EnumSide
static readonly "MIDDLE": $IBlock$EnumSide
static readonly "SINGLE": $IBlock$EnumSide


public static "values"(): ($IBlock$EnumSide)[]
public static "valueOf"(name: string): $IBlock$EnumSide
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
export type $IBlock$EnumSide$Type = (("single") | ("middle") | ("left") | ("right")) | ($IBlock$EnumSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlock$EnumSide_ = $IBlock$EnumSide$Type;
}}
declare module "packages/mtr/block/$BlockStationNameTallBlockDoubleSided" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockStationNameTallBase, $BlockStationNameTallBase$Type} from "packages/mtr/block/$BlockStationNameTallBase"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockStationNameTallBlockDoubleSided extends $BlockStationNameTallBase {
static readonly "METAL": $BooleanProperty
static readonly "COLOR": $IntegerProperty
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

constructor()

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationNameTallBlockDoubleSided$Type = ($BlockStationNameTallBlockDoubleSided);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationNameTallBlockDoubleSided_ = $BlockStationNameTallBlockDoubleSided$Type;
}}
declare module "packages/mtr/block/$BlockClockPole" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockMapper, $BlockMapper$Type} from "packages/mtr/mappings/$BlockMapper"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockClockPole extends $BlockMapper {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockClockPole$Type = ($BlockClockPole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockClockPole_ = $BlockClockPole$Type;
}}
declare module "packages/mtr/block/$BlockTicketProcessor$EnumTicketProcessorLights" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BlockTicketProcessor$EnumTicketProcessorLights extends $Enum<($BlockTicketProcessor$EnumTicketProcessorLights)> implements $StringRepresentable {
static readonly "NONE": $BlockTicketProcessor$EnumTicketProcessorLights
static readonly "RED": $BlockTicketProcessor$EnumTicketProcessorLights
static readonly "YELLOW_GREEN": $BlockTicketProcessor$EnumTicketProcessorLights
static readonly "GREEN": $BlockTicketProcessor$EnumTicketProcessorLights


public static "values"(): ($BlockTicketProcessor$EnumTicketProcessorLights)[]
public static "valueOf"(name: string): $BlockTicketProcessor$EnumTicketProcessorLights
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
export type $BlockTicketProcessor$EnumTicketProcessorLights$Type = (("red") | ("green") | ("yellow_green") | ("none")) | ($BlockTicketProcessor$EnumTicketProcessorLights);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTicketProcessor$EnumTicketProcessorLights_ = $BlockTicketProcessor$EnumTicketProcessorLights$Type;
}}
declare module "packages/mtr/block/$BlockLiftDoor" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPSDAPGDoorBase, $BlockPSDAPGDoorBase$Type} from "packages/mtr/block/$BlockPSDAPGDoorBase"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockLiftDoor extends $BlockPSDAPGDoorBase {
static readonly "MAX_OPEN_VALUE": integer
static readonly "END": $BooleanProperty
static readonly "UNLOCKED": $BooleanProperty
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

constructor()

public "asItem"(): $Item
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftDoor$Type = ($BlockLiftDoor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftDoor_ = $BlockLiftDoor$Type;
}}
declare module "packages/mtr/block/$BlockLiftDoorOdd" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ITripleBlock, $ITripleBlock$Type} from "packages/mtr/block/$ITripleBlock"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPSDAPGDoorBase, $BlockPSDAPGDoorBase$Type} from "packages/mtr/block/$BlockPSDAPGDoorBase"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockLiftDoorOdd extends $BlockPSDAPGDoorBase implements $ITripleBlock {
static readonly "MAX_OPEN_VALUE": integer
static readonly "END": $BooleanProperty
static readonly "UNLOCKED": $BooleanProperty
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

constructor()

public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "asItem"(): $Item
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type, isTop: boolean): void
public static "updateShape"(state: $BlockState$Type, direction: $Direction$Type, isThis: boolean, getDefaultState: $Supplier$Type<($BlockState$Type)>): $BlockState
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLiftDoorOdd$Type = ($BlockLiftDoorOdd);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLiftDoorOdd_ = $BlockLiftDoorOdd$Type;
}}
declare module "packages/mtr/block/$BlockSignalLight2Aspect1" {
import {$BlockSignalLightBase, $BlockSignalLightBase$Type} from "packages/mtr/block/$BlockSignalLightBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalLight2Aspect1 extends $BlockSignalLightBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalLight2Aspect1$Type = ($BlockSignalLight2Aspect1);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalLight2Aspect1_ = $BlockSignalLight2Aspect1$Type;
}}
declare module "packages/mtr/block/$BlockSignalLight2Aspect2" {
import {$BlockSignalLightBase, $BlockSignalLightBase$Type} from "packages/mtr/block/$BlockSignalLightBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalLight2Aspect2 extends $BlockSignalLightBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalLight2Aspect2$Type = ($BlockSignalLight2Aspect2);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalLight2Aspect2_ = $BlockSignalLight2Aspect2$Type;
}}
declare module "packages/mtr/block/$BlockSignalLight2Aspect3" {
import {$BlockSignalLightBase, $BlockSignalLightBase$Type} from "packages/mtr/block/$BlockSignalLightBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalLight2Aspect3 extends $BlockSignalLightBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalLight2Aspect3$Type = ($BlockSignalLight2Aspect3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalLight2Aspect3_ = $BlockSignalLight2Aspect3$Type;
}}
declare module "packages/mtr/block/$BlockSignalLight2Aspect4" {
import {$BlockSignalLightBase, $BlockSignalLightBase$Type} from "packages/mtr/block/$BlockSignalLightBase"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockSignalLight2Aspect4 extends $BlockSignalLightBase {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSignalLight2Aspect4$Type = ($BlockSignalLight2Aspect4);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSignalLight2Aspect4_ = $BlockSignalLight2Aspect4$Type;
}}
declare module "packages/mtr/block/$BlockRouteSignStandingLight" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockRouteSignBase, $BlockRouteSignBase$Type} from "packages/mtr/block/$BlockRouteSignBase"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BlockRouteSignStandingLight extends $BlockRouteSignBase implements $IBlock {
static readonly "ARROW_DIRECTION": $IntegerProperty
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

constructor()

public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRouteSignStandingLight$Type = ($BlockRouteSignStandingLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRouteSignStandingLight_ = $BlockRouteSignStandingLight$Type;
}}
declare module "packages/mtr/block/$IBlock" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$IBlock$EnumSide, $IBlock$EnumSide$Type} from "packages/mtr/block/$IBlock$EnumSide"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$IBlock$EnumThird, $IBlock$EnumThird$Type} from "packages/mtr/block/$IBlock$EnumThird"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $IBlock {

 "propagate"(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, callback: $Consumer$Type<($BlockPos$Type)>, maxBlocksAway: integer): void
 "propagate"<T extends $Comparable<(T)>>(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, property: $Property$Type<(T)>, maxBlocksAway: integer): void
}

export namespace $IBlock {
const HALF: $EnumProperty<($DoubleBlockHalf)>
const THIRD: $EnumProperty<($IBlock$EnumThird)>
const SIDE_EXTENDED: $EnumProperty<($IBlock$EnumSide)>
const SIDE: $EnumProperty<($IBlock$EnumSide)>
function isReplaceable(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
function getSideDirection(state: $BlockState$Type): $Direction
function checkHoldingBrush(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
function checkHoldingBrush(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
function checkHoldingItem(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
function onBreakCreative(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
function getVoxelShapeByDirection(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
function getStatePropertySafe<T>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
function getStatePropertySafe<T>(state: $BlockState$Type, property: $Property$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlock$Type = ($IBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlock_ = $IBlock$Type;
}}
declare module "packages/mtr/block/$BlockTactileMap" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockDirectionalDoubleBlockBase, $BlockDirectionalDoubleBlockBase$Type} from "packages/mtr/block/$BlockDirectionalDoubleBlockBase"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockTactileMap extends $BlockDirectionalDoubleBlockBase implements $EntityBlockMapper {
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "getType"(): $BlockEntityType<(any)>
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "isReplaceable"(ctx: $BlockPlaceContext$Type, direction: $Direction$Type, totalLength: integer): boolean
public static "getSideDirection"(state: $BlockState$Type): $Direction
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingBrush"(world: $Level$Type, player: $Player$Type, callbackBrush: $Runnable$Type, callbackNoBrush: $Runnable$Type): $InteractionResult
public static "checkHoldingItem"(world: $Level$Type, player: $Player$Type, callbackItem: $Consumer$Type<($Item$Type)>, callbackNoItem: $Runnable$Type, ...items: ($Item$Type)[]): $InteractionResult
public static "onBreakCreative"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type): void
public static "getVoxelShapeByDirection"(x1: double, y1: double, z1: double, x2: double, y2: double, z2: double, facing: $Direction$Type): $VoxelShape
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(world: $BlockGetter$Type, pos: $BlockPos$Type, property: $Property$Type<(T)>): T
public static "getStatePropertySafe"<T extends $Comparable<(T)>>(state: $BlockState$Type, property: $Property$Type<(T)>): T
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTactileMap$Type = ($BlockTactileMap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTactileMap_ = $BlockTactileMap$Type;
}}
declare module "packages/mtr/block/$BlockStationColorSlab" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"

export class $BlockStationColorSlab extends $SlabBlock {
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(settings: $BlockBehaviour$Properties$Type)

public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "getDescriptionId"(): string
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStationColorSlab$Type = ($BlockStationColorSlab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStationColorSlab_ = $BlockStationColorSlab$Type;
}}
declare module "packages/mtr/block/$BlockRailwaySign" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockDirectionalMapper, $BlockDirectionalMapper$Type} from "packages/mtr/mappings/$BlockDirectionalMapper"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EntityBlockMapper, $EntityBlockMapper$Type} from "packages/mtr/mappings/$EntityBlockMapper"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockEntityMapper, $BlockEntityMapper$Type} from "packages/mtr/mappings/$BlockEntityMapper"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlockRailwaySign extends $BlockDirectionalMapper implements $EntityBlockMapper, $IBlock {
readonly "length": integer
readonly "isOdd": boolean
static readonly "SMALL_SIGN_PERCENTAGE": float
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

constructor(length: integer, isOdd: boolean)

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, itemStack: $ItemStack$Type): void
public "playerWillDestroy"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "appendHoverText"(itemStack: $ItemStack$Type, blockGetter: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, tooltipFlag: $TooltipFlag$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, newState: $BlockState$Type, world: $LevelAccessor$Type, pos: $BlockPos$Type, posFrom: $BlockPos$Type): $BlockState
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, interactionHand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, pos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "createBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntityMapper
public "getDescriptionId"(): string
public "getXStart"(): integer
public "getType"(): $BlockEntityType<(any)>
public "tick"<T extends $BlockEntityMapper>(world: $Level$Type, pos: $BlockPos$Type, blockEntity: T): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, blockState: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
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
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "descriptionId"(): string
get "xStart"(): integer
get "type"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRailwaySign$Type = ($BlockRailwaySign);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRailwaySign_ = $BlockRailwaySign$Type;
}}
