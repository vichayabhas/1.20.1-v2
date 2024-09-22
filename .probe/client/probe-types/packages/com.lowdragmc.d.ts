declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Transform, $Transform$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Transform"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IIngredientSlot, $IIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IConfigurableWidgetGroup, $IConfigurableWidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidgetGroup"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $WidgetGroup extends $Widget implements $IGhostIngredientTarget, $IIngredientSlot, $IConfigurableWidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "setClientSideWidget"(): $WidgetGroup
public "getContainedWidgets"(includeHidden: boolean): $List<($Widget)>
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "setGui"(gui: $ModularUI$Type): void
public "isChild"(widget: $Widget$Type): boolean
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "initWidget"(): void
public "waitToRemoved"(widget: $Widget$Type): void
public "waitToAdded"(widget: $Widget$Type): void
public "initTemplate"(): void
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "removeWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "removeWidget"(widget: $Widget$Type): void
public "clearAllWidgets"(): void
public "getAllWidgetSize"(): integer
public "getWidgetsByType"<T extends $Widget>(clazz: $Class$Type<(T)>): $List<(T)>
public "getWidgetsById"(regex: $Pattern$Type): $List<($Widget)>
public "addWidgetAnima"(widget: $Widget$Type, animation: $Transform$Type): void
public "getFirstWidgetById"(regex: $Pattern$Type): $Widget
public "serializeInnerNBT"(): $CompoundTag
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
public "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "addWidget"(widget: $Widget$Type): $WidgetGroup
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "gui"(value: $ModularUI$Type)
get "allWidgetSize"(): integer
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetGroup$Type = ($WidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetGroup_ = $WidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup" {
import {$ConfigPanel, $ConfigPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Configurator, $Configurator$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ConfiguratorGroup extends $Configurator {
readonly "widgets": $List<($Widget)>

constructor(name: string)
constructor(name: string, isCollapse: boolean)

public "init"(width: integer): void
public "setCanCollapse"(canCollapse: boolean): void
public "isCollapse"(): boolean
public "addConfigurator"(index: integer, configurator: $Configurator$Type): void
public "getConfigurators"(): $List<($Configurator)>
public "removeConfigurator"(configurator: $Configurator$Type): void
public "setCollapse"(collapse: boolean): void
public "removeAllConfigurators"(): void
public "addConfigurators"(...configurators: ($Configurator$Type)[]): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setConfigPanel"(configPanel: $ConfigPanel$Type, tab: $ConfigPanel$Tab$Type): void
public "computeHeight"(): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "canCollapse"(value: boolean)
get "collapse"(): boolean
get "configurators"(): $List<($Configurator)>
set "collapse"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguratorGroup$Type = ($ConfiguratorGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguratorGroup_ = $ConfiguratorGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef" {
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"

export interface $IRef {

 "update"(): void
 "getKey"(): $ManagedKey
 "isLazy"(): boolean
 "clearPersistedDirty"(): void
 "clearSyncDirty"(): void
 "isSyncDirty"(): boolean
 "markAsDirty"(): void
 "setOnPersistedListener"(arg0: $BooleanConsumer$Type): void
 "readRaw"<T>(): T
 "setOnSyncListener"(arg0: $BooleanConsumer$Type): void
 "isPersistedDirty"(): boolean
}

export namespace $IRef {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRef$Type = ($IRef);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRef_ = $IRef$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SwitchWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $BiConsumer$Type<($ClickData$Type), (boolean)>)
constructor()

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "setOnPressCallback"(onPressCallback: $BiConsumer$Type<($ClickData$Type), (boolean)>): void
public "initTemplate"(): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setHoverBorderTexture"(border: integer, color: integer): $SwitchWidget
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setTexture"(baseTexture: $IGuiTexture$Type, pressedTexture: $IGuiTexture$Type): $SwitchWidget
public "setBaseTexture"(...baseTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "isPressed"(): boolean
public "setPressedTexture"(...pressedTexture: ($IGuiTexture$Type)[]): $SwitchWidget
public "setSupplier"(supplier: $Supplier$Type<(boolean)>): $SwitchWidget
public "setPressed"(isPressed: boolean): $SwitchWidget
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "onPressCallback"(value: $BiConsumer$Type<($ClickData$Type), (boolean)>)
set "baseTexture"(value: ($IGuiTexture$Type)[])
get "pressed"(): boolean
set "pressedTexture"(value: ($IGuiTexture$Type)[])
set "supplier"(value: $Supplier$Type<(boolean)>)
set "pressed"(value: boolean)
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwitchWidget$Type = ($SwitchWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwitchWidget_ = $SwitchWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$WorldSceneRenderer$VertexConsumerWrapper, $WorldSceneRenderer$VertexConsumerWrapper$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer$VertexConsumerWrapper"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $ISceneBlockRenderHook {

 "apply"(isTESR: boolean, layer: $RenderType$Type): void
 "applyBESR"(world: $Level$Type, pos: $BlockPos$Type, blockEntity: $BlockEntity$Type, poseStack: $PoseStack$Type, partialTicks: float): void
 "applyVertexConsumerWrapper"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, wrapperBuffer: $WorldSceneRenderer$VertexConsumerWrapper$Type, layer: $RenderType$Type, partialTicks: float): void
}

export namespace $ISceneBlockRenderHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISceneBlockRenderHook$Type = ($ISceneBlockRenderHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISceneBlockRenderHook_ = $ISceneBlockRenderHook$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $FluidStack {


public "isEmpty"(): boolean
public static "empty"(): $FluidStack
public "copy"(): $FluidStack
public "copy"(amount: long): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$Type, amount: long, nbt: $CompoundTag$Type): $FluidStack
public static "create"(stack: $FluidStack$Type, amount: long): $FluidStack
public "grow"(amount: long): void
public "getDisplayName"(): $Component
public "getTag"(): $CompoundTag
public "getAmount"(): long
public "isFluidStackEqual"(other: $FluidStack$Type): boolean
public static "readFromBuf"(buf: $FriendlyByteBuf$Type): $FluidStack
public "writeToBuf"(buf: $FriendlyByteBuf$Type): void
public "getRawFluid"(): $Fluid
public static "loadFromTag"(nbt: $CompoundTag$Type): $FluidStack
public "saveToTag"(nbt: $CompoundTag$Type): $CompoundTag
public "setAmount"(amount: long): void
public "hasTag"(): boolean
public "setFluid"(fluid: $Fluid$Type): void
public "isFluidEqual"(other: $FluidStack$Type): boolean
public "shrink"(amount: long): void
public "setTag"(tag: $CompoundTag$Type): void
public "getFluid"(): $Fluid
get "displayName"(): $Component
get "tag"(): $CompoundTag
get "amount"(): long
get "rawFluid"(): $Fluid
set "amount"(value: long)
set "fluid"(value: $Fluid$Type)
set "tag"(value: $CompoundTag$Type)
get "fluid"(): $Fluid
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
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$AnnotationDetector$Wrapper, $AnnotationDetector$Wrapper$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IGuiTexture extends $IConfigurable {

 "scale"(scale: float): $IGuiTexture
 "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
 "rotate"(degree: float): $IGuiTexture
 "setColor"(color: integer): $IGuiTexture
 "createPreview"(father: $ConfiguratorGroup$Type): void
 "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
 "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
 "updateTick"(): void
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: integer, arg6: integer): void
 "name"(): string
 "group"(): string
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
 "isLDLRegister"(): boolean

(scale: float): $IGuiTexture
}

export namespace $IGuiTexture {
const EMPTY: $IGuiTexture
const MISSING_TEXTURE: $IGuiTexture
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IGuiTexture)>)>
function serializeWrapper(texture: $IGuiTexture$Type): $CompoundTag
function deserializeWrapper(tag: $CompoundTag$Type): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiTexture$Type = ($IGuiTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiTexture_ = $IGuiTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoPersistBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IManagedBlockEntity, $IManagedBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IAutoPersistBlockEntity extends $IManagedBlockEntity {

 "saveCustomPersistedData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "loadCustomPersistedData"(tag: $CompoundTag$Type): void
 "loadManagedPersistentData"(tag: $CompoundTag$Type): void
 "saveManagedPersistentData"(tag: $CompoundTag$Type, forDrop: boolean): void
 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity
 "getNonLazyFields"(): ($IRef)[]

(tag: $CompoundTag$Type, forDrop: boolean): void
}

export namespace $IAutoPersistBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoPersistBlockEntity$Type = ($IAutoPersistBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoPersistBlockEntity_ = $IAutoPersistBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/shimmer/client/light/$ColorPointLight" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"

export class $ColorPointLight {
static readonly "STRUCT_SIZE": integer
 "r": float
 "g": float
 "b": float
 "a": float
 "x": float
 "y": float
 "z": float
 "radius": float
 "enable": boolean


public "remove"(): void
public "update"(): void
public "setColor"(r: float, g: float, b: float, a: float): void
public "setColor"(color: integer): void
public "setPos"(x: float, y: float, z: float): void
public "uploadBuffer"(buffer: $FloatBuffer$Type): void
public "isRemoved"(): boolean
public "setEnable"(enable: boolean): void
set "color"(value: integer)
get "removed"(): boolean
set "enable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorPointLight$Type = ($ColorPointLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorPointLight_ = $ColorPointLight$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"

export interface $IFluidStorage extends $IFluidTransfer {

 "getCapacity"(): long
 "setFluidInTank"(tank: integer, fluidStack: $FluidStack$Type): void
 "setFluid"(arg0: $FluidStack$Type): void
 "getFluidAmount"(): long
 "getFluid"(): $FluidStack
 "getTanks"(): integer
 "isFluidValid"(arg0: $FluidStack$Type): boolean
 "isFluidValid"(tank: integer, stack: $FluidStack$Type): boolean
 "getTankCapacity"(tank: integer): long
 "getFluidInTank"(tank: integer): $FluidStack
 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "createSnapshot"(): any
 "supportsFill"(arg0: integer): boolean
 "supportsDrain"(arg0: integer): boolean
 "restoreFromSnapshot"(arg0: any): void
 "onContentsChanged"(): void
}

export namespace $IFluidStorage {
const EMPTY: $IFluidStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidStorage$Type = ($IFluidStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidStorage_ = $IFluidStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export interface $IConfigurable extends $ILDLRegister {

 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
 "isLDLRegister"(): boolean
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
declare module "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IHandlerContext {

 "getContext"(): any
 "getServer"(): $MinecraftServer
 "isClient"(): boolean
 "getPlayer"(): $ServerPlayer
 "getLevel"(): $Level
}

export namespace $IHandlerContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHandlerContext$Type = ($IHandlerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHandlerContext_ = $IHandlerContext$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/c2s/$CPacketUIClientAction" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export class $CPacketUIClientAction implements $IPacket {
 "windowId": integer
 "updateData": $FriendlyByteBuf

constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPacketUIClientAction$Type = ($CPacketUIClientAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CPacketUIClientAction_ = $CPacketUIClientAction$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $LabelWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, text: $Supplier$Type<(string)>)
constructor(xPosition: integer, yPosition: integer, component: $Component$Type)
constructor(xPosition: integer, yPosition: integer, text: string)
constructor()

public "handleDragging"(dragging: any): boolean
public "setText"(text: string): void
public "detectAndSendChanges"(): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): void
public "setTextColor"(color: integer): $LabelWidget
public "setDropShadow"(dropShadow: boolean): $LabelWidget
public "setComponent"(component: $Component$Type): void
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "text"(value: string)
set "textSupplier"(value: $Supplier$Type<(string)>)
set "textColor"(value: integer)
set "dropShadow"(value: boolean)
set "component"(value: $Component$Type)
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabelWidget$Type = ($LabelWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabelWidget_ = $LabelWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ColorRectTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ColorRectTexture extends $TransformTexture {
 "color": integer
 "radiusLT": float
 "radiusLB": float
 "radiusRT": float
 "radiusRB": float

constructor(color: $Color$Type)
constructor(color: integer)
constructor()

public "setColor"(color: integer): $ColorRectTexture
public "setRadius"(radius: float): $ColorRectTexture
public "setTopRadius"(radius: float): $ColorRectTexture
public "setRadiusLT"(radiusLT: float): $ColorRectTexture
public "setRadiusRT"(radiusRT: float): $ColorRectTexture
public "setRightRadius"(radius: float): $ColorRectTexture
public "setRadiusLB"(radiusLB: float): $ColorRectTexture
public "setRadiusRB"(radiusRB: float): $ColorRectTexture
public "setBottomRadius"(radius: float): $ColorRectTexture
public "setLeftRadius"(radius: float): $ColorRectTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
set "radius"(value: float)
set "topRadius"(value: float)
set "radiusLT"(value: float)
set "radiusRT"(value: float)
set "rightRadius"(value: float)
set "radiusLB"(value: float)
set "radiusRB"(value: float)
set "bottomRadius"(value: float)
set "leftRadius"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorRectTexture$Type = ($ColorRectTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorRectTexture_ = $ColorRectTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceTexture extends $TransformTexture {
 "imageLocation": $ResourceLocation
 "offsetX": float
 "offsetY": float
 "imageWidth": float
 "imageHeight": float

constructor()
constructor(imageLocation: $ResourceLocation$Type)
constructor(imageLocation: string)
constructor(imageLocation: $ResourceLocation$Type, offsetX: float, offsetY: float, width: float, height: float)

public "copy"(): $ResourceTexture
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "getSubTexture"(offsetX: float, offsetY: float, width: float, height: float): $ResourceTexture
public "getSubTexture"(offsetX: double, offsetY: double, width: double, height: double): $ResourceTexture
public static "fromSpirit"(texture: $ResourceLocation$Type): $ResourceTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceTexture$Type = ($ResourceTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceTexture_ = $ResourceTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$AccessorOp" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AccessorOp extends $Enum<($AccessorOp)> {
static readonly "SYNCED": $AccessorOp
static readonly "FORCE_SYNCED": $AccessorOp
static readonly "PERSISTED": $AccessorOp


public static "values"(): ($AccessorOp)[]
public static "valueOf"(name: string): $AccessorOp
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorOp$Type = (("synced") | ("force_synced") | ("persisted")) | ($AccessorOp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorOp_ = $AccessorOp$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoSyncBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IManagedBlockEntity, $IManagedBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IAutoSyncBlockEntity extends $IManagedBlockEntity {

 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "getSyncTag"(): string
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "syncNow"(force: boolean): void
 "defaultServerTick"(): void
 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity
 "getNonLazyFields"(): ($IRef)[]

(tag: $CompoundTag$Type): void
}

export namespace $IAutoSyncBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoSyncBlockEntity$Type = ($IAutoSyncBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoSyncBlockEntity_ = $IAutoSyncBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/custom/$PlayerInventoryWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $PlayerInventoryWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor()

public "initWidget"(): void
public "initTemplate"(): void
public "setSlotBackground"(slotBackground: $IGuiTexture$Type): void
/**
 * 
 * @deprecated
 */
public "setPlayer"(entityPlayer: $Player$Type): void
public "getSlotBackground"(): $IGuiTexture
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "slotBackground"(value: $IGuiTexture$Type)
set "player"(value: $Player$Type)
get "slotBackground"(): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInventoryWidget$Type = ($PlayerInventoryWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInventoryWidget_ = $PlayerInventoryWidget$Type;
}}
declare module "packages/com/lowdragmc/shimmer/core/$IBakedQuad" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBakedQuad {

 "isBloom"(): boolean

(): boolean
}

export namespace $IBakedQuad {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBakedQuad$Type = ($IBakedQuad);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBakedQuad_ = $IBakedQuad$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$BlockPosFace" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockPosFace {
readonly "facing": $Direction
readonly "pos": $BlockPos

constructor(pos: $BlockPos$Type, facing: $Direction$Type)

public "equals"(bp: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPosFace$Type = ($BlockPosFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPosFace_ = $BlockPosFace$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ImageWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ImageWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textureSupplier: $Supplier$Type<($IGuiTexture$Type)>)
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, area: $IGuiTexture$Type)
constructor()

public "setImage"(textureSupplier: $Supplier$Type<($IGuiTexture$Type)>): $ImageWidget
public "setImage"(area: $IGuiTexture$Type): $ImageWidget
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setBorder"(border: integer, color: integer): $ImageWidget
public "getImage"(): $IGuiTexture
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "image"(value: $Supplier$Type<($IGuiTexture$Type)>)
set "image"(value: $IGuiTexture$Type)
get "image"(): $IGuiTexture
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageWidget$Type = ($ImageWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageWidget_ = $ImageWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$MenuPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MenuTab, $MenuTab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/menu/$MenuTab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MenuPanel extends $WidgetGroup {
static readonly "HEIGHT": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "getEditor"(): $Editor
public "getTabs"(): $Map<(string), ($MenuTab)>
public "getTab"<T extends $MenuTab>(name: string): T
public "initWidget"(): void
public "saveMenuData"(): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "editor"(): $Editor
get "tabs"(): $Map<(string), ($MenuTab)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuPanel$Type = ($MenuPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuPanel_ = $MenuPanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SelectableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$DraggableScrollableWidgetGroup$ISelected, $DraggableScrollableWidgetGroup$ISelected$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SelectableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$ISelected {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "isSelected"(): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "onSelected"(): void
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "onUnSelected"(): void
public "setOnSelected"(onSelected: $Consumer$Type<($SelectableWidgetGroup$Type)>): $SelectableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $SelectableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $SelectableWidgetGroup
public "setPrefab"(prefab: any): void
public "getPrefab"<T>(): T
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "selected"(): boolean
set "selectedTexture"(value: $IGuiTexture$Type)
set "prefab"(value: any)
get "prefab"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableWidgetGroup$Type = ($SelectableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableWidgetGroup_ = $SelectableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Resources {
readonly "resources": $Map<(string), ($Resource<(any)>)>

constructor(resources: $Map$Type<(string), ($Resource$Type<(any)>)>)

public "load"(): void
public "merge"(resources: $Resources$Type): void
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public static "fromNBT"(tag: $CompoundTag$Type): $Resources
public static "defaultResource"(): $Resources
public "dispose"(): void
public static "emptyResource"(): $Resources
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resources$Type = ($Resources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resources_ = $Resources$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$IHeldItemUIHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$HeldItemUIFactory$HeldItemHolder, $HeldItemUIFactory$HeldItemHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder"

export interface $HeldItemUIFactory$IHeldItemUIHolder {

 "createUI"(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI

(arg0: $Player$Type, arg1: $HeldItemUIFactory$HeldItemHolder$Type): $ModularUI
}

export namespace $HeldItemUIFactory$IHeldItemUIHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeldItemUIFactory$IHeldItemUIHolder$Type = ($HeldItemUIFactory$IHeldItemUIHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeldItemUIFactory$IHeldItemUIHolder_ = $HeldItemUIFactory$IHeldItemUIHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage" {
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"

export interface $IManagedStorage {

 "init"(): void
 "getManaged"(): ($IManaged)[]
 "addSyncUpdateListener"<T>(arg0: $ManagedKey$Type, arg1: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "getSyncFields"(): ($IRef)[]
 "hasDirtyPersistedFields"(): boolean
 "removeAllSyncUpdateListener"(arg0: $ManagedKey$Type): void
 "markDirty"(key: $ManagedKey$Type): void
 "getPersistedFields"(): ($IRef)[]
 "notifyFieldUpdate"<T>(arg0: $ManagedKey$Type, arg1: T, arg2: T): void
 "hasSyncListener"(arg0: $ManagedKey$Type): boolean
 "hasDirtySyncFields"(): boolean
 "getNonLazyFields"(): ($IRef)[]
 "markAllDirty"(): void
 "getFieldByKey"(arg0: $ManagedKey$Type): $IRef
}

export namespace $IManagedStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedStorage$Type = ($IManagedStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedStorage_ = $IManagedStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$IRecipeIngredientSlot, $IRecipeIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $SlotWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget {
static readonly "ITEM_SLOT_TEXTURE": $ResourceBorderTexture
 "isPlayerContainer": boolean
 "isPlayerHotBar": boolean
 "drawHoverOverlay": boolean
 "drawHoverTips": boolean
 "tooltipCallbacks": $List<($Consumer<($List<($Component)>)>)>

constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer)
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor(inventory: $Container$Type, slotIndex: integer, xPosition: integer, yPosition: integer, canTakeItems: boolean, canPutItems: boolean)
constructor()

public "getHandler"(): $Slot
public "setSize"(size: $Size$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "isEnabled"(): boolean
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "setGui"(gui: $ModularUI$Type): void
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $SlotWidget
public "clearTooltipCallback"(): void
public "getRealStack"(itemStack: $ItemStack$Type): $ItemStack
public "getIngredientIO"(): $IngredientIO
public "canPutStack"(stack: $ItemStack$Type): boolean
public "getXEIChance"(): float
public "setLocationInfo"(isPlayerContainer: boolean, isPlayerHotBar: boolean): $SlotWidget
public "onSlotChanged"(): void
public "canTakeStack"(player: $Player$Type): boolean
public "getXEIIngredients"(): $List<(any)>
public "setCanTakeItems"(canTakeItems: boolean): $SlotWidget
public "setItemHook"(itemHook: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>): $SlotWidget
public "setCanPutItems"(canPutItems: boolean): $SlotWidget
public "setDrawHoverTips"(drawHoverTips: boolean): $SlotWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $SlotWidget
public "setXEIChance"(XEIChance: float): $SlotWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>): $SlotWidget
public "addTooltipCallback"(callback: $Consumer$Type<($List$Type<($Component$Type)>)>): void
public "getTooltipTexts"(): $List<($Component)>
public "initTemplate"(): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "setBackgroundTexture"(backgroundTexture: $IGuiTexture$Type): $SlotWidget
public "setChangeListener"(changeListener: $Runnable$Type): $SlotWidget
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setContainerSlot"(inventory: $Container$Type, slotIndex: integer): $SlotWidget
public "setHandlerSlot"(itemHandler: $IItemTransfer$Type, slotIndex: integer): $SlotWidget
public "self"(): $Widget
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
get "handler"(): $Slot
set "size"(value: $Size$Type)
get "enabled"(): boolean
set "gui"(value: $ModularUI$Type)
set "drawHoverOverlay"(value: boolean)
get "ingredientIO"(): $IngredientIO
get "xEIChance"(): float
get "xEIIngredients"(): $List<(any)>
set "canTakeItems"(value: boolean)
set "itemHook"(value: $Function$Type<($ItemStack$Type), ($ItemStack$Type)>)
set "canPutItems"(value: boolean)
set "drawHoverTips"(value: boolean)
set "ingredientIO"(value: $IngredientIO$Type)
set "xEIChance"(value: float)
set "onAddedTooltips"(value: $BiConsumer$Type<($SlotWidget$Type), ($List$Type<($Component$Type)>)>)
get "tooltipTexts"(): $List<($Component)>
set "backgroundTexture"(value: $IGuiTexture$Type)
set "changeListener"(value: $Runnable$Type)
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotWidget$Type = ($SlotWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotWidget_ = $SlotWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ResourceBorderTexture extends $ResourceTexture {
static readonly "BORDERED_BACKGROUND": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_INVERSE": $ResourceBorderTexture
static readonly "BORDERED_BACKGROUND_BLUE": $ResourceBorderTexture
static readonly "BUTTON_COMMON": $ResourceBorderTexture
static readonly "BAR": $ResourceBorderTexture
static readonly "SELECTED": $ResourceBorderTexture
 "boderSize": $Size
 "imageSize": $Size
 "imageLocation": $ResourceLocation
 "offsetX": float
 "offsetY": float
 "imageWidth": float
 "imageHeight": float

constructor()
constructor(imageLocation: string, imageWidth: integer, imageHeight: integer, cornerWidth: integer, cornerHeight: integer)

public "copy"(): $ResourceTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceBorderTexture$Type = ($ResourceBorderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceBorderTexture_ = $ResourceBorderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ServerPlayerAccessor" {
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $ServerPlayerAccessor {

 "callInitMenu"(arg0: $AbstractContainerMenu$Type): void
 "callNextContainerCounter"(): void
 "getContainerCounter"(): integer
}

export namespace $ServerPlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccessor$Type = ($ServerPlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerAccessor_ = $ServerPlayerAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"

export interface $ILDLRegister {

 "name"(): string
 "group"(): string
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
 "isLDLRegister"(): boolean
}

export namespace $ILDLRegister {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILDLRegister$Type = ($ILDLRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILDLRegister_ = $ILDLRegister$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISubscription {

 "unsubscribe"(): void

(): void
}

export namespace $ISubscription {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubscription$Type = ($ISubscription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubscription_ = $ISubscription$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/block/$RendererBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IBlockRendererProvider, $IBlockRendererProvider$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $RendererBlock extends $Block implements $EntityBlock, $IBlockRendererProvider {
static readonly "BLOCK": $RendererBlock
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


public "getRenderer"(state: $BlockState$Type): $IRenderer
public "newBlockEntity"(pPos: $BlockPos$Type, pState: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getLightMap"(world: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RendererBlock$Type = ($RendererBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RendererBlock_ = $RendererBlock$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $Target extends $Consumer<(any)> {

 "accept"(arg0: any): void
 "getArea"(): $Rect2i
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(any)>
}

export namespace $Target {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Target$Type = ($Target);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Target_ = $Target$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AnnotationDetector$Wrapper<A extends $Annotation, T> extends $Record {

constructor(annotation: A, clazz: $Class$Type<(any)>, creator: $Supplier$Type<(T)>)

public "clazz"(): $Class<(any)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "annotation"(): A
public "creator"(): $Supplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnotationDetector$Wrapper$Type<A, T> = ($AnnotationDetector$Wrapper<(A), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnotationDetector$Wrapper_<A, T> = $AnnotationDetector$Wrapper$Type<(A), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"

export interface $IUIHolder {

 "isInvalid"(): boolean
 "isRemote"(): boolean
 "markAsDirty"(): void
 "createUI"(arg0: $Player$Type): $ModularUI
}

export namespace $IUIHolder {
const EMPTY: $IUIHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUIHolder$Type = ($IUIHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUIHolder_ = $IUIHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$FieldManagedStorage" {
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export class $FieldManagedStorage implements $IManagedStorage {

constructor(owner: $IManaged$Type)

public "init"(): void
public "getManaged"(): ($IManaged)[]
public "addSyncUpdateListener"<T>(key: $ManagedKey$Type, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
public "getSyncFields"(): ($IRef)[]
public "hasDirtyPersistedFields"(): boolean
public "removeAllSyncUpdateListener"(key: $ManagedKey$Type): void
public "initEnhancedFeature"(): void
public "getPersistedFields"(): ($IRef)[]
public "notifyFieldUpdate"<T>(key: $ManagedKey$Type, newVal: T, oldVal: T): void
public "hasSyncListener"(key: $ManagedKey$Type): boolean
public "hasDirtySyncFields"(): boolean
public "getNonLazyFields"(): ($IRef)[]
public "getFieldByKey"(key: $ManagedKey$Type): $IRef
public "markDirty"(key: $ManagedKey$Type): void
public "markAllDirty"(): void
get "managed"(): ($IManaged)[]
get "syncFields"(): ($IRef)[]
get "persistedFields"(): ($IRef)[]
get "nonLazyFields"(): ($IRef)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldManagedStorage$Type = ($FieldManagedStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldManagedStorage_ = $FieldManagedStorage$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"

export interface $IGhostIngredientTarget {

 "getPhantomTargets"(arg0: any): $List<($Target)>

(arg0: any): $List<($Target)>
}

export namespace $IGhostIngredientTarget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientTarget$Type = ($IGhostIngredientTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientTarget_ = $IGhostIngredientTarget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$AbstractContainerScreenAccessor" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerScreenAccessor {

 "isSplittingStack"(): boolean
 "getSnapbackItem"(): $ItemStack
 "getDraggingItem"(): $ItemStack
 "getSnapbackStartY"(): integer
 "getSnapbackStartX"(): integer
 "getSnapbackTime"(): long
 "setSnapbackItem"(arg0: $ItemStack$Type): void
 "getSnapbackEnd"(): $Slot
 "getQuickCraftingRemainder"(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ShaderTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UniformCache, $UniformCache$Type} from "packages/com/lowdragmc/lowdraglib/client/shader/uniform/$UniformCache"

export class $ShaderTexture extends $TransformTexture {
 "location": $ResourceLocation

constructor()

public "setColor"(color: integer): $ShaderTexture
public static "clearCache"(): void
public "dispose"(): void
public "setResolution"(resolution: float): $ShaderTexture
public "updateRawShader"(rawShader: string): void
public "getResolution"(): float
public "updateShader"(location: $ResourceLocation$Type): void
public "getRawShader"(): string
public static "createShader"(location: $ResourceLocation$Type): $ShaderTexture
public "setUniformCache"(uniformCache: $Consumer$Type<($UniformCache$Type)>): $ShaderTexture
public static "createRawShader"(rawShader: string): $ShaderTexture
public "bindTexture"(samplerName: string, location: $ResourceLocation$Type): void
public "bindTexture"(samplerName: string, id: integer): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
set "resolution"(value: float)
get "resolution"(): float
get "rawShader"(): string
set "uniformCache"(value: $Consumer$Type<($UniformCache$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderTexture$Type = ($ShaderTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderTexture_ = $ShaderTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$VertexFormatAccessor" {
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"

export interface $VertexFormatAccessor {

 "getOffsets"(): $IntList

(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatAccessor$Type = ($VertexFormatAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatAccessor_ = $VertexFormatAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TreeBuilder, $TreeBuilder$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder"
import {$Tuple, $Tuple$Type} from "packages/net/minecraft/util/$Tuple"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $TreeBuilder$Menu extends $TreeBuilder<($Tuple<($IGuiTexture), (string)>), ($Runnable)> {
static "CROSS_LINE": $Tuple<($IGuiTexture), (string)>


public static "getName"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): string
public "remove"(name: string): $TreeBuilder$Menu
public static "start"(): $TreeBuilder$Menu
public static "handle"(node: $TreeNode$Type<($Tuple$Type<($IGuiTexture$Type), (string)>), ($Runnable$Type)>): void
public "branch"(icon: $IGuiTexture$Type, name: string, menuConsumer: $Consumer$Type<($TreeBuilder$Menu$Type)>): $TreeBuilder$Menu
public "branch"(name: string, menuConsumer: $Consumer$Type<($TreeBuilder$Menu$Type)>): $TreeBuilder$Menu
public static "getIcon"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): $IGuiTexture
public "leaf"(name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
public "leaf"(icon: $IGuiTexture$Type, name: string, runnable: $Runnable$Type): $TreeBuilder$Menu
public static "isCrossLine"(key: $Tuple$Type<($IGuiTexture$Type), (string)>): boolean
public "crossLine"(): $TreeBuilder$Menu
public "endBranch"(): $TreeBuilder$Menu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeBuilder$Menu$Type = ($TreeBuilder$Menu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeBuilder$Menu_ = $TreeBuilder$Menu$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Rect, $Rect$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Rect"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$WidgetUIAccess, $WidgetUIAccess$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$Animation, $Animation$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $Widget {

constructor(selfPosition: $Position$Type, size: $Size$Type)
constructor(x: integer, y: integer, width: integer, height: integer)

public "getParent"(): $WidgetGroup
public "getId"(): string
public "getSize"(): $Size
public "isActive"(): boolean
public "setSize"(size: $Size$Type): void
public "setSize"(width: integer, height: integer): void
public "getPosition"(): $Position
public "setFocus"(focus: boolean): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "toRectangleBox"(): $Rect2i
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "setUiAccess"(uiAccess: $WidgetUIAccess$Type): void
public "setDraggingConsumer"(draggingAccept: $Predicate$Type<(any)>, draggingIn: $Consumer$Type<(any)>, draggingOut: $Consumer$Type<(any)>, draggingSuccess: $Consumer$Type<(any)>): $Widget
public static "playButtonClickSound"(): void
public "setDraggingProvider"<T>(draggingProvider: $Supplier$Type<(T)>, draggingRenderer: $BiFunction$Type<(T), ($Position$Type), ($IGuiTexture$Type)>): $Widget
public "getBackgroundTexture"(): $IGuiTexture
public "setHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "setClientSideWidget"(): $Widget
public "getGui"(): $ModularUI
public "setGui"(gui: $ModularUI$Type): void
public "isRemote"(): boolean
public "isInitialized"(): boolean
public "detectAndSendChanges"(): void
public "setId"(id: string): $Widget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setSelfPositionY"(y: integer): void
public "inAnimate"(): boolean
public "addSelfPosition"(addX: integer, addY: integer): $Position
public "isParent"(widgetGroup: $WidgetGroup$Type): boolean
public "setSelfPositionX"(x: integer): void
public "setHoverTooltips"(...tooltipText: (string)[]): $Widget
public "setHoverTooltips"(tooltipText: $List$Type<($Component$Type)>): $Widget
public "setHoverTooltips"(...tooltipText: ($Component$Type)[]): $Widget
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $Widget
public "getSelfPosition"(): $Position
public "setSelfPosition"(x: integer, y: integer): void
public "setSelfPosition"(selfPosition: $Position$Type): void
public "setParentPosition"(parentPosition: $Position$Type): void
public "isVisible"(): boolean
public "isFocus"(): boolean
public "animation"(animation: $Animation$Type): void
public "getSelfPositionX"(): integer
public "setSizeWidth"(width: integer): void
public "getSelfPositionY"(): integer
public "setBackground"(...backgroundTexture: ($IGuiTexture$Type)[]): $Widget
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "getPositionY"(): integer
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public static "isShiftDown"(): boolean
public static "isCtrlDown"(): boolean
public "isMouseOverElement"(mouseX: double, mouseY: double): boolean
public "getPositionX"(): integer
public static "isAltDown"(): boolean
public "getSizeWidth"(): integer
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "getSizeHeight"(): integer
public "getRect"(): $Rect
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setSizeHeight"(height: integer): void
public static "isMouseOver"(x: integer, y: integer, width: integer, height: integer, mouseX: double, mouseY: double): boolean
public "initWidget"(): void
public "getTooltipTexts"(): $List<($Component)>
public "getParentPosition"(): $Position
public "getOverlay"(): $IGuiTexture
public "getAnimation"(): $Animation
public "setOverlay"(overlay: $IGuiTexture$Type): $Widget
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setActive"(isActive: boolean): $Widget
public "setVisible"(isVisible: boolean): $Widget
get "parent"(): $WidgetGroup
get "id"(): string
get "size"(): $Size
get "active"(): boolean
set "size"(value: $Size$Type)
get "position"(): $Position
set "focus"(value: boolean)
set "uiAccess"(value: $WidgetUIAccess$Type)
get "backgroundTexture"(): $IGuiTexture
set "hoverTooltips"(value: ($Component$Type)[])
get "gui"(): $ModularUI
set "gui"(value: $ModularUI$Type)
get "remote"(): boolean
get "initialized"(): boolean
set "id"(value: string)
set "selfPositionY"(value: integer)
set "selfPositionX"(value: integer)
set "hoverTooltips"(value: (string)[])
set "hoverTooltips"(value: $List$Type<($Component$Type)>)
set "hoverTooltips"(value: ($Component$Type)[])
set "hoverTexture"(value: ($IGuiTexture$Type)[])
get "selfPosition"(): $Position
set "selfPosition"(value: $Position$Type)
set "parentPosition"(value: $Position$Type)
get "visible"(): boolean
get "focus"(): boolean
get "selfPositionX"(): integer
set "sizeWidth"(value: integer)
get "selfPositionY"(): integer
set "background"(value: ($IGuiTexture$Type)[])
get "positionY"(): integer
get "shiftDown"(): boolean
get "ctrlDown"(): boolean
get "positionX"(): integer
get "altDown"(): boolean
get "sizeWidth"(): integer
get "sizeHeight"(): integer
get "rect"(): $Rect
set "sizeHeight"(value: integer)
get "tooltipTexts"(): $List<($Component)>
get "parentPosition"(): $Position
get "overlay"(): $IGuiTexture
set "overlay"(value: $IGuiTexture$Type)
set "active"(value: boolean)
set "visible"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$Type = ($Widget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget_ = $Widget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/$IPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export interface $IPacket {

 "decode"(arg0: $FriendlyByteBuf$Type): void
 "encode"(arg0: $FriendlyByteBuf$Type): void
 "execute"(handler: $IHandlerContext$Type): void
}

export namespace $IPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacket$Type = ($IPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPacket_ = $IPacket$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Size" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Size {
static readonly "ZERO": $Size
readonly "width": integer
readonly "height": integer

constructor(width: integer, height: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(width: integer, height: integer): $Size
public "getWidth"(): integer
public "getHeight"(): integer
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Size$Type = ($Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Size_ = $Size$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ItemStackTexture" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ItemStackTexture extends $TransformTexture {
readonly "itemStack": ($ItemStack)[]

constructor(...itemStacks: ($ItemStack$Type)[])
constructor(...items: ($Item$Type)[])

public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackTexture$Type = ($ItemStackTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackTexture_ = $ItemStackTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IngredientIO extends $Enum<($IngredientIO)> {
static readonly "INPUT": $IngredientIO
static readonly "OUTPUT": $IngredientIO
static readonly "BOTH": $IngredientIO
static readonly "CATALYST": $IngredientIO
static readonly "RENDER_ONLY": $IngredientIO


public static "values"(): ($IngredientIO)[]
public static "valueOf"(name: string): $IngredientIO
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientIO$Type = (("output") | ("input") | ("catalyst") | ("render_only") | ("both")) | ($IngredientIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientIO_ = $IngredientIO$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$Configurator" {
import {$ConfigPanel, $ConfigPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LabelWidget, $LabelWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$LabelWidget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $Configurator extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(name: string)
constructor()

public "getName"(): string
public "init"(width: integer): void
public "getTab"(): $ConfigPanel$Tab
public "getWidth"(): integer
public "getConfigPanel"(): $ConfigPanel
public "setConfigPanel"(configPanel: $ConfigPanel$Type, tab: $ConfigPanel$Tab$Type): void
public "isInit"(): boolean
public "setTips"(...tips: (string)[]): void
public "computeLayout"(): void
public "computeHeight"(): void
public "getRightWidth"(): integer
public "getLeftWidth"(): integer
public "getNameWidget"(): $LabelWidget
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "name"(): string
get "tab"(): $ConfigPanel$Tab
get "width"(): integer
get "configPanel"(): $ConfigPanel
set "tips"(value: (string)[])
get "rightWidth"(): integer
get "leftWidth"(): integer
get "nameWidget"(): $LabelWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configurator$Type = ($Configurator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configurator_ = $Configurator$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomFluidWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$TankWidget, $TankWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget"

export class $PhantomFluidWidget extends $TankWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
static readonly "FLUID_SLOT_TEXTURE": $ResourceBorderTexture
 "drawHoverOverlay": boolean

constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, phantomFluidGetter: $Supplier$Type<($FluidStack$Type)>, phantomFluidSetter: $Consumer$Type<($FluidStack$Type)>)

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "getLastPhantomStack"(): $FluidStack
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public static "drainFrom"(ingredient: any): $FluidStack
public "setAllowClickDrained"(v: boolean): $PhantomFluidWidget
public "setAllowClickFilled"(v: boolean): $PhantomFluidWidget
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "lastPhantomStack"(): $FluidStack
set "allowClickDrained"(value: boolean)
set "allowClickFilled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomFluidWidget$Type = ($PhantomFluidWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomFluidWidget_ = $PhantomFluidWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey" {
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$IAccessor, $IAccessor$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IAccessor"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"

export class $ManagedKey {

constructor(name: string, isDestSync: boolean, isPersist: boolean, isDrop: boolean, isLazy: boolean, contentType: $Type$Type, rawField: $Field$Type)

public "getName"(): string
public "getAccessor"(): $IAccessor
public "getContentType"(): $Type
public "isLazy"(): boolean
public "readSyncedField"(field: $IRef$Type, force: boolean): $ITypedPayload<(any)>
public "getDeserializeMethod"(): $Method
public "writePersistedField"(field: $IRef$Type, nbt: $Tag$Type): void
public "getPersistentKey"(): string
public "readPersistedField"(field: $IRef$Type): $Tag
public "writeSyncedField"(field: $IRef$Type, payload: $ITypedPayload$Type<(any)>): void
public "isDrop"(): boolean
public "setRedOnlyManaged"(onDirtyMethod: $Method$Type, serializeMethod: $Method$Type, deserializeMethod: $Method$Type): void
public "isDestSync"(): boolean
public "isPersist"(): boolean
public "isReadOnlyManaged"(): boolean
public "setPersistentKey"(persistentKey: string): void
public "createRef"(instance: any): $IRef
public "getRawField"(): $Field
public "getOnDirtyMethod"(): $Method
public "getSerializeMethod"(): $Method
get "name"(): string
get "accessor"(): $IAccessor
get "contentType"(): $Type
get "lazy"(): boolean
get "deserializeMethod"(): $Method
get "persistentKey"(): string
get "drop"(): boolean
get "destSync"(): boolean
get "persist"(): boolean
get "readOnlyManaged"(): boolean
set "persistentKey"(value: string)
get "rawField"(): $Field
get "onDirtyMethod"(): $Method
get "serializeMethod"(): $Method
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagedKey$Type = ($ManagedKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagedKey_ = $ManagedKey$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TriFunction, $TriFunction$Type} from "packages/org/apache/commons/lang3/function/$TriFunction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ResourceContainer<T, C extends $Widget> extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(resource: $Resource$Type<(T)>, panel: $ResourcePanel$Type)

public "getResource"(): $Resource<(T)>
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setDragging"<D>(draggingMapping: $Function$Type<(string), (D)>, draggingRenderer: $TriFunction$Type<(string), (D), ($Position$Type), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "setDragging"<D>(draggingMapping: $Function$Type<(string), (D)>, draggingRenderer: $Function$Type<(D), ($IGuiTexture$Type)>): $ResourceContainer<(T), (C)>
public "setWidgetSupplier"(widgetSupplier: $Function$Type<(string), (C)>): $ResourceContainer<(T), (C)>
public "getPanel"(): $ResourcePanel
public "setOnEdit"(onEdit: $Consumer$Type<(string)>): $ResourceContainer<(T), (C)>
public "reBuild"(): void
public "getWidgetSupplier"(): $Function<(string), (C)>
public "setNameSupplier"(nameSupplier: $Supplier$Type<(string)>): $ResourceContainer<(T), (C)>
public "setRenamePredicate"(renamePredicate: $Predicate$Type<(string)>): $ResourceContainer<(T), (C)>
public "getWidgets"(): $Map<(string), (C)>
public "getSelected"(): string
public "initWidget"(): void
public "setOnRemove"(onRemove: $Predicate$Type<(string)>): $ResourceContainer<(T), (C)>
public "setOnAdd"(onAdd: $Function$Type<(string), (T)>): $ResourceContainer<(T), (C)>
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "resource"(): $Resource<(T)>
set "widgetSupplier"(value: $Function$Type<(string), (C)>)
get "panel"(): $ResourcePanel
set "onEdit"(value: $Consumer$Type<(string)>)
get "widgetSupplier"(): $Function<(string), (C)>
set "nameSupplier"(value: $Supplier$Type<(string)>)
set "renamePredicate"(value: $Predicate$Type<(string)>)
get "widgets"(): $Map<(string), (C)>
get "selected"(): string
set "onRemove"(value: $Predicate$Type<(string)>)
set "onAdd"(value: $Function$Type<(string), (T)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceContainer$Type<T, C> = ($ResourceContainer<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceContainer_<T, C> = $ResourceContainer$Type<(T), (C)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIGuiContainer" {
import {$ModularUIContainer, $ModularUIContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$SPacketUIWidgetUpdate, $SPacketUIWidgetUpdate$Type} from "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketUIWidgetUpdate"
import {$NarratableEntry, $NarratableEntry$Type} from "packages/net/minecraft/client/gui/narration/$NarratableEntry"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$GuiEventListener, $GuiEventListener$Type} from "packages/net/minecraft/client/gui/components/events/$GuiEventListener"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Renderable, $Renderable$Type} from "packages/net/minecraft/client/gui/components/$Renderable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $ModularUIGuiContainer extends $AbstractContainerScreen<($ModularUIContainer)> {
readonly "modularUI": $ModularUI
 "lastFocus": $Widget
 "focused": boolean
 "dragSplittingLimit": integer
 "dragSplittingButton": integer
 "tooltipTexts": $List<($Component)>
 "tooltipComponent": $TooltipComponent
 "tooltipFont": $Font
 "tooltipStack": $ItemStack
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "imageWidth": integer
 "imageHeight": integer
 "hoveredSlot": $Slot
 "clickedSlot": $Slot
 "snapbackEnd": $Slot
 "leftPos": integer
 "topPos": integer
 "isSplittingStack": boolean
 "draggingItem": $ItemStack
 "snapbackStartX": integer
 "snapbackStartY": integer
 "snapbackTime": long
 "snapbackItem": $ItemStack
 "isQuickCrafting": boolean
 "quickCraftingType": integer
 "quickCraftingRemainder": integer
static readonly "BACKGROUND_LOCATION": $ResourceLocation
readonly "children": $List<($GuiEventListener)>
readonly "narratables": $List<($NarratableEntry)>
 "minecraft": $Minecraft
 "width": integer
 "height": integer
readonly "renderables": $List<($Renderable)>
 "font": $Font

constructor(modularUI: $ModularUI$Type, windowId: integer)

public "handleWidgetUpdate"(packet: $SPacketUIWidgetUpdate$Type): void
public "switchFocus"(widget: $Widget$Type): boolean
public "setHoveredSlot"(hoveredSlot: $Slot$Type): void
public "renderFloatingItem"(graphics: $GuiGraphics$Type, stack: $ItemStack$Type, x: integer, y: integer, amountText: string): void
public "getQuickCraftSlots"(): $Set<($Slot)>
public "getQuickCrafting"(): boolean
public "superMouseReleased"(mouseX: double, mouseY: double, state: integer): void
public "superKeyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superMouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "getGuiExtraAreas"(): $List<($Rect2i)>
public "superMouseMoved"(mouseX: double, mouseY: double): void
public "superMouseDragged"(pMouseX: double, pMouseY: double, pButton: integer, pDragX: double, pDragY: double): void
public "superCharTyped"(codePoint: character, modifiers: integer): boolean
public "superKeyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "superMouseClicked"(mouseX: double, mouseY: double, mouseButton: integer): void
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, pButton: integer): boolean
public "mouseClicked"(mouseX: double, mouseY: double, pButton: integer): boolean
public "mouseScrolled"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "mouseDragged"(mouseX: double, mouseY: double, pButton: integer, pDragX: double, pDragY: double): boolean
public "mouseMoved"(mouseX: double, mouseY: double): void
public "m_181908_"(): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "setHoverTooltip"(tooltipTexts: $List$Type<($Component$Type)>, tooltipStack: $ItemStack$Type, tooltipFont: $Font$Type, tooltipComponent: $TooltipComponent$Type): void
public "init"(): void
public "setDraggingElement"(element: any, renderer: $IGuiTexture$Type): boolean
public "getDraggingElement"(): any
public "render"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "removed"(): void
set "hoveredSlot"(value: $Slot$Type)
get "quickCraftSlots"(): $Set<($Slot)>
get "quickCrafting"(): boolean
get "guiExtraAreas"(): $List<($Rect2i)>
get "draggingElement"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUIGuiContainer$Type = ($ModularUIGuiContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUIGuiContainer_ = $ModularUIGuiContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IEnhancedManaged" {
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IEnhancedManaged extends $IManaged {

 "scheduleRenderUpdate"(): void
 "scheduleRender"(fieldName: string, newValue: any, oldValue: any): void
 "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "markDirty"(name: string): void
 "getSyncStorage"(): $IManagedStorage
 "onChanged"(): void
 "getFieldHolder"(): $ManagedFieldHolder
 "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
 "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
}

export namespace $IEnhancedManaged {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnhancedManaged$Type = ($IEnhancedManaged);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnhancedManaged_ = $IEnhancedManaged$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IManagedBlockEntity {

 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity
 "getNonLazyFields"(): ($IRef)[]

(): $BlockPos
}

export namespace $IManagedBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedBlockEntity$Type = ($IManagedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedBlockEntity_ = $IManagedBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI" {
import {$ModularUIContainer, $ModularUIContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IUIHolder, $IUIHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Rectangle, $Rectangle$Type} from "packages/java/awt/$Rectangle"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ModularUIGuiContainer, $ModularUIGuiContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIGuiContainer"

export class $ModularUI {
readonly "mainGroup": $WidgetGroup
readonly "holder": $IUIHolder
readonly "entityPlayer": $Player

constructor(holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(mainGroup: $WidgetGroup$Type, holder: $IUIHolder$Type, entityPlayer: $Player$Type)
constructor(width: integer, height: integer, holder: $IUIHolder$Type, entityPlayer: $Player$Type)

public "setSize"(width: integer, height: integer): void
public "registerCloseListener"(runnable: $Runnable$Type): void
public "getSlotMap"(): $HashMap<($Slot), ($SlotWidget)>
public "setModularUIContainer"(container: $ModularUIContainer$Type): void
public "triggerCloseListeners"(): void
public "getModularUIContainer"(): $ModularUIContainer
public "getTickCount"(): long
public "getModularUIGui"(): $ModularUIGuiContainer
public "getWidgetsById"(regex: string): $List<($Widget)>
public "getFirstWidgetById"(regex: string): $Widget
public "initWidgets"(): void
public "setModularUIGui"(modularUIGuiContainer: $ModularUIGuiContainer$Type): void
public "removeNativeSlot"(slotHandle: $Slot$Type): void
public "addNativeSlot"(slotHandle: $Slot$Type, slotWidget: $SlotWidget$Type): void
public "widget"(widget: $Widget$Type): $ModularUI
public "getFlatWidgetCollection"(): $List<($Widget)>
public "getFlatVisibleWidgetCollection"(): $List<($Widget)>
public "background"(...textures: ($IGuiTexture$Type)[]): $ModularUI
public "getWidth"(): integer
public "getHeight"(): integer
public "updateScreenSize"(screenWidth: integer, screenHeight: integer): void
public "getScreenHeight"(): integer
public "getScreenWidth"(): integer
public "getGuiTop"(): integer
public "getGuiLeft"(): integer
public "isFullScreen"(): boolean
public "setFullScreen"(): void
public "toScreenCoords"(widgetRect: $Rectangle$Type): $Rectangle
get "slotMap"(): $HashMap<($Slot), ($SlotWidget)>
set "modularUIContainer"(value: $ModularUIContainer$Type)
get "modularUIContainer"(): $ModularUIContainer
get "tickCount"(): long
get "modularUIGui"(): $ModularUIGuiContainer
set "modularUIGui"(value: $ModularUIGuiContainer$Type)
get "flatWidgetCollection"(): $List<($Widget)>
get "flatVisibleWidgetCollection"(): $List<($Widget)>
get "width"(): integer
get "height"(): integer
get "screenHeight"(): integer
get "screenWidth"(): integer
get "guiTop"(): integer
get "guiLeft"(): integer
get "fullScreen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUI$Type = ($ModularUI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUI_ = $ModularUI$Type;
}}
declare module "packages/com/lowdragmc/shimmer/core/$IParticleEngine" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$PostProcessing, $PostProcessing$Type} from "packages/com/lowdragmc/shimmer/client/postprocessing/$PostProcessing"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $IParticleEngine {

 "createPostParticle"(arg0: $PostProcessing$Type, arg1: $ParticleOptions$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $Particle

(arg0: $PostProcessing$Type, arg1: $ParticleOptions$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): $Particle
}

export namespace $IParticleEngine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IParticleEngine$Type = ($IParticleEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IParticleEngine_ = $IParticleEngine$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Rect" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"

export class $Rect {
readonly "left": integer
readonly "right": integer
readonly "up": integer
readonly "down": integer


public static "of"(position: $Position$Type, size: $Size$Type): $Rect
public "expand"(expand: integer): $Rect
public "expand"(x: integer, y: integer): $Rect
public "withRight"(right: integer): $Rect
public "getWidth"(): integer
public "getHeight"(): integer
public "toDownCenter"(): $Position
public "toRightDown"(): $Position
public static "ofAbsolute"(left: integer, right: integer, up: integer, down: integer): $Rect
public "toRightCenter"(): $Position
public "toUpCenter"(): $Position
public "toLeftUp"(): $Position
public "toLeftCenter"(): $Position
public "toRightUp"(): $Position
public "upAnd"(x: integer): $Position
public "toLeftDown"(): $Position
public "rightAnd"(y: integer): $Position
public "downAnd"(x: integer): $Position
public "leftAnd"(y: integer): $Position
public "horizontalExpand"(x: integer): $Rect
public "horizontalExpand"(left: integer, right: integer): $Rect
public "moveVertical"(delta: integer): $Rect
public "withUpFixedHeight"(height: integer): $Rect
public "expandDown"(expand: integer): $Rect
public "verticalExpand"(up: integer, down: integer): $Rect
public "verticalExpand"(y: integer): $Rect
public "withLeftFixedWidth"(width: integer): $Rect
public "moveHorizontal"(delta: integer): $Rect
public "expandRight"(expand: integer): $Rect
public "expandUp"(expand: integer): $Rect
public "withDown"(down: integer): $Rect
public "expandLeft"(expand: integer): $Rect
public "withUp"(up: integer): $Rect
public static "ofRelative"(left: integer, width: integer, up: integer, height: integer): $Rect
public "withRightFixedWidth"(width: integer): $Rect
public "withDownFixedHeight"(height: integer): $Rect
public "withLeft"(left: integer): $Rect
public "getWidthCenter"(): integer
public "getHeightCenter"(): integer
get "width"(): integer
get "height"(): integer
get "widthCenter"(): integer
get "heightCenter"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rect$Type = ($Rect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rect_ = $Rect$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ProgressWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ProgressTexture, $ProgressTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $ProgressWidget extends $Widget implements $IConfigurableWidget {
static readonly "JEIProgress": $DoubleSupplier
 "progressSupplier": $DoubleSupplier

constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer)
constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer, progressBar: $ProgressTexture$Type)
constructor(progressSupplier: $DoubleSupplier$Type, x: integer, y: integer, width: integer, height: integer, fullImage: $ResourceTexture$Type)
constructor()

public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "detectAndSendChanges"(): void
public "initWidget"(): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "setProgressSupplier"(progressSupplier: $DoubleSupplier$Type): $ProgressWidget
public "setDynamicHoverTips"(dynamicHoverTips: $Function$Type<(double), (string)>): $ProgressWidget
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressWidget
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setProgressTexture"(progressTexture: $IGuiTexture$Type): $ProgressWidget
public "setProgressTexture"(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type): $ProgressWidget
public "setOverlayTexture"(overlayTexture: $IGuiTexture$Type): $ProgressWidget
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "progressSupplier"(value: $DoubleSupplier$Type)
set "dynamicHoverTips"(value: $Function$Type<(double), (string)>)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
set "progressTexture"(value: $IGuiTexture$Type)
set "overlayTexture"(value: $IGuiTexture$Type)
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressWidget$Type = ($ProgressWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressWidget_ = $ProgressWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/shader/uniform/$UniformCache" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $UniformCache {

constructor(programId: integer)

public "invalidate"(): void
public "glUniform1I"(location: string, v0: integer): void
public "glUniform4F"(location: string, v0: float, v1: float, v2: float, v3: float): void
public "glUniformMatrix2"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformMatrix4"(location: string, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformMatrix4F"(location: string, matrix4f: $Matrix4f$Type): void
public "glUniform2F"(location: string, v0: float, v1: float): void
public "glUniform1F"(location: string, v0: float): void
public "glUniform3F"(location: string, v0: float, v1: float, v2: float): void
public "glUniform4I"(location: string, v0: integer, v1: integer, v2: integer, v3: integer): void
public "glUniform2I"(location: string, v0: integer, v1: integer): void
public "glUniform3I"(location: string, v0: integer, v1: integer, v2: integer): void
public "fillRGBAColor"(location: string, color: integer): void
public "glUniformMatrix"(location: string, callback: $IntConsumer$Type, transpose: boolean, matrix: $FloatBuffer$Type): void
public "glUniformBoolean"(location: string, value: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniformCache$Type = ($UniformCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniformCache_ = $UniformCache$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResourceContainer, $ResourceContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/resource/$ResourceContainer"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Resource<T> {

constructor()

public "name"(): string
public "getResource"(key: string): T
public "merge"(resource: $Resource$Type<(T)>): void
public "getData"(): $Map<(string), (T)>
public "serialize"(arg0: T): $Tag
public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "onLoad"(): void
public "unLoad"(): void
public "removeResource"(key: string): T
public "createContainer"(arg0: $ResourcePanel$Type): $ResourceContainer<(T), (any)>
public "buildDefault"(): void
public "hasResource"(key: string): boolean
public "deserialize"(arg0: $Tag$Type): T
public "allResources"(): $Set<($Map$Entry<(string), (T)>)>
public "addResource"(key: string, resource: T): void
public "getResourceOrDefault"(key: string, defaultValue: T): T
get "data"(): $Map<(string), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$Type<T> = ($Resource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resource_<T> = $Resource$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "getY"(): integer
 "setX"(arg0: integer): void
 "setY"(arg0: integer): void
 "getX"(): integer
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAsyncAutoSyncBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IAutoSyncBlockEntity, $IAutoSyncBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IAutoSyncBlockEntity"
import {$IAsyncLogic, $IAsyncLogic$Type} from "packages/com/lowdragmc/lowdraglib/async/$IAsyncLogic"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IAsyncAutoSyncBlockEntity extends $IAutoSyncBlockEntity, $IAsyncLogic {

 "onInValid"(): void
 "onValid"(): void
 "asyncTick"(periodID: long): void
 "useAsyncThread"(): boolean
 "readCustomSyncData"(tag: $CompoundTag$Type): void
 "getSyncTag"(): string
 "writeCustomSyncData"(tag: $CompoundTag$Type): void
 "syncNow"(force: boolean): void
 "defaultServerTick"(): void
 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity
 "getNonLazyFields"(): ($IRef)[]

(): void
}

export namespace $IAsyncAutoSyncBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsyncAutoSyncBlockEntity$Type = ($IAsyncAutoSyncBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAsyncAutoSyncBlockEntity_ = $IAsyncAutoSyncBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$AnnotationDetector$Wrapper, $AnnotationDetector$Wrapper$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/runtime/$AnnotationDetector$Wrapper"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IConfigurableWidget extends $IConfigurable {

 "canDragIn"(dragging: any): boolean
 "handleDragging"(dragging: any): boolean
 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "initTemplate"(): void
 "serializeWrapper"(): $CompoundTag
 "serializeInnerNBT"(): $CompoundTag
 "widget"(): $Widget
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
 "isLDLRegister"(): boolean
}

export namespace $IConfigurableWidget {
const CACHE: $Function<(string), ($AnnotationDetector$Wrapper<($LDLRegister), ($IConfigurableWidget)>)>
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableWidget$Type = ($IConfigurableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableWidget_ = $IConfigurableWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$ITagSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $ITagSerializable<T extends $Tag> {

 "deserializeNBT"(arg0: T): void
 "serializeNBT"(): T
}

export namespace $ITagSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagSerializable$Type<T> = ($ITagSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITagSerializable_<T> = $ITagSerializable$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/menu/$MenuTab" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"

export class $MenuTab implements $ILDLRegister {


public "deserializeNBT"(nbt: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "appendMenu"(menu: $TreeBuilder$Menu$Type): $TreeBuilder$Menu
public "createTabWidget"(): $Widget
public static "registerMenuHook"(menuName: string, consumer: $BiConsumer$Type<($MenuTab$Type), ($TreeBuilder$Menu$Type)>): void
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuTab$Type = ($MenuTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuTab_ = $MenuTab$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$DraggableScrollableWidgetGroup$IDraggable, $DraggableScrollableWidgetGroup$IDraggable$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$IDraggable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $DraggableWidgetGroup extends $WidgetGroup implements $DraggableScrollableWidgetGroup$IDraggable {
readonly "widgets": $List<($Widget)>

constructor(position: $Position$Type, size: $Size$Type)
constructor(position: $Position$Type)
constructor(x: integer, y: integer, width: integer, height: integer)
constructor()

public "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
public "isSelected"(): boolean
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setOnUnSelected"(onUnSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setOnEndDrag"(onEndDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "onSelected"(): void
public "startDrag"(mouseX: double, mouseY: double): void
public "setOnDragging"(onDragging: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "endDrag"(mouseX: double, mouseY: double): void
public "allowSelected"(mouseX: double, mouseY: double, button: integer): boolean
public "setOnStartDrag"(onStartDrag: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "onUnSelected"(): void
public "setOnSelected"(onSelected: $Consumer$Type<($DraggableWidgetGroup$Type)>): $DraggableWidgetGroup
public "setSelectedTexture"(selectedTexture: $IGuiTexture$Type): $DraggableWidgetGroup
public "setSelectedTexture"(border: integer, color: integer): $DraggableWidgetGroup
public "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
public "canDragOutRange"(): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "selected"(): boolean
set "onEndDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onDragging"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "onStartDrag"(value: $Consumer$Type<($DraggableWidgetGroup$Type)>)
set "selectedTexture"(value: $IGuiTexture$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableWidgetGroup$Type = ($DraggableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableWidgetGroup_ = $DraggableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IRenderer {

 "onPrepareTextureAtlas"(atlasName: $ResourceLocation$Type, register: $Consumer$Type<($ResourceLocation$Type)>): void
 "reBakeCustomQuadsOffset"(): float
 "useBlockLight"(stack: $ItemStack$Type): boolean
 "renderItem"(stack: $ItemStack$Type, transformType: $ItemDisplayContext$Type, leftHand: boolean, poseStack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer, model: $BakedModel$Type): void
 "registerEvent"(): void
 "render"(blockEntity: $BlockEntity$Type, partialTicks: float, stack: $PoseStack$Type, buffer: $MultiBufferSource$Type, combinedLight: integer, combinedOverlay: integer): void
 "onAdditionalModel"(registry: $Consumer$Type<($ResourceLocation$Type)>): void
 "getViewDistance"(): integer
 "isGlobalRenderer"(blockEntity: $BlockEntity$Type): boolean
 "useAO"(state: $BlockState$Type): boolean
 "useAO"(): boolean
 "shouldRender"(blockEntity: $BlockEntity$Type, cameraPos: $Vec3$Type): boolean
 "getParticleTexture"(): $TextureAtlasSprite
 "hasTESR"(blockEntity: $BlockEntity$Type): boolean
 "renderModel"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, rand: $RandomSource$Type): $List<($BakedQuad)>
 "reBakeCustomQuads"(): boolean
 "isGui3d"(): boolean
 "isRaw"(): boolean
}

export namespace $IRenderer {
const EVENT_REGISTERS: $Set<($IRenderer)>
const EMPTY: $IRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderer$Type = ($IRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderer_ = $IRenderer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/animation/$Transform" {
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IEase, $IEase$Type} from "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Animation, $Animation$Type} from "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Transform extends $Animation {

constructor()

public "scale"(scale: float): $Transform
public "position"(position: $Position$Type): $Animation
public "size"(size: $Size$Type): $Animation
public "offset"(xOffset: integer, yOffset: integer): $Transform
public "setIn"(): $Animation
public "setOut"(): $Animation
public "delay"(delay: long): $Transform
public "setScale"(scale: float): $Transform
public "isIn"(): boolean
public "post"(graphics: $GuiGraphics$Type): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "isOut"(): boolean
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "ease"(ease: $IEase$Type): $Transform
public "pre"(graphics: $GuiGraphics$Type): void
get "in"(): boolean
get "out"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$Type = ($Transform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transform_ = $Transform$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$GuiTextureGroup" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $GuiTextureGroup extends $TransformTexture {
 "textures": ($IGuiTexture)[]

constructor()
constructor(...textures: ($IGuiTexture$Type)[])

public "setColor"(color: integer): $GuiTextureGroup
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "updateTick"(): void
public "setTextures"(textures: ($IGuiTexture$Type)[]): $GuiTextureGroup
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
set "textures"(value: ($IGuiTexture$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiTextureGroup$Type = ($GuiTextureGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiTextureGroup_ = $GuiTextureGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$AbstractContainerMenuAccessor" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $AbstractContainerMenuAccessor {

 "getLastSlots"(): $NonNullList<($ItemStack)>
 "getRemoteSlots"(): $NonNullList<($ItemStack)>
}

export namespace $AbstractContainerMenuAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenuAccessor$Type = ($AbstractContainerMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerMenuAccessor_ = $AbstractContainerMenuAccessor$Type;
}}
declare module "packages/com/lowdragmc/shimmer/client/postprocessing/$PostProcessing" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ResourceManagerReloadListener, $ResourceManagerReloadListener$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManagerReloadListener"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ProfilerFiller, $ProfilerFiller$Type} from "packages/net/minecraft/util/profiling/$ProfilerFiller"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AtomicBoolean, $AtomicBoolean$Type} from "packages/java/util/concurrent/atomic/$AtomicBoolean"
import {$IPostParticleType, $IPostParticleType$Type} from "packages/com/lowdragmc/shimmer/client/postprocessing/$IPostParticleType"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$PostChain, $PostChain$Type} from "packages/net/minecraft/client/renderer/$PostChain"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$CopyDepthColorTarget, $CopyDepthColorTarget$Type} from "packages/com/lowdragmc/shimmer/client/rendertarget/$CopyDepthColorTarget"
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PreparableReloadListener$PreparationBarrier, $PreparableReloadListener$PreparationBarrier$Type} from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"

export class $PostProcessing implements $ResourceManagerReloadListener {
static readonly "CHUNK_TYPES": $Set<($RenderType)>
static readonly "BLOOM_UNREAL": $PostProcessing
static readonly "BLOOM_UNITY": $PostProcessing
static readonly "WARP": $PostProcessing
static readonly "VHS": $PostProcessing
static readonly "FLICKER": $PostProcessing
static readonly "HALFTONE": $PostProcessing
static readonly "DOT_SCREEN": $PostProcessing
static "enableBloomFilter": $AtomicBoolean
readonly "name": string
static "BLOOM_BLOCK": $Set<($BlockState)>
static "BLOOM_FLUID": $Set<($Fluid)>
static "BLOOM_PARTICLE": $Set<($ResourceLocation)>


public static "values"(): $Collection<($PostProcessing)>
public static "resize"(width: integer, height: integer): void
public static "embeddiumBloomMRTFSHInjection"(s: string): string
public static "getBlockBloomPostParticleTypes"(): $List<($IPostParticleType)>
public static "RbBloomMRTFSHInjection"(s: string): string
public "onResourceManagerReload"(pResourceManager: $ResourceManager$Type): void
public static "registerPost"(name: string, shader: $ResourceLocation$Type): $PostProcessing
public static "getITime"(pPartialTicks: float): float
public "allowPost"(): boolean
public "postEntity"(sourceConsumer: $Consumer$Type<($MultiBufferSource$Type)>): void
public static "forceBloomBlock"(runnable: $Runnable$Type): void
public static "isBlockBloom"(): boolean
public static "forceBloomFluid"(runnable: $Runnable$Type): void
public static "cleanBloom"(): void
public static "isFluidBloom"(): boolean
public static "setupBloom"(blockState: $BlockState$Type, fluidState: $FluidState$Type): void
public "postParticle"(particle: $Particle$Type): void
public "postParticle"(particleOptions: $ParticleOptions$Type, pX: double, pY: double, pZ: double, pXSpeed: double, pYSpeed: double, pZSpeed: double): void
public "postParticle"(particleOptions: $ParticleOptions$Type, viewDistanceSqr: integer, pX: double, pY: double, pZ: double, pXSpeed: double, pYSpeed: double, pZSpeed: double): void
public "postEntityForce"(sourceConsumer: $Consumer$Type<($MultiBufferSource$Type)>): void
public "renderParticlePost"(): void
public "hasParticle"(): void
public static "getPost"(name: string): $PostProcessing
public "getPostTarget"(hookColorAttachment: boolean): $CopyDepthColorTarget
public "renderPost"(postChain: $PostChain$Type, post: $RenderTarget$Type, output: $RenderTarget$Type): void
public static "injectShaders"(): void
public static "loadConfig"(): void
public static "getBlockBloom"(): $PostProcessing
public "getParticleType"(renderType: $ParticleRenderType$Type): $ParticleRenderType
public "renderEntityPost"(profilerFiller: $ProfilerFiller$Type): void
public "renderBlockPost"(): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$Type, arg1: $ResourceManager$Type, arg2: $ProfilerFiller$Type, arg3: $ProfilerFiller$Type, arg4: $Executor$Type, arg5: $Executor$Type): $CompletableFuture<(void)>
public "getName"(): string
get "blockBloomPostParticleTypes"(): $List<($IPostParticleType)>
get "blockBloom"(): boolean
get "fluidBloom"(): boolean
get "blockBloom"(): $PostProcessing
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostProcessing$Type = ($PostProcessing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostProcessing_ = $PostProcessing$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFieldUpdateListener<T> {

 "onFieldChanged"(arg0: string, arg1: T, arg2: T): void

(arg0: string, arg1: T, arg2: T): void
}

export namespace $IFieldUpdateListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFieldUpdateListener$Type<T> = ($IFieldUpdateListener<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFieldUpdateListener_<T> = $IFieldUpdateListener$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TreeListWidget" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TreeListWidget<K, T> extends $Widget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, root: $TreeNode$Type<(K), (T)>, onSelected: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "setContentIconSupplier"(contentIconSupplier: $Function$Type<(T), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "setBackground"(background: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "updateScreen"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setLineHeight"(lineHeight: integer): $TreeListWidget<(K), (T)>
public "jumpTo"(path: $List$Type<(K)>): $TreeNode<(K), (T)>
public "setOnSelected"(onSelected: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $TreeListWidget<(K), (T)>
public "setContentNameSupplier"(contentNameSupplier: $Function$Type<(T), (string)>): $TreeListWidget<(K), (T)>
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $TreeListWidget<(K), (T)>
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $TreeListWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $TreeListWidget<(K), (T)>
public "canSelectNode"(canSelectNode: boolean): $TreeListWidget<(K), (T)>
set "contentIconSupplier"(value: $Function$Type<(T), ($IGuiTexture$Type)>)
set "background"(value: $IGuiTexture$Type)
set "lineHeight"(value: integer)
set "onSelected"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "contentNameSupplier"(value: $Function$Type<(T), (string)>)
set "leafTexture"(value: $IGuiTexture$Type)
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
set "nodeTexture"(value: $IGuiTexture$Type)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeListWidget$Type<K, T> = ($TreeListWidget<(K), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeListWidget_<K, T> = $TreeListWidget$Type<(K), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IBlockRendererProvider" {
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IBlockRendererProvider {

 "getRenderer"(arg0: $BlockState$Type): $IRenderer
 "getLightMap"(world: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): integer

(arg0: $BlockState$Type): $IRenderer
}

export namespace $IBlockRendererProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockRendererProvider$Type = ($IBlockRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockRendererProvider_ = $IBlockRendererProvider$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/async/$IAsyncLogic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAsyncLogic {

 "asyncTick"(arg0: long): void

(arg0: long): void
}

export namespace $IAsyncLogic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsyncLogic$Type = ($IAsyncLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAsyncLogic_ = $IAsyncLogic$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEase {

 "getInterpolation"(arg0: float): float

(arg0: float): float
}

export namespace $IEase {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEase$Type = ($IEase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEase_ = $IEase$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ProgressTexture$FillDirection extends $Enum<($ProgressTexture$FillDirection)> {
static readonly "LEFT_TO_RIGHT": $ProgressTexture$FillDirection
static readonly "RIGHT_TO_LEFT": $ProgressTexture$FillDirection
static readonly "UP_TO_DOWN": $ProgressTexture$FillDirection
static readonly "DOWN_TO_UP": $ProgressTexture$FillDirection
static readonly "ALWAYS_FULL": $ProgressTexture$FillDirection


public static "values"(): ($ProgressTexture$FillDirection)[]
public static "valueOf"(name: string): $ProgressTexture$FillDirection
public "getDrawnU"(progress: double): double
public "getDrawnWidth"(progress: double): double
public "getDrawnV"(progress: double): double
public "getDrawnHeight"(progress: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressTexture$FillDirection$Type = (("always_full") | ("right_to_left") | ("up_to_down") | ("left_to_right") | ("down_to_up")) | ($ProgressTexture$FillDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressTexture$FillDirection_ = $ProgressTexture$FillDirection$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/renderer/$IItemRendererProvider" {
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"

export interface $IItemRendererProvider {

 "getRenderer"(arg0: $ItemStack$Type): $IRenderer

(arg0: $ItemStack$Type): $IRenderer
}

export namespace $IItemRendererProvider {
const disabled: $ThreadLocal<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRendererProvider$Type = ($IItemRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRendererProvider_ = $IItemRendererProvider$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"

export class $ProgressTexture extends $TransformTexture {

constructor(emptyBarArea: $IGuiTexture$Type, filledBarArea: $IGuiTexture$Type)
constructor()

public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "updateTick"(): void
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $ProgressTexture
public "getFilledBarArea"(): $IGuiTexture
public "getEmptyBarArea"(): $IGuiTexture
public "setProgress"(progress: double): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
get "filledBarArea"(): $IGuiTexture
get "emptyBarArea"(): $IGuiTexture
set "progress"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressTexture$Type = ($ProgressTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressTexture_ = $ProgressTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer" {
import {$FluidStack, $FluidStack$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$FluidStack"

export interface $IFluidTransfer {

 "fill"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): long
 "fill"(resource: $FluidStack$Type, simulate: boolean): long
 "drain"(arg0: integer, arg1: $FluidStack$Type, arg2: boolean, arg3: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean): $FluidStack
 "drain"(maxDrain: long, simulate: boolean, notifyChanges: boolean): $FluidStack
 "drain"(resource: $FluidStack$Type, simulate: boolean, notifyChanges: boolean): $FluidStack
 "setFluidInTank"(arg0: integer, arg1: $FluidStack$Type): void
 "createSnapshot"(): any
 "supportsFill"(arg0: integer): boolean
 "supportsDrain"(arg0: integer): boolean
 "restoreFromSnapshot"(arg0: any): void
 "onContentsChanged"(): void
 "getTanks"(): integer
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "getTankCapacity"(arg0: integer): long
 "getFluidInTank"(arg0: integer): $FluidStack
}

export namespace $IFluidTransfer {
const EMPTY: $IFluidTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidTransfer$Type = ($IFluidTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidTransfer_ = $IFluidTransfer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$SceneWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$WorldSceneRenderer, $WorldSceneRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$BlockPosFace, $BlockPosFace$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockPosFace"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$TrackedDummyWorld, $TrackedDummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ISceneBlockRenderHook, $ISceneBlockRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"

export class $SceneWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$Type, useFBO: boolean)
constructor(x: integer, y: integer, width: integer, height: integer, world: $Level$Type)

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "setGui"(gui: $ModularUI$Type): void
public "setDraggable"(draggable: boolean): $SceneWidget
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getParticleManager"(): $ParticleManager
public "needCompileCache"(): void
public "releaseCacheBuffer"(): void
public "useCacheBuffer"(autoReleased: boolean): $SceneWidget
public "useCacheBuffer"(): $SceneWidget
public "useOrtho"(): $SceneWidget
public "useOrtho"(useOrtho: boolean): $SceneWidget
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer): void
public "drawFacingBorder"(poseStack: $PoseStack$Type, posFace: $BlockPosFace$Type, color: integer, inner: integer): void
public "setScalable"(scalable: boolean): $SceneWidget
public "setHoverTips"(hoverTips: boolean): $SceneWidget
public "getDummyWorld"(): $TrackedDummyWorld
public "setClearColor"(color: integer): $SceneWidget
public "setIntractable"(intractable: boolean): $SceneWidget
public "renderBlockOverLay"(renderer: $WorldSceneRenderer$Type): void
public "setZoom"(zoom: float): $SceneWidget
public "getRotationYaw"(): float
public "getRotationPitch"(): float
public "getHoverPosFace"(): $BlockPosFace
public "getZoom"(): float
public "getSelectedPosFace"(): $BlockPosFace
public "getCore"(): $Set<($BlockPos)>
public "setOrthoRange"(range: float): $SceneWidget
public "getCenter"(): $Vector3f
public "getClickPosFace"(): $BlockPosFace
public "getHoverItem"(): $ItemStack
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>): $SceneWidget
public "getRenderer"(): $WorldSceneRenderer
public "setCameraYawAndPitchAnima"(rotationYaw: float, rotationPitch: float, dur: integer): void
public "setCameraYawAndPitch"(rotationYaw: float, rotationPitch: float): $SceneWidget
public "setBeforeWorldRender"(beforeWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public "setAfterWorldRender"(afterWorldRender: $Consumer$Type<($SceneWidget$Type)>): $SceneWidget
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setCenter"(center: $Vector3f$Type): $SceneWidget
public "setRenderFacing"(renderFacing: boolean): $SceneWidget
public "setRenderSelect"(renderSelect: boolean): $SceneWidget
public "createScene"(world: $Level$Type): void
public "createScene"(world: $Level$Type, useFBOSceneRenderer: boolean): void
public "setRenderedCore"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $SceneWidget
public "setOnSelected"(onSelected: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>): $SceneWidget
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "gui"(value: $ModularUI$Type)
set "draggable"(value: boolean)
get "particleManager"(): $ParticleManager
set "scalable"(value: boolean)
set "hoverTips"(value: boolean)
get "dummyWorld"(): $TrackedDummyWorld
set "clearColor"(value: integer)
set "intractable"(value: boolean)
set "zoom"(value: float)
get "rotationYaw"(): float
get "rotationPitch"(): float
get "hoverPosFace"(): $BlockPosFace
get "zoom"(): float
get "selectedPosFace"(): $BlockPosFace
get "core"(): $Set<($BlockPos)>
set "orthoRange"(value: float)
get "center"(): $Vector3f
get "clickPosFace"(): $BlockPosFace
get "hoverItem"(): $ItemStack
set "onAddedTooltips"(value: $BiConsumer$Type<($SceneWidget$Type), ($List$Type<($Component$Type)>)>)
get "renderer"(): $WorldSceneRenderer
set "beforeWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
set "afterWorldRender"(value: $Consumer$Type<($SceneWidget$Type)>)
set "center"(value: $Vector3f$Type)
set "renderFacing"(value: boolean)
set "renderSelect"(value: boolean)
set "onSelected"(value: $BiConsumer$Type<($BlockPos$Type), ($Direction$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SceneWidget$Type = ($SceneWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SceneWidget_ = $SceneWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$TrackedDummyWorld" {
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockInfo, $BlockInfo$Type} from "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$DummyWorld, $DummyWorld$Type} from "packages/com/lowdragmc/lowdraglib/utils/$DummyWorld"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TrackedDummyWorld extends $DummyWorld {
readonly "proxyWorld": $WeakReference<($Level)>
readonly "renderedBlocks": $Map<($BlockPos), ($BlockInfo)>
readonly "blockEntities": $Map<($BlockPos), ($BlockEntity)>
readonly "entities": $Map<(integer), ($Entity)>
readonly "minPos": $Vector3f
readonly "maxPos": $Vector3f
 "level": $WeakReference<($Level)>
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
readonly "thread": $Thread
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor()
constructor(world: $Level$Type)

public "clear"(): void
public "getSize"(): $Vector3f
public static "withUnsafeNBTDiscarded"(stack: $ItemStack$Type): $ItemStack
public "getBlockTint"(blockPos: $BlockPos$Type, colorResolver: $ColorResolver$Type): integer
public "getParticleManager"(): $ParticleManager
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public "removeBlock"(pos: $BlockPos$Type): $BlockInfo
public static "isUnsafeItemNBTKey"(name: string): boolean
public "getAllEntities"(): $List<($Entity)>
public "tickWorld"(): void
public "setRenderFilter"(renderFilter: $Predicate$Type<($BlockPos$Type)>): void
public "getRenderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
public "addBlocks"(renderedBlocks: $Map$Type<($BlockPos$Type), ($BlockInfo$Type)>): void
public "getMinPos"(): $Vector3f
public "getMaxPos"(): $Vector3f
public "setInnerBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "addBlock"(pos: $BlockPos$Type, blockInfo: $BlockInfo$Type): void
public "getEntity"(id: integer): $Entity
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "getBiome"(pos: $BlockPos$Type): $Holder<($Biome)>
public "getChunkSource"(): $ChunkSource
public "setBlock"(pos: $BlockPos$Type, state: $BlockState$Type, a: integer, b: integer): boolean
public "addFreshEntity"(entity: $Entity$Type): boolean
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public "getBlockState"(pos: $BlockPos$Type): $BlockState
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "size"(): $Vector3f
get "particleManager"(): $ParticleManager
set "particleManager"(value: $ParticleManager$Type)
get "allEntities"(): $List<($Entity)>
set "renderFilter"(value: $Predicate$Type<($BlockPos$Type)>)
get "renderedBlocks"(): $Map<($BlockPos), ($BlockInfo)>
get "minPos"(): $Vector3f
get "maxPos"(): $Vector3f
set "innerBlockEntity"(value: $BlockEntity$Type)
set "blockEntity"(value: $BlockEntity$Type)
get "chunkSource"(): $ChunkSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedDummyWorld$Type = ($TrackedDummyWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedDummyWorld_ = $TrackedDummyWorld$Type;
}}
declare module "packages/com/lowdragmc/shimmer/client/rendertarget/$CopyDepthColorTarget" {
import {$RenderTarget, $RenderTarget$Type} from "packages/com/mojang/blaze3d/pipeline/$RenderTarget"

export class $CopyDepthColorTarget extends $RenderTarget {
 "width": integer
 "height": integer
 "viewWidth": integer
 "viewHeight": integer
readonly "useDepth": boolean
 "frameBufferId": integer
 "filterMode": integer

constructor(hookTarget: $RenderTarget$Type, hookColorAttachment: boolean)

public "resize"(hookTarget: $RenderTarget$Type, onOsx: boolean): void
public static "hookColorAttachment"(fbo: $RenderTarget$Type, colorBuffer: integer): void
public "enableSelfColorAttachment"(): void
public static "reAttachColorAttachment"(fbo: $CopyDepthColorTarget$Type, colorBuffer: integer, toColorAttachment: integer): void
public "clearDepth"(pClearError: boolean): void
public "enabledAttachment"(): void
public "disableAttachment"(): void
public static "hookDepthBuffer"(fbo: $RenderTarget$Type, depthBuffer: integer): void
public "destroyBuffers"(): void
public "clear"(pClearError: boolean): void
public "setClearColor"(pRed: float, pGreen: float, pBlue: float, pAlpha: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopyDepthColorTarget$Type = ($CopyDepthColorTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopyDepthColorTarget_ = $CopyDepthColorTarget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$BlockInfo" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $BlockInfo {
static readonly "EMPTY": $BlockInfo

constructor(blockState: $BlockState$Type, hasBlockEntity: boolean, itemStack: $ItemStack$Type, postCreate: $Consumer$Type<($BlockEntity$Type)>)
constructor(blockState: $BlockState$Type, postCreate: $Consumer$Type<($BlockEntity$Type)>)
constructor(blockState: $BlockState$Type, hasBlockEntity: boolean)
constructor(blockState: $BlockState$Type)
constructor(block: $Block$Type)

public "apply"(world: $Level$Type, pos: $BlockPos$Type): void
public static "fromBlock"(block: $Block$Type): $BlockInfo
public static "fromBlockState"(state: $BlockState$Type): $BlockInfo
public "getBlockState"(): $BlockState
public "getBlockEntity"(pos: $BlockPos$Type): $BlockEntity
public "getBlockEntity"(level: $Level$Type, pos: $BlockPos$Type): $BlockEntity
public "setTag"(tag: $CompoundTag$Type): void
public "getItemStackForm"(level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): $ItemStack
public "getItemStackForm"(): $ItemStack
public "setHasBlockEntity"(hasBlockEntity: boolean): void
public "hasBlockEntity"(): boolean
public "setBlockState"(blockState: $BlockState$Type): void
public "clearBlockEntityCache"(): void
get "blockState"(): $BlockState
set "tag"(value: $CompoundTag$Type)
get "itemStackForm"(): $ItemStack
set "blockState"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInfo$Type = ($BlockInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInfo_ = $BlockInfo$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta" {
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$RPCSender, $RPCSender$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/rpc/$RPCSender"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"

export class $RPCMethodMeta {

constructor(method: $Method$Type)

public "invoke"(instance: any, sender: $RPCSender$Type, payloads: ($ITypedPayload$Type<(any)>)[]): void
public "getName"(): string
public "serializeArgs"(args: (any)[]): ($ITypedPayload<(any)>)[]
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RPCMethodMeta$Type = ($RPCMethodMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RPCMethodMeta_ = $RPCMethodMeta$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$AnimationTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AnimationTexture extends $TransformTexture {
 "imageLocation": $ResourceLocation

constructor(imageLocation: $ResourceLocation$Type)
constructor(imageLocation: string)
constructor()

public "copy"(): $AnimationTexture
public "setColor"(color: integer): $AnimationTexture
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "updateTick"(): void
public "setCellSize"(cellSize: integer): $AnimationTexture
public "setAnimation"(animation: integer): $AnimationTexture
public "setAnimation"(from: integer, to: integer): $AnimationTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "color"(value: integer)
set "cellSize"(value: integer)
set "animation"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationTexture$Type = ($AnimationTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationTexture_ = $AnimationTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Position" {
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"

export class $Position {
static readonly "ORIGIN": $Position
readonly "x": integer
readonly "y": integer

constructor(x: integer, y: integer)

public "add"(other: $Position$Type): $Position
public "add"(size: $Size$Type): $Position
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(x: integer, y: integer): $Position
public "subtract"(other: $Position$Type): $Position
public "getY"(): integer
public "addY"(y: integer): $Position
public "addX"(x: integer): $Position
public "getX"(): integer
get "y"(): integer
get "x"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Position$Type = ($Position);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Position_ = $Position$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RPCMethodMeta, $RPCMethodMeta$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta"
import {$ManagedKey, $ManagedKey$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ManagedFieldHolder {

constructor(clazz: $Class$Type<(any)>, parent: $ManagedFieldHolder$Type)
constructor(clazz: $Class$Type<(any)>)

public "merge"(other: $ManagedFieldHolder$Type): void
public "getFields"(): ($ManagedKey)[]
public "getSyncedFieldIndex"(name: string): $ManagedKey
public "getRpcMethodMap"(): $Map<(string), ($RPCMethodMeta)>
get "fields"(): ($ManagedKey)[]
get "rpcMethodMap"(): $Map<(string), ($RPCMethodMeta)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagedFieldHolder$Type = ($ManagedFieldHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagedFieldHolder_ = $ManagedFieldHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$HsbColorWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IntConsumer, $IntConsumer$Type} from "packages/java/util/function/$IntConsumer"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $HsbColorWidget extends $Widget implements $IConfigurableWidget {

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "isShowRGB"(): boolean
public "setShowRGB"(showRGB: boolean): $HsbColorWidget
public "setColor"(argb: integer): $HsbColorWidget
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "isMouseOverMain"(mouseX: double, mouseY: double): boolean
public "isMouseOverAlphaSlider"(mouseX: double, mouseY: double): boolean
public "isMouseOverColorSlider"(mouseX: double, mouseY: double): boolean
public "isShowAlpha"(): boolean
public "updateScreen"(): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setShowAlpha"(showAlpha: boolean): $HsbColorWidget
public "setGap"(gap: integer): $HsbColorWidget
public "setBarWidth"(barWidth: integer): $HsbColorWidget
public "setOnChanged"(onChanged: $IntConsumer$Type): $HsbColorWidget
public "setColorSupplier"(colorSupplier: $IntSupplier$Type): $HsbColorWidget
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
get "showRGB"(): boolean
set "showRGB"(value: boolean)
set "color"(value: integer)
get "showAlpha"(): boolean
set "showAlpha"(value: boolean)
set "gap"(value: integer)
set "barWidth"(value: integer)
set "onChanged"(value: $IntConsumer$Type)
set "colorSupplier"(value: $IntSupplier$Type)
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HsbColorWidget$Type = ($HsbColorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HsbColorWidget_ = $HsbColorWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot" {
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IIngredientSlot, $IIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"

export interface $IRecipeIngredientSlot extends $IIngredientSlot {

 "self"(): $Widget
 "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
 "clearTooltipCallback"(): void
 "getIngredientIO"(): $IngredientIO
 "getXEIChance"(): float
 "getXEIIngredients"(): $List<(any)>
 "addTooltipCallback"(callback: $Consumer$Type<($List$Type<($Component$Type)>)>): void

(): $Widget
}

export namespace $IRecipeIngredientSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeIngredientSlot$Type = ($IRecipeIngredientSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeIngredientSlot_ = $IRecipeIngredientSlot$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$MenuWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $MenuWidget<K, T> extends $WidgetGroup {
static "NODE_TEXTURE": $IGuiTexture
static "LEAF_TEXTURE": $IGuiTexture
static "NODE_HOVER_TEXTURE": $IGuiTexture
static "BACKGROUND": $IGuiTexture
readonly "widgets": $List<($Widget)>

constructor(xPosition: integer, yPosition: integer, nodeHeight: integer, root: $TreeNode$Type<(K), (T)>)

public "close"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "setCrossLinePredicate"(crossLinePredicate: $Predicate$Type<(K)>): $MenuWidget<(K), (T)>
public "setNodeHoverTexture"(nodeHoverTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "initWidget"(): void
public "setLeafTexture"(leafTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setKeyNameSupplier"(keyNameSupplier: $Function$Type<(K), (string)>): $MenuWidget<(K), (T)>
public "setNodeTexture"(nodeTexture: $IGuiTexture$Type): $MenuWidget<(K), (T)>
public "setOnNodeClicked"(onNodeClicked: $Consumer$Type<($TreeNode$Type<(K), (T)>)>): $MenuWidget<(K), (T)>
public "setKeyIconSupplier"(keyIconSupplier: $Function$Type<(K), ($IGuiTexture$Type)>): $MenuWidget<(K), (T)>
public "setAutoClose"(autoClose: boolean): $MenuWidget<(K), (T)>
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "crossLinePredicate"(value: $Predicate$Type<(K)>)
set "nodeHoverTexture"(value: $IGuiTexture$Type)
set "leafTexture"(value: $IGuiTexture$Type)
set "keyNameSupplier"(value: $Function$Type<(K), (string)>)
set "nodeTexture"(value: $IGuiTexture$Type)
set "onNodeClicked"(value: $Consumer$Type<($TreeNode$Type<(K), (T)>)>)
set "keyIconSupplier"(value: $Function$Type<(K), ($IGuiTexture$Type)>)
set "autoClose"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuWidget$Type<K, T> = ($MenuWidget<(K), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuWidget_<K, T> = $MenuWidget$Type<(K), (T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BooleanConsumer, $BooleanConsumer$Type} from "packages/it/unimi/dsi/fastutil/booleans/$BooleanConsumer"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$TextTexture, $TextTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$TextFieldWidget, $TextFieldWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ButtonWidget, $ButtonWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$File, $File$Type} from "packages/java/io/$File"
import {$List, $List$Type} from "packages/java/util/$List"

export class $DialogWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(parent: $WidgetGroup$Type, isClient: boolean)
constructor(x: integer, y: integer, width: integer, height: integer)

public "close"(): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "keyReleased"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "mouseMoved"(mouseX: double, mouseY: double): boolean
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public static "createContainer"(dialog: $DialogWidget$Type, width: integer, height: integer, titleText: string): $WidgetGroup
public static "showStringEditorDialog"(parent: $WidgetGroup$Type, title: string, initial: string, predicate: $Predicate$Type<(string)>, result: $Consumer$Type<(string)>): $DialogWidget
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public static "suffixFilter"(...suffixes: (string)[]): $Predicate<($TreeNode<($File), ($File)>)>
public static "showFileDialog"(parent: $WidgetGroup$Type, title: string, dir: $File$Type, isSelector: boolean, valid: $Predicate$Type<($TreeNode$Type<($File$Type), ($File$Type)>)>, result: $Consumer$Type<($File$Type)>): $DialogWidget
public "setClickClose"(clickClose: boolean): void
public static "createTextField"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextFieldWidget
public "setParentInVisible"(): $DialogWidget
public "setOnClosed"(onClosed: $Runnable$Type): $DialogWidget
public static "showItemSelector"(parent: $WidgetGroup$Type, title: string, init: $ItemStack$Type, itemConsumer: $Consumer$Type<($Item$Type)>): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string): $DialogWidget
public static "showNotification"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $Runnable$Type): $DialogWidget
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, onClosed: $BooleanConsumer$Type): $DialogWidget
public static "showCheckBox"(parent: $WidgetGroup$Type, title: string, info: string, width: integer, height: integer, onClosed: $BooleanConsumer$Type): $DialogWidget
public static "createButton"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer, text: string, onClick: $Runnable$Type): $ButtonWidget
public static "createText"(parent: $WidgetGroup$Type, x: integer, y: integer, width: integer, height: integer): $TextTexture
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "clickClose"(value: boolean)
set "onClosed"(value: $Runnable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DialogWidget$Type = ($DialogWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DialogWidget_ = $DialogWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ToolPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ToolPanel extends $WidgetGroup {
/**
 * 
 * @deprecated
 */
static readonly "WIDTH": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "setSize"(size: $Size$Type): void
public "setTitle"(title: string): void
public "getEditor"(): $Editor
/**
 * 
 * @deprecated
 */
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBox: $WidgetGroup$Type): void
public "addNewToolBox"(name: string, texture: $ResourceTexture$Type, toolBoxSupplier: $Function$Type<($Size$Type), ($WidgetGroup$Type)>): void
public "show"(animate: boolean): void
public "show"(): void
public "initWidget"(): void
public "clearAllWidgets"(): void
public "isShow"(): boolean
public "hide"(animate: boolean): void
public "hide"(): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "size"(value: $Size$Type)
set "title"(value: string)
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolPanel$Type = ($ToolPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolPanel_ = $ToolPanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/$PacketIntLocation" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PacketIntLocation implements $IPacket {

constructor()
constructor(pos: $BlockPos$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketIntLocation$Type = ($PacketIntLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketIntLocation_ = $PacketIntLocation$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DraggableScrollableWidgetGroup$ISelected {

 "onSelected"(): void
 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean
 "onUnSelected"(): void

(): void
}

export namespace $DraggableScrollableWidgetGroup$ISelected {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$ISelected$Type = ($DraggableScrollableWidgetGroup$ISelected);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$ISelected_ = $DraggableScrollableWidgetGroup$ISelected$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TextTexture$TextType extends $Enum<($TextTexture$TextType)> {
static readonly "NORMAL": $TextTexture$TextType
static readonly "HIDE": $TextTexture$TextType
static readonly "ROLL": $TextTexture$TextType
static readonly "ROLL_ALWAYS": $TextTexture$TextType
static readonly "LEFT": $TextTexture$TextType
static readonly "RIGHT": $TextTexture$TextType
static readonly "LEFT_HIDE": $TextTexture$TextType
static readonly "LEFT_ROLL": $TextTexture$TextType
static readonly "LEFT_ROLL_ALWAYS": $TextTexture$TextType


public static "values"(): ($TextTexture$TextType)[]
public static "valueOf"(name: string): $TextTexture$TextType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextTexture$TextType$Type = (("normal") | ("hide") | ("left_hide") | ("left") | ("left_roll") | ("roll") | ("left_roll_always") | ("right") | ("roll_always")) | ($TextTexture$TextType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextTexture$TextType_ = $TextTexture$TextType$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$SwitchWidget, $SwitchWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SwitchWidget"

export class $TabButton extends $SwitchWidget {

constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer)

public "setContainer"(container: $TabContainer$Type): void
public "setTexture"(baseTexture: $IGuiTexture$Type, pressedTexture: $IGuiTexture$Type): $TabButton
public "onPressed"(clickData: $ClickData$Type, isPressed: boolean): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "container"(value: $TabContainer$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabButton$Type = ($TabButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TabButton_ = $TabButton$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ModelBakeryAccessor" {
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelBakeryAccessor {

 "invokeGetModel"(arg0: $ResourceLocation$Type): $UnbakedModel
 "getTopLevelModels"(): $Map<($ResourceLocation), ($UnbakedModel)>
}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakeryAccessor$Type = ($ModelBakeryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakeryAccessor_ = $ModelBakeryAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ConfigPanel$Tab, $ConfigPanel$Tab$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab"
import {$IConfigurable, $IConfigurable$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurable"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HsbColorWidget, $HsbColorWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$HsbColorWidget"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigPanel extends $WidgetGroup {
static readonly "WIDTH": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type, tabs: $List$Type<($ConfigPanel$Tab$Type)>)
constructor(editor: $Editor$Type)

public "clearAllConfigurators"(): void
public "clearAllConfigurators"(tab: $ConfigPanel$Tab$Type): void
public "getEditor"(): $Editor
public "openConfigurator"(tab: $ConfigPanel$Tab$Type, configurable: $IConfigurable$Type): void
public "switchTag"(tab: $ConfigPanel$Tab$Type): void
public "computeLayout"(tab: $ConfigPanel$Tab$Type): void
public "getFocus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
public "reloadTabs"(tabs: $List$Type<($ConfigPanel$Tab$Type)>): void
public "getPalette"(): $HsbColorWidget
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "editor"(): $Editor
get "focus"(): $Map<($ConfigPanel$Tab), ($IConfigurable)>
get "palette"(): $HsbColorWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPanel$Type = ($ConfigPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPanel_ = $ConfigPanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IIngredientSlot" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIngredientSlot {

 "getXEIIngredientOverMouse"(arg0: double, arg1: double): any

(arg0: double, arg1: double): any
}

export namespace $IIngredientSlot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSlot$Type = ($IIngredientSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSlot_ = $IIngredientSlot$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IRPCBlockEntity" {
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IManagedBlockEntity, $IManagedBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IManagedBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RPCMethodMeta, $RPCMethodMeta$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$RPCMethodMeta"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SPacketRPCMethodPayload, $SPacketRPCMethodPayload$Type} from "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketRPCMethodPayload"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IRPCBlockEntity extends $IManagedBlockEntity {

 "getRPCMethod"(managed: $IManaged$Type, methodName: string): $RPCMethodMeta
 "rpcToTracking"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): void
 "rpcToPlayer"(managed: $IManaged$Type, player: $ServerPlayer$Type, methodName: string, ...args: (any)[]): void
 "generateRpcPacket"(managed: $IManaged$Type, methodName: string, ...args: (any)[]): $SPacketRPCMethodPayload
 "getCurrentPos"(): $BlockPos
 "getBlockEntityType"(): $BlockEntityType<(any)>
 "getRootStorage"(): $IManagedStorage
 "getSelf"(): $BlockEntity
 "getNonLazyFields"(): ($IRef)[]

(managed: $IManaged$Type, methodName: string): $RPCMethodMeta
}

export namespace $IRPCBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRPCBlockEntity$Type = ($IRPCBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRPCBlockEntity_ = $IRPCBlockEntity$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $LDLRegister extends $Annotation {

 "name"(): string
 "priority"(): integer
 "group"(): string
 "modID"(): string
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "annotationType"(): $Class<(any)>
}

export namespace $LDLRegister {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LDLRegister$Type = ($LDLRegister);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LDLRegister_ = $LDLRegister$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$ParticleEngineAccessor" {
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export interface $ParticleEngineAccessor {

 "invokeMakeParticle"<T extends $ParticleOptions>(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle

(arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): $Particle
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$Type = ($ParticleEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEngineAccessor_ = $ParticleEngineAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ResourcePanel extends $WidgetGroup {
static readonly "HEIGHT": integer
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "clear"(): void
public "getResources"(): $Resources
public "setGui"(gui: $ModularUI$Type): void
public "loadResource"(resources: $Resources$Type, merge: boolean): void
public "getEditor"(): $Editor
public "show"(): void
public "initWidget"(): void
public "isShow"(): boolean
public "hide"(): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "resources"(): $Resources
set "gui"(value: $ModularUI$Type)
get "editor"(): $Editor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcePanel$Type = ($ResourcePanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourcePanel_ = $ResourcePanel$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$Builder" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $Builder<T, B extends $Builder<(T), (B)>> {

constructor()

public "where"(symbol: character, value: T): B
public "aisle"(...data: (string)[]): B
public "bakeArray"(clazz: $Class$Type<(T)>, defaultValue: T): (((T)[])[])[]
public "shallowCopy"(): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Builder$Type<T, B> = ($Builder<(T), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Builder_<T, B> = $Builder$Type<(T), (B)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$IDraggable" {
import {$DraggableScrollableWidgetGroup$ISelected, $DraggableScrollableWidgetGroup$ISelected$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup$ISelected"

export interface $DraggableScrollableWidgetGroup$IDraggable extends $DraggableScrollableWidgetGroup$ISelected {

 "dragging"(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
 "startDrag"(mouseX: double, mouseY: double): void
 "allowDrag"(mouseX: double, mouseY: double, button: integer): boolean
 "canDragOutRange"(): boolean
 "endDrag"(mouseX: double, mouseY: double): void
 "onSelected"(): void
 "allowSelected"(arg0: double, arg1: double, arg2: integer): boolean
 "onUnSelected"(): void

(mouseX: double, mouseY: double, deltaX: double, deltaY: double): boolean
}

export namespace $DraggableScrollableWidgetGroup$IDraggable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$IDraggable$Type = ($DraggableScrollableWidgetGroup$IDraggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup$IDraggable_ = $DraggableScrollableWidgetGroup$IDraggable$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TankWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IRecipeIngredientSlot, $IRecipeIngredientSlot$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IRecipeIngredientSlot"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$IFluidTransfer, $IFluidTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidTransfer"
import {$ProgressTexture$FillDirection, $ProgressTexture$FillDirection$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ProgressTexture$FillDirection"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IngredientIO, $IngredientIO$Type} from "packages/com/lowdragmc/lowdraglib/jei/$IngredientIO"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFluidStorage, $IFluidStorage$Type} from "packages/com/lowdragmc/lowdraglib/side/fluid/$IFluidStorage"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TankWidget extends $Widget implements $IRecipeIngredientSlot, $IConfigurableWidget {
static readonly "FLUID_SLOT_TEXTURE": $ResourceBorderTexture
 "drawHoverOverlay": boolean

constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidTransfer$Type, tank: integer, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidStorage$Type, x: integer, y: integer, width: integer, height: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor(fluidTank: $IFluidStorage$Type, x: integer, y: integer, allowClickContainerFilling: boolean, allowClickContainerEmptying: boolean)
constructor()

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "setClientSideWidget"(): $TankWidget
public "getXEIIngredientOverMouse"(mouseX: double, mouseY: double): any
public "detectAndSendChanges"(): void
public "setDrawHoverOverlay"(drawHoverOverlay: boolean): $TankWidget
public "clearTooltipCallback"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "getIngredientIO"(): $IngredientIO
public "getXEIChance"(): float
public "getXEIIngredients"(): $List<(any)>
public "setDrawHoverTips"(drawHoverTips: boolean): $TankWidget
public "setIngredientIO"(ingredientIO: $IngredientIO$Type): $TankWidget
public "setXEIChance"(XEIChance: float): $TankWidget
public "setOnAddedTooltips"(onAddedTooltips: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>): $TankWidget
public "addTooltipCallback"(callback: $Consumer$Type<($List$Type<($Component$Type)>)>): void
public "setBackground"(background: $IGuiTexture$Type): $TankWidget
public "getTooltipTexts"(): $List<($Component)>
public "initTemplate"(): void
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "setFluidTank"(fluidTank: $IFluidStorage$Type): $TankWidget
public "setFluidTank"(fluidTank: $IFluidTransfer$Type, tank: integer): $TankWidget
public "setFillDirection"(fillDirection: $ProgressTexture$FillDirection$Type): $TankWidget
public "setChangeListener"(changeListener: $Runnable$Type): $TankWidget
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setAllowClickDrained"(allowClickDrained: boolean): $TankWidget
public "setAllowClickFilled"(allowClickFilled: boolean): $TankWidget
public "setShowAmount"(showAmount: boolean): $TankWidget
public "getFluidTank"(): $IFluidTransfer
public "getTank"(): integer
public "self"(): $Widget
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "drawHoverOverlay"(value: boolean)
get "ingredientIO"(): $IngredientIO
get "xEIChance"(): float
get "xEIIngredients"(): $List<(any)>
set "drawHoverTips"(value: boolean)
set "ingredientIO"(value: $IngredientIO$Type)
set "xEIChance"(value: float)
set "onAddedTooltips"(value: $BiConsumer$Type<($TankWidget$Type), ($List$Type<($Component$Type)>)>)
set "background"(value: $IGuiTexture$Type)
get "tooltipTexts"(): $List<($Component)>
set "fluidTank"(value: $IFluidStorage$Type)
set "fillDirection"(value: $ProgressTexture$FillDirection$Type)
set "changeListener"(value: $Runnable$Type)
set "allowClickDrained"(value: boolean)
set "allowClickFilled"(value: boolean)
set "showAmount"(value: boolean)
get "fluidTank"(): $IFluidTransfer
get "tank"(): integer
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankWidget$Type = ($TankWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankWidget_ = $TankWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $ClickData {
readonly "button": integer
readonly "isShiftClick": boolean
readonly "isCtrlClick": boolean
readonly "isRemote": boolean

constructor()

public static "readFromBuf"(buf: $FriendlyByteBuf$Type): $ClickData
public "writeToBuf"(buf: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickData$Type = ($ClickData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickData_ = $ClickData$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $TabContainer extends $WidgetGroup {
static readonly "TABS_LEFT": $ResourceTexture
readonly "tabs": $BiMap<($TabButton), ($WidgetGroup)>
readonly "buttonGroup": $WidgetGroup
readonly "containerGroup": $WidgetGroup
 "focus": $WidgetGroup
 "onChanged": $BiConsumer<($WidgetGroup), ($WidgetGroup)>
readonly "widgets": $List<($Widget)>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "getHoverElement"(mouseX: double, mouseY: double): $Widget
public "initTemplate"(): void
public "clearAllWidgets"(): void
public "serializeInnerNBT"(): $CompoundTag
public "acceptWidget"(widget: $IConfigurableWidget$Type): void
public "addTab"(tabButton: $TabButton$Type, tabWidget: $WidgetGroup$Type): void
public "switchTag"(tabWidget: $WidgetGroup$Type): void
public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "onChanged"(value: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TabContainer$Type = ($TabContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TabContainer_ = $TabContainer$Type;
}}
declare module "packages/com/lowdragmc/shimmer/core/mixins/$BlendModeMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlendModeMixin {

}

export namespace $BlendModeMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendModeMixin$Type = ($BlendModeMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendModeMixin_ = $BlendModeMixin$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/animation/$Animation" {
import {$FloatConsumer, $FloatConsumer$Type} from "packages/it/unimi/dsi/fastutil/floats/$FloatConsumer"
import {$Position, $Position$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Position"
import {$IEase, $IEase$Type} from "packages/com/lowdragmc/lowdraglib/utils/interpolate/$IEase"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $Animation {

constructor()

public "position"(position: $Position$Type): $Animation
public "size"(size: $Size$Type): $Animation
public "delay"(delay: long): $Animation
public "duration"(duration: long): $Animation
public "isFinish"(): boolean
public "getOnFinish"(): $Runnable
public "setWidget"(widget: $Widget$Type): $Animation
public "appendOnFinish"(onFinish: $Runnable$Type): $Animation
public "getWidget"(): $Widget
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "onFinish"(onFinish: $Runnable$Type): $Animation
public "onUpdate"(onUpdate: $FloatConsumer$Type): $Animation
public "ease"(ease: $IEase$Type): $Animation
get "finish"(): boolean
set "widget"(value: $Widget$Type)
get "widget"(): $Widget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Type = ($Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$DraggableScrollableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export class $DraggableScrollableWidgetGroup extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor()
constructor(x: integer, y: integer, width: integer, height: integer)

public "setSize"(size: $Size$Type): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, deltaX: double, deltaY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "getGuiExtraAreas"(guiRect: $Rect2i$Type, list: $List$Type<($Rect2i$Type)>): $List<($Rect2i)>
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public "setDraggable"(draggable: boolean): $DraggableScrollableWidgetGroup
public "setBackground"(background: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "drawOverlay"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "initTemplate"(): void
public "removeWidget"(widget: $Widget$Type): void
public "clearAllWidgets"(): void
public "serializeInnerNBT"(): $CompoundTag
public "addWidget"(index: integer, widget: $Widget$Type): $WidgetGroup
public "setXScrollBarHeight"(xBar: integer): $DraggableScrollableWidgetGroup
public "getWidgetBottomHeight"(): integer
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setXBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "getScrollYOffset"(): integer
public "getScrollXOffset"(): integer
public "computeMax"(): void
public "setScrollable"(scrollable: boolean): $DraggableScrollableWidgetGroup
public "setUseScissor"(useScissor: boolean): void
public "setScrollXOffset"(scrollXOffset: integer): void
public "getMoveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
public "setSelected"(widget: $Widget$Type): void
public "isUseScissor"(): boolean
public "setYScrollBarWidth"(yBar: integer): $DraggableScrollableWidgetGroup
public "setYBarStyle"(background: $IGuiTexture$Type, bar: $IGuiTexture$Type): $DraggableScrollableWidgetGroup
public "setScrollYOffset"(scrollYOffset: integer): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "size"(value: $Size$Type)
set "draggable"(value: boolean)
set "background"(value: $IGuiTexture$Type)
set "xScrollBarHeight"(value: integer)
get "widgetBottomHeight"(): integer
get "scrollYOffset"(): integer
get "scrollXOffset"(): integer
set "scrollable"(value: boolean)
set "useScissor"(value: boolean)
set "scrollXOffset"(value: integer)
get "moveCallbacks"(): $Set<($BiConsumer<(integer), (integer)>)>
set "selected"(value: $Widget$Type)
get "useScissor"(): boolean
set "yScrollBarWidth"(value: integer)
set "scrollYOffset"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraggableScrollableWidgetGroup$Type = ($DraggableScrollableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraggableScrollableWidgetGroup_ = $DraggableScrollableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$BlockRenderDispatcher, $BlockRenderDispatcher$Type} from "packages/net/minecraft/client/renderer/block/$BlockRenderDispatcher"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ISceneBlockRenderHook, $ISceneBlockRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneBlockRenderHook"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ISceneEntityRenderHook, $ISceneEntityRenderHook$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneEntityRenderHook"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WorldSceneRenderer {
readonly "world": $Level
readonly "renderedBlocksMap": $Map<($Collection<($BlockPos)>), ($ISceneBlockRenderHook)>

constructor(world: $Level$Type)

public "setFov"(fov: float): void
public "getParticleManager"(): $ParticleManager
public "setParticleManager"(particleManager: $ParticleManager$Type): $WorldSceneRenderer
public "needCompileCache"(): $WorldSceneRenderer
public "useCacheBuffer"(useCache: boolean): $WorldSceneRenderer
public "deleteCacheBuffer"(): $WorldSceneRenderer
public "useOrtho"(ortho: boolean): $WorldSceneRenderer
public "getEyePos"(): $Vector3f
public "getLastTraceResult"(): $BlockHitResult
public "addRenderedBlocks"(blocks: $Collection$Type<($BlockPos$Type)>, renderHook: $ISceneBlockRenderHook$Type): $WorldSceneRenderer
public "setClearColor"(clearColor: integer): void
public "setCameraLookAt"(lookAt: $Vector3f$Type, radius: double, rotationPitch: double, rotationYaw: double): void
public "setCameraLookAt"(eyePos: $Vector3f$Type, lookAt: $Vector3f$Type, worldUp: $Vector3f$Type): void
public "setCameraOrtho"(minX: float, maxX: float, minY: float, maxY: float, minZ: float, maxZ: float): void
public "setCameraOrtho"(x: float, y: float, z: float): void
public "getCompileProgress"(): double
public "isCompiling"(): boolean
public "render"(poseStack: $PoseStack$Type, x: float, y: float, width: float, height: float, mouseX: integer, mouseY: integer): void
public "rayTrace"(hitPos: $Vector3f$Type): $BlockHitResult
public "setBeforeWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "setAfterWorldRender"(callback: $Consumer$Type<($WorldSceneRenderer$Type)>): $WorldSceneRenderer
public "setBlocked"(blocked: $Set$Type<($BlockPos$Type)>): $WorldSceneRenderer
public "getWorldUp"(): $Vector3f
public "isUseCache"(): boolean
public "getLookAt"(): $Vector3f
public "unProject"(mouseX: integer, mouseY: integer): $Vector3f
public static "canRenderInLayer"(state: $BlockState$Type, renderType: $RenderType$Type): boolean
public static "renderBlocksForge"(blockRenderDispatcher: $BlockRenderDispatcher$Type, state: $BlockState$Type, pos: $BlockPos$Type, level: $BlockAndTintGetter$Type, poseStack: $PoseStack$Type, consumer: $VertexConsumer$Type, random: $RandomSource$Type, renderType: $RenderType$Type): void
public "setOnLookingAt"(onLookingAt: $Consumer$Type<($BlockHitResult$Type)>): $WorldSceneRenderer
public "setSceneEntityRenderHook"(sceneEntityRenderHook: $ISceneEntityRenderHook$Type): void
public static "setDefaultRenderLayerState"(layer: $RenderType$Type): void
public "project"(pos: $Vector3f$Type): $Vector3f
set "fov"(value: float)
get "particleManager"(): $ParticleManager
set "particleManager"(value: $ParticleManager$Type)
get "eyePos"(): $Vector3f
get "lastTraceResult"(): $BlockHitResult
set "clearColor"(value: integer)
get "compileProgress"(): double
get "compiling"(): boolean
set "beforeWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
set "afterWorldRender"(value: $Consumer$Type<($WorldSceneRenderer$Type)>)
set "blocked"(value: $Set$Type<($BlockPos$Type)>)
get "worldUp"(): $Vector3f
get "useCache"(): boolean
get "lookAt"(): $Vector3f
set "onLookingAt"(value: $Consumer$Type<($BlockHitResult$Type)>)
set "sceneEntityRenderHook"(value: $ISceneEntityRenderHook$Type)
set "defaultRenderLayerState"(value: $RenderType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSceneRenderer$Type = ($WorldSceneRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSceneRenderer_ = $WorldSceneRenderer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ITypedPayload<T> {

 "isPrimitive"(): boolean
 "getType"(): byte
 "getPayload"(): T
 "deserializeNBT"(arg0: $Tag$Type): void
 "serializeNBT"(): $Tag
 "readPayload"(arg0: $FriendlyByteBuf$Type): void
 "writePayload"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $ITypedPayload {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypedPayload$Type<T> = ($ITypedPayload<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITypedPayload_<T> = $ITypedPayload$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture" {
import {$TransformTexture, $TransformTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TextTexture$TextType, $TextTexture$TextType$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture$TextType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextTexture extends $TransformTexture {
 "text": string
 "color": integer
 "backgroundColor": integer
 "width": integer
 "rollSpeed": float
 "dropShadow": boolean
 "type": $TextTexture$TextType
 "supplier": $Supplier<(string)>

constructor(text: string)
constructor(text: string, color: integer)
constructor()

public "setType"(type: $TextTexture$TextType$Type): $TextTexture
public "updateTick"(): void
public "setBackgroundColor"(color: integer): $TextTexture
public "setRollSpeed"(rollSpeed: float): void
public "setWidth"(width: integer): $TextTexture
public "updateText"(text: string): void
public "setDropShadow"(dropShadow: boolean): $TextTexture
public "setSupplier"(supplier: $Supplier$Type<(string)>): $TextTexture
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
set "type"(value: $TextTexture$TextType$Type)
set "backgroundColor"(value: integer)
set "rollSpeed"(value: float)
set "width"(value: integer)
set "dropShadow"(value: boolean)
set "supplier"(value: $Supplier$Type<(string)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextTexture$Type = ($TextTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextTexture_ = $TextTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TextBoxWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Size, $Size$Type} from "packages/com/lowdragmc/lowdraglib/utils/$Size"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $TextBoxWidget extends $Widget implements $IConfigurableWidget {
readonly "content": $List<(string)>
 "space": integer
 "fontSize": integer
 "fontColor": integer
 "isShadow": boolean
 "isCenter": boolean

constructor(x: integer, y: integer, width: integer, content: $List$Type<(string)>)
constructor()

public "setSize"(size: $Size$Type): void
public "setShadow"(shadow: boolean): $TextBoxWidget
public "handleDragging"(dragging: any): boolean
public "initTemplate"(): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setFontColor"(fontColor: integer): $TextBoxWidget
public "setContent"(content: $List$Type<(string)>): $TextBoxWidget
public "setSpace"(space: integer): $TextBoxWidget
public "getMaxContentWidth"(): integer
public "setFontSize"(fontSize: integer): $TextBoxWidget
public "setCenter"(center: boolean): $TextBoxWidget
public "canDragIn"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "size"(value: $Size$Type)
set "shadow"(value: boolean)
set "fontColor"(value: integer)
set "content"(value: $List$Type<(string)>)
set "space"(value: integer)
get "maxContentWidth"(): integer
set "fontSize"(value: integer)
set "center"(value: boolean)
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextBoxWidget$Type = ($TextBoxWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextBoxWidget_ = $TextBoxWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/utils/$DummyWorld" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LevelTickAccess, $LevelTickAccess$Type} from "packages/net/minecraft/world/ticks/$LevelTickAccess"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$SoundSource, $SoundSource$Type} from "packages/net/minecraft/sounds/$SoundSource"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"
import {$MapItemSavedData, $MapItemSavedData$Type} from "packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$GameEvent$Context, $GameEvent$Context$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent$Context"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$ChunkSource, $ChunkSource$Type} from "packages/net/minecraft/world/level/chunk/$ChunkSource"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BiomeManager, $BiomeManager$Type} from "packages/net/minecraft/world/level/biome/$BiomeManager"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$GameEvent, $GameEvent$Type} from "packages/net/minecraft/world/level/gameevent/$GameEvent"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ParticleManager, $ParticleManager$Type} from "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $DummyWorld extends $Level {
 "level": $WeakReference<($Level)>
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "NETHER": $ResourceKey<($Level)>
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MAX_BRIGHTNESS": integer
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
readonly "thread": $Thread
 "oRainLevel": float
 "rainLevel": float
 "oThunderLevel": float
 "thunderLevel": float
readonly "random": $RandomSource
readonly "isClientSide": boolean
 "restoringBlockSnapshots": boolean
 "captureBlockSnapshots": boolean
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>

constructor(level: $Level$Type)

public "getScoreboard"(): $Scoreboard
public "getMapData"(mapName: string): $MapItemSavedData
public "destroyBlockProgress"(breakerId: integer, pos: $BlockPos$Type, progress: integer): void
public "getFreeMapId"(): integer
public "setMapData"(pMapId: string, pData: $MapItemSavedData$Type): void
public "getRecipeManager"(): $RecipeManager
public "players"(): $List<(any)>
public "registryAccess"(): $RegistryAccess
public "getBiomeManager"(): $BiomeManager
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "gameEvent"(pEntity: $Entity$Type, pEvent: $GameEvent$Type, pPos: $BlockPos$Type): void
public "gameEvent"(event: $GameEvent$Type, position: $Vec3$Type, context: $GameEvent$Context$Type): void
public "getUncachedNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getNoiseBiome"(pX: integer, pY: integer, pZ: integer): $Holder<($Biome)>
public "getRawBrightness"(pos: $BlockPos$Type, p_226659_2_: integer): integer
public "getBrightness"(pLightType: $LightLayer$Type, pBlockPos: $BlockPos$Type): integer
public "getShade"(direction: $Direction$Type, b: boolean): float
public "getAsClientWorld"(): $Supplier<($ClientLevel)>
public "getParticleManager"(): $ParticleManager
public "setParticleManager"(particleManager: $ParticleManager$Type): void
public "getBlockState"(x: integer, y: integer, z: integer): $BlockState
public "getLevel"(): $Level
public "canSeeSky"(pos: $BlockPos$Type): boolean
public "getEntity"(id: integer): $Entity
public "sendBlockUpdated"(pos: $BlockPos$Type, oldState: $BlockState$Type, newState: $BlockState$Type, flags: integer): void
public "getLightEngine"(): $LevelLightEngine
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, soundEvent: $SoundEvent$Type, soundSource: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSound"(pPlayer: $Player$Type, pX: double, pY: double, pZ: double, pSound: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "playSeededSound"(player: $Player$Type, x: double, y: double, z: double, sound: $Holder$Type<($SoundEvent$Type)>, source: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "playSeededSound"(player: $Player$Type, entity: $Entity$Type, sound: $Holder$Type<($SoundEvent$Type)>, category: $SoundSource$Type, volume: float, pitch: float, seed: long): void
public "addParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "playSound"(pPlayer: $Player$Type, pEntity: $Entity$Type, pEvent: $SoundEvent$Type, pCategory: $SoundSource$Type, pVolume: float, pPitch: float): void
public "addParticle"(particleData: $ParticleOptions$Type, forceAlwaysRender: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, ignoreRange: boolean, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "addAlwaysVisibleParticle"(particleData: $ParticleOptions$Type, x: double, y: double, z: double, xSpeed: double, ySpeed: double, zSpeed: double): void
public "isLoaded"(p_195588_1_: $BlockPos$Type): boolean
public "setBlockEntity"(pBlockEntity: $BlockEntity$Type): void
public "gatherChunkSourceStats"(): string
public "getBlockEntity"(pPos: $BlockPos$Type): $BlockEntity
public "getBiome"(pPos: $BlockPos$Type): $Holder<($Biome)>
public "getChunkSource"(): $ChunkSource
public "setBlock"(pPos: $BlockPos$Type, pState: $BlockState$Type, pFlags: integer, pRecursionLeft: integer): boolean
public "levelEvent"(pPlayer: $Player$Type, pType: integer, pPos: $BlockPos$Type, pData: integer): void
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public "enabledFeatures"(): $FeatureFlagSet
public "getBlockState"(pPos: $BlockPos$Type): $BlockState
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
get "scoreboard"(): $Scoreboard
get "freeMapId"(): integer
get "recipeManager"(): $RecipeManager
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "asClientWorld"(): $Supplier<($ClientLevel)>
get "particleManager"(): $ParticleManager
set "particleManager"(value: $ParticleManager$Type)
get "level"(): $Level
get "lightEngine"(): $LevelLightEngine
set "blockEntity"(value: $BlockEntity$Type)
get "chunkSource"(): $ChunkSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DummyWorld$Type = ($DummyWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DummyWorld_ = $DummyWorld$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged" {
import {$ISubscription, $ISubscription$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$ISubscription"
import {$ManagedFieldHolder, $ManagedFieldHolder$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/field/$ManagedFieldHolder"
import {$IFieldUpdateListener, $IFieldUpdateListener$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IFieldUpdateListener"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"
import {$IManagedStorage, $IManagedStorage$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManagedStorage"

export interface $IManaged {

 "addSyncUpdateListener"<T>(name: string, listener: $IFieldUpdateListener$Type<(T)>): $ISubscription
 "markDirty"(name: string): void
 "getSyncStorage"(): $IManagedStorage
 "onChanged"(): void
 "getFieldHolder"(): $ManagedFieldHolder
 "onSyncChanged"(ref: $IRef$Type, isDirty: boolean): void
 "onPersistedChanged"(ref: $IRef$Type, isDirty: boolean): void
}

export namespace $IManaged {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManaged$Type = ($IManaged);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManaged_ = $IManaged$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"

export class $TreeNode<T, K> {
readonly "dimension": integer

constructor(dimension: integer, key: T)

public "toString"(): string
public "getKey"(): T
public "getContent"(): K
public "getChildren"(): $List<($TreeNode<(T), (K)>)>
public "getChild"(key: T): $TreeNode<(T), (K)>
public "isLeaf"(): boolean
public "removeChild"(key: T): void
public "setValid"(valid: $Predicate$Type<($TreeNode$Type<(T), (K)>)>): $TreeNode<(T), (K)>
public "createChild"(childKey: T): $TreeNode<(T), (K)>
public "getOrCreateChild"(childKey: T): $TreeNode<(T), (K)>
public "addContent"(key: T, content: K): void
get "key"(): T
get "content"(): K
get "children"(): $List<($TreeNode<(T), (K)>)>
get "leaf"(): boolean
set "valid"(value: $Predicate$Type<($TreeNode$Type<(T), (K)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeNode$Type<T, K> = ($TreeNode<(T), (K)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeNode_<T, K> = $TreeNode$Type<(T), (K)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IItemTransfer {

 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: boolean): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean, arg3: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "setStackInSlot"(index: integer, stack: $ItemStack$Type): void
 "getSlotLimit"(arg0: integer): integer
 "createSnapshot"(): any
 "getSlots"(): integer
 "restoreFromSnapshot"(arg0: any): void
 "onContentsChanged"(): void
}

export namespace $IItemTransfer {
const EMPTY: $IItemTransfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemTransfer$Type = ($IItemTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemTransfer_ = $IItemTransfer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor" {
import {$DialogWidget, $DialogWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$DialogWidget"
import {$ToolPanel, $ToolPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ToolPanel"
import {$ConfigPanel, $ConfigPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$StringTabContainer, $StringTabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$StringTabContainer"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$IProject, $IProject$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$MenuPanel, $MenuPanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$MenuPanel"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ResourcePanel, $ResourcePanel$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ResourcePanel"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$File, $File$Type} from "packages/java/io/$File"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$MenuWidget, $MenuWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$MenuWidget"

export class $Editor extends $WidgetGroup implements $ILDLRegister {
static "INSTANCE": $Editor
readonly "widgets": $List<($Widget)>

constructor(modID: string)
constructor(workSpace: $File$Type)

public "setGui"(gui: $ModularUI$Type): void
public "onScreenSizeUpdate"(screenWidth: integer, screenHeight: integer): void
public "openMenu"(posX: double, posY: double, menuBuilder: $TreeBuilder$Menu$Type): void
public "openMenu"<T, C>(posX: double, posY: double, menuNode: $TreeNode$Type<(T), (C)>): $MenuWidget<(T), (C)>
public "loadProject"(project: $IProject$Type): void
public "openDialog"(dialog: $DialogWidget$Type): $DialogWidget
public "initEditorViews"(): void
public "getMenuPanel"(): $MenuPanel
public "ifCopiedPresent"(copyType: string, consumer: $Consumer$Type<(any)>): void
public "setCopy"(copyType: string, copied: any): void
public "getCurrentProject"(): $IProject
public "getTabPages"(): $StringTabContainer
public "getResourcePanel"(): $ResourcePanel
public "getConfigPanel"(): $ConfigPanel
public "getWorkSpace"(): $File
public "getToolPanel"(): $ToolPanel
public "getCopied"(): any
public "getFloatView"(): $WidgetGroup
public "getCopyType"(): string
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "gui"(value: $ModularUI$Type)
get "menuPanel"(): $MenuPanel
get "currentProject"(): $IProject
get "tabPages"(): $StringTabContainer
get "resourcePanel"(): $ResourcePanel
get "configPanel"(): $ConfigPanel
get "workSpace"(): $File
get "toolPanel"(): $ToolPanel
get "copied"(): any
get "floatView"(): $WidgetGroup
get "copyType"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Editor$Type = ($Editor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Editor_ = $Editor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/factory/$HeldItemUIFactory$HeldItemHolder" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IUIHolder, $IUIHolder$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$IUIHolder"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $HeldItemUIFactory$HeldItemHolder implements $IUIHolder {

constructor(player: $Player$Type, hand: $InteractionHand$Type)

public "getHeld"(): $ItemStack
public "isInvalid"(): boolean
public "isRemote"(): boolean
public "getPlayer"(): $Player
public "markAsDirty"(): void
public "getHand"(): $InteractionHand
public "createUI"(entityPlayer: $Player$Type): $ModularUI
get "held"(): $ItemStack
get "invalid"(): boolean
get "remote"(): boolean
get "player"(): $Player
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeldItemUIFactory$HeldItemHolder$Type = ($HeldItemUIFactory$HeldItemHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeldItemUIFactory$HeldItemHolder_ = $HeldItemUIFactory$HeldItemHolder$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IManagedVar" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IManagedVar<T> {

 "value"(): T
 "isPrimitive"(): boolean
 "set"(arg0: T): void
 "getType"(): $Class<(T)>
}

export namespace $IManagedVar {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedVar$Type<T> = ($IManagedVar<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedVar_<T> = $IManagedVar$Type<(T)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$WorldSceneRenderer$VertexConsumerWrapper" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {

constructor(builder: $VertexConsumer$Type)

public "setColor"(r: float, g: float, b: float, a: float): void
public "clearColor"(): void
public "clerOffset"(): void
public "vertex"(x: double, y: double, z: double): $VertexConsumer
public "uv"(u: float, v: float): $VertexConsumer
public "endVertex"(): void
public "overlayCoords"(u: integer, v: integer): $VertexConsumer
public "color"(red: integer, green: integer, blue: integer, alpha: integer): $VertexConsumer
public "uv2"(u: integer, v: integer): $VertexConsumer
public "normal"(x: float, y: float, z: float): $VertexConsumer
public "defaultColor"(defaultR: integer, defaultG: integer, defaultB: integer, defaultA: integer): void
public "unsetDefaultColor"(): void
public "addOffset"(offsetX: double, offsetY: double, offsetZ: double): void
public "setOffsetX"(offsetX: double): void
public "setOffsetZ"(offsetZ: double): void
public "setOffsetY"(offsetY: double): void
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "overlayCoords"(arg0: integer): $VertexConsumer
public "uv2"(arg0: integer): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "color"(arg0: integer): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
set "offsetX"(value: double)
set "offsetZ"(value: double)
set "offsetY"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSceneRenderer$VertexConsumerWrapper$Type = ($WorldSceneRenderer$VertexConsumerWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSceneRenderer$VertexConsumerWrapper_ = $WorldSceneRenderer$VertexConsumerWrapper$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$TextFieldWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"

export class $TextFieldWidget extends $Widget implements $IConfigurableWidget {

constructor()
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, textSupplier: $Supplier$Type<(string)>, textResponder: $Consumer$Type<(string)>)

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, dragX: double, dragY: double): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "mouseWheelMove"(mouseX: double, mouseY: double, wheelDelta: double): boolean
public "charTyped"(codePoint: character, modifiers: integer): boolean
public "setResourceLocationOnly"(): $TextFieldWidget
public "detectAndSendChanges"(): void
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setBackground"(background: $IGuiTexture$Type): $TextFieldWidget
public "onFocusChanged"(lastFocus: $Widget$Type, focus: $Widget$Type): void
public "setCurrentString"(currentString: any): $TextFieldWidget
public "setCompoundTagOnly"(): $TextFieldWidget
public "setBordered"(bordered: boolean): $TextFieldWidget
public "setNumbersOnly"(minValue: float, maxValue: float): $TextFieldWidget
public "setNumbersOnly"(minValue: long, maxValue: long): $TextFieldWidget
public "setNumbersOnly"(minValue: integer, maxValue: integer): $TextFieldWidget
public "setWheelDur"(digits: integer, wheelDur: float): $TextFieldWidget
public "setWheelDur"(wheelDur: float): $TextFieldWidget
public "writeInitialData"(buffer: $FriendlyByteBuf$Type): void
public "readInitialData"(buffer: $FriendlyByteBuf$Type): void
public "updateScreen"(): void
public "drawInForeground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "readUpdateInfo"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "drawInBackground"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "setTextSupplier"(textSupplier: $Supplier$Type<(string)>): $TextFieldWidget
public "setTextResponder"(textResponder: $Consumer$Type<(string)>): $TextFieldWidget
public "getCurrentString"(): string
public "setTextColor"(textColor: integer): $TextFieldWidget
public "setMaxStringLength"(maxStringLength: integer): $TextFieldWidget
public "setValidator"(validator: $Function$Type<(string), (string)>): $TextFieldWidget
public "getRawCurrentString"(): string
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "initTemplate"(): void
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "background"(value: $IGuiTexture$Type)
set "currentString"(value: any)
set "bordered"(value: boolean)
set "wheelDur"(value: float)
set "textSupplier"(value: $Supplier$Type<(string)>)
set "textResponder"(value: $Consumer$Type<(string)>)
get "currentString"(): string
set "textColor"(value: integer)
set "maxStringLength"(value: integer)
set "validator"(value: $Function$Type<(string), (string)>)
get "rawCurrentString"(): string
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextFieldWidget$Type = ($TextFieldWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextFieldWidget_ = $TextFieldWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TreeNode, $TreeNode$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeNode"

export class $TreeBuilder<K, V> {

constructor(key: K)

public "remove"(key: K): $TreeBuilder<(K), (V)>
public static "start"<K, V>(key: K): $TreeBuilder<(K), (V)>
public "branch"(key: K, builderConsumer: $Consumer$Type<($TreeBuilder$Type<(K), (V)>)>): $TreeBuilder<(K), (V)>
public "leaf"(key: K, content: V): $TreeBuilder<(K), (V)>
public "build"(): $TreeNode<(K), (V)>
public "startBranch"(key: K): $TreeBuilder<(K), (V)>
public "endBranch"(): $TreeBuilder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeBuilder$Type<K, V> = ($TreeBuilder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeBuilder_<K, V> = $TreeBuilder$Type<(K), (V)>;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketRPCMethodPayload" {
import {$PacketIntLocation, $PacketIntLocation$Type} from "packages/com/lowdragmc/lowdraglib/networking/$PacketIntLocation"
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$IManaged, $IManaged$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$IManaged"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RPCSender, $RPCSender$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/rpc/$RPCSender"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IRPCBlockEntity, $IRPCBlockEntity$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/blockentity/$IRPCBlockEntity"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SPacketRPCMethodPayload extends $PacketIntLocation implements $IPacket {

constructor()
constructor(managedId: integer, type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, methodName: string, payloads: ($ITypedPayload$Type<(any)>)[])
constructor(buffer: $FriendlyByteBuf$Type)

public "decode"(buffer: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public static "of"(managed: $IManaged$Type, tile: $IRPCBlockEntity$Type, methodName: string, ...args: (any)[]): $SPacketRPCMethodPayload
public "execute"(handler: $IHandlerContext$Type): void
public "processPacket"(blockEntity: $BlockEntity$Type, sender: $RPCSender$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPacketRPCMethodPayload$Type = ($SPacketRPCMethodPayload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPacketRPCMethodPayload_ = $SPacketRPCMethodPayload$Type;
}}
declare module "packages/com/lowdragmc/shimmer/client/postprocessing/$IPostParticleType" {
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Tesselator, $Tesselator$Type} from "packages/com/mojang/blaze3d/vertex/$Tesselator"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$PostProcessing, $PostProcessing$Type} from "packages/com/lowdragmc/shimmer/client/postprocessing/$PostProcessing"
import {$TextureManager, $TextureManager$Type} from "packages/net/minecraft/client/renderer/texture/$TextureManager"

export interface $IPostParticleType extends $ParticleRenderType {

 "getParent"(): $ParticleRenderType
 "end"(pTesselator: $Tesselator$Type): void
 "getPost"(): $PostProcessing
 "begin"(pBuilder: $BufferBuilder$Type, pTextureManager: $TextureManager$Type): void
}

export namespace $IPostParticleType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPostParticleType$Type = ($IPostParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPostParticleType_ = $IPostParticleType$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUIContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CPacketUIClientAction, $CPacketUIClientAction$Type} from "packages/com/lowdragmc/lowdraglib/networking/c2s/$CPacketUIClientAction"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$WidgetUIAccess, $WidgetUIAccess$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularUI, $ModularUI$Type} from "packages/com/lowdragmc/lowdraglib/gui/modular/$ModularUI"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export class $ModularUIContainer extends $AbstractContainerMenu implements $WidgetUIAccess {
static readonly "MENUTYPE": $MenuType<($ModularUIContainer)>
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
 "remoteSlots": $NonNullList<($ItemStack)>
 "stateId": integer
 "containerId": integer
readonly "containerListeners": $List<($ContainerListener)>

constructor(modularUI: $ModularUI$Type, windowID: integer)

public "getModularUI"(): $ModularUI
public static "mergeItemStack"(itemStack: $ItemStack$Type, slots: $List$Type<($Slot$Type)>, simulate: boolean): boolean
public "removeSlot"(slotHandle: $Slot$Type): void
public "attemptMergeStack"(itemStack: $ItemStack$Type, fromContainer: boolean, simulate: boolean): boolean
public "writeClientAction"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "writeUpdateInfo"(widget: $Widget$Type, updateId: integer, payloadWriter: $Consumer$Type<($FriendlyByteBuf$Type)>): void
public "stillValid"(playerIn: $Player$Type): boolean
public "removed"(playerIn: $Player$Type): void
public "handleClientAction"(packet: $CPacketUIClientAction$Type): void
public "broadcastChanges"(): void
public "addSlot"(slotHandle: $Slot$Type): $Slot
public "addSlotListener"(pListener: $ContainerListener$Type): void
public "clicked"(slotId: integer, dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): void
public "quickMoveStack"(player: $Player$Type, index: integer): $ItemStack
public "canTakeItemForPickAll"(stack: $ItemStack$Type, slotIn: $Slot$Type): boolean
get "modularUI"(): $ModularUI
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularUIContainer$Type = ($ModularUIContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularUIContainer_ = $ModularUIContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$ConfigPanel$Tab" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"

export class $ConfigPanel$Tab {
static readonly "WIDGET": $ConfigPanel$Tab
static readonly "RESOURCE": $ConfigPanel$Tab
readonly "icon": $ResourceTexture
readonly "tooltip": $Component
readonly "configurable": $Consumer<($ConfiguratorGroup)>


public static "createTab"(icon: $ResourceTexture$Type, tooltip: $Component$Type): $ConfigPanel$Tab
public static "createTab"(icon: $ResourceTexture$Type, tooltip: $Component$Type, configurable: $Consumer$Type<($ConfiguratorGroup$Type)>): $ConfigPanel$Tab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPanel$Tab$Type = ($ConfigPanel$Tab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPanel$Tab_ = $ConfigPanel$Tab$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ISceneEntityRenderHook" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ISceneEntityRenderHook {

 "applyEntity"(world: $Level$Type, entity: $Entity$Type, poseStack: $PoseStack$Type, partialTicks: float): void
}

export namespace $ISceneEntityRenderHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISceneEntityRenderHook$Type = ($ISceneEntityRenderHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISceneEntityRenderHook_ = $ISceneEntityRenderHook$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/networking/s2c/$SPacketUIWidgetUpdate" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IPacket, $IPacket$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IPacket"
import {$IHandlerContext, $IHandlerContext$Type} from "packages/com/lowdragmc/lowdraglib/networking/$IHandlerContext"

export class $SPacketUIWidgetUpdate implements $IPacket {
 "windowId": integer
 "updateData": $FriendlyByteBuf

constructor()
constructor(windowId: integer, updateData: $FriendlyByteBuf$Type)

public "decode"(buf: $FriendlyByteBuf$Type): void
public "encode"(buf: $FriendlyByteBuf$Type): void
public "execute"(handler: $IHandlerContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPacketUIWidgetUpdate$Type = ($SPacketUIWidgetUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPacketUIWidgetUpdate_ = $SPacketUIWidgetUpdate$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/$IAccessor" {
import {$ITypedPayload, $ITypedPayload$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/payload/$ITypedPayload"
import {$IManagedVar, $IManagedVar$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IManagedVar"
import {$AccessorOp, $AccessorOp$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/$AccessorOp"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IRef, $IRef$Type} from "packages/com/lowdragmc/lowdraglib/syncdata/managed/$IRef"

export interface $IAccessor extends $Predicate<($Class<(any)>)> {

 "test"(type: $Class$Type<(any)>): boolean
 "readField"(arg0: $AccessorOp$Type, arg1: $IRef$Type): $ITypedPayload<(any)>
 "operandTypes"(): ($Class<(any)>)[]
 "hasPredicate"(): boolean
 "setDefaultType"(arg0: byte): void
 "isManaged"(): boolean
 "readManagedField"(op: $AccessorOp$Type, field: $IManagedVar$Type<(any)>): $ITypedPayload<(any)>
 "writeManagedField"(op: $AccessorOp$Type, field: $IManagedVar$Type<(any)>, payload: $ITypedPayload$Type<(any)>): void
 "readFromReadonlyField"(op: $AccessorOp$Type, obj: any): $ITypedPayload<(any)>
 "writeToReadonlyField"(op: $AccessorOp$Type, obj: any, payload: $ITypedPayload$Type<(any)>): void
 "getDefaultType"(): byte
 "writeField"(arg0: $AccessorOp$Type, arg1: $IRef$Type, arg2: $ITypedPayload$Type<(any)>): void
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Class<(any)>)>
 "negate"(): $Predicate<($Class<(any)>)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Class<(any)>)>
}

export namespace $IAccessor {
function isEqual<T>(arg0: any): $Predicate<($Class<(any)>)>
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Class<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAccessor$Type = ($IAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAccessor_ = $IAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidgetGroup" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IConfigurableWidgetGroup extends $IConfigurableWidget {

 "acceptWidget"(widget: $IConfigurableWidget$Type): void
 "onWidgetRemoved"(widget: $IConfigurableWidget$Type): void
 "canWidgetAccepted"(widget: $IConfigurableWidget$Type): boolean
 "canDragIn"(dragging: any): boolean
 "handleDragging"(dragging: any): boolean
 "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
 "initTemplate"(): void
 "serializeWrapper"(): $CompoundTag
 "serializeInnerNBT"(): $CompoundTag
 "buildConfigurator"(father: $ConfiguratorGroup$Type): void
 "name"(): string
 "group"(): string
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
 "isLDLRegister"(): boolean
}

export namespace $IConfigurableWidgetGroup {
function deserializeNBT(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
function serializeNBT(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
function deserializeWrapper(tag: $CompoundTag$Type): $IConfigurableWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableWidgetGroup$Type = ($IConfigurableWidgetGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableWidgetGroup_ = $IConfigurableWidgetGroup$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$StringTabContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TabContainer, $TabContainer$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabContainer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$TabButton, $TabButton$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$TabButton"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ResourceTexture, $ResourceTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceTexture"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$TextTexture, $TextTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$TextTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StringTabContainer extends $TabContainer {
static readonly "TAB_HEIGHT": integer
 "onChanged": $BiConsumer<($WidgetGroup), ($WidgetGroup)>
static readonly "TABS_LEFT": $ResourceTexture
readonly "tabs": $BiMap<($TabButton), ($WidgetGroup)>
readonly "buttonGroup": $WidgetGroup
readonly "containerGroup": $WidgetGroup
 "focus": $WidgetGroup
readonly "widgets": $List<($Widget)>

constructor(editor: $Editor$Type)

public "getEditor"(): $Editor
public "addTab"(name: string, group: $WidgetGroup$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type): void
public "addTab"(name: string, group: $WidgetGroup$Type, onSelected: $Runnable$Type, onDeselected: $Runnable$Type): void
public "setOnChanged"(onChanged: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>): $TabContainer
public "getTabTextures"(): $Map<($TabButton), ($TextTexture)>
public "getOnDeselected"(): $Map<($WidgetGroup), ($Runnable)>
public "getOnSelected"(): $Map<($WidgetGroup), ($Runnable)>
public "getOnChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "editor"(): $Editor
set "onChanged"(value: $BiConsumer$Type<($WidgetGroup$Type), ($WidgetGroup$Type)>)
get "tabTextures"(): $Map<($TabButton), ($TextTexture)>
get "onDeselected"(): $Map<($WidgetGroup), ($Runnable)>
get "onSelected"(): $Map<($WidgetGroup), ($Runnable)>
get "onChanged"(): $BiConsumer<($WidgetGroup), ($WidgetGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringTabContainer$Type = ($StringTabContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringTabContainer_ = $StringTabContainer$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/syncdata/rpc/$RPCSender" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $RPCSender {

 "isServer"(): boolean

(player: $Player$Type): $RPCSender
}

export namespace $RPCSender {
function ofClient(player: $Player$Type): $RPCSender
function ofServer(): $RPCSender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RPCSender$Type = ($RPCSender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RPCSender_ = $RPCSender$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$PhantomSlotWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$IGhostIngredientTarget, $IGhostIngredientTarget$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$IGhostIngredientTarget"
import {$IItemTransfer, $IItemTransfer$Type} from "packages/com/lowdragmc/lowdraglib/side/item/$IItemTransfer"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$SlotWidget, $SlotWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$SlotWidget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ResourceBorderTexture, $ResourceBorderTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$ResourceBorderTexture"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Target, $Target$Type} from "packages/com/lowdragmc/lowdraglib/gui/ingredient/$Target"

export class $PhantomSlotWidget extends $SlotWidget implements $IGhostIngredientTarget, $IConfigurableWidget {
static readonly "ITEM_SLOT_TEXTURE": $ResourceBorderTexture
 "isPlayerContainer": boolean
 "isPlayerHotBar": boolean
 "drawHoverOverlay": boolean
 "drawHoverTips": boolean
 "tooltipCallbacks": $List<($Consumer<($List<($Component)>)>)>

constructor()
constructor(itemHandler: $IItemTransfer$Type, slotIndex: integer, xPosition: integer, yPosition: integer)

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "canMergeSlot"(stack: $ItemStack$Type): boolean
public "slotClick"(dragType: integer, clickTypeIn: $ClickType$Type, player: $Player$Type): $ItemStack
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "canPutStack"(stack: $ItemStack$Type): boolean
public "canTakeStack"(player: $Player$Type): boolean
public "setCanTakeItems"(v: boolean): $PhantomSlotWidget
public "getPhantomTargets"(ingredient: any): $List<($Target)>
public "setMaxStackSize"(maxStackSize: integer): void
public "setClearSlotOnRightClick"(clearSlotOnRightClick: boolean): $PhantomSlotWidget
public "slotClickPhantom"(slot: $Slot$Type, mouseButton: integer, clickTypeIn: $ClickType$Type, stackHeld: $ItemStack$Type): $ItemStack
public "areItemsEqual"(itemStack1: $ItemStack$Type, itemStack2: $ItemStack$Type): boolean
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "initTemplate"(): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
set "canTakeItems"(value: boolean)
set "maxStackSize"(value: integer)
set "clearSlotOnRightClick"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhantomSlotWidget$Type = ($PhantomSlotWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhantomSlotWidget_ = $PhantomSlotWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$EntityAccessor" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $EntityAccessor {

 "invokeSetLevel"(arg0: $Level$Type): void

(arg0: $Level$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/client/scene/$ParticleManager" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ParticleRenderType, $ParticleRenderType$Type} from "packages/net/minecraft/client/particle/$ParticleRenderType"
import {$Particle, $Particle$Type} from "packages/net/minecraft/client/particle/$Particle"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export class $ParticleManager {
 "level": $Level

constructor()

public "setLevel"(level: $Level$Type): void
public "addParticle"(particle: $Particle$Type): void
public "render"(pMatrixStack: $PoseStack$Type, pActiveRenderInfo: $Camera$Type, pPartialTicks: float): void
public "tick"(): void
public "getParticleAmount"(): integer
public "clearAllParticles"(): void
public static "makeParticleRenderTypeComparator"(renderOrder: $List$Type<($ParticleRenderType$Type)>): $Comparator<($ParticleRenderType)>
set "level"(value: $Level$Type)
get "particleAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleManager$Type = ($ParticleManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleManager_ = $ParticleManager$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$ButtonWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$ClickData, $ClickData$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$ClickData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $ButtonWidget extends $Widget implements $IConfigurableWidget {

constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, onPressed: $Consumer$Type<($ClickData$Type)>)
constructor(xPosition: integer, yPosition: integer, width: integer, height: integer, buttonTexture: $IGuiTexture$Type, onPressed: $Consumer$Type<($ClickData$Type)>)
constructor()

public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "handleClientAction"(id: integer, buffer: $FriendlyByteBuf$Type): void
public "setHoverTexture"(...hoverTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "setOnPressCallback"(onPressCallback: $Consumer$Type<($ClickData$Type)>): $ButtonWidget
public "initTemplate"(): void
public "setHoverBorderTexture"(border: integer, color: integer): $ButtonWidget
public "setButtonTexture"(...buttonTexture: ($IGuiTexture$Type)[]): $ButtonWidget
public "canDragIn"(dragging: any): boolean
public "handleDragging"(dragging: any): boolean
public "deserializeInnerNBT"(nbt: $CompoundTag$Type): void
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public "serializeWrapper"(): $CompoundTag
public "serializeInnerNBT"(): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
public "widget"(): $Widget
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "hoverTexture"(value: ($IGuiTexture$Type)[])
set "onPressCallback"(value: $Consumer$Type<($ClickData$Type)>)
set "buttonTexture"(value: ($IGuiTexture$Type)[])
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonWidget$Type = ($ButtonWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonWidget_ = $ButtonWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/texture/$TransformTexture" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Resource, $Resource$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/resource/$Resource"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$ConfiguratorGroup, $ConfiguratorGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$ConfiguratorGroup"
import {$IGuiTexture, $IGuiTexture$Type} from "packages/com/lowdragmc/lowdraglib/gui/texture/$IGuiTexture"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $TransformTexture implements $IGuiTexture {

constructor()

public "scale"(scale: float): $TransformTexture
public "transform"(xOffset: float, yOffset: float): $TransformTexture
public "drawSubArea"(graphics: $GuiGraphics$Type, x: float, y: float, width: float, height: float, drawnU: float, drawnV: float, drawnWidth: float, drawnHeight: float): void
public "draw"(graphics: $GuiGraphics$Type, mouseX: integer, mouseY: integer, x: float, y: float, width: integer, height: integer): void
public "transform"(xOffset: integer, yOffset: integer): $IGuiTexture
public "setColor"(color: integer): $IGuiTexture
public "createPreview"(father: $ConfiguratorGroup$Type): void
public "setUIResource"(texturesResource: $Resource$Type<($IGuiTexture$Type)>): void
public "updateTick"(): void
public static "serializeWrapper"(texture: $IGuiTexture$Type): $CompoundTag
public "buildConfigurator"(father: $ConfiguratorGroup$Type): void
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IGuiTexture
public "name"(): string
public "group"(): string
public "getRegisterUI"(): $LDLRegister
public "getTranslateKey"(): string
public "getChatComponent"(): $Component
public "isLDLRegister"(): boolean
set "color"(value: integer)
set "uIResource"(value: $Resource$Type<($IGuiTexture$Type)>)
get "registerUI"(): $LDLRegister
get "translateKey"(): string
get "chatComponent"(): $Component
get "lDLRegister"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformTexture$Type = ($TransformTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformTexture_ = $TransformTexture$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/widget/$BlockSelectorWidget" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IConfigurableWidget, $IConfigurableWidget$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/configurator/$IConfigurableWidget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$WidgetGroup, $WidgetGroup$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$WidgetGroup"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export class $BlockSelectorWidget extends $WidgetGroup {
readonly "widgets": $List<($Widget)>

constructor(x: integer, y: integer, width: integer, isState: boolean)

public "getBlock"(): $BlockState
public "setBlock"(blockState: $BlockState$Type): $BlockSelectorWidget
public "setOnBlockStateUpdate"(onBlockStateUpdate: $Consumer$Type<($BlockState$Type)>): $BlockSelectorWidget
public static "deserializeNBT"(widget: $IConfigurableWidget$Type, tag: $CompoundTag$Type, resources: $Resources$Type, isProject: boolean): void
public static "serializeNBT"(widget: $IConfigurableWidget$Type, resources: $Resources$Type, isProject: boolean): $CompoundTag
public static "deserializeWrapper"(tag: $CompoundTag$Type): $IConfigurableWidget
get "block"(): $BlockState
set "block"(value: $BlockState$Type)
set "onBlockStateUpdate"(value: $Consumer$Type<($BlockState$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSelectorWidget$Type = ($BlockSelectorWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSelectorWidget_ = $BlockSelectorWidget$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/editor/data/$IProject" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ILDLRegister, $ILDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/$ILDLRegister"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Editor, $Editor$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/ui/$Editor"
import {$LDLRegister, $LDLRegister$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/annotation/$LDLRegister"
import {$TreeBuilder$Menu, $TreeBuilder$Menu$Type} from "packages/com/lowdragmc/lowdraglib/gui/util/$TreeBuilder$Menu"
import {$Resources, $Resources$Type} from "packages/com/lowdragmc/lowdraglib/gui/editor/data/$Resources"

export interface $IProject extends $ILDLRegister {

 "getResources"(): $Resources
 "getSuffix"(): string
 "onLoad"(editor: $Editor$Type): void
 "newEmptyProject"(): $IProject
 "loadResources"(tag: $CompoundTag$Type): $Resources
 "loadProject"(arg0: $File$Type): $IProject
 "onClosed"(editor: $Editor$Type): void
 "attachMenu"(editor: $Editor$Type, name: string, menu: $TreeBuilder$Menu$Type): void
 "saveProject"(arg0: $File$Type): void
 "name"(): string
 "group"(): string
 "getRegisterUI"(): $LDLRegister
 "getTranslateKey"(): string
 "getChatComponent"(): $Component
 "isLDLRegister"(): boolean
}

export namespace $IProject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProject$Type = ($IProject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProject_ = $IProject$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/core/mixins/accessor/$MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "getActiveButton"(): integer

(): integer
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$Type;
}}
declare module "packages/com/lowdragmc/lowdraglib/gui/modular/$WidgetUIAccess" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Widget, $Widget$Type} from "packages/com/lowdragmc/lowdraglib/gui/widget/$Widget"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $WidgetUIAccess {

 "attemptMergeStack"(arg0: $ItemStack$Type, arg1: boolean, arg2: boolean): boolean
 "writeClientAction"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
 "writeUpdateInfo"(arg0: $Widget$Type, arg1: integer, arg2: $Consumer$Type<($FriendlyByteBuf$Type)>): void
}

export namespace $WidgetUIAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetUIAccess$Type = ($WidgetUIAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetUIAccess_ = $WidgetUIAccess$Type;
}}
declare module "packages/com/lowdragmc/shimmer/core/$IRenderChunk" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ColorPointLight, $ColorPointLight$Type} from "packages/com/lowdragmc/shimmer/client/light/$ColorPointLight"

export interface $IRenderChunk {

 "getShimmerLights"(): $List<($ColorPointLight)>
 "setShimmerLights"(arg0: $List$Type<($ColorPointLight$Type)>): void
}

export namespace $IRenderChunk {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderChunk$Type = ($IRenderChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderChunk_ = $IRenderChunk$Type;
}}
