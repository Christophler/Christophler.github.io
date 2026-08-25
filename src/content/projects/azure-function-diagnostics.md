---
title: Azure Function Diagnostics
description: Built the instrumentation and dashboards that turned intermittent Function timeouts into a measurable dependency problem.
date: 2024-08-10
updated: 2025-03-01
featured: true
stack:
  - Azure Functions
  - Python
  - Application Insights
relatedTags:
  - azure
  - debugging
  - observability
---

## Context

An HTTP-triggered Azure Function started timing out under load. Callers saw intermittent failures. Host logs showed start and stop events without enough signal to name the slow dependency.

## Role

Led the investigation end to end — reproduced the issue, added instrumentation, built the dashboards, and wrote the on-call runbook. The narrative writeup of the debugging method lives under Writeups.

## Architecture

```text
  [ Caller ]
      |
      v
  [ Azure Function (Python, HTTP) ]
      |
      +-- dependency A (sync)
      +-- dependency B (sync)
      |
      v
  [ Application Insights ]
   duration · failures · deps
```

## Implementation

- Structured logs with a correlation ID on every dependency call
- Custom metrics for dependency duration alongside success/failure counts
- Staging reproduction with production-shaped payloads (no production secrets in fixtures)
- Shared Kusto queries for p95 duration and dependency failures

> **Decision:** Instrument first, then optimize. Without duration signals, "make it faster" would have been guessing.

## Outcome

- Identified a blocking dependency / connection-pool wait as the primary timeout source
- Cut time-to-diagnosis for similar incidents by keeping the queries and runbook next to the service
- Gave on-call a concrete "what to check first" path instead of reading raw host logs

## What I'd improve

- Synthetic checks against the critical dependency
- Alerting on p95 latency, not only hard failures
- Automatic capture of correlation IDs in the alert payload

## How to run locally

Use Azure Functions Core Tools with a sample function app. For telemetry locally, use a development Application Insights resource — never commit instrumentation keys.
