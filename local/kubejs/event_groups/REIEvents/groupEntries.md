# REIEvents.groupEntries

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: [GroupREIEntriesEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/integration/rei/GroupREIEntriesEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| registry | CollapsibleEntryRegistry | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| groupFluids | ResourceLocation, Component, FluidStackJS[] |  | void | ✘ |
| groupItems | ResourceLocation, Component, Ingredient |  | void | ✘ |
| groupSameItem | ResourceLocation, Component, ItemStack |  | void | ✘ |
| groupItemsIf | ResourceLocation, Component, Predicate<ItemStack> |  | void | ✘ |
| groupFluidsByTag | ResourceLocation, Component, ResourceLocation |  | void | ✘ |
| groupFluidsIf | ResourceLocation, Component, Predicate<FluidStackJS> |  | void | ✘ |
| groupItemsByTag | ResourceLocation, Component, ResourceLocation |  | void | ✘ |
| groupAnyIf | ResourceLocation, Component, Predicate<EntryStack<?>> |  | void | ✘ |
| groupSameFluid | ResourceLocation, Component, FluidStackJS |  | void | ✘ |
| groupEntriesIf | ResourceLocation, Component, ResourceLocation, Predicate |  | void | ✘ |
| groupEntries | ResourceLocation, Component, ResourceLocation, Object |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
REIEvents.groupEntries((event) => {
	// This space (un)intentionally left blank
});
```

