// ユークリッドの互除法

export const func = (a, b) => {
	while(b > 0) {
		let c = a / b
		let d = a % b
		console.log(`${a} / ${b} = ${c} ... ${d}`)
		a = b
		b = d
	}
	console.log(`GCD is ${a}`)
}

func(10, 6)
func(6, 9)
func(15, 6)
func(14803, 12707)


