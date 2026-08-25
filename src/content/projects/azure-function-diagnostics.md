---
title: Azure Function Diagnostics
description: Traced production timeouts with structured logging and Application Insights dashboards.
date: 2024-08-10
updated: 2024-11-02
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

A production Azure Function began timing out under load. Symptoms showed up as intermittent 500s for callers with little signal in the default logs.

## Role

Investigated the timeout path, improved instrumentation, and documented the root cause for the team.

## Architecture

Python Azure Function triggered by HTTP, calling downstream dependencies. Telemetry routed through Application Insights.

## Implementation

- Added structured logs with correlation IDs
- Built dashboards for duration, dependency calls, and failure rates
- Reproduced the slow path locally with representative payloads

## Outcome

- Identified a blocking dependency call as the primary timeout source
- Reduced time-to-diagnosis for similar incidents with reusable queries
- Documented a runbook for on-call engineers

## What I'd improve

- Add synthetic checks for the critical dependency
- Automate alert thresholds from the new dashboards

## How to run locally

Use Azure Functions Core Tools with the sample function app and a local Application Insights connection string for development only.
