/* develblock:start */
import 'p2';
import 'pixi';
import 'phaser';
/* develblock:end */


import { Boot } from './boot';
import { MainState } from './states/main.state';
import { StartState } from './states/start.state';
import { EndState } from './states/end.state';
import { ICFactor } from './interfaces/icfactor.interface';
import { SessionStorage } from './helpers/storage';

class Game extends Phaser.Game {

	constructor(cFactor: ICFactor) {
		const config: Phaser.IGameConfig = {
			'width': 450,
			'height': 800,
			'backgroundColor': '#fff',
			'parent': 'game-container',
			'antialias': true,
			'alignH': true,
			'alignV': true,
			'renderer': Phaser.CANVAS,
			'scaleMode': Phaser.ScaleManager.SHOW_ALL
		};

		if (cFactor) {
			let gameCanvas: HTMLCanvasElement = document.getElementById(cFactor.canvas) as HTMLCanvasElement;
			config.parent = gameCanvas;
		}

		super(config);

		this.state.add('Boot', Boot, true);
		// game scenes
		this.state.add('StartState', StartState, false);
		this.state.add('MainState', MainState, false);
		this.state.add('EndState', EndState, false);

		// store cFactor in Storage
		SessionStorage.cFactor = cFactor;
	}
}

declare global {
	// tslint:disable-next-line: no-any
	interface Window { MyNamespace: any; }
}

export let initGame = (cFactor: ICFactor) => {
	console.log('INIT_GAME');
	// console.log('cFactor ' + JSON.stringify(cFactor));
	// console.log('cFactor ' + cFactor.state);
	let a = new Game(cFactor);
};

window.MyNamespace = initGame;
/* develblock:start */
window.onload = () => {
	new Game({
		folderURL: 'http://localhost:8000',
		canvas: 'game-container',
		callback: () => { }
	});
};
/* develblock:end */
