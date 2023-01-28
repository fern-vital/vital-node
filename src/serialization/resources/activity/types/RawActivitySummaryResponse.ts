/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { VitalApi } from "@fern-api/vital";
import * as core from "../../../../core";

export const RawActivitySummaryResponse: core.serialization.ObjectSchema<
    serializers.RawActivitySummaryResponse.Raw,
    VitalApi.RawActivitySummaryResponse
> = core.serialization.object({
    activity: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).RawActivity)
    ),
});

export declare namespace RawActivitySummaryResponse {
    interface Raw {
        activity: serializers.RawActivity.Raw[];
    }
}
