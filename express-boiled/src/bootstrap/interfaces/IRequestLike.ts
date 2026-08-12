export interface RequestLike {
    method: string;
    originalUrl?: string;
    headers: Record<string, string | string[] | undefined>;
    requestId?: string;
};
