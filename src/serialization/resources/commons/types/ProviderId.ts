/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Vital } from "@fern-api/vital";
import * as core from "../../../../core";

export const ProviderId: core.serialization.Schema<serializers.ProviderId.Raw, Vital.ProviderId> =
    core.serialization.string();

export declare namespace ProviderId {
    type Raw = string;
}
