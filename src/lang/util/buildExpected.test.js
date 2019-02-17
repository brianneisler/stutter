import Expected from './js/Expected'
import Parameter from './js/Parameter'
import String from '../types/String'
import buildExpected from './buildExpected'

describe('buildExpected', () => {
  it('builds a new  Argument:toMatchParameter Expected', () => {
    const parameter = new Parameter('foo', String)
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Argument', next).toMatchParameter(parameter)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      expectation: 'toMatchParameter',
      data: {
        parameter
      }
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Argument:not:toMatchParameter Expected', () => {
    const parameter = new Parameter('foo', String)
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Argument', next).not.toMatchParameter(parameter)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      expectation: 'not.toMatchParameter',
      data: {
        parameter
      }
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Argument:toMatchRegex Expected', () => {
    const regex = /^foo$/
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Argument', next).toMatchRegex(regex)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      expectation: 'toMatchRegex',
      data: {
        regex
      }
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Argument:not.toMatchRegex Expected', () => {
    const regex = /^foo$/
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Argument', next).not.toMatchRegex(regex)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      expectation: 'not.toMatchRegex',
      data: {
        regex
      }
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Arguments:toBeEmpty Expected', () => {
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Arguments', next).toBeEmpty()

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      expectation: 'toBeEmpty',
      data: {}
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Arguments:not.toBeEmpty Expected', () => {
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Arguments', next).not.toBeEmpty()

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      expectation: 'not.toBeEmpty',
      data: {}
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })
})
