declare module 'crypto-js' {
    export const AES: {
        encrypt: (message: string, key: string) => { toString: () => string };
        decrypt: (encryptedMessage: string, key: string) => { toString: (format?: any) => string };
    };
    export const enc: {
        Utf8: any;
    };
}
