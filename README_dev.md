# HeLang2 开发者说明

你也可以在你的 Typescript 项目中嵌入 HeLang2，这样就可以让更多人观赏 **Cyberspaces** 并大脑升级。

使用以下语句引入一个 HeLang2 上下文：
  
```typescript
import { HeLang2 } from './helang'
```

创建一个HeLang2 上下文：

```typescript
const hl = new HeLang2()
```

然后，在项目中你可以使用以下方式调用exec：

```typescript
hl.exec([
  'call cyberspaces',
  'call 5gtest'
])
```

若你希望在 Typescript 中获取或修改 HeLang2 中的变量，你可以使用以下两个方法：

```typescript
hl.get_object("[0]"); // 获取[0]变量的值
hl.set_object("[0]", 1); // 设置[0]变量的值为1
```

这样，你就可以在 Typescript 中使用 HeLang2 中的变量了。

借由**Typescript Compiler**，你也可以在**Web项目中**使用HeLang2，非常的实用，非常的简单。

请运行以下命令来编译HeLang2到JavaScript：

```bash
npm run build
```

然后在`dist`目录中带走`parse.js`文件即可。

在浏览器使用时，你可能需要使用**AMD规范**。当然，你也可以将`tsconfig.json`中的`module`设置为`es6`，然后在代码中使用**ES6 import**。