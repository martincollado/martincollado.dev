// helpers.ts
import os from 'node:os';

import chalk from 'chalk';
import { execa } from 'execa';
import { existsSync } from 'fs';
import { mkdir, readdir, rm } from 'fs/promises';
import { chromium, type Page } from 'playwright';

import { SERVER_URL } from './constants';

export function exec(command: string) {
  return execa(command, { shell: true, stdio: ['ignore', 'inherit', 'inherit'] });
}

export function execWithLocalServer(command: string) {
  return exec(`start-server-and-test "npm run dev" ${SERVER_URL} "${command}"`);
}

export const log = {
  info: (message: string) => console.log(chalk.blue(`[INFO] ${message}`)),
  success: (message: string) => console.log(chalk.green(`[SUCCESS] ${message}`)),
  warn: (message: string) => console.log(chalk.yellow(`[WARNING] ${message}`)),
  error: (message: string) => console.error(chalk.red(`[ERROR] ${message}`)),
};

export async function ensureCleanDirExists(dir: string) {
  if (existsSync(dir)) {
    await rm(dir, { recursive: true, force: true });
  }

  await mkdir(dir, { recursive: true });
}

export async function assertServerIsRunning() {
  try {
    await fetch(SERVER_URL);
  } catch {
    throw new Error('Cannot connect to the server. Please run `npm run dev` before running this command.');
  }
}

export async function runBrowser(cb: (page: Page) => Promise<void>) {
  const options = os.platform() === 'win32' ? { args: ['--no-sandbox', '--disable-setuid-sandbox'] } : undefined;
  const browser = await chromium.launch(options);
  const context = await browser.newContext();
  const page = await context.newPage();

  await cb(page);

  await browser.close();
}

export async function forAllPages(path: string, callback: (name: string) => Promise<void>) {
  for (const file of await readdir(path)) {
    if (file.endsWith('.astro')) {
      await callback(file.replace('.astro', ''));
    }
  }
}

export async function visitPage(baseUrl: string, name: string, page: Page) {
  const url = `${baseUrl}/${name.replace('index', '')}`;
  log.info(`Visiting ${url}`);

  if (!(await doesPageExist(url))) {
    log.warn(`Page ${url} does not exist. Skipping...`);
    return;
  }

  await page.goto(url, { waitUntil: 'load' });
  await removeAstroToolbar(page);
}

async function doesPageExist(url: string) {
  const response = await fetch(url);

  return response.ok;
}

async function removeAstroToolbar(page: Page) {
  await page.evaluate(() => {
    const toolbar = document.querySelector('astro-dev-toolbar');
    if (toolbar) {
      toolbar.remove();
    }
  });
}
