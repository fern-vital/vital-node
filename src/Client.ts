/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as ActivityClient } from "./api/resources/activity/client/Client";

export declare namespace VitalApiClient {
    interface Options {
        environment?: environments.VitalApiEnvironment | string;
        apiKey?: core.Supplier<string>;
    }
}

export class VitalApiClient {
    constructor(private readonly options: VitalApiClient.Options) {}

    #activity: ActivityClient | undefined;

    public get activity(): ActivityClient {
        return (this.#activity ??= new ActivityClient(this.options));
    }
}
