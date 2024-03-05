export default async function attempt<T>(
    fn: () => Promise<T>
): Promise<[T | undefined, Error | undefined]> {
    try {
        const result = await fn();
        return [result, undefined];
    } catch (error) {
        return [undefined, error as Error];
    }
}
