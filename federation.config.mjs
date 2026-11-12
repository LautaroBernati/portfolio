
import {
	withNativeFederation,
	shareAll,
} from '@angular-architects/native-federation/config';

export default withNativeFederation({
	name: 'appPortfolio',

	exposes: {
		'./Routes': './src/app/app.routes.ts',
	},

	shared: {
		...shareAll(
			{
				singleton: true,
				strictVersion: true,
				requiredVersion: 'auto',
				build: 'package',
			},
			{
				overrides: {
					'@angular/core': {
						singleton: true,
						strictVersion: true,
						requiredVersion: 'auto',
						build: 'package',
						includeSecondaries: { keepAll: true },
					},
					'@angular/common': {
						singleton: true,
						strictVersion: true,
						requiredVersion: 'auto',
						build: 'package',
						includeSecondaries: { keepAll: true },
					},
					'@angular/platform-browser': {
						singleton: true,
						strictVersion: true,
						requiredVersion: 'auto',
						build: 'package',
						includeSecondaries: { keepAll: true },
					},
				},
			},
		),
	},

	skip: [
		'rxjs/ajax',
		'rxjs/fetch',
		'rxjs/testing',
		'rxjs/webSocket',
		'@schematics/angular',
		'@angular-devkit/core',
		'@angular-devkit/schematics',
		'source-map-support',
		'@angular/fire',
		/^@angular\/fire\//,
		'firebase',
		/^firebase\//,
		'typed.js',
	],

	features: {
		denseChunking: true,
		denseExternals: true,
	},
});
