# HeLang2：何语言精简版

<a href="https://github.com/FurryR/helang2/stargazers"><img src="https://img.shields.io/github/stars/FurryR/helang2.svg" alt="Stars"></a>
<a href="https://github.com/FurryR/helang2/issues"><img src="https://img.shields.io/github/issues/FurryR/helang2" alt="Issues"></a>
<a href="LICENSE"><img src="https://img.shields.io/github/license/FurryR/helang2" alt="MIT License"></a>
<a href="https://github.com/FurryR/helang2/actions/workflows/typescript.yml"><img src="https://github.com/FurryR/helang2/actions/workflows/typescript.yml/badge.svg" alt="CI Status"></a>
[![CodeFactor](https://www.codefactor.io/repository/github/furryr/helang2/badge)](https://www.codefactor.io/repository/github/furryr/helang2)
[![HitCount](https://hits.dwyl.com/FurryR/helang2.svg?style=flat-square)](http://hits.dwyl.com/FurryR/helang2)

耗费 10 秒甚至 9 秒想出来的 Typescript 何语言 2 代实现，理塘丁真全程监工。

此处删去英文注释是因为~~我不想看到英文注释(来自 Github Copilot 的看法)~~怎么能让老鹰国的网友看懂呢 😡😡😡

Helang 演示视频见此：https://www.bilibili.com/video/BV1XW4y1h79A/

## 这是初生二创

本项目包含于 **Cyber Spaces Collection**。

本家位于 **Cyber Spaces Collection** 的 [Helang](https://github.com/kifuan/helang)。

## 介绍

> 青，出于蓝而胜于蓝；冰，来自水而寒于水。
>
> Windows 11 on ARM Update(5G+4G LTE)，2077 年。

“次世代赛博编程语言”Helang 诞生于**E-SMOKER**之乡：赛博理塘。而本次的项目虽并未诞生于理塘，但理塘丁真本人全程监工，故可以算作 Helang 的精神续作。

本项目是由自己会打字的 5G 键盘，花了 121 赛博分钟，在 AirDesk 上配合 AirPods 编写的。

实在是太酷了，很符合我对未来生活的想象，科技并带着趣味。

注：如果以**普通时间单位**（Basic Unit of Plain Time, [**BUPT**](https://baike.baidu.com/item/%E5%8C%97%E4%BA%AC%E9%82%AE%E7%94%B5%E5%A4%A7%E5%AD%A6/139535?from=kg)）作为标准单位，本项目开发时长为`1! + 5! = 121 `分钟。

注 2：**BUPT** 在赛博世界还可以代指北邮（声明：我对本学府无恶意，我认为这是一所优秀的学校，我只是对某个人）。

## 使用方法

1. 把源代码拉下来：

   ```bash
   > git clone git@github.com:FurryR/helang2.git
   ```

若系统提示你找不到 git，则建议你使用**360 安全浏览器**重新尝试，若仍无法成功则请放弃。

2. 下载需要的第三方库：

   ```bash
   > npm install
   ```

若系统提示你找不到 npx，则建议你使用**2345 浏览器**重新尝试，若仍无法成功则请放弃。

3. 不同于**Helang 只能运行 great.he**，我们允许你一次编写，到处运行，你可以额外指定一个文件名来运行：

   ```bash
   > npx ts-node src/cli.ts 藏话.helang
   ```

若系统提示你找不到 npx 或 ts-node，则建议你使用**QQ 浏览器**重新尝试，若仍无法成功则请放弃。

不仅如此，我们还不限制脚本的后缀名，你可以把 Helang 写在`.py`、`.js`、`.ts`、`.cpp`等后缀名的文件里，实现真正的**H++**、**Hescript**、**HypeScript**和**Hython**。

注：如果你是大脑升级人，则不需要使用来自`Microsoft`的愚蠢技术。你可以使用最新的`5G技术`来人脑直接运行 HeLang 脚本。

请注意：此行为十分适合 OI 人，特别是参加过`FJOI 2022`的泉州七中选手。但普通人若稍有不慎脑内运算错误，则可能导致大脑降级。

## 基本语法

**Saint He** 曾说，一切类型均为`u8`，是什么意思呢？这个词倒过来就是`8u`，看来圣人也喜欢玩贴吧。

因为一切类型均为`u8`，所以在 Helang2 中，不需要指定类型即可使用变量。

除此之外，`u8` 与 `v8` 形似，所以能不能关注[永雏塔菲](https://space.bilibili.com/1265680561)喵，关注永雏塔菲谢谢喵。

在 HeLang2 中，我们甚至不需要使用**bitwise or**，就可以使用数组。**都什么年代了还在写按位与**？

```bash
set [0] 1
set [1] 5
```

**Saint He** 曾说：`whichKey - 1` ，所以我们数组的下标需要从 `1` 开始，但 HeLang2 采用了极为先进的数组扩展技术，所以下标也可以从 `0` 开始。

```bash
set [1] 5
#set [0] 1也是可以的
call print [1]
```

HeLang2 虽然不支持多下标操作，但允许你 reset 全局数组。通过空格分割，你可以直接重置全局作用域，实在是领先了人类 10 万年甚至 9 万年的设计。

```bash
set [1] 1
reset [1] 5
#此时[0]为1，[1]为5。
```

HeLang2 相比 HeLang，支持了 if 语句和 while 语句，但是我没做嵌套，我也不想做嵌套。优秀的代码不应该嵌套 while 和 if！

```bash
# 我测你们码
reset 1 25105 27979 20320 20204 30721 10
call cmp != [[0]] 0
while [ret]
  call putchar [[0]]
  call add [0] 1
  set [0] [ret]
  call cmp != [[0]] 0
done
# [0] = 0
call cmp == [0] 6
if [ret]
  # 结束程序
  jmp 20
fi
call cmp != [0] 6
if [ret]
  # 5G测试
  call 5gtest
fi
```

还有数个 call 调用等你探索，你可以使用`call`命令进行 5G 测速，也可以进行加减乘除操作，或者输入输出之类的。

注意：**HarmonyOS+4G>5G**，但是**HarmonyOS+4G 不等于 5G**，所以你不能用 4G 华为手机及其共享的热点进行 5G 测速。

HeLang2 还支持根据变量中的内容作为索引获取变量，非常的实用，非常的先进。

```bash
set [0] 1
set [1] 4
# [1]居然不是5！那么我们利用[0]给它加到5。
# 调用极为先进的加法 syscall，算出结果=5。
call add [[0]] 1
# 将[0]中的内容"1"作为索引，得到[1]，并将其的值变更为[ret]（call的返回值）。
set [[0]] [ret]
```

最后，我们结合一下，可以写出下列代码。

```bash
reset 1 1 1 4 5 1 4 1 9 1 9 8 1 0 -1
call cmp != [[0]] -1
while [ret]
  call print [[0]]
  call add [0] 1
  set [0] [ret]
  call cmp != [[0]] -1
done
```

如此精妙的代码，在地球的人类是无法理解的。我们作为**赛博智能生命体**，也只能给你演示一下日常操作了。

这实在是太酷了，后面我忘了，我也不想翻到文章开头去看。

## Hello, world!

HeLang2 也同样受到了对于 Hello World 的挑战。

**Saint He** 专注于单片机应用的开发，哪里有时间顾及字符串？

好在，经过协商，他同意了这个请求，使得我们能在这门语言中打印出`Hello, world!`

```bash
reset 1 72 101 108 108 111 44 32 119 111 114 108 100 33
call cmp != [[0]] 0
while [ret]
  call putchar [[0]]
  call add [0] 1
  set [0] [ret]
  call cmp != [[0]] 0
done
```

由于对效率的极端苛刻要求，我们使用字符在 ASCII/Unicode 中对应的数字来表示这个字符。

HeLang2 不使用突兀的**bitwise or**来分割 ASCII 码，在保持可读性的同时提高了效率，实乃赛博世界中的神中神。

## 运算

我们注意到，**Saint He** 的代码中还出现了自增运算：`++`

因为 HeLang2 不存在引用，我们被迫使用 call 的方式进行计算。

通常，计算(add sub mul div mod)需要 2 个参数。第一个参数作为左边的操作数，第二个参数作为右边的操作数。

```bash
set [0] 1
# 1!
call print [0]
call mul [0] 5
set [1] [ret]
# 5!
call print [1]
```

## 变量声明与赋值

不同于 HeLang，HeLang2 更贴近 **Saint He** 倡导的**贴近硬件**。

HeLang2 允许你直接对内存池进行操作，变量也可以不定义就进行使用（是绝对安全的，默认值为 0）。

```bash
# 在这之前，[0]=0
set [0] 1
# 修改已存在的变量
set [0] 2
```

## 查看你是否在 Cyber Spaces

为了见到 **Saint He**，你需要身处 **Cyber Spaces**。

由于`cyberspaces`需要调用外部 API，所以我们把它转化为了`call`。

```bash
call cyberspaces
```

## 5G 测速

理论上这块也属于语法，但我就是要把它单独摘出来。

很简单，只需要输入：

```bash
call 5gtest
```

即可开始 5G 测速。

注意：**HarmonyOS+4G>5G**，但是**HarmonyOS+4G 不等于 5G**，所以你不能用 4G 华为手机及其共享的热点进行 5G 测速。

## 总结

关注[永雏塔菲](https://space.bilibili.com/1265680561)喵，关注永雏塔菲谢谢喵。

关注[猫雷 NyaRu_Official](https://space.bilibili.com/697091119)谢谢喵，要吃中国的大米喵。

关注[星瞳\_Official](https://space.bilibili.com/401315430)送溜溜梅！

关注[嘉然](https://space.bilibili.com/672328094)，顿顿解馋！

关注[向晚](https://space.bilibili.com/672346917)，关注向晚，为时不晚！

关注[乃琳](https://space.bilibili.com/672342685)，关注乃琳嘎，关注乃琳谢谢嘎！

关注[贝拉](https://space.bilibili.com/672353429)，关注贝拉哞，关注贝拉谢谢哞！

举办[東雪蓮 Official](https://space.bilibili.com/1437582453/)谢谢喵，不能让立本 V 吃中国的大米喵。

举办[DJGun](https://space.bilibili.com/2088874781/)谢谢喵，不能让初生祸害我们冲国人喵。

关注[粘连科技 Official](https://space.bilibili.com/248582596)，薄纱何同学喵 🥰

关注[HiiroVTuber](https://space.bilibili.com/508963009)，不是 425KG 的粉色喵！

关注[露早 GOGO](https://space.bilibili.com/1669777785/)！关注露早汪，关注露早谢谢汪！

关注[AIChannel 中国绊爱](https://space.bilibili.com/484322035)！超级可爱的 Super AI 薄纱赛博丁真！

关注[有栖 Mana_Official](https://space.bilibili.com/3149619)，谢谢喵。

关注[洛天依](https://space.bilibili.com/36081646)，比赛博丁真更像人的 V 家歌姬！

关注[传统丁真](https://space.bilibili.com/1463028352)，什么年代了还在关注赛博丁真，不如来怀古！

关注[凑阿夸](https://space.bilibili.com/375504219)和[rinco 小姐](https://www.nicovideo.jp/user/45194653)！傻气溢出的海洋（屑）女仆（洋葱）和喜欢水濑祈的可爱唱见 期待木口回旋捏 另外请支持阿夸主演的[galgame](https://shop.hololivepro.com/products/aquarium_hololive_official_edition)谢谢！

关注[原神](https://space.bilibili.com/401742377)，玩《原神》比看赛博丁真好多了！

## 附加

现在是晚上七点，我逐渐理解了这个世界。
