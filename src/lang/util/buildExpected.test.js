import Expected from './js/Expected'
import Parameter from './js/Parameter'
import String from '../types/String'
import buildExpected from './buildExpected'

describe('buildExpected', () => {
  it('builds a new Arguments:toBeEmpty Expected', () => {
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Arguments', next).toBeEmpty()

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {},
      expectation: 'toBeEmpty'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Arguments:not.toBeEmpty Expected', () => {
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Arguments', next).not.toBeEmpty()

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {},
      expectation: 'not.toBeEmpty'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Arguments:toBeOfMinLength Expected', () => {
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Arguments', next).toBeOfMinLength(1)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {
        length: 1
      },
      expectation: 'toBeOfMinLength'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Arguments:not.toBeOfMinLength Expected', () => {
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Arguments', next).not.toBeOfMinLength(1)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {
        length: 1
      },
      expectation: 'not.toBeOfMinLength'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new  Argument:toMatchParameter Expected', () => {
    const parameter = new Parameter('foo', String)
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Argument', next).toMatchParameter(parameter)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {
        parameter
      },
      expectation: 'toMatchParameter'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Argument:not:toMatchParameter Expected', () => {
    const parameter = new Parameter('foo', String)
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Argument', next).not.toMatchParameter(parameter)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {
        parameter
      },
      expectation: 'not.toMatchParameter'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Argument:toMatchRegex Expected', () => {
    const regex = /^foo$/
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Argument', next).toMatchRegex(regex)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {
        regex
      },
      expectation: 'toMatchRegex'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Argument:not.toMatchRegex Expected', () => {
    const regex = /^foo$/
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Argument', next).not.toMatchRegex(regex)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {
        regex
      },
      expectation: 'not.toMatchRegex'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Returned:toMatchReturns Expected', () => {
    const returns = String
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Returned', next).toMatchReturns(returns)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {
        returns
      },
      expectation: 'toMatchReturns'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })

  it('builds a new Returned:not.toMatchReturns Expected', () => {
    const returns = String
    const next = jest.fn((expected) => expected)
    const result = buildExpected('Returned', next).not.toMatchReturns(returns)

    expect(result).toBeInstanceOf(Expected)
    expect(result).toMatchObject({
      data: {
        returns
      },
      expectation: 'not.toMatchReturns'
    })
    expect(next).toHaveBeenCalledWith(expect.any(Expected))
  })
})
