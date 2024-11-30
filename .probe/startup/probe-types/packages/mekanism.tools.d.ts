declare module "packages/mekanism/tools/common/item/$ItemMekanismSword" {
import {$MaterialCreator, $MaterialCreator$Type} from "packages/mekanism/tools/common/material/$MaterialCreator"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IHasRepairType, $IHasRepairType$Type} from "packages/mekanism/tools/common/$IHasRepairType"
import {$IAttributeRefresher, $IAttributeRefresher$Type} from "packages/mekanism/common/lib/attribute/$IAttributeRefresher"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMekanismSword extends $SwordItem implements $IHasRepairType, $IAttributeRefresher {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(material: $MaterialCreator$Type, properties: $Item$Properties$Type)

public "addToBuilder"(builder: $ImmutableMultimap$Builder$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getRepairMaterial"(): $Ingredient
public "canBeDepleted"(): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getDamage"(): float
get "repairMaterial"(): $Ingredient
get "damage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismSword$Type = ($ItemMekanismSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismSword_ = $ItemMekanismSword$Type;
}}
declare module "packages/mekanism/tools/common/item/$ItemRefinedGlowstoneArmor" {
import {$MaterialCreator, $MaterialCreator$Type} from "packages/mekanism/tools/common/material/$MaterialCreator"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemMekanismArmor, $ItemMekanismArmor$Type} from "packages/mekanism/tools/common/item/$ItemMekanismArmor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $ItemRefinedGlowstoneArmor extends $ItemMekanismArmor {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(material: $MaterialCreator$Type, armorType: $ArmorItem$Type$Type, properties: $Item$Properties$Type)

public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "makesPiglinsNeutral"(stack: $ItemStack$Type, wearer: $LivingEntity$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRefinedGlowstoneArmor$Type = ($ItemRefinedGlowstoneArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRefinedGlowstoneArmor_ = $ItemRefinedGlowstoneArmor$Type;
}}
declare module "packages/mekanism/tools/common/$IHasRepairType" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $IHasRepairType {

 "getRepairMaterial"(): $Ingredient

(): $Ingredient
}

export namespace $IHasRepairType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHasRepairType$Type = ($IHasRepairType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHasRepairType_ = $IHasRepairType$Type;
}}
declare module "packages/mekanism/tools/common/material/$VanillaPaxelMaterialCreator" {
import {$VanillaPaxelMaterial, $VanillaPaxelMaterial$Type} from "packages/mekanism/tools/common/material/$VanillaPaxelMaterial"
import {$IMekanismConfig, $IMekanismConfig$Type} from "packages/mekanism/common/config/$IMekanismConfig"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$CachedFloatValue, $CachedFloatValue$Type} from "packages/mekanism/common/config/value/$CachedFloatValue"
import {$Tiers, $Tiers$Type} from "packages/net/minecraft/world/item/$Tiers"
import {$IPaxelMaterial, $IPaxelMaterial$Type} from "packages/mekanism/tools/common/material/$IPaxelMaterial"

export class $VanillaPaxelMaterialCreator implements $IPaxelMaterial {
readonly "paxelDamage": $CachedFloatValue
readonly "paxelAtkSpeed": $CachedFloatValue

constructor(config: $IMekanismConfig$Type, builder: $ForgeConfigSpec$Builder$Type, materialDefaults: $VanillaPaxelMaterial$Type)

public "getRegistryPrefix"(): string
public "getConfigCommentName"(): string
public "getPaxelEnchantability"(): integer
public "getPaxelEfficiency"(): float
public "getPaxelMaxUses"(): integer
public "getPaxelAtkSpeed"(): float
public "getVanillaTier"(): $Tiers
public "getPaxelDamage"(): float
get "registryPrefix"(): string
get "configCommentName"(): string
get "paxelEnchantability"(): integer
get "paxelEfficiency"(): float
get "paxelMaxUses"(): integer
get "paxelAtkSpeed"(): float
get "vanillaTier"(): $Tiers
get "paxelDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPaxelMaterialCreator$Type = ($VanillaPaxelMaterialCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaPaxelMaterialCreator_ = $VanillaPaxelMaterialCreator$Type;
}}
declare module "packages/mekanism/tools/common/material/$BaseMekanismMaterial" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$IArmorMaterialHelper, $IArmorMaterialHelper$Type} from "packages/mekanism/tools/common/material/$IArmorMaterialHelper"
import {$IItemTierHelper, $IItemTierHelper$Type} from "packages/mekanism/tools/common/material/$IItemTierHelper"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IPaxelMaterial, $IPaxelMaterial$Type} from "packages/mekanism/tools/common/material/$IPaxelMaterial"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $BaseMekanismMaterial extends $IItemTierHelper implements $IArmorMaterialHelper, $IPaxelMaterial {

constructor()

public "getTag"(): $TagKey<($Block)>
public "getRegistryPrefix"(): string
public "getItemEnchantability"(): integer
public "getItemRepairMaterial"(): $Ingredient
public "getCommonEnchantability"(): integer
public "getCommonRepairMaterial"(): $Ingredient
public "getArmorEnchantability"(): integer
public "getShieldDurability"(): integer
public "getArmorRepairMaterial"(): $Ingredient
public "getPaxelEnchantability"(): integer
public "getName"(): string
public "getPaxelEfficiency"(): float
public "getPaxelMaxUses"(): integer
public "getSwordDamage"(): float
public "getSwordAtkSpeed"(): float
public "getShovelDamage"(): float
public "getPaxelDamage"(): float
public "burnsInFire"(): boolean
public "getHoeDamage"(): float
public "getPickaxeDamage"(): float
public "getAxeDamage"(): float
public "getShovelAtkSpeed"(): float
public "getAxeAtkSpeed"(): float
public "getPickaxeAtkSpeed"(): float
public "getHoeAtkSpeed"(): float
public "getConfigCommentName"(): string
public "getPaxelAtkSpeed"(): float
public "getDefenseForType"(arg0: $ArmorItem$Type$Type): integer
public "getEquipSound"(): $SoundEvent
public "getDurabilityForType"(arg0: $ArmorItem$Type$Type): integer
public "getKnockbackResistance"(): float
public "getToughness"(): float
get "tag"(): $TagKey<($Block)>
get "registryPrefix"(): string
get "itemEnchantability"(): integer
get "itemRepairMaterial"(): $Ingredient
get "commonEnchantability"(): integer
get "commonRepairMaterial"(): $Ingredient
get "armorEnchantability"(): integer
get "shieldDurability"(): integer
get "armorRepairMaterial"(): $Ingredient
get "paxelEnchantability"(): integer
get "name"(): string
get "paxelEfficiency"(): float
get "paxelMaxUses"(): integer
get "swordDamage"(): float
get "swordAtkSpeed"(): float
get "shovelDamage"(): float
get "paxelDamage"(): float
get "hoeDamage"(): float
get "pickaxeDamage"(): float
get "axeDamage"(): float
get "shovelAtkSpeed"(): float
get "axeAtkSpeed"(): float
get "pickaxeAtkSpeed"(): float
get "hoeAtkSpeed"(): float
get "configCommentName"(): string
get "paxelAtkSpeed"(): float
get "equipSound"(): $SoundEvent
get "knockbackResistance"(): float
get "toughness"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseMekanismMaterial$Type = ($BaseMekanismMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseMekanismMaterial_ = $BaseMekanismMaterial$Type;
}}
declare module "packages/mekanism/tools/common/item/$ItemMekanismHoe" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MaterialCreator, $MaterialCreator$Type} from "packages/mekanism/tools/common/material/$MaterialCreator"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$IHasRepairType, $IHasRepairType$Type} from "packages/mekanism/tools/common/$IHasRepairType"
import {$IAttributeRefresher, $IAttributeRefresher$Type} from "packages/mekanism/common/lib/attribute/$IAttributeRefresher"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMekanismHoe extends $HoeItem implements $IHasRepairType, $IAttributeRefresher {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(material: $MaterialCreator$Type, properties: $Item$Properties$Type)

public "addToBuilder"(builder: $ImmutableMultimap$Builder$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getRepairMaterial"(): $Ingredient
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "canBeDepleted"(): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getAttackDamage"(): float
get "repairMaterial"(): $Ingredient
get "attackDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismHoe$Type = ($ItemMekanismHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismHoe_ = $ItemMekanismHoe$Type;
}}
declare module "packages/mekanism/tools/common/material/$MaterialCreator" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IMekanismConfig, $IMekanismConfig$Type} from "packages/mekanism/common/config/$IMekanismConfig"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$CachedIntValue, $CachedIntValue$Type} from "packages/mekanism/common/config/value/$CachedIntValue"
import {$CachedFloatValue, $CachedFloatValue$Type} from "packages/mekanism/common/config/value/$CachedFloatValue"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BaseMekanismMaterial, $BaseMekanismMaterial$Type} from "packages/mekanism/tools/common/material/$BaseMekanismMaterial"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $MaterialCreator extends $BaseMekanismMaterial {
readonly "swordDamage": $CachedFloatValue
readonly "swordAtkSpeed": $CachedFloatValue
readonly "shovelDamage": $CachedFloatValue
readonly "shovelAtkSpeed": $CachedFloatValue
readonly "axeDamage": $CachedFloatValue
readonly "axeAtkSpeed": $CachedFloatValue
readonly "pickaxeDamage": $CachedFloatValue
readonly "pickaxeAtkSpeed": $CachedFloatValue
readonly "hoeDamage": $CachedFloatValue
readonly "hoeAtkSpeed": $CachedFloatValue
readonly "paxelDamage": $CachedFloatValue
readonly "paxelAtkSpeed": $CachedFloatValue
readonly "attackDamage": $CachedFloatValue
readonly "toughness": $CachedFloatValue
readonly "knockbackResistance": $CachedFloatValue
readonly "bootArmor": $CachedIntValue
readonly "leggingArmor": $CachedIntValue
readonly "chestplateArmor": $CachedIntValue
readonly "helmetArmor": $CachedIntValue

constructor(config: $IMekanismConfig$Type, builder: $ForgeConfigSpec$Builder$Type, materialDefaults: $BaseMekanismMaterial$Type)

public "getTag"(): $TagKey<($Block)>
public "getRegistryPrefix"(): string
public "getCommonEnchantability"(): integer
public "getCommonRepairMaterial"(): $Ingredient
public "getShieldDurability"(): integer
public "getConfigCommentName"(): string
public "getPaxelEnchantability"(): integer
public "getDefenseForType"(armorType: $ArmorItem$Type$Type): integer
public "getEquipSound"(): $SoundEvent
public "getName"(): string
public "getDurabilityForType"(armorType: $ArmorItem$Type$Type): integer
public "getKnockbackResistance"(): float
public "getToughness"(): float
public "getUses"(): integer
/**
 * 
 * @deprecated
 */
public "getLevel"(): integer
public "getSpeed"(): float
public "getAttackDamageBonus"(): float
public "getPaxelEfficiency"(): float
public "getPaxelMaxUses"(): integer
public "getPaxelAtkSpeed"(): float
public "getSwordDamage"(): float
public "getSwordAtkSpeed"(): float
public "getShovelDamage"(): float
public "getPaxelDamage"(): float
public "burnsInFire"(): boolean
public "getHoeDamage"(): float
public "getPickaxeDamage"(): float
public "getAxeDamage"(): float
public "getShovelAtkSpeed"(): float
public "getAxeAtkSpeed"(): float
public "getPickaxeAtkSpeed"(): float
public "getHoeAtkSpeed"(): float
get "tag"(): $TagKey<($Block)>
get "registryPrefix"(): string
get "commonEnchantability"(): integer
get "commonRepairMaterial"(): $Ingredient
get "shieldDurability"(): integer
get "configCommentName"(): string
get "paxelEnchantability"(): integer
get "equipSound"(): $SoundEvent
get "name"(): string
get "knockbackResistance"(): float
get "toughness"(): float
get "uses"(): integer
get "level"(): integer
get "speed"(): float
get "attackDamageBonus"(): float
get "paxelEfficiency"(): float
get "paxelMaxUses"(): integer
get "paxelAtkSpeed"(): float
get "swordDamage"(): float
get "swordAtkSpeed"(): float
get "shovelDamage"(): float
get "paxelDamage"(): float
get "hoeDamage"(): float
get "pickaxeDamage"(): float
get "axeDamage"(): float
get "shovelAtkSpeed"(): float
get "axeAtkSpeed"(): float
get "pickaxeAtkSpeed"(): float
get "hoeAtkSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialCreator$Type = ($MaterialCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialCreator_ = $MaterialCreator$Type;
}}
declare module "packages/mekanism/tools/common/item/$ItemMekanismPickaxe" {
import {$MaterialCreator, $MaterialCreator$Type} from "packages/mekanism/tools/common/material/$MaterialCreator"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IHasRepairType, $IHasRepairType$Type} from "packages/mekanism/tools/common/$IHasRepairType"
import {$IAttributeRefresher, $IAttributeRefresher$Type} from "packages/mekanism/common/lib/attribute/$IAttributeRefresher"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMekanismPickaxe extends $PickaxeItem implements $IHasRepairType, $IAttributeRefresher {
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(material: $MaterialCreator$Type, properties: $Item$Properties$Type)

public "addToBuilder"(builder: $ImmutableMultimap$Builder$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getRepairMaterial"(): $Ingredient
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "canBeDepleted"(): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getAttackDamage"(): float
get "repairMaterial"(): $Ingredient
get "attackDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismPickaxe$Type = ($ItemMekanismPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismPickaxe_ = $ItemMekanismPickaxe$Type;
}}
declare module "packages/mekanism/tools/common/item/$ItemMekanismAxe" {
import {$MaterialCreator, $MaterialCreator$Type} from "packages/mekanism/tools/common/material/$MaterialCreator"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$IHasRepairType, $IHasRepairType$Type} from "packages/mekanism/tools/common/$IHasRepairType"
import {$IAttributeRefresher, $IAttributeRefresher$Type} from "packages/mekanism/common/lib/attribute/$IAttributeRefresher"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMekanismAxe extends $AxeItem implements $IHasRepairType, $IAttributeRefresher {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(material: $MaterialCreator$Type, properties: $Item$Properties$Type)

public "addToBuilder"(builder: $ImmutableMultimap$Builder$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getRepairMaterial"(): $Ingredient
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "canBeDepleted"(): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getAttackDamage"(): float
get "repairMaterial"(): $Ingredient
get "attackDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismAxe$Type = ($ItemMekanismAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismAxe_ = $ItemMekanismAxe$Type;
}}
declare module "packages/mekanism/tools/common/material/$IArmorMaterialHelper" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export interface $IArmorMaterialHelper extends $ArmorMaterial {

 "getArmorEnchantability"(): integer
 "getArmorRepairMaterial"(): $Ingredient
 "getRepairIngredient"(): $Ingredient
 "getEnchantmentValue"(): integer
 "getDefenseForType"(arg0: $ArmorItem$Type$Type): integer
 "getEquipSound"(): $SoundEvent
 "getName"(): string
 "getDurabilityForType"(arg0: $ArmorItem$Type$Type): integer
 "getKnockbackResistance"(): float
 "getToughness"(): float
}

export namespace $IArmorMaterialHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArmorMaterialHelper$Type = ($IArmorMaterialHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IArmorMaterialHelper_ = $IArmorMaterialHelper$Type;
}}
declare module "packages/mekanism/tools/common/material/$IPaxelMaterial" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPaxelMaterial {

 "getConfigCommentName"(): string
 "getPaxelEnchantability"(): integer
 "getPaxelEfficiency"(): float
 "getPaxelMaxUses"(): integer
 "getPaxelAtkSpeed"(): float
 "getPaxelDamage"(): float
}

export namespace $IPaxelMaterial {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPaxelMaterial$Type = ($IPaxelMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPaxelMaterial_ = $IPaxelMaterial$Type;
}}
declare module "packages/mekanism/tools/common/material/$VanillaPaxelMaterial" {
import {$Tiers, $Tiers$Type} from "packages/net/minecraft/world/item/$Tiers"
import {$IPaxelMaterial, $IPaxelMaterial$Type} from "packages/mekanism/tools/common/material/$IPaxelMaterial"

export class $VanillaPaxelMaterial implements $IPaxelMaterial {

constructor()

public "getRegistryPrefix"(): string
public "getPaxelEnchantability"(): integer
public "getPaxelEfficiency"(): float
public "getPaxelMaxUses"(): integer
public "getVanillaTier"(): $Tiers
public "getConfigCommentName"(): string
public "getPaxelAtkSpeed"(): float
public "getPaxelDamage"(): float
get "registryPrefix"(): string
get "paxelEnchantability"(): integer
get "paxelEfficiency"(): float
get "paxelMaxUses"(): integer
get "vanillaTier"(): $Tiers
get "configCommentName"(): string
get "paxelAtkSpeed"(): float
get "paxelDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaPaxelMaterial$Type = ($VanillaPaxelMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaPaxelMaterial_ = $VanillaPaxelMaterial$Type;
}}
declare module "packages/mekanism/tools/common/item/$ItemMekanismShield" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IHasRepairType, $IHasRepairType$Type} from "packages/mekanism/tools/common/$IHasRepairType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ShieldItem, $ShieldItem$Type} from "packages/net/minecraft/world/item/$ShieldItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseMekanismMaterial, $BaseMekanismMaterial$Type} from "packages/mekanism/tools/common/material/$BaseMekanismMaterial"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMekanismShield extends $ShieldItem implements $IHasRepairType {
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "TAG_BASE_COLOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(material: $BaseMekanismMaterial$Type, properties: $Item$Properties$Type)

public "initializeClient"(consumer: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getRepairMaterial"(): $Ingredient
public "canBeDepleted"(): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "isValidRepairItem"(toRepair: $ItemStack$Type, repair: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public static "get"(arg0: $ItemStack$Type): $Equipable
get "repairMaterial"(): $Ingredient
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismShield$Type = ($ItemMekanismShield);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismShield_ = $ItemMekanismShield$Type;
}}
declare module "packages/mekanism/tools/common/item/$ItemMekanismShovel" {
import {$MaterialCreator, $MaterialCreator$Type} from "packages/mekanism/tools/common/material/$MaterialCreator"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$IHasRepairType, $IHasRepairType$Type} from "packages/mekanism/tools/common/$IHasRepairType"
import {$IAttributeRefresher, $IAttributeRefresher$Type} from "packages/mekanism/common/lib/attribute/$IAttributeRefresher"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMekanismShovel extends $ShovelItem implements $IHasRepairType, $IAttributeRefresher {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(material: $MaterialCreator$Type, properties: $Item$Properties$Type)

public "addToBuilder"(builder: $ImmutableMultimap$Builder$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getRepairMaterial"(): $Ingredient
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "canBeDepleted"(): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getAttackDamage"(): float
get "repairMaterial"(): $Ingredient
get "attackDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismShovel$Type = ($ItemMekanismShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismShovel_ = $ItemMekanismShovel$Type;
}}
declare module "packages/mekanism/tools/common/item/$ItemMekanismArmor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$MaterialCreator, $MaterialCreator$Type} from "packages/mekanism/tools/common/material/$MaterialCreator"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IHasRepairType, $IHasRepairType$Type} from "packages/mekanism/tools/common/$IHasRepairType"
import {$IAttributeRefresher, $IAttributeRefresher$Type} from "packages/mekanism/common/lib/attribute/$IAttributeRefresher"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMekanismArmor extends $ArmorItem implements $IHasRepairType, $IAttributeRefresher {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(material: $MaterialCreator$Type, armorType: $ArmorItem$Type$Type, properties: $Item$Properties$Type)

public "addToBuilder"(builder: $ImmutableMultimap$Builder$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "initCapabilities"(stack: $ItemStack$Type, nbt: $CompoundTag$Type): $ICapabilityProvider
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getRepairMaterial"(): $Ingredient
public "canBeDepleted"(): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getDefense"(): integer
public "getToughness"(): float
public "getKnockbackResistance"(): float
public static "get"(arg0: $ItemStack$Type): $Equipable
get "repairMaterial"(): $Ingredient
get "defense"(): integer
get "toughness"(): float
get "knockbackResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismArmor$Type = ($ItemMekanismArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismArmor_ = $ItemMekanismArmor$Type;
}}
declare module "packages/mekanism/tools/common/material/$IItemTierHelper" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"

export class $IItemTierHelper implements $Tier {


public "getItemEnchantability"(): integer
public "getItemRepairMaterial"(): $Ingredient
public "getRepairIngredient"(): $Ingredient
public "getEnchantmentValue"(): integer
public "getTag"(): $TagKey<($Block)>
public "getUses"(): integer
/**
 * 
 * @deprecated
 */
public "getLevel"(): integer
public "getSpeed"(): float
public "getAttackDamageBonus"(): float
get "itemEnchantability"(): integer
get "itemRepairMaterial"(): $Ingredient
get "repairIngredient"(): $Ingredient
get "enchantmentValue"(): integer
get "tag"(): $TagKey<($Block)>
get "uses"(): integer
get "level"(): integer
get "speed"(): float
get "attackDamageBonus"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemTierHelper$Type = ($IItemTierHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemTierHelper_ = $IItemTierHelper$Type;
}}
declare module "packages/mekanism/tools/common/item/$ItemMekanismPaxel" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VanillaPaxelMaterialCreator, $VanillaPaxelMaterialCreator$Type} from "packages/mekanism/tools/common/material/$VanillaPaxelMaterialCreator"
import {$MaterialCreator, $MaterialCreator$Type} from "packages/mekanism/tools/common/material/$MaterialCreator"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$IHasRepairType, $IHasRepairType$Type} from "packages/mekanism/tools/common/$IHasRepairType"
import {$IAttributeRefresher, $IAttributeRefresher$Type} from "packages/mekanism/common/lib/attribute/$IAttributeRefresher"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemMekanismPaxel extends $AxeItem implements $IHasRepairType, $IAttributeRefresher {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(material: $MaterialCreator$Type, properties: $Item$Properties$Type)
constructor(material: $VanillaPaxelMaterialCreator$Type, properties: $Item$Properties$Type)

public "canPerformAction"(stack: $ItemStack$Type, action: $ToolAction$Type): boolean
public "addToBuilder"(builder: $ImmutableMultimap$Builder$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "getAttributeModifiers"(slot: $EquipmentSlot$Type, stack: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getRepairMaterial"(): $Ingredient
public "isCorrectToolForDrops"(state: $BlockState$Type): boolean
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(stack: $ItemStack$Type, state: $BlockState$Type): float
public "canBeDepleted"(): boolean
public "getMaxDamage"(stack: $ItemStack$Type): integer
public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getEnchantmentValue"(): integer
public "isCorrectToolForDrops"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
public "getAttackDamage"(): float
get "repairMaterial"(): $Ingredient
get "enchantmentValue"(): integer
get "attackDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMekanismPaxel$Type = ($ItemMekanismPaxel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMekanismPaxel_ = $ItemMekanismPaxel$Type;
}}
