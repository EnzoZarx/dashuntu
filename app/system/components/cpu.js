import {si} from '../../library.js'

si.cpu().then(data => {
    cpu.brand = data.brand
})

export let cpu = {
    brand:""
}