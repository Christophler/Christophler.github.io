---
title: Cloud API Gateway
description: Unified internal API layer that cut duplicate integrations across three product teams.
date: 2024-06-01
updated: 2024-09-15
featured: true
stack:
  - FastAPI
  - Azure Functions
  - PostgreSQL
relatedTags:
  - api
  - azure
  - backend
---

## Context

Three product teams each maintained their own integrations to shared internal services. Duplicated auth, inconsistent error handling, and slow onboarding for new consumers.

## Role

Solo backend engineer — designed the gateway contract, implemented the service, and owned the first production deploy.

## Architecture

FastAPI gateway in front of existing services, with Azure Functions for async fan-out and PostgreSQL for idempotency keys and audit metadata.

## Implementation

- Centralized auth and rate limiting at the edge
- Versioned OpenAPI contract shared with consumer teams
- Structured logging and request IDs for cross-service traces

## Outcome

- One integration path for three teams instead of three parallel clients
- Faster consumer onboarding via a single documented API surface
- Clearer operational ownership for failures and retries

## What I'd improve

- Add contract tests in CI against the OpenAPI spec
- Expand canary deploys before full traffic shifts

## How to run locally

Docker Compose brings up the gateway, a stub downstream service, and PostgreSQL. See the project README when the repo is linked.
