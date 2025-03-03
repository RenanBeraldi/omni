export class ResponseBuilder {
    constructor() {}

    public success(data: any): any {
        return {
            statusCode: 200,
            body: { data },
        };
    }

    public created(responsePayload: any): any {
        return {
            statusCode: 201,
            body: responsePayload,
        };
    }

    public notFound(message: string): any {
        return {
            statusCode: 404,
            body: {
                error: message,
            },
        };
    }
}
