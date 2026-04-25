/// <reference types="astro/client" />
/// <reference types="@total-typescript/ts-reset" />
/// <reference path="../.astro/env.d.ts" />
/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    globalContext: object;
  }
}
