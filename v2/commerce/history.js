// GET /v2/commerce/history
// Batch expandable list of item ids with transaction histories.

// GET /v2/commerce/history/19723?time="2015-12-20 14:15:02 UTC"
// GET /v2/commerce/history?id=19723&time="2015-12-20 14:15:02 UTC"
// Statistics for the requested time and item:
{
  "i" : 19723,
  "start_time" : "2015-12-20 14:00:00 UTC",
  "end_time" : "2015-12-20 14:59:59 UTC",
  "buy_price" : "min": 40, "max": 45, "mean": 41},
  "sell_price" : { "min": 48, "max": 58, "mean": 55},
  "demand" : { "min": , “max”: xxx, “mean”: xxx },
  "supply" : { "min": 463243, “max”: 478633, “mean”: 464963 },
  "bought" : 263749,
  "sold" : 361424
}

// Alternate specification
// GET /v2/commerce/history/19723?start_time="2014-12-20 14:15:02 UTC"&end_time="2015-2-16 9:23:28 UTC"
// GET /v2/commerce/history?id=19723&start_time="2014-12-20 14:15:02 UTC"&end_time="2015-2-16 9:23:28 UTC"
// Returns a batch of all statistical summaries in the specified range.

// Update jobs
// Hourly: Iterate transactions for the previous hour's calculating statistics.
// Daily: Merge hourly summaries for the 32nd previous day into a daily summary.
// Weekly: Merge daily summaries for the 53rd previous week into a weekly summary.
