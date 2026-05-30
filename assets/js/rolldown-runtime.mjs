var defineProperty = Object.defineProperty,
	lazyInit = (factory, initialValue) => () => (factory && (initialValue = factory((factory = 0))), initialValue),
	createEsModule = (getters, addModuleTag) => {
		let moduleObj = {};
		for (var key in getters) defineProperty(moduleObj, key, { get: getters[key], enumerable: !0 });
		return (addModuleTag && defineProperty(moduleObj, Symbol.toStringTag, { value: `Module` }), moduleObj);
	},
	requireCompat = ((requireFunc) =>
		typeof require < `u`
			? require
			: typeof Proxy < `u`
				? new Proxy(requireFunc, {
						get: (target, prop) => (typeof require < `u` ? require : target)[prop],
					})
				: requireFunc)(function (id) {
		if (typeof require < `u`) return require.apply(this, arguments);
		throw Error(
			'Calling `require` for "' +
				id +
				"\" in an environment that doesn't expose the `require` function.",
		);
	});
export { createEsModule, requireCompat, lazyInit };
