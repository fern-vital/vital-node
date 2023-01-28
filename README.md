# Vital Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/vital)](https://www.npmjs.com/package/@fern-api/vital)

The Vital Node.js library provides access to the Vital API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.tryvital.io/api-reference/user/create-user).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-tnqkdm?file=app.ts&view=editor)

```typescript
import { VitalApiClient, VitalApiEnvironment } from '@fern-api/vital';

const client = new VitalApiClient({
  environment: VitalApiEnvironment.Production,
  xVitalApiKey: 'my-api-key',
});

const response = await client.activity.summary(
  '70c64d5a-ff06-4c16-b137-361b2441d86e',
  {
    provider: 'oura',
    startDate: '2023-01-01T20:11:37+00:00',
    endDate: '2023-01-28T20:05:14+00:00',
  }
);

console.log('Received response from Vital!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-vital/vital-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
