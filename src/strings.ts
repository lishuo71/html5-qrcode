/**
 * @fileoverview
 * Strings used by {@class Html5Qrcode} & {@class Html5QrcodeScanner}
 * 
 * @author mebjas <minhazav@gmail.com>
 * 
 * The word "QR Code" is registered trademark of DENSO WAVE INCORPORATED
 * http://www.denso-wave.com/qrcode/faqpatent-e.html
 */

/**
 * Strings used in {@class Html5Qrcode}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeStrings {

    public static codeParseError(exception: any): string {
        return `二维码解析出现错误，错误 = ${exception}`;
    }

    public static errorGettingUserMedia(error: any): string {
        return `获取用户媒体出现错误，错误 = ${error}`;
    }

    public static onlyDeviceSupportedError(): string {
        return "本设备不支持navigator.mediaDevices , 只有 "
        + "支持cameraIdOrConfig in this case is deviceId parameter "
        + "(string).";
    }

    public static cameraStreamingNotSupported(): string {
        return "本浏览器不支持摄像头数据流。";
    }

    public static unableToQuerySupportedDevices(): string {
        return "无法查询到支持的设备，出现未知错误。";
    }

    public static insecureContextCameraQueryError(): string {
        return "只有在安全环境如https "
        + "或者localhost下才能使用。";
    }
}

/**
 * Strings used in {@class Html5QrcodeScanner}.
 * 
 * TODO(mebjas): Support internalization.
 */
export class Html5QrcodeScannerStrings {

    public static scanningStatus(): string {
        return  "扫描中";
    }

    public static idleStatus(): string {
        return "空闲";
    }

    public static errorStatus(): string {
        return "错误";
    }

    public static permissionStatus(): string {
        return "许可";
    }

    public static noCameraFoundErrorStatus(): string {
        return "没有摄像头";
    }

    public static lastMatch(decodedText: string): string {
        return `最新匹配: ${decodedText}`;
    }

    public static codeScannerTitle(): string {
        return "二维码扫描";
    }

    public static cameraPermissionTitle(): string {
        return "请求摄像头使用权限";
    }

    public static cameraPermissionRequesting(): string {
        return "请求使用摄像头权限中...";
    }

    public static noCameraFound(): string {
        return "没有找到摄像头";
    }

    public static scanButtonStopScanningText(): string {
        return "停止扫码";
    }

    public static scanButtonStartScanningText(): string {
        return "开始扫码";
    }

    public static scanButtonScanningStarting(): string {
        return "启动摄像头...";
    }

    /**
     * Text to show when camera scan is selected.
     * 
     * This will be used to switch to file based scanning.
     */
    public static textIfCameraScanSelected(): string {
        return "扫描手机图片";
    }

    /**
     * Text to show when file based scan is selected.
     * 
     * This will be used to switch to camera based scanning.
     */
    public static textIfFileScanSelected(): string {
        return "直接使用摄像头扫码";
    }

    public static selectCamera(): string {
        return "选择摄像头";
    }
}

/** Strings used in {@class LibraryInfoDiv} */
export class LibraryInfoStrings {

    public static builtUsing(): string {
        return "使用此库构建 ";
    }

    public static reportIssues(): string {
        return "上报问题";
    }
}
