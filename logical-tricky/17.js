const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('second'))
const baz = () => console.log('Third')
bar()
foo()
baz()