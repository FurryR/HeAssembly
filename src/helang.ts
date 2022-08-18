export class HeLang2 {
  private var_map: (number | undefined)[] = []
  private retval = 0
  private while_index = 0
  private while_jump = false
  /**
   * 如果对象不存在，则以value创建一个新对象，否则返回现有的值。
   * @param index
   * @param value
   * @returns
   */
  private init_object(index: number, value = 0): number {
    const raw = this.var_map[index]
    if (raw) return raw
    return (this.var_map[index] = value)
  }
  /**
   * 获取对象的值。
   * @param str 访问下标。
   * @returns 对象的值。
   */
  get_object(str: string): number {
    if (str[0] == '[') {
      if (str[1] == '[') {
        // 二重访问
        const i = parseInt(str.substring(2, str.length - 2))
        this.init_object(i)
        return this.init_object(this.var_map[i] as number)
      }
      // 普通访问
      const i = str.substring(1, str.length - 1)
      if (i == 'ret') return this.retval
      return this.init_object(parseInt(i))
    }
    // 字面量
    return parseInt(str)
  }
  /**
   * 设置对象的值。
   * @param str 访问下标。
   * @param value 要设置的值。
   */
  set_object(str: string, value: number): void {
    if (str[0] == '[') {
      if (str[1] == '[') {
        // 二重访问
        const i = parseInt(str.substring(2, str.length - 2))
        this.init_object(i)
        this.var_map[i] = value
        return
      }
      // 普通访问
      const i = str.substring(1, str.length - 1)
      if (i == 'ret') {
        this.retval = value
        return
      }
      this.var_map[parseInt(i)] = value
      return
    }
    throw new Error('不可赋值到右值')
  }
  /**
   * 解析语句。
   * @param str 语句。
   * @returns cmd_name：命令名称
   *          args：参数。
   */
  private static parse(str: string): { cmd_name: string; args: string[] } {
    str = str.trim()
    if (str[0] == '#') return { cmd_name: '#', args: [] }
    const cmd = str.split(' ').filter(x => x != '')
    const cmd_name = cmd[0]
    const args = cmd.slice(1)
    return { cmd_name, args }
  }
  /**
   * 运行HeLang2代码。
   * @param code HeLang2代码。代码数组中一个元素只能包含一条语句。
   */
  exec(code: string[]): void {
    for (let i = 0; i < code.length; i++) {
      const { cmd_name, args } = HeLang2.parse(code[i])
      switch (cmd_name) {
        case 'fi':
        case '#': {
          break
        }
        case 'set': {
          this.set_object(args[0], this.get_object(args[1]))
          break
        }
        case 'reset': {
          this.var_map = args.map(val => this.get_object(val))
          break
        }
        case 'if': {
          if (!this.get_object(args[0]))
            while (
              i < code.length - 1 &&
              HeLang2.parse(code[++i]).cmd_name != 'fi'
            );
          break
        }
        case 'jmp': {
          this.while_jump = false
          i = this.get_object(args[0])
          break
        }
        case 'while': {
          if (!this.get_object(args[0])) {
            this.while_jump = true
            while (
              i < code.length - 1 &&
              HeLang2.parse(code[++i]).cmd_name != 'done'
            );
          }
          this.while_index = i
          break
        }
        case 'continue':
        case 'break': {
          this.while_jump = cmd_name == 'break'
          while (
            i < code.length - 1 &&
            HeLang2.parse(code[++i]).cmd_name != 'done'
          );
          break
        }
        case 'done': {
          if (this.while_jump) this.while_jump = false
          else i = this.while_index - 1
          break
        }
        case 'call': {
          let ret = 0
          switch (args[0]) {
            case 'add': {
              ret = this.get_object(args[1]) + this.get_object(args[2])
              break
            }
            case 'sub': {
              ret = this.get_object(args[1]) - this.get_object(args[2])
              break
            }
            case 'mul': {
              ret = this.get_object(args[1]) * this.get_object(args[2])
              break
            }
            case 'div': {
              ret = this.get_object(args[1]) / this.get_object(args[2])
              break
            }
            case 'mod': {
              ret = this.get_object(args[1]) % this.get_object(args[2])
              break
            }
            case 'print': {
              console.log(this.get_object(args[1]))
              break
            }
            case 'putchar': {
              process.stdout.write(
                String.fromCharCode(this.get_object(args[1]))
              )
              break
            }
            case 'input': {
              const result = (process.stdin.read(1) as undefined | Buffer)
                ?.toString('utf8')
                .charCodeAt(0)
              ret = result == undefined ? -1 : result
              break
            }
            case 'cmp': {
              switch (args[1]) {
                case '>': {
                  ret =
                    this.get_object(args[2]) > this.get_object(args[3]) ? 1 : 0
                  break
                }
                case '<': {
                  ret =
                    this.get_object(args[2]) < this.get_object(args[3]) ? 1 : 0
                  break
                }
                case '==': {
                  ret =
                    this.get_object(args[2]) == this.get_object(args[3]) ? 1 : 0
                  break
                }
                case '!=': {
                  ret =
                    this.get_object(args[2]) != this.get_object(args[3]) ? 1 : 0
                  break
                }
                case '>=': {
                  ret =
                    this.get_object(args[2]) >= this.get_object(args[3]) ? 1 : 0
                  break
                }
                case '<=': {
                  ret =
                    this.get_object(args[2]) <= this.get_object(args[3]) ? 1 : 0
                  break
                }
                default: {
                  throw new Error(`unknown operator ${args[1]}`)
                }
              }
              break
            }
            // 注：真想认真用就把这个删掉
            case '5gtest': {
              console.log('检测到你的网络是HarmonyOS+4G>5G，暂不支持5G测速。')
              break
            }
            // 注：真想认真用就把这个删掉
            case 'cyberspaces': {
              console.log(
                '正在检查你的位置。请确认你已经打开了定位服务，并且已授权给HeLang2使用。'
              )
              console.log(
                '高德地图定位你在：中华人民共和国四川省甘孜藏族自治州理塘县'
              )
              console.log('恭喜！你已经抵达赛博空间中国站。')
              break
            }
            default: {
              throw new Error(`undefined system call ${args[1]}`)
            }
          }
          this.retval = ret
          break
        }
      }
    }
  }
}
