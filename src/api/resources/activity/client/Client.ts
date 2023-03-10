/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Vital } from "@fern-api/vital";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.VitalEnvironment | string;
        apiKey?: core.Supplier<string>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    public async get(
        userId: Vital.UserId,
        request: Vital.ClientActivityRequest
    ): Promise<Vital.ClientActivityResponse> {
        const { provider, startDate, endDate } = request;
        const _queryParams = new URLSearchParams();
        if (provider != null) {
            _queryParams.append("provider", provider);
        }

        _queryParams.append("start_date", startDate);
        if (endDate != null) {
            _queryParams.append("end_date", endDate);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.VitalEnvironment.UsProduction,
                `/v2/summary/activity/${userId}`
            ),
            method: "GET",
            headers: {
                "x-vital-api-key": await core.Supplier.get(this.options.apiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ClientActivityResponse.parse(
                _response.body as serializers.ClientActivityResponse.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VitalError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VitalError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VitalTimeoutError();
            case "unknown":
                throw new errors.VitalError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async getRaw(
        userId: Vital.UserId,
        request: Vital.ClientActivityRawRequest
    ): Promise<Vital.ClientActivityRawResponse> {
        const { provider, startDate, endDate } = request;
        const _queryParams = new URLSearchParams();
        if (provider != null) {
            _queryParams.append("provider", provider);
        }

        _queryParams.append("start_date", startDate);
        _queryParams.append("end_date", endDate);
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.VitalEnvironment.UsProduction,
                `/v2/summary/activity/${userId}/raw`
            ),
            method: "GET",
            headers: {
                "x-vital-api-key": await core.Supplier.get(this.options.apiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ClientActivityRawResponse.parse(
                _response.body as serializers.ClientActivityRawResponse.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VitalError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VitalError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VitalTimeoutError();
            case "unknown":
                throw new errors.VitalError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
