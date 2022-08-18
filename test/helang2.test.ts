import {HeLang2} from '../src/helang'
describe('helang2', () => {
  // verify
  test('op', () => {
    const hl = new HeLang2()
    hl.exec([
      'set [0] 1',
      'call add [0] 1',
      'set [0] [ret]'
    ])
    expect(hl.get_object('[0]')).toEqual(2)
  })
  test('cmp', () => {
    const hl = new HeLang2()
    hl.exec([
      'set [0] 1',
      'call cmp == [0] 1',
      'set [0] [ret]'
    ])
    expect(hl.get_object('[0]')).toEqual(1)
  })
  test('set_object', () => {
    const hl = new HeLang2()
    hl.exec([
      'set [0] 1'
    ])
    expect(hl.get_object('[0]')).toEqual(1)
    hl.set_object('[0]', 2)
    hl.exec([
      'call add [0] 1',
      'set [0] [ret]'
    ])
    expect(hl.get_object('[0]')).toEqual(3)
  })
})