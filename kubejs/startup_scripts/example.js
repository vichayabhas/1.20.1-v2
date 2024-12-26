// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('potassium_ingot')
    e.create('power_ingot')
    e.create('new_sulfur_trioxide_token')
    e.create('used_sulfur_trioxide_token')

})
// GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//     event.create('test_recipe_type')
//         .category('test')
//         .recipeModifiers([]) // 
//         .setEUIO('out')
//         .setMaxIOSize(3, 0, 0, 0) // 
//         .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
//         .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
//         .setSound(GTSoundEntries.COOLING)
// })
// GTCEuStartupEvents.registry('gtceu:machine', event => {
//     event.create('test_generator', 'multiblock')
//         .tooltips(Component.translatable('your.langfile.entry.here')) // 
//         .rotationState(RotationState.NON_Y_AXIS)
//         .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
//         .recipeTypes(['test_recipe_type'])
//         .pattern(definition => FactoryBlockPattern.start()
//             .aisle('CCC', 'GGG', 'CCC')
//             .aisle('CCC', 'GDG', 'CSC')
//             .aisle('CKC', 'GGG', 'CMC')
//             .where('K', Predicates.controller(Predicates.blocks(definition.get())))
//             .where('M', Predicates.abilities(PartAbility.MAINTENANCE))
//             .where('S', Predicates.abilities(PartAbility.MUFFLER))
//             .where('D', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
//             .where('G', Predicates.blocks('minecraft:glass'))
//             .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
//                 .or(Predicates.autoAbilities(definition.getRecipeTypes())))
//         .build())
//         .workableCasingRenderer(
//             "gtceu:block/casings/solid/machine_casing_inert_ptfe",
//             "gtceu:block/multiblock/large_chemical_reactor",
//             false
//         )
// })