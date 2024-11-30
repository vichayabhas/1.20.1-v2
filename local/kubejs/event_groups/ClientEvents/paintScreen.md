# ClientEvents.paintScreen

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: [PaintScreenEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/client/painter/screen/PaintScreenEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| painter | Painter | ✘ |
| mouseX | int | ✘ |
| mouseY | int | ✘ |
| width | int | ✘ |
| height | int | ✘ |
| inventory | boolean | ✘ |
| mc | Minecraft | ✘ |
| font | Font | ✘ |
| graphics | GuiGraphics | ✘ |
| matrices | PoseStack | ✘ |
| tesselator | Tesselator | ✘ |
| buffer | BufferBuilder | ✘ |
| delta | float | ✘ |
| screen | Screen | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| rectangle | float, float, float, float, float, int, float, float, float, float |  | void | ✘ |
| rectangle | float, float, float, float, float, int |  | void | ✘ |
| translate | double, double |  | void | ✘ |
| getVariables |  |  | VariableSet | ✘ |
| rotateDeg | float |  | void | ✘ |
| alignY | float, float, AlignMode |  | float | ✘ |
| alignX | float, float, AlignMode |  | float | ✘ |
| rotateRad | float |  | void | ✘ |
| rawText | FormattedCharSequence, int, int, int, boolean |  | void | ✘ |
| scale | float |  | void | ✘ |
| scale | float, float |  | void | ✘ |
| text | Component, int, int, int, boolean |  | void | ✘ |
| translate | double, double, double |  | void | ✘ |
| vertex | Matrix4f, float, float, float, int |  | void | ✘ |
| vertex | Matrix4f, float, float, float, int, float, float |  | void | ✘ |
| beginQuads | boolean |  | void | ✘ |
| beginQuads | VertexFormat |  | void | ✘ |
| setShaderInstance | Supplier<ShaderInstance> |  | void | ✘ |
| getMatrix |  |  | Matrix4f | ✘ |
| resetShaderColor |  |  | void | ✘ |
| multiplyWithMatrix | Matrix4f |  | void | ✘ |
| setShaderColor | float, float, float, float |  | void | ✘ |
| setShaderTexture | ResourceLocation |  | void | ✘ |
| bindTextureForSetup | ResourceLocation |  | void | ✘ |
| setPositionColorShader |  |  | void | ✘ |
| setPositionColorTextureShader |  |  | void | ✘ |
| multiply | Quaternionf |  | void | ✘ |
| blend | boolean |  | void | ✘ |
| scale | float, float, float |  | void | ✘ |
| end |  |  | void | ✘ |
| begin | VertexFormat$Mode, VertexFormat |  | void | ✘ |
| push |  |  | void | ✘ |
| pop |  |  | void | ✘ |
| getEntity |  |  | Player | ✘ |
| getPlayer |  |  | Player | ✘ |
| removeGameStage | String |  | void | ✘ |
| addGameStage | String |  | void | ✘ |
| hasGameStage | String |  | boolean | ✘ |
| getLevel |  |  | Level | ✘ |
| getServer |  |  | MinecraftServer | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |


### Documented members:

- `void removeGameStage(String var0)`

  Parameters:
  - var0: String

```
Removes the specified game stage from the player
```

- `void addGameStage(String var0)`

  Parameters:
  - var0: String

```
Adds the specified game stage to the player
```

- `boolean hasGameStage(String var0)`

  Parameters:
  - var0: String

```
Checks if the player has the specified game stage
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

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



### Example script:

```js
ClientEvents.paintScreen((event) => {
	// This space (un)intentionally left blank
});
```

