declare module '*.svg' {
	const content: React.StatelessComponent<React.SVGAttributes<SVGElement>>
	export default content
}

declare module '*.json' {
	const content: object | Array | string | number
	export default content
}
