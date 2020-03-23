import { SessionStorage } from "../helpers/storage";

export class EndState extends Phaser.State {
	score: number = 0;
	accuracy: number = 0;

	init(data) {
		this.score = data.score || 0;
		this.accuracy = data.accuracy || 0;
	}

	end() {
		console.log("GAME_COMPLETED");
		SessionStorage.cFactor.callback('GAME_COMPLETED', this.score, this.accuracy);
	}

	create() {
	}
}
