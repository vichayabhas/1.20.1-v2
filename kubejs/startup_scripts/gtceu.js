GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
    event
        .create("generator")
        .category("test")
        .setEUIO("out")
        .setMaxIOSize(2, 0, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
        event
        .create("test_use")
        .category("test")
        .setEUIO("in")
        .setMaxIOSize(2, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('test_generator', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['generator'])
        .generator(true)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'GGG', 'CCC')
            .aisle('CCC', 'GDG', 'CSC')
            .aisle('CKM', 'GGG', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('S', Predicates.abilities(PartAbility.MUFFLER))
            .where('D', Predicates.blocks("minecraft:air"))
            .where('G', Predicates.blocks("gtceu:inert_machine_casing"))
            .where('C', Predicates.blocks("gtceu:inert_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
        event.create('test_use_t', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeTypes(['test_use'])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CIC', 'GGG', 'CCC')
            .aisle('CCC', 'GDG', 'CCC')
            .aisle('CKM', 'GGG', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE))
            //.where('S', Predicates.abilities(PartAbility.MUFFLER))
            .where('D', Predicates.blocks("minecraft:air"))
            .where('G', Predicates.blocks("gtceu:inert_machine_casing"))
            .where('I',Predicates.abilities(PartAbility.COMPUTATION_DATA_TRANSMISSION))
            .where('C', Predicates.blocks("gtceu:inert_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
})