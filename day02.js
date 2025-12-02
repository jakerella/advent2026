
// test
// const input = '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124'
const input = '959516-995437,389276443-389465477,683-1336,15687-26722,91613-136893,4-18,6736-12582,92850684-93066214,65-101,6868676926-6868700146,535033-570760,826141-957696,365650-534331,1502-2812,309789-352254,79110404-79172400,18286593-18485520,34376-65398,26-63,3333208697-3333457635,202007-307147,1859689-1936942,9959142-10053234,2318919-2420944,5142771457-5142940464,1036065-1206184,46314118-46413048,3367-6093,237-481,591751-793578'

const ranges = input.split(',').map(r => r.split('-').map(n => Number(n)))

const p1 = []
const p2 = new Set()
ranges.forEach(r => {
    for (let i=r[0]; i<r[1]+1; ++i) {
        const s = String(i)
        if (!(s.length % 2) && s.substring(0, s.length / 2) === s.substring(s.length / 2)) {
            p1.push(i)
        }
        if (s.length > 1) {
            for (let j=0; j<s.length/2; ++j) {
                const sub = s.substring(0, j+1)
                if (!(s.length % sub.length)) {
                    if (s.match(new RegExp(sub, 'g')).length === s.length / sub.length) {
                        p2.add(i)
                    }
                }
            }
        }
    }
})

console.log('Part 1:', p1.reduce((p, c) => { return p + c }, 0))
console.log('Part 2:', Array.from(p2.values()).reduce((p, c) => { return p + c }, 0))
