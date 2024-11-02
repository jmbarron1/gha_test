import { browser } from '@wdio/globals'

describe('Rebabel Front End Testing', () => {
    it('should have a convert button', async () => {
        const elem = await $('#convertBtn')
        await expect(elem).toExist()
    })
})

