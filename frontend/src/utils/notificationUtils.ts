// src/utils/notification.ts
import type { NotificationInstance } from 'antd/es/notification/interface';
import type { TFunction } from 'i18next';

let notificationApi: NotificationInstance | null = null;
let t: TFunction | null = null;

export const setNotificationApi = (api: NotificationInstance) => {
    notificationApi = api;
};

export const setTranslationFn = (translateFn: TFunction) => {
    t = translateFn;
};

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export const notify = (
    type: NotificationType,
    description: string | React.ReactNode,
    placement: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' = 'topRight'
) => {
    if (!notificationApi) {
        console.warn('Notification API chưa được khởi tạo. Gọi <GlobalNotificationProvider /> ở cấp cao nhất.');
        return;
    }

    const titleKey = `globalNotification.${type}`;
    const message = t ? t(titleKey) : type.charAt(0).toUpperCase() + type.slice(1);

    notificationApi[type]({
        message,
        description,
        placement,
        duration: type === 'error' ? 5 : 3, // error hiển lâu hơn chút
        showProgress: true,
    });
};

// Các hàm tiện ích (tùy chọn)
export const success = (desc: string | React.ReactNode, placement?: any) => notify('success', desc, placement);
export const error = (desc: string | React.ReactNode, placement?: any) => notify('error', desc, placement);
export const info = (desc: string | React.ReactNode, placement?: any) => notify('info', desc, placement);
export const warning = (desc: string | React.ReactNode, placement?: any) => notify('warning', desc, placement);