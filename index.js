let frozen = false;

function options(config) {
	if(frozen) {
		throw new Error('Config overwrite attempt!');
	}

	frozen = true;
	return Object.assign(options, config);
}

module.exports = options;