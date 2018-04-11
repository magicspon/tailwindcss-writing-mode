module.exports = function({ variants }) {
	return function({ addUtilities }) {
		addUtilities(
			{
				'.writing-mode-horizontal': {
					'writing-mode': 'horizontal-tb'
				},
				'.writing-mode-vertical': {
					'writing-mode': 'vertical-rl'
				},
				'.writing-mode-vertical-lr': {
					'writing-mode': 'vertical-lr'
				}
			},
			{
				variants: ['responsive']
			}
		)
	}
}
