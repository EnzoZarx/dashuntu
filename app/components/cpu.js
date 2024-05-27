si.cpu().then(data => {
    cpu.brand = data.brand
})

export let cpu = {
    brand:""
}