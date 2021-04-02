import {ElMessage} from "element-plus"

/**
 * 消息提示封装
 */
export const showMsg = (type: "" | "success" | "warning" | "info" | "error" | undefined, msg: string): any => {
    return ElMessage({
        showClose: true,
        message: msg,
        type: type
    })
}