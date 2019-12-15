import { createContext, createEngine, setupConfig, stop } from '../src'

describe('integration: setup config', () => {
  test('calls generateConfig methods on modules', async () => {
    const testContext = createContext({ foo: 'bar' })
    const testModule = {
      generateConfig: (context) => {
        expect(context).toBe(testContext)
        return (config) => ({
          ...config,
          bim: 'bop',
          foo: context.get('foo')
        })
      }
    }
    const engine = createEngine(
      {
        test: testModule
      },
      setupConfig,
      testContext
    )

    expect(engine.getContext()).toEqual({ foo: 'bar' })
    expect(engine.getConfig()).toEqual({
      bim: 'bop',
      foo: 'bar'
    })
    await stop(engine)
  })
})
