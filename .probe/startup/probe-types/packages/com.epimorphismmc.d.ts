declare module "packages/com/epimorphismmc/monomorphism/item/$IMOItemRendererProvider" {
import {$IRenderer, $IRenderer$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IRenderer"
import {$ICustomRenderer, $ICustomRenderer$Type} from "packages/com/gregtechceu/gtceu/api/item/component/$ICustomRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IItemRendererProvider, $IItemRendererProvider$Type} from "packages/com/lowdragmc/lowdraglib/client/renderer/$IItemRendererProvider"

export interface $IMOItemRendererProvider extends $IItemRendererProvider {

 "getRenderInfo"(arg0: $ItemStack$Type): $ICustomRenderer
 "getRenderer"(arg0: $ItemStack$Type): $IRenderer
}

export namespace $IMOItemRendererProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMOItemRendererProvider$Type = ($IMOItemRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMOItemRendererProvider_ = $IMOItemRendererProvider$Type;
}}
declare module "packages/com/epimorphismmc/monomorphism/block/tier/$ITierType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $ITierType extends $StringRepresentable {

 "typeName"(): string
 "tier"(): integer
 "getSerializedName"(): string
}

export namespace $ITierType {
function fromEnum<E>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
function fromEnumWithMapping<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
function keys(arg0: ($StringRepresentable$Type)[]): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITierType$Type = ($ITierType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITierType_ = $ITierType$Type;
}}
declare module "packages/com/epimorphismmc/monomorphism/mixins/accessors/client/$ItemModelGeneratorAccessor" {
import {$ItemModelGenerator$Span, $ItemModelGenerator$Span$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemModelGenerator$Span"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SpriteContents, $SpriteContents$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents"

export interface $ItemModelGeneratorAccessor {

 "callGetSpans"(arg0: $SpriteContents$Type): $List<($ItemModelGenerator$Span)>

(arg0: $SpriteContents$Type): $List<($ItemModelGenerator$Span)>
}

export namespace $ItemModelGeneratorAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelGeneratorAccessor$Type = ($ItemModelGeneratorAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelGeneratorAccessor_ = $ItemModelGeneratorAccessor$Type;
}}
declare module "packages/com/epimorphismmc/monomorphism/mixins/accessors/$ShapedRecipeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShapedRecipeAccessor {

}

export namespace $ShapedRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeAccessor$Type = ($ShapedRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipeAccessor_ = $ShapedRecipeAccessor$Type;
}}
declare module "packages/com/epimorphismmc/monomorphism/mixins/accessors/$ShapelessRecipeAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ShapelessRecipeAccessor {

 "getResult"(): $ItemStack

(): $ItemStack
}

export namespace $ShapelessRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessRecipeAccessor$Type = ($ShapelessRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessRecipeAccessor_ = $ShapelessRecipeAccessor$Type;
}}
declare module "packages/com/epimorphismmc/monomorphism/mixins/accessors/$BlockEntityBuilderAccessor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityBuilder$BlockEntityFactory, $BlockEntityBuilder$BlockEntityFactory$Type} from "packages/com/tterrag/registrate/builders/$BlockEntityBuilder$BlockEntityFactory"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"

export interface $BlockEntityBuilderAccessor<T extends $BlockEntity> {

 "getFactory"(): $BlockEntityBuilder$BlockEntityFactory<(T)>
 "getValidBlocks"(): $Set<($NonNullSupplier<(any)>)>
}

export namespace $BlockEntityBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBuilderAccessor$Type<T> = ($BlockEntityBuilderAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityBuilderAccessor_<T> = $BlockEntityBuilderAccessor$Type<(T)>;
}}
