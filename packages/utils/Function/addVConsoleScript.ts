declare global {
  interface Window {
    VConsole: any
  }
}

/**
 * 添加 vconsole 脚本并初始化 VConsole 对象，用于移动端调试。
 * @example
 * addVConsoleScript();
 * // 向页面添加 VConsole 脚本，当脚本加载完成后会自动创建 VConsole 实例
 */
export function addVConsoleScript(): void {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = '//vas-emp.whecb.com/assets/cdn/vconsole@3.5.2/vconsole.min.js'
  script.async = true
  script.onload = () => {
    if (window.VConsole) {
      new window.VConsole()
    } else {
      console.error('Failed to load VConsole script')
    }
  }
  document.body.appendChild(script)
}
