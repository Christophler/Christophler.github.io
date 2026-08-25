---
title: Cloud API Gateway
description: Unified an internal API layer so three product teams stopped shipping duplicate auth and error-handling clients.
date: 2024-06-01
updated: 2025-03-01
featured: true
stack:
  - FastAPI
  - Azure Functions
  - PostgreSQL
  - OpenAPI
relatedTags:
  - api
  - azure
  - backend
---

## Context

Three product teams each maintained their own HTTP clients against shared internal services. Auth headers, retry policy, and error shapes drifted over time. New consumers spent days reverse-engineering someone else's client instead of reading a single contract.

## Role

Backend owner for the gateway — designed the public contract, implemented the service, and ran the first production rollout with the consuming teams.

## Architecture

```text
  [ Team A / B / C apps ]
            |
            v
     [ API Gateway ]
      FastAPI + auth
            |
     -------+-------
     |             |
     v             v
 [ Core APIs ]  [ Azure Functions ]
                async fan-out
            |
            v
       [ PostgreSQL ]
    idempotency + audit
```

Outbound calls stay behind the gateway. Idempotency keys and request audit metadata live in PostgreSQL so retries are safe and supportable.

## Implementation

- Centralized auth validation and basic rate limiting at the edge
- Versioned OpenAPI document as the source of truth for consumers
- Structured logs with a request ID propagated to downstream services
- Azure Functions for fan-out work that does not need to block the HTTP response

> **Decision:** Prefer a thin gateway over a full mesh for v1. Three teams needed a single contract quickly; service mesh complexity would have delayed the win.

## Outcome

- One integration path instead of three parallel clients
- Faster onboarding for a new consumer via the OpenAPI doc and a short runbook
- Clearer ownership when failures happen — gateway logs and IDs, not three different client stacks

## What I'd improve

- Contract tests in CI against the published OpenAPI spec
- Canary deploys before shifting 100% of traffic
- Explicit SLOs for p95 latency and error rate on the gateway route

## How to run locally

Docker Compose brings up the gateway, a stub downstream service, and PostgreSQL. Point consumers at the local OpenAPI URL, then exercise happy-path and retry cases with the sample idempotency key header.
