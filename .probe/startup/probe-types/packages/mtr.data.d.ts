declare module "packages/mtr/data/$IPIDS" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$IBlock, $IBlock$Type} from "packages/mtr/block/$IBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $IPIDS extends $IBlock {

 "propagate"(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, callback: $Consumer$Type<($BlockPos$Type)>, maxBlocksAway: integer): void
 "propagate"<T extends $Comparable<(T)>>(world: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type, property: $Property$Type<(T)>, maxBlocksAway: integer): void
}

export namespace $IPIDS {
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
export type $IPIDS$Type = ($IPIDS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPIDS_ = $IPIDS$Type;
}}
declare module "packages/mtr/data/$TicketSystem$EnumTicketBarrierOpen" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TicketSystem$EnumTicketBarrierOpen extends $Enum<($TicketSystem$EnumTicketBarrierOpen)> implements $StringRepresentable {
static readonly "CLOSED": $TicketSystem$EnumTicketBarrierOpen
static readonly "OPEN": $TicketSystem$EnumTicketBarrierOpen
static readonly "OPEN_CONCESSIONARY": $TicketSystem$EnumTicketBarrierOpen


public static "values"(): ($TicketSystem$EnumTicketBarrierOpen)[]
public static "valueOf"(name: string): $TicketSystem$EnumTicketBarrierOpen
public "isOpen"(): boolean
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "open"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TicketSystem$EnumTicketBarrierOpen$Type = (("closed") | ("open_concessionary") | ("open")) | ($TicketSystem$EnumTicketBarrierOpen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TicketSystem$EnumTicketBarrierOpen_ = $TicketSystem$EnumTicketBarrierOpen$Type;
}}
declare module "packages/mtr/data/$RailType" {
import {$TransportMode, $TransportMode$Type} from "packages/mtr/data/$TransportMode"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$RailType$RailSlopeStyle, $RailType$RailSlopeStyle$Type} from "packages/mtr/data/$RailType$RailSlopeStyle"
import {$IGui, $IGui$Type} from "packages/mtr/data/$IGui"
import {$List, $List$Type} from "packages/java/util/$List"

export class $RailType extends $Enum<($RailType)> implements $IGui {
static readonly "WOODEN": $RailType
static readonly "STONE": $RailType
static readonly "EMERALD": $RailType
static readonly "IRON": $RailType
static readonly "OBSIDIAN": $RailType
static readonly "BLAZE": $RailType
static readonly "QUARTZ": $RailType
static readonly "DIAMOND": $RailType
static readonly "PLATFORM": $RailType
static readonly "SIDING": $RailType
static readonly "TURN_BACK": $RailType
static readonly "CABLE_CAR": $RailType
static readonly "CABLE_CAR_STATION": $RailType
static readonly "RUNWAY": $RailType
static readonly "AIRPLANE_DUMMY": $RailType
static readonly "NONE": $RailType
readonly "speedLimit": integer
readonly "maxBlocksPerTick": float
readonly "color": integer
readonly "hasSavedRail": boolean
readonly "canAccelerate": boolean
readonly "hasSignal": boolean
readonly "railSlopeStyle": $RailType$RailSlopeStyle


public static "values"(): ($RailType)[]
public static "valueOf"(name: string): $RailType
public static "getDefaultMaxBlocksPerTick"(transportMode: $TransportMode$Type): float
public static "textOrUntitled"(text: string): string
public static "insertTranslation"(keyCJK: string, key: string, overrideFirst: string, expectedArguments: integer, ...arg4: (string)[]): string
public static "insertTranslation"(keyCJK: string, key: string, expectedArguments: integer, ...arg3: (string)[]): string
public static "mergeStations"(stations: $List$Type<(string)>): string
public static "mergeStations"(stations: $List$Type<(string)>, separatorCjk: string, separator: string): string
public static "isCjk"(text: string): boolean
public static "formatStationName"(name: string): string
public static "formatVerticalChinese"(text: string): string
public static "mergeStationsWithCommas"(stations: $List$Type<(string)>): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RailType$Type = (("siding") | ("cable_car") | ("obsidian") | ("quartz") | ("runway") | ("none") | ("platform") | ("stone") | ("diamond") | ("blaze") | ("wooden") | ("iron") | ("turn_back") | ("cable_car_station") | ("emerald") | ("airplane_dummy")) | ($RailType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RailType_ = $RailType$Type;
}}
declare module "packages/mtr/data/$TransportMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TransportMode extends $Enum<($TransportMode)> {
static readonly "TRAIN": $TransportMode
static readonly "BOAT": $TransportMode
static readonly "CABLE_CAR": $TransportMode
static readonly "AIRPLANE": $TransportMode
readonly "maxLength": integer
readonly "continuousMovement": boolean
readonly "hasPitchAscending": boolean
readonly "hasPitchDescending": boolean
readonly "hasRouteTypeVariation": boolean
readonly "railOffset": integer


public static "values"(): ($TransportMode)[]
public static "valueOf"(name: string): $TransportMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransportMode$Type = (("cable_car") | ("airplane") | ("boat") | ("train")) | ($TransportMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransportMode_ = $TransportMode$Type;
}}
declare module "packages/mtr/data/$IGui" {
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IGui {

}

export namespace $IGui {
const SQUARE_SIZE: integer
const PANEL_WIDTH: integer
const TEXT_HEIGHT: integer
const TEXT_PADDING: integer
const TEXT_FIELD_PADDING: integer
const LINE_HEIGHT: integer
const SMALL_OFFSET_16: float
const SMALL_OFFSET: float
const RGB_WHITE: integer
const ARGB_WHITE: integer
const ARGB_BLACK: integer
const ARGB_WHITE_TRANSLUCENT: integer
const ARGB_BLACK_TRANSLUCENT: integer
const ARGB_LIGHT_GRAY: integer
const ARGB_GRAY: integer
const ARGB_BACKGROUND: integer
const MAX_LIGHT_INTERIOR: integer
const MAX_LIGHT_GLOWING: integer
function textOrUntitled(text: string): string
function insertTranslation(keyCJK: string, key: string, overrideFirst: string, expectedArguments: integer, ...arg4: (string)[]): string
function insertTranslation(keyCJK: string, key: string, expectedArguments: integer, ...arg3: (string)[]): string
function mergeStations(stations: $List$Type<(string)>): string
function mergeStations(stations: $List$Type<(string)>, separatorCjk: string, separator: string): string
function isCjk(text: string): boolean
function formatStationName(name: string): string
function formatVerticalChinese(text: string): string
function mergeStationsWithCommas(stations: $List$Type<(string)>): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGui$Type = ($IGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGui_ = $IGui$Type;
}}
declare module "packages/mtr/data/$RailType$RailSlopeStyle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RailType$RailSlopeStyle extends $Enum<($RailType$RailSlopeStyle)> {
static readonly "CURVE": $RailType$RailSlopeStyle
static readonly "CABLE": $RailType$RailSlopeStyle


public static "values"(): ($RailType$RailSlopeStyle)[]
public static "valueOf"(name: string): $RailType$RailSlopeStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RailType$RailSlopeStyle$Type = (("curve") | ("cable")) | ($RailType$RailSlopeStyle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RailType$RailSlopeStyle_ = $RailType$RailSlopeStyle$Type;
}}
