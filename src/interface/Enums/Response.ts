export enum ResponseCode {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    INTERNAL_SERVER_ERROR = 500
}
export enum ResponseMessage {
    OK = "Request berhasil diproses.",
    BAD_REQUEST = "Permintaan tidak valid.",
    UNAUTHORIZED = "Otentikasi gagal.",
    FORBIDDEN = "Akses ditolak.",
    NOT_FOUND = "Sumber tidak ditemukan.",
    METHOD_NOT_ALLOWED = "Metode permintaan tidak diizinkan.",
    INTERNAL_SERVER_ERROR = "Kesalahan server internal."
}
