import * as fs from 'fs';
import * as readline from 'readline';

import { ReadStream } from 'fs';
import path from 'path';

/**
 * Get file as stream
 * @param root
 * @param filename
 * @returns readable stream of the file
 */
export const getStream = (root: string, filename: string): ReadStream => fs.createReadStream(path.join(root, filename));

/**
 * Get async line iterator.
 * @param root
 * @param filename
 */
export const getLines = (root: string, filename: string): readline.Interface => {
  const stream = getStream(root, filename);
  return readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });
};

export const getAllLines = async (root: string, filename: string): Promise<string[]> => {
  const lines = [];
  const rl = getLines(root, filename);

  for await (const line of rl) {
    lines.push(line);
  }

  return lines;
};

export const getAllContent = (root: string, filename: string, encoding: BufferEncoding) =>
  fs.readFileSync(path.join(root, filename), encoding);
