let a: number = 9999
console.log(a)


let storage: Record<string, number> = {}
const key: string = "abc"
function add() {
	if (!storage[key]) {
		storage[key] = 1
	} else {
		storage[key] = storage[key] + 1
	}
}

console.log("init ", storage[key])
add()
console.log("after add ", storage[key])
add()
console.log("after add ", storage[key])


