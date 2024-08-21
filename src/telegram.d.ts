interface WebAppUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_bot: boolean;
}

interface WebAppChat {
    id: number;
    type: string;
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    photo_url?: string;
}

interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    chat?: WebAppChat;
    chat_type?: string;
    chat_instance?: string;
    start_param?: string;
    can_send_after?: number;
    auth_date?: number;
    hash: string;
}

interface TelegramWebApp {
    initDataUnsafe: WebAppInitData;
    initData: string;
}

interface Window {
    Telegram: {
        WebApp: TelegramWebApp;
    };
}
