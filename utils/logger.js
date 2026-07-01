const log = (...args) => console.log('[QR]', ...args);
const error = (...args) => console.error('[QR ERROR]', ...args);
const warn = (...args) => console.warn('[QR WARN]', ...args);

module.exports = { log, error, warn };
