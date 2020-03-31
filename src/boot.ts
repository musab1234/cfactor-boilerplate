import { SessionStorage } from './helpers/storage';
import LoadingAnimationComponent from './prefabs/LoadingAnimationComponent';

export class Boot extends Phaser.State {
	loading: LoadingAnimationComponent;

	preload() {
		this.loading = new LoadingAnimationComponent(this.game);

		this.load.path = SessionStorage.cFactor.folderURL + '/';
		this.load.pack('section', 'assets/pack.json');
	}

	create() {
		this.loading.destroy();
		const WebFontConfig = {
			active: () => this.state.start('StartState'), // The bind(this) ensures that the method will be used with your Phaser Game as context
			google: {
				families: ['Voltaire']
			}
		};
		window['WebFont'].load(WebFontConfig);

		window.onresize = () => {
            this.changeScale();
        };
	}

	changeScale() {
        if (window.innerWidth <= 450 || window.outerWidth <= 450) {
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		}
	}
}
