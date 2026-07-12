---
read_when: Read before publishing fleet, service claims, or configuring inquiry delivery.
last_updated: 2026-07-11
---

# Publication verification checklist

## Confirmed from the current public site

- Business name: Luxurious Transportation Services
- Phone: 702-470-9700
- CPCN: 2158-7
- Public availability statement: available 24/7
- Nine fleet listings and their published passenger capacities
- Eight service categories and their legacy public URLs

## Owner confirmation required

- Current availability and authentic photography for each listed vehicle
- Whether the two vehicles named “Party Bus” should have distinct public names
- Whether each published passenger capacity remains accurate
- Current operating area and any airport, venue, parking, or festival restrictions
- Amenities included with each vehicle
- Any alcohol-related offering, eligibility rule, or license requirement
- Any admission, cover, line-access, or venue-partnership claim
- Current EDC, NFR, and CES service availability by date
- Pricing rules, minimums, deposits, cancellation terms, and gratuity policy
- Destination for inquiry submissions and provider credentials

## Inquiry configuration

Set `INQUIRY_WEBHOOK_URL` in the server environment to the HTTPS endpoint that receives JSON inquiries. If the endpoint requires a bearer token, set `INQUIRY_WEBHOOK_TOKEN`. Until configured, the form reports that online delivery is unavailable and directs customers to call 702-470-9700. It never reports an undelivered inquiry as successful.
