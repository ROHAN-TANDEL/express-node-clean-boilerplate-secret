export interface ResponseLike {
    statusCode: number;
    setHeader(name: string, value: string): void;
    status(code: number): ResponseLike;
    json(body: unknown): unknown;
    on(event: 'finish', listener: () => void): void;
}