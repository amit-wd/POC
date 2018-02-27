declare const process: any;

const get = (value, def) => (value ? value : def);

export const EXAMPLE = get(process.env['EXAMPLE'], 'example');
