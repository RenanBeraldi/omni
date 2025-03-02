export class ResponseBuilder {
    constructor() {}

    public success(message: string): any {
        return {
            statusCode: 200,
            body: {
                message: message,
            },
        };
    }

    public created(responsePayload: any): any {
        return {
            statusCode: 201,
            body: responsePayload,
        };
    }

    public badRequest(message: string): any {
        return {
            statusCode: 400,
            body: {
                error: message,
            },
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
