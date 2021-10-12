export class Result<T> {
    public constructor(
        public payload?: T,
        public error?: string
    ) {}
}
