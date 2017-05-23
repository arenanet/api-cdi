// GET /v2/account/mails/sent
// Authorization: Bearer api-key
// Requires "conversation" scope.
[
    {
        "id" : "message-guid",
        "recipient" : "Lawton.1234",
        "subject" : "Short example",
        "content" : "Hey there! Have a nice day!",
        "items" : [
            {
                "id" : 12345,
                "count" : 2
            },
            {
                "id" : 19235,
                "count" : 1
            }
        ],
        "money" : 1000
    }
]