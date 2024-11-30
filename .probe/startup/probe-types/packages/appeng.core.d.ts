declare module "packages/appeng/core/settings/$TickRates" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TickRates extends $Enum<($TickRates)> {
static readonly "Interface": $TickRates
static readonly "ImportBus": $TickRates
static readonly "ExportBus": $TickRates
static readonly "AnnihilationPlane": $TickRates
static readonly "METunnel": $TickRates
static readonly "Inscriber": $TickRates
static readonly "Charger": $TickRates
static readonly "IOPort": $TickRates
static readonly "VibrationChamber": $TickRates
static readonly "StorageBus": $TickRates
static readonly "ItemTunnel": $TickRates
static readonly "LightTunnel": $TickRates


public static "values"(): ($TickRates)[]
public static "valueOf"(arg0: string): $TickRates
public "getDefaultMin"(): integer
public "getDefaultMax"(): integer
public "getMax"(): integer
public "getMin"(): integer
public "setMin"(arg0: integer): void
public "setMax"(arg0: integer): void
get "defaultMin"(): integer
get "defaultMax"(): integer
get "max"(): integer
get "min"(): integer
set "min"(value: integer)
set "max"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRates$Type = (("exportbus") | ("charger") | ("inscriber") | ("importbus") | ("annihilationplane") | ("lighttunnel") | ("ioport") | ("interface") | ("metunnel") | ("storagebus") | ("itemtunnel") | ("vibrationchamber")) | ($TickRates);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickRates_ = $TickRates$Type;
}}
