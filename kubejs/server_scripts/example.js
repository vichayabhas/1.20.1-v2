// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')
ServerEvents.recipes(event => {
    event.remove({ id: "gtceu:distillation_tower/naquadria_waste_separation" })
    event.remove({ id: "gtceu:distillation_tower/enriched_naquadah_waste_separation" })
    event.recipes.gtceu.distillation_tower('test1')
        .inputFluids(
            Fluid.of('gtceu:enriched_naquadah_waste', 2000)
        )
        .itemOutputs(
            '2x gtceu:small_barium_sulfide_dust'
        )
        .outputFluids(Fluid.of('gtceu:sulfuric_acid', 500))
        .outputFluids(Fluid.of('gtceu:enriched_naquadah_solution', 350))
        .outputFluids(Fluid.of('gtceu:naquadria_solution', 150))
        .duration(300)
        .EUt(480)
    event.recipes.gtceu.distillation_tower('test2')
        .inputFluids(
            Fluid.of('gtceu:naquadria_waste', 2000)
        )
        .itemOutputs(
            '2x gtceu:small_gallium_sulfide_dust'
        )
        .outputFluids(Fluid.of('gtceu:sulfuric_acid', 500))
        .outputFluids(Fluid.of('gtceu:naquadria_solution', 350))
        .outputFluids(Fluid.of('gtceu:enriched_naquadah_solution', 150))
        .duration(300)
        .EUt(480)
    event.recipes.gtceu.centrifuge('test3')
        .inputFluids(
            Fluid.of('gtceu:impure_enriched_naquadah_solution', 2000)
        )
        .itemOutputs(
            'gtceu:trinium_sulfide_dust'
        )


        .outputFluids(Fluid.of('gtceu:enriched_naquadah_solution', 500))
        .itemOutputs(
            '2x gtceu:antimony_trifluoride_dust'
        )
        .duration(400)
        .EUt(1920)
    event.recipes.gtceu.centrifuge('test4')
        .inputFluids(
            Fluid.of('gtceu:impure_naquadria_solution', 2000)
        )
        .itemOutputs(
            'gtceu:indium_phosphide_dust'
        )
        .itemOutputs(
            '2x gtceu:antimony_trifluoride_dust'
        )

        .outputFluids(Fluid.of('gtceu:naquadria_solution', 500))
        .duration(400)
        .EUt(1920)
        event.remove({id:'gtceu:centrifuge/impure_naquadria_solution_separation'})
        event.remove({id:'gtceu:centrifuge/impure_enriched_naquadah_solution_separation'})
})//centrifuge