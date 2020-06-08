import {
	compress,
	decompress,
	flags
} from "dxt-js";

class BC {
	static compress = (data, width, height, format = 1) => {
		if (format <= 3) {
			return compress(data, width, height, flags[`DX${(2 * format) - 1}`]);
		}

		throw new Error("BC4+ not supported yet");
	}

	static decompress = (data, width, height, format = 1) => {
		if (format <= 3) {
			return decompress(data, width, height, flags[`DX${(2 * format) - 1}`]);
		}

		throw new Error("BC4+ not supported yet");
	}
}

export default BC;
