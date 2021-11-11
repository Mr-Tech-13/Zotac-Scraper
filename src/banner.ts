import chalk from 'chalk';

export const banner = {
  asciiVersion: `
  
${process.env.npm_package_version}`,
  render(ascii: boolean, hexColor: string) {
    return chalk
      .hex(hexColor)
      .bold(ascii ? this.asciiVersion : this.stringVersion);
  },
  stringVersion: `STOCK HAMMER
${process.env.npm_package_version}`,
};
