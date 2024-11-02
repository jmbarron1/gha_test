describe('Rebabel Front End Testing', () => {
    it('should have a convert button', async () => {
        const elem = await $('#convetBtn')
        await expect(elem).toExist()
    })
})

