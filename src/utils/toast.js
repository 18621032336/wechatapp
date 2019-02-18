/**
 * 不带图标提示
 * @param title
 */
export function message (title) {
  wx.showToast({
    icon: 'none',
    title
  })
}

/**
 * 成功提示
 * @param title
 */
export function success (title) {
  wx.showToast({
    icon: 'success',
    title
  })
}

export default {
  message,
  success
}
