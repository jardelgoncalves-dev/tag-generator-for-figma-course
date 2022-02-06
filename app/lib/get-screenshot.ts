import core from 'puppeteer-core';
import chrome from 'chrome-aws-lambda'

import { EXEC_PATH } from '~/utils/constants';

import type { BrowserOptions } from '~/interfaces/browser'
import type { FileType } from '~/interfaces/file'

let _page: core.Page | null

async function getOptions(isDev: boolean) {
  let options: BrowserOptions = {
    args: [],
    executablePath: EXEC_PATH,
    headless: true
  }

  if(!isDev) {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless
    }
  }

  return options
}

async function getPage(isDev: boolean) {
  if (_page) return _page
  
  const options = await getOptions(isDev);
  const browser = await core.launch(options)
  _page = await browser.newPage()

  return _page
}

export async function getScreenshot(html: string, type: FileType, isDev:boolean) {
  const page = await getPage(isDev)
  await page.setViewport({ width: 648, height: 648 })
  await page.setContent(html)

  const file = await page.screenshot({ type, quality: 100 })

  return file
}