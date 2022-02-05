export const EXEC_PATH = process.platform === 'win32'
  ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  : process.platform === 'linux'
    ? '/usr/bin/vivaldi'
    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';