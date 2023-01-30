/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Vital } from "@fern-api/vital";
import * as core from "../../../../core";

export const RawActivity: core.serialization.ObjectSchema<serializers.RawActivity.Raw, Vital.RawActivity> =
    core.serialization.object({
        id: core.serialization.string(),
        source: core.serialization.lazyObject(async () => (await import("../../..")).Source).optional(),
        priorityId: core.serialization.property(
            "priority_id",
            core.serialization.lazy(async () => (await import("../../..")).PriorityId)
        ),
        sourceId: core.serialization.property(
            "source_id",
            core.serialization.lazy(async () => (await import("../../..")).SourceId)
        ),
        userId: core.serialization.property(
            "user_id",
            core.serialization.lazy(async () => (await import("../../..")).UserId)
        ),
        providerId: core.serialization.property(
            "provider_id",
            core.serialization.lazy(async () => (await import("../../..")).ProviderId)
        ),
        timestamp: core.serialization.date(),
        data: core.serialization.record(core.serialization.string(), core.serialization.string()),
    });

export declare namespace RawActivity {
    interface Raw {
        id: string;
        source?: serializers.Source.Raw | null;
        priority_id: serializers.PriorityId.Raw;
        source_id: serializers.SourceId.Raw;
        user_id: serializers.UserId.Raw;
        provider_id: serializers.ProviderId.Raw;
        timestamp: string;
        data: Record<string, string>;
    }
}
