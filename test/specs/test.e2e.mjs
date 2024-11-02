describe('Rebabel Front End Testing', () => {
    it('should have a convert button', async () => {
        const elem = await $('#convettn')
        await expect(elem).toExist()
    })
})

